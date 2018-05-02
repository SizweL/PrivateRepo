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
    res.sendFile(path.join(__dirname + '/views/index.jshtml'));
});

app.listen(process.env.PORT || 3000);
console.log("Express server running on port 3000");

const OAuth2 = google.auth.OAuth2;

var oauth2Client = new OAuth2("1071667068495-s0u1944ep3aol103in0d8pqfl8383f5c.apps.googleusercontent.com", "5ptbdJU4Mo96UtGYyt5mvzXn", "https://bantutextbooks.azurewebsites.net/search");

// generate a url that asks permissions for Google+ and Google Calendar scopes
var scopes = [
  'https://www.googleapis.com/auth/gmail.modify'
];

var url = oauth2Client.generateAuthUrl({
  access_type: 'offline', // 'online' (default) or 'offline' (gets refresh_token)
  scope: scopes // If you only need one scope you can pass it as string
});

app.get("/url", function(req, res) {
  res.send(url);
});

app.get("/tokens", function(req, res) {

  var code = req.query.code;

  console.log(code);

  oauth2Client.getToken(code, function(err, tokens) {
    if (err) {
      console.log(err);
      res.send(err);
      return;
    }

    console.log("allright!!!!");

    console.log(err);
    console.log(tokens);
    oauth2Client.setCredentials(tokens);

    res.send(tokens);
  });
});