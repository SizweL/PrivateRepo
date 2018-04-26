var express = require('express');
var app = express();
var search_path = require('./User-Search-Storage.js');

app.use('/base_url', app);
app.use(express.static(path.join(__dirname, 'js')));
app.use("/js", search_path);

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});



app.listen(process.env.PORT || 1337);