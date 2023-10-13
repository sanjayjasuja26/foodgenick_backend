const sequelize = require("sequelize");
const database = require('../lib/gresqldb.js');
const normalizedPath = require('path').join(__dirname, '../models/model');
const models = {};
require('fs').readdirSync(normalizedPath).forEach((file) => {
    if (file.indexOf('.js') >= 0) {
        models[file.replace('.js', '')] = require(`${normalizedPath}/${file}`)(database,sequelize);
    }
});
const dbService = () => {
    const authenticateDB = () => database.authenticate();
    // const dropDB = () => database.drop();
    const syncDB = () => database.sync().then((res) => {
        // console.log(res);
    }).catch((error) => {
        console.log(error);
    });
    const successfulDBStart = () => (
        console.info('connection to the database has been established successfully')
    );
    const errorDBStart = (err) => (
        console.info('unable to connect to the database:', err)
    );
    const startMigrateTrue = async () => {
        try {
            await syncDB();
            successfulDBStart();
        } catch (err) {
            errorDBStart(err);
        }
    };
    const startProd = async () => {
        try {
            await authenticateDB();
            await startMigrateTrue();
        } catch (err) {
            errorDBStart(err);
        }
    };
    const start = async () => {
        await startProd();
    };
    return {
        start,
    };
};
module.exports = dbService


