const articlesFile = require('../../articles.json');

module.exports = function(req, res) {
  console.log(articlesFile.slice(req.query.begin,req.query.end));
  res.status(200).json(articlesFile.slice(req.query.begin,req.query.end));
};
