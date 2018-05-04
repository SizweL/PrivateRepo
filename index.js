//dependencies required for the app
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
//render css files
app.use(express.static("public"));

//placeholders for added GroceryList
var GroceryList = [];
//placeholders for removed GroceryList
var Removed = [];

//post route for adding new GroceryList 
app.post("/addGroceryList", function(req, res) {
    var newGroceryList = req.body.newGroceryList;
    //add the new GroceryList from the post route
    GroceryList.push(newGroceryList);
    res.redirect("/");
});

app.post("/removeGroceryList", function(req, res) {
    var RemovedGroceryList = req.body.check;
    //check for the "typeof" the different Removedd GroceryList, then add into the Removed GroceryList
    if (typeof RemovedGroceryList === "string") {
        Removed.push(RemovedGroceryList);
        //check if the Removedd GroceryList already exits in the GroceryList when checked, then remove it
        GroceryList.splice(GroceryList.indexOf(RemovedGroceryList), 1);
    } else if (typeof RemovedGroceryList === "object") {
        for (var i = 0; i < RemovedGroceryList.length; i++) {
            Removed.push(RemovedGroceryList[i]);
            GroceryList.splice(GroceryList.indexOf(RemovedGroceryList[i]), 1);
        }
    }
    res.redirect("/");
});

//render the ejs and display added GroceryList, Removedd GroceryList
app.get("/", function(req, res) {
    res.render("index", { GroceryList: GroceryList, Removed:Removed  });
});

//set app to listen on port 3000
app.listen(process.env.PORT || 3000, function() {
    console.log("server is running on port 3000");
});