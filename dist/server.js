var express = require("express");
var proxy = require('http-proxy-middleware');

var options = {
  target: 'http://api.douban.com',
  changeOrigin: true,
  pathRewrite: {
    '^/api' : ''
  }
}

app = express();
app.use(express.static(__dirname));
app.use('/api', proxy(options));

var port = process.env.PORT || 5000;
app.listen(port);

console.log("Server started at port: "+ port);