//dependencies required for the app
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var actions = require('./js/actions');

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
//render css files
app.use(express.static("public"));

//placeholders for added task
var task = [];
var PriceEstimate = [];
var Quantity = [];
var complete = [];



//post route for adding new task 
app.post("/addtask", function(req, res) {
    let newTask = req.body.newtask;
	let newPrice = req.body.price;
	let newQuantity = req.body.size;
    //add the new task from the post route
    actions.add(newTask,newPrice,newQuantity);
    res.redirect("/");
});

app.post("/removetask", function(req, res) {
    var completeTask = req.body.check;
	
    //check for the "typeof" the different completed task, then add into the complete task
    actions.remove(completeTask);
    res.redirect("/");
});

//render the ejs and display added task, completed task
app.get("/", function(req, res) {
	task = actions.getTask();
	PriceEstimate = actions.getPrice();
	Quantity = actions.getQuantity();
	complete = actions.getComplete();
    res.render("index", { task: task, PriceEstimate:PriceEstimate, Quantity:Quantity, complete: complete });
});

//set app to listen on port 3000
app.listen(process.env.PORT || 3000, function() {
    console.log("server is running on port 3000");
});