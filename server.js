const express = require('express');
const path = require('path');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const configDB = require('./config/database.js');
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(configDB.url);

app.use(express.static(path.join(__dirname, '/dist')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(routes);

app.listen(8080, function () {
  console.log('App started on port 8080');
});
