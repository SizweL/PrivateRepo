var http = require('http');
let express = require('express');
let app = express();
let path = require('path');
let mainRouter = express.Router();


var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");

});

app.get('/about', function(req, res){
 res.sendFile(path.join(__dirname, 'index.html'));
 });


var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
