
const dbConfig =require('../config.js')
const {Sequelize} = require('sequelize');
const sequelize = new Sequelize( dbConfig.db.database, dbConfig.db.user, dbConfig.db.password, {
   host: dbConfig.db.db_host,
   dialect:dbConfig.db.user,
   operatorsAliases: 0,
   pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
   }
 });
 module.exports = sequelize