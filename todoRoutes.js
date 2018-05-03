let path = require('path');
let express = require('express');
let router = express.Router();
let todoList = require('./todoList');

router.get('/', function(req,res){
	res.sendFile(path.join(__dirname, 'views', 'todo', 'index.html'));
});

router.get('/create', function(req,res){
	res.sendFile(path.join(__dirname, 'views', 'todo', 'create.html'));
});

router.get('/delete', function(req,res){
	res.sendFile(path.join(__dirname, 'views', 'todo', 'delete.html'));
});

router.get('/edit', function(req,res){
	res.sendFile(path.join(__dirname, 'views', 'todo', 'edit.html'));
});

//RESTful api
router.get('/api/list',function(req,res){
	todoList.show(res); //Respond with json
});

router.get('/api/get/:id',function(req,res){
	res.json(todoList.get(req.params.id));
});

router.post('/api/create',function(req,res){
	console.log("creating a todo entry", req.body.todo); 
	todoList.add(req.body.todo);
	res.redirect(req.baseUrl+'/api/list');
});

router.post('/api/delete',function(req,res){
	console.log("deleting a todo entry"); 
	todoList.delete(req.body.todo);
	res.redirect(req.baseUrl+'/api/list');
});

router.post('/api/edit',function(req,res){
	console.log("edit a todo entry"); 
	todoList.edit(req.body.todo,req.body.todo);
});

module.exports = router;