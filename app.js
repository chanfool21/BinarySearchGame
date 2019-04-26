
console.log("Express app");
var fs = require('fs');
var express = require("express");
app = express();
app.use(express.static('C:/Users/mischanc/Desktop/HTML_DB/BinarySearchGame/static'));
app.get("/", function(req,res){
	res.send("Dak off");
	});
app.get("/des", function(req,res){
	res.sendFile(__dirname+"/static/home.html");
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