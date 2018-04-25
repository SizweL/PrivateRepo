var http = require('http');
let express = require('express');
let app = express();
let path = require('path');

let mainRouter = express.Router();

app.get('/index', function(req, res){
 res.sendFile(path.join(__dirname, 'index.html'));
 });


var port = process.env.PORT || 1337;
app.listen(port);

console.log("Server running at http://localhost:%d", port);
