const Joi = require("joi");
module.exports.addUser = Joi.object({
    firstname: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().required()
});

module.exports.userLogin = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),

});

module.exports.payment = Joi.object({
    amount: Joi.number().integer().required(),
    type: Joi.string().required(),

});
