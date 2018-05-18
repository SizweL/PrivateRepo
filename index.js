//dependencies required for the app
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var actions = require('./js/actions');
var shop_functs = require('./js/shop_functions');
let path = require('path');
//var session = require('express-session');
var fs = require('fs');
var NodeSession = require('node-session');
 
// init
session = new NodeSession({secret: 'Q3UBzdH9GEfiRCTKbi5MTPyChpzXLsTD'});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('json'));
app.use("/js",express.static('js'));

app.set("view engine", "ejs");
//render css files
app.use(express.static(__dirname + '/public'));


//placeholders for added task
var task = [];
var PriceEstimate = [];
var Quantity = [];
var complete = [];

function createSessId(req,res,username)
{
	//req.session.put('user', username);
	res.redirect("/list");
}

//post route for adding new task 
app.post("/addtask", function(req, res) {
    let newTask = req.body.newtask;
	let newPrice = req.body.price;
	let newQuantity = req.body.size;
    //add the new task from the post route
    actions.add(newTask,newPrice,newQuantity);
    res.redirect("/list");
});

app.post("/removetask", function(req, res) {
    var completeTask = req.body.check;
	
    //check for the "typeof" the different completed task, then add into the complete task
    actions.remove(completeTask);
    res.redirect("/list");
});


//render the ejs and display added task, completed task
app.get("/list", function(req, res) {
    task = actions.getTask();
	PriceEstimate = actions.getPrice();
	Quantity = actions.getQuantity();
	complete = actions.getComplete();
    res.render("list", { task: task, PriceEstimate:PriceEstimate, Quantity:Quantity, complete: complete });
});

//post route for register submission
app.post("/register-submit", function(req, res) {
    let name = req.body.firstname;
	let surname = req.body.lastname;
	let username = req.body.username;
	let password = req.body.password;
    //add the new user
    actions.add_user(name,surname,username,password);
    res.redirect("/login");
});

//post route for sharing list
app.post("/share", function(req, res) {
    let friend_username = req.body.friends;
    actions.add_friend(friend_username,req.session.get('key'));
    //res.redirect("/login");
});

//post route for login submission
app.post("/login-submit", function(req, res) {
    let username = req.body.username;
	let password = req.body.password;
    //add the new user
    //actions.login(username,password);
	fs.readFile('json/users.json', 'utf8', function readFileCallback(err, data){
			if (err){
				console.log(err);
			} else {
			var obj = JSON.parse(data); //now it an object
			let user = obj.users;
			let status = 0;
			for (var i = 0; i<obj.users.length; i++)
			{
				if (username==user[i].UserName && password==user[i].Password)
				{
					status = 1;
					//res.redirect("/list");
					session.startSession(req, res, function(username)
					{
						req.session.put('key', username);
						res.redirect("/list");
					});
				}
			}
			if (status == 0)	res.redirect("/login");
		}});
});

//render the ejs and display added task, completed task
app.get("/list", function(req, res) {
	task = actions.getTask();
	PriceEstimate = actions.getPrice();
	Quantity = actions.getQuantity();
	complete = actions.getComplete();
    res.render("list", { task: task, PriceEstimate:PriceEstimate, Quantity:Quantity, complete: complete });
});

app.get("/save", function(req, res) {
    res.sendFile(path.join(__dirname, 'views', 'save.html'));
});

app.post("/store", function(req, res) {

	 
});

//render index page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

//render registration page
app.get("/register", function(req, res) {
    res.sendFile(path.join(__dirname, 'views', 'register.html'));
});

//render login page
app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});



app.listen(process.env.PORT || 2000, function() {
console.log("server is running on port 2000");
});