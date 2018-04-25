var http = require('http');
let express = require('express');
let app = express();
let path = require('path');

let mainRouter = express.Router();


/*var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");

});*/

app.get('/index', function(req, res){
 res.sendFile(path.join(__dirname, 'index.html'));
 });

mainRouter.get('/', function (req, res) {
 res.send('Hello World');
 });

 mainRouter.get('/', function(req, res){
 res.sendFile(path.join(__dirname, 'views', 'about.html'));
 });
var port = process.env.PORT || 1337;
app.listen(port);

console.log("Server running at http://localhost:%d", port);
