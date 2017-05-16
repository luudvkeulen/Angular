const path = require('path');
const articlesFile = require('../articles.json');

module.exports = function (passport) {
  const router = require('express').Router();

  router.get('/api/news', function (req, res) {
    var begin = (req.query.begin >= 0) ? req.query.begin : 0;
    var end = ((req.query.end - req.query.begin) <= 10) ? req.query.end : 10;
    res.status(200).json(articlesFile.slice(begin, end));
  });

  router.post('/api/login', function (req, res) {
    if (req.body.username === "admin") {
      res.json('{"status":"ok"}');
    } else {
      res.json('{"status":"nok"}');
    }
  });

  //This always needs to be last
  router.get('/*', function (req, res) {
    res.sendFile(path.join(path.dirname(require.main.filename) + '/dist/index.html'));
  });

  return router;
};
