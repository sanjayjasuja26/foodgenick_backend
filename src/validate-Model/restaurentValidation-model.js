const Joi = require("joi");
module.exports.addRestaurent = Joi.object({
    firstname: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    restaurantname: Joi.string().required(),
    companyName: Joi.string().required(),
    gst: Joi.string().required(),
    kitchenArea: Joi.string().required(),
    streetAddress: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    postalZipCode: Joi.string().required(),
    country: Joi.string().required(),
   
});
module.exports.signupRestaurent = Joi.object({
    firstname: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    restaurantname: Joi.string().required(),
    companyName: Joi.string().required(),
    gst: Joi.string().required(),
    kitchenArea: Joi.string().required(),
    streetAddress: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    postalZipCode: Joi.string().required(),
    country: Joi.string().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().required(),
    image: Joi.string().required(),
    description: Joi.string().required(),
});
module.exports.updateRestaurent = Joi.object({
    firstname: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    restaurantname: Joi.string().required(),
    companyName: Joi.string().required(),
    gst: Joi.string().required(),
    kitchenArea: Joi.string().required(),
    streetAddress: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    postalZipCode: Joi.string().required(),
    country: Joi.string().required(),
    image: Joi.string().required(),
    description: Joi.string().required(),
});
module.exports.isVerifiedRestaurent = Joi.object({
    restaurentId: Joi.string().required(),
    isVerified:Joi.boolean().required(),
});

module.exports.addBlog = Joi.object({
    description: Joi.string().required(),
    image:Joi.string().required(),
    title:Joi.string().required(),
});

module.exports.updateBlog = Joi.object({
    description: Joi.string().required(),
    image:Joi.string().required(),
    title:Joi.string().required(),
    id:Joi.number().integer().required()
});
module.exports.restaurentId= Joi.object({
    restaurentId:Joi.number().integer().required()
});
module.exports.deleteRestaurent= Joi.object({
    restaurentId:Joi.number().integer().required()
});
module.exports.blogId= Joi.object({
    id:Joi.number().integer().required()
});
module.exports.blogId= Joi.object({
    id:Joi.number().integer().required()
});
module.exports.deleteBlog= Joi.object({
    BlogId:Joi.number().integer().required()
});
module.exports.paramsId= Joi.object({
    id:Joi.number().integer().required()
});

