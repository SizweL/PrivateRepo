let path = require('path');
let express = require('express');
let mainRouter = express.Router();

mainRouter.get('/search', function(req, res){
					res.sendFile(path.join(__dirname,'views','search.html'));
				});

mainRouter.get('/index', function(req, res){
					res.sendFile(path.join(__dirname,'views','index.html'));
				});
				
mainRouter.get('/payment', function(req, res){
					res.sendFile(path.join(__dirname,'views','Payment.html'));
				});
				
mainRouter.post('/collect', function(req, res){
					res.sendFile(path.join(__dirname,'views','clickToCollect.html'));
				});
				
mainRouter.get('/receipt', function(req, res){
					res.sendFile(path.join(__dirname,'views','createReceipt.html'));
				});
				
mainRouter.get('/googlea48b236a3c512ca1.html', function(req, res){
					res.sendFile(path.join(__dirname,'views','googlea48b236a3c512ca1.html '));
				});
				
module.exports = mainRouter; // similar to  return in C++