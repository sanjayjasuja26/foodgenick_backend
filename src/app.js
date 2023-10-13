const express = require('express');
const config = require('./config.js')
const dbService = require('./lib/dbSevices.js');
const bodyParser = require('body-parser')
const cors = require('cors');
const path = require('path');
const app = express();

const http = require("http");

const server = http.createServer(app);
require("./socket").initSocket(server)
const validator = require('express-joi-validation').createValidator({ passError: true })
app.use(cors());
dbService().start();
app.options('*', cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.get('/', (req, res) => res.json({ msg: "Hello"}))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())
//databaseConnections
require('../src/lib/gresqldb.js')
//ApiDoc..
app.use('/apidoc', express.static(path.join(__dirname, '../api-doc/doc')));
//Routers
require('../src/routes')(app, validator)
app.use((err, req, res, next) => {
    if (err && err.error && err.error.isJoi) {
        res.status(400).json({ status: false, message: err.error.message, data: null });
    }
    next()
});
// const server = app.listen(config.port, () => {
//     console.log(`app listening on port ${config.port}!`)
// });

server.listen(config.port, () => {
    console.log(`app listening on port ${config.port}`)
});

