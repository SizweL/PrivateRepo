//dependencies required for the app
var express = require("express");
var bodyParser = require("body-parser");
let AddandRemoveRouter = require('./js/Add-and-Remove.js');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
//render css files
app.use('/js',AddandRemoveRouter);
app.use(express.static("public"));
app.use(express.static("js"));




//set app to listen on port 3000
app.listen(process.env.PORT || 3000, function() {
    console.log("server is running on port 3000");
});