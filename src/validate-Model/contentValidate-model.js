const Joi = require("joi");
module.exports.addContent = Joi.object({
    service_page_sections: Joi.object().required(),
    price_page_sections: Joi.object().required(),
    about_page_sections: Joi.object().required(),
    home_page_sections: Joi.object().required(),
    type: Joi.string().required()
});