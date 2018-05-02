const {google} = require('googleapis');

let path = require('path');
let express = require('express');
let mainRouter = require('./mainRouter.js');
let viewsRouter = require('./viewsRoutes.js');
let actionsRouter = require('./BookSiteActions.js');

let bodyParser = require('body-parser');

let app = express();
app.use('/',mainRouter);
app.use('/views',viewsRouter);
app.use('/actions',actionsRouter);
app.use(express.static('static'));


app.use('/cdn', express.static('json'));
app.use('/cdn2', express.static('images'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.listen(process.env.PORT || 3000);
console.log("Express server running on port 3000");
