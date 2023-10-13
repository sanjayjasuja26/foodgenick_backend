const sequelize = require("sequelize");
const database = require('../lib/gresqldb.js');
const normalizedPath = require('path').join(__dirname, 'model');
const models = {};
require('fs').readdirSync(normalizedPath).forEach((file) => {
    if (file.indexOf('.js') >= 0) {
        models[file.replace('.js', '')] = require(`${normalizedPath}/${file}`)(database, sequelize);
    }
});
// add join here
const { userModel, restaurentModel,foodgenicContentModel,transactionModel,blogModel} = models

module.exports = models



