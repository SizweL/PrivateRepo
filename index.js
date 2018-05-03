
var express = require('express');

var app = express();

app.set('view engin', 'ejs');

app.get('/', function (req, res) {

  res.render('index');
});
//the server is listening on port 3000 for connections
app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
});