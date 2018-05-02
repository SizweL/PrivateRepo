let path = require('path');
let express = require('express');
let actionsRouter = express.Router();
let fs = require('fs');
let references = []; //our todo list array

var timestamp = new Date();

actionsRouter.get('/viewReference', function (req, res) {
					res.json(references[references.length-1]); //Respond with JSON
				});

actionsRouter.post('/generate-receipt/:id', function (req, res) {
					var reference = "your reference number is " + req.params.id + "-" + Date.now() + "-" + req.body.location + " Collect book within 7 days";
					references.push(reference);
					res.redirect(req.baseUrl + '/viewReference');
				});

actionsRouter.post('/request', function (req, res) {
					//var search_string = req.body.query;
					//let search_object = {  value: search_string};
					//let data = JSON.stringify(search_object);
					//fs.writeFileSync('json/search.json', data);
					res.sendFile(path.join(__dirname, 'views', 'request_textbook.html'));
				});				
module.exports = actionsRouter; // similar to  return in C++