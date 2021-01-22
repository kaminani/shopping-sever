//连接mysql数据库服务器
const mysql = require('mysql');
// 创建数据库连接池
var pool = mysql.createPool({
    host:"127.0.0.1",
    port:3306,
    user:"root",
    password:"",
    database:"shopping", // 数据库名
    connectionLimit:20 //设置连接池里的连接数量
});
//导出连接
module.exports = pool;