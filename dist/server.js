var express = require("express");
var path = require("path");

app = express();
app.use(express.static(__dirname));

var port = process.env.PORT || 5000;
app.listen(port);

console.log("Server started at port: "+ port);