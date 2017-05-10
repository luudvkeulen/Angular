const express = require('express');
const session = require('express-session');
const path = require('path');
const routes = require('./routes');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const app = express();

app.use(express.static(path.join(__dirname, '/dist')));
app.use(session({
  name: 'sessionid',
  secret: 'changethis',
  resave: false,
  saveUninitialized: true,
  cookie: {secure: true}
}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

app.listen(8080, function () {
  console.log('App started on port 8080');
});
