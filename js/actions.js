'use strict';
var task = [];
// placeholders for removed task
var complete = [];
var PriceEstimate = [];
var user_arr = [];
var pass_arr = [];
var Quantity = [];
var fs = require('fs');


// var cookieParser = require('cookie-parser');


function setUsername(user, u) {
  user.push(u);
}

function setPassword(pass, p) {
  pass.push(p);
}

function add_user(_name, _surname, _username, _password) {
  fs.readFile('json/users.json', 'utf8', function readFileCallback(err, data){
    if (err){
      console.log(err);
    } else {
      var obj = JSON.parse(data); // now it an object
      obj.users.push({FirstName: _name, LastName: _surname, UserName: _username, Password: _password}); // add some data
      var json = JSON.stringify(obj); // convert it back to json
      fs.writeFile('json/users.json', json); // write it back
    }
  });
  // var user = '{"firstName":_name, "lastName":surname, "username":_username, "password":_password}';
  // var obj = JSON.parse(user);
}

function login(_username, _password) {
  // var status = [];
  setUsername(user_arr, _username);
  setPassword(pass_arr, _password);
  fs.readFile('json/users.json', 'utf8', function readFileCallback(err, data){
    if (err){
      console.log(err);
    } else {
      var obj = JSON.parse(data); // now it an object
      var user = obj.users;
      for (var i = 0; i < obj.users.length; i++) {
        if (user_arr[0] === user[i].UserName && pass_arr[0] === user[i].Password) {

        }
      }

    }
  });
  // var user = '{"firstName":_name, "lastName":surname, "username":_username, "password":_password}';
  // var obj = JSON.parse(user);

  return;
}

function add(_task, price_estimate, quantity) {
  task.push(_task);
  PriceEstimate.push(price_estimate);
  Quantity.push(quantity);
}

function getTask() {
  var task_arr = task;
  return task_arr;
}

function getPrice() {
  var PriceEstimate_arr = PriceEstimate;
  return PriceEstimate_arr;
}

function getQuantity() {
  var Quantity_arr = Quantity;
  return Quantity_arr;
}

function getComplete() {
  var complete_arr = complete;
  return complete_arr;
}


function remove(complete_task) {
  if (typeof complete_task === 'string') {
    complete.push(complete_task);
    // check if the completed task already exits in the task when checked, then remove it
    task.splice(task.indexOf(complete_task), 1);
  } else if (typeof complete_task === 'object') {
    for (var i = 0; i < complete_task.length; i++) {
      complete.push(complete_task[i]);
      task.splice(task.indexOf(complete_task[i]), 1);
    }
  }
}

function add_friend(friend, username) {

}

module.exports.add = add;
module.exports.remove = remove;
module.exports.getComplete = getComplete;
module.exports.getPrice = getPrice;
module.exports.getQuantity = getQuantity;
module.exports.getTask = getTask;
module.exports.add_user = add_user;
module.exports.login = login;
module.exports.add_friend = add_friend;


