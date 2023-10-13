


module.exports = function (app, validate) {

   
    require('./userRoutes.js')(app, validate)
    require('./restaurentRoutes.js')(app, validate)



}