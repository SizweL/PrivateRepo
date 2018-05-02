let path = require('path');
let express = require('express');
let router = express.Router();
let todoList = require('./BookSiteActions.js');

router.get('/', function (req, res) {
res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

router.get('/collect', function(req, res){
res.sendFile(path.join(__dirname, 'views', 'clickToCollect.html'));
});

router.get('/payment', function(req, res){
res.sendFile(path.join(__dirname, 'views', 'payment.html'));
});

router.get('/receipt', function(req, res){
res.sendFile(path.join(__dirname, 'views', 'createReceipt.html'));
});

module.exports = router;