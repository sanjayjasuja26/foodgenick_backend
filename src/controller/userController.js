const model = require('../models')
const resModel = require("../lib/resModel");
const becryptService = require("../services/becrypt.services.js");
const userService = require("../services/userService.js")
const emailService = require("../services/mail.services")
const authService = require("../services/authServices.js")
const Razorpay = require('razorpay');
const crypto = require('crypto');
const socket = require("../socket")
const mailchimp = require('@mailchimp/mailchimp_marketing');
// create main Model
const Users = model.userModel
mailchimp.setConfig({
    apiKey: "1367728280bc790186dfe2c7b8ee0ed3-us11",
    server: 'us11'
  });

/**
* @api {post} /user/addUser  Add User 
* @apiName Add User
* @apiGroup User
* @apiParam {String}  firstname  firstname of User `Mendatory`.
* @apiParam {String}  lastName  lastName of User `Mendatory`.
* @apiParam {String}  email  email of User `Mendatory`.
* @apiParam {String} password  password of User `Mendatory`.
* @apiParam {String}  confirmPassword  confirmPassword of User `Mendatory`.
* @apiDescription User Service..
*/
const addUser = async (req, res) => {
    try {
        const { firstname, lastName, email, password, confirmPassword } = req.body;
        const userCheck = await userService().getUserByemail(email);
        if (userCheck) {
            resModel.success = false;
            resModel.message = "User  Already Exists";
            resModel.data = null;
            res.status(400).json(resModel);
        } else {
            if (password === confirmPassword) {
                let passwordHash = await becryptService.generatePassword(password)
                if(passwordHash){
              var userInfo = {
                    firstname: firstname,
                    lastName: lastName,
                    email: email,
                    password: passwordHash,
                    roleId: 2
                }
            }else{
                resModel.success = false;
                resModel.message = "Something Went Wrong";
                resModel.data = null;
                res.status(400).json(resModel);
            }
            const users = await userService().createUser(userInfo);
                if (users) {
                    try {
                        const response = await mailchimp.lists.addListMember('23dae68358',{
                            email_address: email,
                            status: 'subscribed',
                        });
                        console.log("response",response);
                    } catch (error) {
                        console.log("Something Went Wrong");
                    }
                    resModel.success = true;
                    resModel.message = "User Add Successfully";
                    resModel.data = users.dataValues;
                    res.status(201).json(resModel);

                } else {
                    resModel.success = false;
                    resModel.message = "Error while creating User";
                    resModel.data = null;
                    res.status(400).json(resModel);
                }
            }
            else {
                resModel.success = false;
                resModel.message = "Password And ConfirmPassword Don't match ";
                resModel.data = null;
                res.status(400).json(resModel);
            }
        }
    } catch (error) {
        resModel.success = false;
        resModel.message = "Error occured during execution";
        resModel.data = error;
        res.status(500).json(resModel);
    }
}
/**
* @api {post} /user/login Log In
* @apiName Log In
* @apiGroup User
* @apiParam {String} email  Email of User `Mendatory`.
* @apiParam {String}  password  Password of User `Mendatory`.
* @apiDescription  User Service..
*/
const logIn = async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await userService().getUserByemail(email);
        if (!user) {
            resModel.success = false;
            resModel.message = "User  Not Found";
            resModel.data = null;
            res.status(400).json(resModel);
        } else {
            const isVerified = await becryptService.comparePassword(password, user.password)
            if (isVerified) {
                const tokenInfo = {
                    id: user.id,
                    email: user.email,
                    roleId: user.roleId

                }
                const token = await authService.issueJwtToken(tokenInfo);
                resModel.success = true;
                resModel.message = "User Login Successfully";
                resModel.data = { user, token, expires_in: 2 };
                res.status(200).json(resModel);
            } else {
                resModel.success = false;
                resModel.message = "Incorrect Password";
                resModel.data = null;
                res.status(400).json(resModel);
            }
        }
    } catch (err) {
        resModel.success = false;
        resModel.message = "Error occured during execution";
        resModel.data = err;
        res.status(500).json(resModel);
    }
}

/**
* @api {get} /user/getUser GetUser
* @apiName getUser
* @apiGroup User
* @apiDescription  User Service..
*/
const getUser = async (req, res) => {
    try {
        let user = await Users.findAll({ where: { roleId: 2 } })
        if (user.length > 0) {
            resModel.success = true;
            resModel.message = "User Found Successfully";
            resModel.data = user;
            res.status(200).json(resModel);
        } else {
            resModel.success = true;
            resModel.message = "User Not Found";
            resModel.data = [];
            res.status(200).json(resModel);
        }
    } catch (err) {
        resModel.success = false;
        resModel.message = "Error occured during execution";
        resModel.data = err;
        res.status(500).json(resModel);
    }
}

/**
* @api {post} /user/payment MakePayment
* @apiName MakePayment
* @apiGroup User
* @apiParam {String} amount  Amount.
* @apiParam {String}  type  Type.
* @apiHeader {String} authorization Authorization.
* @apiDescription  User Service..
*/
const makePayment = async (req, res) => {
    try {
        const { amount,type} = req.body
        const userInfo = req.userInfo
        console.log("info", userInfo);
        const razorpay = new Razorpay({
            key_id: process.env.RJP_KEY_ID,
            key_secret: process.env.RJP_KEY_SECRET,
        });
        const options = {
            amount: 1 * 100,
            currency: 'INR',
            receipt: 'order_receipt',
            payment_capture: 1, // auto-capture the payment
            notes: {
                userId: req.userInfo.id,
                amount: amount,
                type:type
            }
        };
        const order = await razorpay.orders.create(options);
        if (order.status === "created") {
            resModel.success = true;
            resModel.message = "Create  payment Successfully";
            resModel.data = order;
            res.status(201).json(resModel);
        } else {
            resModel.success = false;
            resModel.message = "Something Went Wrong";
            resModel.data = null;
            res.status(400).json(resModel);
        }
    } catch (err) {
        resModel.success = false;
        resModel.message = "Error occured during execution";
        resModel.data = err;
        res.status(500).json(resModel);
    }
}


const paymentStatus = async (req, res) => {
 try {
        const razorpay_signature = req.headers["x-razorpay-signature"]
        const paymentStatus = req.body?.payload?.payment?.entity?.status;
        let isValidSignature = await checkValidSignature(req.body, razorpay_signature);
        if (isValidSignature) {
            if (paymentStatus === 'captured') {
                //Save into Database
                socket.emitMessage(req.body)

                let transactionInfo = {
                    paymentId: req.body?.payload?.payment.entity.id,
                    userId: req.body?.payload?.payment.entity.notes.userId || 24,
                    amount: req.body?.payload?.payment.entity.amount / 100,
                    currency: req.body?.payload?.payment.entity.currency,
                    method: req.body?.payload?.payment.entity.method,
                    orderId: req.body?.payload?.payment.entity.order_id,
                    contactNumber: req.body?.payload?.payment.entity.contact,
                    subscriptionType:req.body?.payload?.payment.entity.notes.type
                }
                const transactionData = await userService().createtransactions(transactionInfo);
                if (transactionData) {
                    console.log("Transaction  Add Successfully");

                } else {
                    console.log("Transaction Don't Add");
                }
            } else if (paymentStatus === 'failed') {
                //save failed payment data-
                let transactionInfo = {
                    paymentId: req.body?.payload?.payment.entity.id,
                    userId: req.body?.payload?.payment.entity.notes.userId || 24,
                    amount: req.body?.payload?.payment.entity.amount / 100,
                    currency: req.body?.payload?.payment.entity.currency,
                    method: req.body?.payload?.payment.entity.method,
                    orderId: req.body?.payload?.payment.entity.order_id,
                    contactNumber: req.body?.payload?.payment.entity.contact,
                    errorCode: req.body?.payload?.payment.entity.error_code,
                    errorDescription: req.body?.payload?.payment.entity.error_description,
                    errorrReason: req.body?.payload?.payment.entity.error_reason,
                    subscriptionType:req.body?.payload?.payment.entity.notes.type
                }
                const transactionData = await userService().createtransactions(transactionInfo);
                if (transactionData) {
                    console.log("Transaction  Add Successfully");

                } else {
                    console.log("Transaction Don't Add");
                }
            }
        }
 } catch (err) {
        res.status(500).json({ error: 'Error occurred during execution' });
    }
}

const checkValidSignature = async (data, razorpay_signature) => {
    try {
        const webhookSecret = process.env.WEBHOOKSECRET_KEY;
        const hmac = crypto.createHmac('sha256', webhookSecret);
        return new Promise((resolve, reject) => {
            const generatedSignature = hmac.update(JSON.stringify(data)).digest('hex');
            if (generatedSignature === razorpay_signature) {
                resolve(true);
            }
            reject(false);
        })
    } catch (err) {
        console.log("error", err)
        return false;
    }


}

module.exports = {
    addUser,
    logIn,
    getUser,
    makePayment,
    paymentStatus,
}