var express = require('express');
var path = require('path');

var app = express();

var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Server running at port ' + port);
});
