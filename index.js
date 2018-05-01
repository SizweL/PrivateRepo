
var express = require('express');
var app=express();
var bodyParser= require('body-parser');
var jwt=require('jsonwebtoken');

var users=[
{
  name:"xxxx",
  password:"xxxx"
},
{
  name:"yyyy",
  password:"yyyy"
}
]
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('./'));

app.get('/', (req,res)=>{
    res.sendFile('index.html');
});

app.post('/login',(req,res)=>{
    var message;
    for(var user of users){
      if(user.name!=req.body.name){
          message="Wrong Name";
      }else{
          if(user.password!=req.body.password){
              message="Wrong Password";
              break;
          }
          else{
            //create the token.
              var token=jwt.sign(user,"samplesecret");
              message="Login Successful";
              break;
          }
      }
    }
    //If token is present pass the token to client else send respective message
    if(token){
        res.status(200).json({
            message,
            token
        });
    }
    else{
        res.status(403).json({
            message
        });
    }
});

app.use((req, res, next)=>{
        // check header or url parameters or post parameters for token
        var token = req.body.token || req.query.token || req.headers['x-access-token'];
        if(token){
          //Decode the token
          jwt.verify(token,"samplesecret",(err,decod)=>{
            if(err){
              res.status(403).json({
                message:"Wrong Token"
              });
            }
            else{
              //If decoded then call next() so that respective route is called.
              req.decoded=decod;
              next();
            }
          });
        }
        else{
          res.status(403).json({
            message:"No Token"
          });
        }
});

app.post('/getusers',(req,res)=>{
    var user_list=[];
    users.forEach((user)=>{
        user_list.push({"name":user.name});
    })
    res.send(JSON.stringify({users:user_list}));
});

app.listen(process.env.PORT ||3000, function(){
  console.log('listening on port 3000');
});