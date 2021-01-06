var express = require("express");
var app = express();
var http = require("http");

var sopping_server_port = 4000;

http.createServer(app).listen(sopping_server_port, function(){
    console.log("商城服务器启动，端口号为" + sopping_server_port);
});