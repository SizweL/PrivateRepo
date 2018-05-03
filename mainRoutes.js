let path = require('path');
let express = require('express');
let mainRouter = express.Router();


mainRouter.get('/', function(req, res){
					res.send('Hello World, I\'m Node.js');
				});

mainRouter.get('/about.html', function(req, res){
					res.sendFile(path.join(__dirname,'views','about.html'));
				});
				
mainRouter.get('/home.html', function(req, res){
					res.sendFile(path.join(__dirname,'views','index.html'));
				});
				
module.exports = mainRouter; // similar to  return in C++