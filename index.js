//loading modules
let path = require('path');
let express = require('express');
let mainRouter = require('./mainRoutes.js');
let todoRouter = require('./todoRoutes.js');
let bodyParser = require('body-parser');

let app = express();
//use body-parser for JSON and URL encoded form bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//mounting our routers
app.use('/',mainRouter);
app.use('/todo',todoRouter);
app.use('/cdn', express.static('public'));

		
		
app.listen(process.env.PORT || 3000);
console.log("Express server running on port 3000");