const express = require("express");
const dotenv = require('dotenv').config({
    path: "../.env"
});
const path=require('path')
const ejs = require('ejs')
const cors = require('cors')
const bodyParser = require('body-parser')
const environment = require('../enviornment');
const routes = require("../src/app/routes/routes");
const env = process.env.NODE_ENV;
const envconfig = environment[env];
const port = envconfig.port || 3000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())
app.use('/', routes);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app/views/'));
app.listen(port, () => { console.log(`server running on ${port}`) });