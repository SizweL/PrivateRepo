let path = require('path');
let express = require('express');
let receiptRouter = express.Router();

receiptRouter.get('/receipt/:id', function (req, res) {
res.sendFile(path.join(__dirname, 'views', 'index.html'));
console.log("your reference number is ",res.json(req.params.id),Date());
});

module.exports = mainRouter;