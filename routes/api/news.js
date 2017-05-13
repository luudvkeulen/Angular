const articlesFile = require('../../articles.json');

module.exports = function(req, res) {
  res.status(200).json(articlesFile.slice(req.query.begin,req.query.end));
};
