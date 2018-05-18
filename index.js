
// dependencies required for the app
'use strict';

//dependencies required for the app
var NodeSession = require('node-session');
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var actions = require('./js/actions');
var friends = require("./js/friends");
var shop_functs = require('./js/shop_functions');
var path = require('path');
// var session = require('express-session');
var fs = require('fs');


// init
var session = new NodeSession({secret: 'Q3UBzdH9GEfiRCTKbi5MTPyChpzXLsTD'});



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('json'));

app.use("/js",express.static('js'));
app.set("view engine", "ejs");
//render css files

app.use(express.static(__dirname + '/public'));
//app.use(session);

// placeholders for added task
var task = [];
var PriceEstimate = [];
var Quantity = [];
var complete = [];

var username = '';

// post route for adding new task
app.post('/addtask', function(req, res) {
  var newTask = req.body.newtask;
  var newPrice = req.body.price;
  var newQuantity = req.body.size;
  // add the new task from the post route
  actions.add(newTask, newPrice, newQuantity);
  res.redirect('/list');
});
var user_id = [];


app.post('/removetask', function(req, res) {
  var completeTask = req.body.check;

  // check for the "typeof" the different completed task, then add into the complete task
  actions.remove(completeTask);
  res.redirect('/list');
});

// render the ejs and display added task, completed task
app.get('/list', function(req, res) {
  task = actions.getTask();
  PriceEstimate = actions.getPrice();
  Quantity = actions.getQuantity();
  complete = actions.getComplete();
  res.render('list', { task: task, PriceEstimate: PriceEstimate, Quantity: Quantity, complete: complete });
});

// post route for register submission
app.post('/register-submit', function(req, res) {
  var name = req.body.firstname;
  var surname = req.body.lastname;
  var username = req.body.username;
  var password = req.body.password;
  // add the new user
  actions.add_user(name, surname, username, password);
  res.redirect('/login');
});

// post route for sharing list
app.post('/share', function(req, res) {
  var friend_username = req.body.friends;
  actions.add_friend(friend_username, req.session.get('key'));
  // res.redirect("/login");
});

// post route for login submission
app.post('/login-submit', function(req, res) {
  username = req.body.username;
  var password = req.body.password;
  // add the new user
  // actions.login(username,password);
  fs.readFile('json/users.json', 'utf8', function readFileCallback(err, data){
    if (err){
      console.log(err);
    } else {
      var obj = JSON.parse(data); // now it an object
      var user = obj.users;
      var status = 0;
      for (var i = 0; i < obj.users.length; i++) {
        if (username === user[i].UserName && password === user[i].Password) {
          status = 1;
          // res.redirect("/list");
          session.startSession(req, res, function(username) {
            req.session.put('key', username);
            res.redirect('/list');
          });
        }
      }
      if (status === 0)	res.redirect('/login');
  }});
  });

// render the ejs and display added task, completed task
app.get('/list', function(req, res) {
  task = actions.getTask();
  PriceEstimate = actions.getPrice();
  Quantity = actions.getQuantity();
  complete = actions.getComplete();
  res.render('list', {task: task, PriceEstimate: PriceEstimate, Quantity: Quantity, complete: complete});
});

app.get('/save', function(req, res) {
  res.sendFile(path.join(__dirname, 'views', 'save.html'));
});

app.post('/store', function(req, res) {

  var list = shop_functs.getItemList(task);
  fs.readFile('json/users.json', 'utf8', function readFileCallback(err, data){
    if (err){
      console.log(err);
    } else {
      var obj = JSON.parse(data); // now it an object
      var user = obj.users;
      console.log('getting to store post');

      user.NewField = 'SavedList';
      for (var i = 0; i < obj.users.length; i++) {
        console.log('getting to for loop');
        if (username === user[i].UserName){
          console.log('finding match');
          user[i].SavedList = list;
          console.log(user[i].SavedList[0]);
          var json = JSON.stringify(obj);
          fs.writeFile('json/users.json', json);
        }

      }

    }
  });

  res.redirect('/list');

});

// render index page
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// render registration page
app.get('/register', function(req, res) {
  res.sendFile(path.join(__dirname, 'views', 'register.html'));
});

// render login page
app.get('/login', function(req, res) {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});


app.listen(process.env.PORT || 2000, function() {
  console.log('server is running on port 2000');
});