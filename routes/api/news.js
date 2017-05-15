const articlesFile = require('../../articles.json');

module.exports = function(req, res) {
  var begin = (req.query.begin >= 0) ? req.query.begin : 0;
  var end = ((req.query.end - req.query.begin) <= 10) ? req.query.end : 10;
  res.status(200).json(articlesFile.slice(begin,end));
};
