let path = require('path');
let express = require('express');
let mainRouter = express.Router();

mainRouter.get('/', function (req, res) {
res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

mainRouter.get('/collect', function(req, res){
res.sendFile(path.join(__dirname, 'views', 'clickToCollect.html'));
});

mainRouter.get('/payment', function(req, res){
res.sendFile(path.join(__dirname, 'views', 'payment.html'));
});

mainRouter.get('/receipt', function(req, res){
res.sendFile(path.join(__dirname, 'views', 'createReceipt.html'));
});
module.exports = mainRouter;