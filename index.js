var express = require('express');
var app = express();
var path = require('path');

app.use('/base_url', app);
app.use(express.static(path.join(__dirname, 'js')));
// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});



app.listen(process.env.PORT || 1337);