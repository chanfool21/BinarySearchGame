console.log("Express app");

var express = require("express");
app = express();

app.get("/", function(req,res){
	res.send("Dak off");
	});
app.get("/des", function(req,res){
	res.send("Dak off you too");
	});
app.listen(8080, function()
	{
	console.log("Server has started");
	});
