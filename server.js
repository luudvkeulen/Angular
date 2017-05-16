const express = require('express');
const session = require('express-session');
const path = require('path');
const passport = require('passport');
const routes = require('./routes')(passport);
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const configDB = require('./config/database.js');
const flash = require('connect-flash');
const app = express();
require('./config/passport')(passport);

mongoose.Promise = global.Promise;
mongoose.connect(configDB.url);

app.use(express.static(path.join(__dirname, '/dist')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({
  name: 'sessionid',
  secret: 'changethis',
  resave: false,
  saveUninitialized: true,
  cookie: {secure: true}
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(routes);

app.listen(8080, function () {
  console.log('App started on port 8080');
});
