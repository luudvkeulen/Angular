const routes = require('express').Router();
const path = require('path');
const api = require('./api');

routes.use('/api', api);

routes.get('/*', function (req, res) {
  res.sendFile(path.join(path.dirname(require.main.filename) + '/dist/index.html'));
});

module.exports = routes;
