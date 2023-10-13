// import controllers start */
const restaurentController = require('../controller/restaurentController')
const aboutController = require('../controller/foodgenicContentController.js')
// import controllers end */

/*** Validate model imports starts */
const restaurentModel = require('../validate-Model/restaurentValidation-model.js');
/*** Validate model imports ens */

/*** Middleware imports start */
const userAuth = require('../middleware/auth');
const userRole = require("../services/role.services.js")
/*** Middleware imports  ens*/




module.exports = function (app, validate) {
    
    app.post('/api/restaurent/addRestaurent', validate.body(restaurentModel.addRestaurent), restaurentController.addRestaurent)
    app.post('/api/restaurent/updateRestaurent', validate.body(restaurentModel.updateRestaurent), restaurentController.updateRestaurent)
    app.post('/api/restaurent/deleteRestaurent', validate.body(restaurentModel.deleteRestaurent), restaurentController.deleteRestaurent)
    app.get('/api/restaurent/getRestaurent', restaurentController.getRestaurent)
    app.get('/api/restaurent/getVerifiedRestaurent', restaurentController.getRestaurentIsVerified)
    app.post('/api/restaurent/verifiedRestaurent', validate.body(restaurentModel.isVerifiedRestaurent), restaurentController.verifiedRestaurent)
    app.post('/api/restaurent/signupRestaurent', validate.body(restaurentModel.signupRestaurent), restaurentController.signupRestaurent)
    app.post('/api/foodgienic/content', userAuth, userRole, aboutController.addcontent)
    app.get('/api/foodgienic/getcontent', aboutController.getcontent)
    app.post('/api/foodgienic/blog', userAuth, userRole, validate.body(restaurentModel.addBlog),aboutController.AddBlog)
    app.post('/api/foodgienic/updateBlog', userAuth, userRole, validate.body(restaurentModel.updateBlog),aboutController.updateBlog)
    app.get('/api/foodgienic/getAllBlog', aboutController.getAllBlog)
    app.get('/api/foodgienic/blogDetails/:id', validate.params(restaurentModel.paramsId),aboutController.getBlogDetails)
    app.post('/api/foodgienic/deleteBlog', userAuth, userRole, validate.body(restaurentModel.deleteBlog),aboutController.deleteBlog)



}