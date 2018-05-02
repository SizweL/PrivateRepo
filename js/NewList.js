let path = require('path');
let express = require('express');
let router = express.Router();

let shopping_list = []; //empty shopping_list
 
//RESTful api 
router.get('/api/list', function (req, res) { 
	res.json(shopping_list ); //Respond with JSON 
 });

 router.get('/api/get/:id', function (req, res) { 
	res.json(shopping_list [req.params.id]); 
//Try browsing to /api/get/0 once you've added some entries 
});

 
router.post('/api/create', function(req, res){ 
	console.log("creating a shopping list entry"); 
});
 
router.post('/api/edit', function(req, res){ 
	console.log("editing a shopping list entry"); 
});

router.post('/api/create', function(req, res){ 
	console.log("Creating the following shopping list:", req.body.Textbooks);  
	shopping_list.push(req.body.Textbooks); 
	res.redirect(req.baseUrl + '/api/list');  
});
