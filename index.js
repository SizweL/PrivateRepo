var express = require('express');
var app = express();
var path = require('path');
let SearchRouter = require("./User-Search-Storage.js");


// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

 app.use("/", SearchRouter);

app.listen(process.env.PORT || 1337);