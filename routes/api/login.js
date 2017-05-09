const users = require('../../users.json');
const bodyParser = require('body-parser');

module.exports = function(req, res) {
  if(req.body.username === "admin") {
    res.json('{"status":"ok"}');
  } else {
    res.json('{"status":"nok"}');
  }
};
