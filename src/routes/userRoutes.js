// import controllers start */
const userController = require('../controller/userController.js')
// import controllers end */

/*** Validate model imports starts */
const userModel = require('../validate-Model/userValidate-model.js');
/*** Validate model imports ens */

/*** Middleware imports start */
const userAuth = require('../middleware/auth');
const userRole = require("../services/role.services.js")
/*** Middleware imports  ens*/




module.exports = function (app, validate) {

   
    app.post('/api/user/addUser', validate.body(userModel.addUser), userController.addUser)
    app.post('/api/user/login', validate.body(userModel.userLogin), userController.logIn)
    app.get('/api/user/getUser', userController.getUser)
    app.post('/api/user/payment',userAuth,validate.body(userModel.payment), userController.makePayment)
    app.post('/api/payment/status', userController.paymentStatus)



}