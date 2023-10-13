const model = require('../models')
const resModel = require("../lib/resModel");
const becryptService = require("../services/becrypt.services.js");
const userService = require("../services/userService.js")



// create main Model
const Users = model.userModel

/**
* @api {post} /restaurent/addRestaurent  Add Restaurent 
* @apiName Add Restaurent
* @apiGroup Restaurent
* @apiParam {String}  firstname  firstname of User `Mendatory`.
* @apiParam {String}  lastName  lastName of User `Mendatory`.
* @apiParam {String}  email  email of User `Mendatory`.
* @apiParam {String}  phone  phone of User `Mendatory`.
* @apiParam {String}  restaurantname  restaurantname of User `Mendatory`.
* @apiParam {String}  companyName  companyName of User `Mendatory`.
* @apiParam {String}  gst  gst of User `Mendatory`.
* @apiParam {String}  kitchenArea  kitchenArea of User `Mendatory`.
* @apiParam {String}  streetAddress  streetAddress of User `Mendatory`.
* @apiParam {String}  city  city of User `Mendatory`.
* @apiParam {String}  state  state of User `Mendatory`.
* @apiParam {String}  postalZipCode  postalZipCode of User `Mendatory`.
* @apiParam {String}  country  country of User `Mendatory`.
* @apiDescription User Service..
*/
const addRestaurent = async (req, res) => {
    try {
        const {firstname, lastName, email, phone, restaurantname, companyName, gst, kitchenArea, streetAddress, city, state, postalZipCode, country } = req.body;
        const userCheck = await userService().getUserByemailRestaurent(email);
        if (userCheck) {
            resModel.success = false;
            resModel.message = "User  Already Exists";
            resModel.data = null;
            res.status(400).json(resModel);
        } else {
            let userInfo = {
                firstname: firstname,
                lastName: lastName,
                email: email,
                phone: phone,
                restaurantname: restaurantname,
                companyName: companyName,
                gst: gst,
                kitchenArea: kitchenArea,
                streetAddress: streetAddress,
                city: city,
                state: state,
                postalZipCode: postalZipCode,
                country: country,
                roleId: 3,
               

            }
            const restaurent = await userService().addRestaurent(userInfo);
            const users = await userService().createUser(userInfo);
            if (restaurent.dataValues && users.dataValues) {
                resModel.success = true;
                resModel.message = "Restaurent Signup Successfully";
                resModel.data = restaurent.dataValues;
                res.status(201).json(resModel);
            } else {
                resModel.success = false;
                resModel.message = "Restaurent Doesn't Add";
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
* @api {get} /restaurent/getRestaurent  Get Restaurent 
* @apiName Get Restaurent
* @apiGroup Restaurent
* @apiDescription User Service..
*/
const getRestaurent = async (req, res) => {
    try {
        const users = await userService().getRestaurent();
        if (users && users.length > 0) {
            resModel.success = true;
            resModel.message = "Restaurent get Successfully";
            resModel.data = users;
            res.status(200).json(resModel);
        } else {
            resModel.success = true;
            resModel.message = "Not Found Restaurent";
            resModel.data = [];
            res.status(200).json(resModel);

        }
    } catch (error) {
        resModel.success = false;
        resModel.message = "Error occured during execution";
        resModel.data = error;
        res.status(500).json(resModel);
    }
}


/**
* @api {post} /restaurent/updateRestaurent  Update Restaurent 
* @apiName Update Restaurent
* @apiGroup Restaurent
* @apiParam {String}  firstname  firstname of User `Mendatory`.
* @apiParam {String}  restaurentId  restaurentId of User `Mendatory`.
* @apiParam {String}  lastName  lastName of User `Mendatory`.
* @apiParam {String}  email  email of User `Mendatory`.
* @apiParam {String}  phone  phone of User `Mendatory`.
* @apiParam {String}  restaurantname  restaurantname of User `Mendatory`.
* @apiParam {String}  companyName  companyName of User `Mendatory`.
* @apiParam {String}  gst  gst of User `Mendatory`.
* @apiParam {String}  kitchenArea  kitchenArea of User `Mendatory`.
* @apiParam {String}  streetAddress  streetAddress of User `Mendatory`.
* @apiParam {String}  city  city of User `Mendatory`.
* @apiParam {String}  state  state of User `Mendatory`.
* @apiParam {String}  postalZipCode  postalZipCode of User `Mendatory`.
* @apiParam {String}  country  country of User `Mendatory`.
* @apiParam {String}  image  Image of User `Mendatory`.
* @apiParam {String}  description  Description of User `Mendatory`.
* @apiParam {String}  country  country of User `Mendatory`.
* @apiDescription User Service..
*/
const updateRestaurent = async (req, res) => {
    try {
        const {image,description, restaurentId, firstname, lastName, email, phone, restaurantname, companyName, gst, kitchenArea, streetAddress, city, state, postalZipCode, country, } = req.body;
        let userInfo = {
            firstname: firstname,
            lastName: lastName,
            email: email,
            phone: phone,
            restaurantname: restaurantname,
            companyName: companyName,
            gst: gst,
            kitchenArea: kitchenArea,
            streetAddress: streetAddress,
            city: city,
            state: state,
            postalZipCode: postalZipCode,
            country: country,
            image:image,
            description:description
        }
        const users = await userService().updateRestaurent(restaurentId, userInfo);
        if (users) {
            resModel.success = true;
            resModel.message = "Restaurent Updated Successfully";
            resModel.data = null
            res.status(200).json(resModel);
        }
    } catch (error) {
        resModel.success = false;
        resModel.message = "Error occured during execution";
        resModel.data = error;
        res.status(500).json(resModel);
    }
}

/**
* @api {post} /restaurent/deleteRestaurent  Delete Restaurent 
* @apiName Delete Restaurent
* @apiGroup Restaurent
* @apiParam {String}  restaurentId  restaurentId of User `Mendatory`.
* @apiDescription User Service..
*/

const deleteRestaurent = async (req, res) => {
    try {
        const { restaurentId } = req.body;
        const findResturantRes = await userService().findRestaurent(restaurentId);
        if (findResturantRes) {
            const restaurentdeleteUser = await userService().deleteRestaurentUser(findResturantRes.dataValues.email);
            const restaurentdelete = await userService().deleteRestaurent(restaurentId);
            if (restaurentdelete === 1) {
                resModel.success = true;
                resModel.message = "Delete Restaurent Successfully";
                resModel.data = null
                res.status(200).json(resModel);
            } else {
                resModel.success = false;
                resModel.message = "Error While Delete Restaurent";
                resModel.data = null
                res.status(400).json(resModel);
            }
        } else {
            resModel.success = false;
            resModel.message = "Restaurent not found.";
            resModel.data = null
            res.status(400).json(resModel);
        }
    } catch (error) {
        resModel.success = false;
        resModel.message = "Error occured during execution";
        resModel.data = error;
        res.status(500).json(resModel);
    }
}

/**
* @api {get} /restaurent/getVerifiedRestaurent  Get VerifiedRestaurent
* @apiName Get VerifiedRestaurent 
* @apiGroup Restaurent
* @apiDescription User Service..
*/
const getRestaurentIsVerified = async (req, res) => {
    try {
        const users = await userService().getRestaurentISVerified();
        if (users && users.length > 0) {
            resModel.success = true;
            resModel.message = "Restaurent get Successfully";
            resModel.data = users;
            res.status(200).json(resModel);
        } else {
            resModel.success = true;
            resModel.message = "Not Found Restaurent";
            resModel.data = [];
            res.status(200).json(resModel);
        }
    } catch (error) {
        resModel.success = false;
        resModel.message = "Error occured during execution";
        resModel.data = error;
        res.status(500).json(resModel);
    }
}
/**
* @api {post} /restaurent/verifiedRestaurent  Verified Restaurent 
* @apiName Verified Restaurent
* @apiParam {String}  restaurentId  restaurentId of User `Mendatory`.
* @apiParam {Boolean}  isVerified  IsVerified of User `Mendatory`.
* @apiGroup Restaurent
* @apiDescription User Service..
*/
const verifiedRestaurent = async (req, res) => {
    try {
        const { restaurentId,isVerified } = req.body;
    if(isVerified === true){
        let userInfo = {
            isVerified: true,
        }
        const users = await userService().verifiedRestaurent(restaurentId, userInfo);
        const usersData = await userService().getRestaurentById(restaurentId);
        if (users) {
            resModel.success = true;
            resModel.message = "Restaurent Verified Successfully";
            resModel.data = usersData[0].dataValues
            res.status(200).json(resModel);
        } else {
            resModel.success = false;
            resModel.message = "Restaurent Doesn't Verified";
            resModel.data = error;
            res.status(400).json(resModel);
        }
    }else{
        let userInfo = {
            isVerified: false,
        }
        const users = await userService().verifiedRestaurent(restaurentId, userInfo);
        const usersData = await userService().getRestaurentById(restaurentId);
        if (users) {
            resModel.success = true;
            resModel.message = "Restaurent UnVerified Successfully";
            resModel.data = usersData[0].dataValues
            res.status(200).json(resModel);
        } else {
            resModel.success = false;
            resModel.message = "Restaurent Doesn't UnVerified";
            resModel.data = error;
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
* @api {post} /restaurent/signupRestaurent  Signup Restaurent 
* @apiName Signup Restaurent
* @apiGroup Restaurent
* @apiParam {String}  firstname  firstname of User `Mendatory`.
* @apiParam {String}  lastName  lastName of User `Mendatory`.
* @apiParam {String}  email  email of User `Mendatory`.
* @apiParam {String}  phone  phone of User `Mendatory`.
* @apiParam {String}  restaurantname  restaurantname of User `Mendatory`.
* @apiParam {String}  companyName  companyName of User `Mendatory`.
* @apiParam {String}  gst  gst of User `Mendatory`.
* @apiParam {String}  kitchenArea  kitchenArea of User `Mendatory`.
* @apiParam {String}  streetAddress  streetAddress of User `Mendatory`.
* @apiParam {String}  city  city of User `Mendatory`.
* @apiParam {String}  state  state of User `Mendatory`.
* @apiParam {String}  postalZipCode  postalZipCode of User `Mendatory`.
* @apiParam {String} password  password of User `Mendatory`.
* @apiParam {String}  confirmPassword  confirmPassword of User `Mendatory`.
* @apiParam {String}  country  country of User `Mendatory`.
* @apiParam {String}  image  Image of User `Mendatory`.
* @apiParam {String}  description  Description of User `Mendatory`.
* @apiDescription User Service..
*/
const signupRestaurent= async (req, res) => {
    try {
        const { image,description, firstname, lastName, email, phone, restaurantname, companyName, gst, kitchenArea, streetAddress, city, state, postalZipCode, country,password,confirmPassword } = req.body;
        const userCheck = await userService().getUserByemailRestaurent(email);
        if (userCheck) {
            resModel.success = false;
            resModel.message = "User  Already Exists";
            resModel.data = null;
            res.status(200).json(resModel);
        } else {
            if (password === confirmPassword) {
                let passwordHash = await becryptService.generatePassword(password)
            let userInfo = {
                firstname: firstname,
                lastName: lastName,
                email: email,
                phone: phone,
                restaurantname: restaurantname,
                companyName: companyName,
                gst: gst,
                kitchenArea: kitchenArea,
                streetAddress: streetAddress,
                city: city,
                state: state,
                postalZipCode: postalZipCode,
                country: country,
                password:passwordHash,
                roleId: 3,
                image:image,
                description:description
            }
            const restaurent = await userService().addRestaurent(userInfo);
            const users = await userService().createUser(userInfo);
            if (restaurent.dataValues && users.dataValues) {
                resModel.success = true;
                resModel.message = "Restaurent Signup Successfully";
                resModel.data = restaurent.dataValues;
                res.status(201).json(resModel);
            } else {
                resModel.success = false;
                resModel.message = "Restaurent Don't Add ";
                resModel.data = null;
                res.status(400).json(resModel);
            }
        }else{
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
module.exports = {
    addRestaurent,
    updateRestaurent,
    deleteRestaurent,
    getRestaurent,
    getRestaurentIsVerified,
    verifiedRestaurent,
    signupRestaurent
}