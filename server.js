var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '/dist')));

app.get('/api/news', function (req, res) {
  var news = [
    {
      title: "Nieuws 1",
      content: "Dit is nieuwsbericht 1"
    },
    {
      title: "Nieuws 2",
      content: "Dit is niewsbericht 2"
    }
  ];

  res.json(news);
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(8080, function () {
  console.log('App started on port 8080');
});
