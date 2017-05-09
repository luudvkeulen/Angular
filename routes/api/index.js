const api = require('express').Router();
const news = require('./news');
const login = require('./login');

api.get('/news', news);
api.post('/login', login);

module.exports = api;
