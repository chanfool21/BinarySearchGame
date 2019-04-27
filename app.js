
console.log("Express app");
var fs = require('fs');
var express = require("express");
var bodyParser = require('body-parser');
app = express();
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static('C:/Users/ftw/Desktop/HTML_DB/static'));
app.get("/", function(req,res){
	res.send("Dak off");
	});
app.get("/des", function(req,res){
	res.sendFile(__dirname+"/static/home.html");
	});
app.get("/learnnfun", function(req,res){
	res.sendFile(__dirname+"/static/index.html");
});
app.post("/formNewUser",function(req,res){
	fs.appendFile(__dirname+"/logs/loginInfo.txt","User name: "+req.body.user_name+"\nEmail: "+req.body.email);
	res.send("Thank you "+req.body.user_name+" for registering"); 
});
app.listen(8081, function()
	{
	console.log("Server has started");
	});
/*
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/DB", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});
*/