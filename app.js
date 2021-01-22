const express = require("express"); //喜闻乐见的nodejs后端框架
const session = require('express-session'); //建立持久会话，让用户可以一直在线
const bodyParser = require('body-parser'); //名为解析器的中间件，用于服务接受post请求
const path = require('path');//处理路径字符串的工具，后面用它来拼接路径字符串
const cookieParser = require('cookie-parser');//操作用户浏览器的cookie,包括读取、修改和删除

const indexRouter = require('./routes/index');

const app = express();

//跨域请求设置
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','http://localhost:8080');//后面填入前端文件所在网址
	res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	res.header('Access-Control-Allow-Headers', 'X-Requested-With');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	res.header('Access-Control-Allow-Credentials', true);
	next();
});

app.use(bodyParser.json({limit: '1024mb'}));
app.use(bodyParser.urlencoded({limit: '1024mb', extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public'))); //托管公共文件，一般是图片之类的
app.use(express.static(path.join(__dirname, '/dist'))); //填入前端文件夹名，托管前端文件

const timestamp = new Date().getTime().toString(); //生成字符串时间戳
app.use(session({ //session中间件,建立持久会话
	secret: timestamp, //将时间戳字符串作为密码
	resave: false,
	saveUninitialized: true
}));

app.use(bodyParser.urlencoded({ //使用body-parser中间件,解析post请求
    extended: false  //不使用querystring的查询字符串
}));
  
app.use('/', indexRouter); //挂载总路由

const sopping_server_port = 4000;

app.listen(sopping_server_port, function(){
    console.log("端口号为" + sopping_server_port + "的服务器已启动...");
});