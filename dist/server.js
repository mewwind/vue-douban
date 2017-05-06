var express = require("express");
var path = require("path");
var proxy = require('express-http-proxy');

app = express();
app.use(express.static(__dirname));
app.use('/api', proxy('http://api.douban.com/v2'));

var port = process.env.PORT || 5000;
app.listen(port);

console.log("Server started at port: "+ port);