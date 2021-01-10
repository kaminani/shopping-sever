const pool = require("../pool.js"); //引入mysql连接池

//以下封装的箭头函数前，要加async关键字用来包装为异步
const add_user = async (req,res) => {
    try {
        const user = req.body;//获取前端传来的用户信息
        console.log(user);
        if (user.username && user.password) {
            pool.query("INSERT INTO user(uname,upwd) VALUES(?,?)",[ user.username, user.password ],(err,result)=>{
                if(err){  //如果错误，则打印错误
                    res.json({type: "error",msg:"用户已存在"});
                }else{
                    if(result.affectedRows>0){//进行数据库插入后返回的结果，如果result.affectedRows>0则会插入成功
                        res.json({type: "success",msg: "插入成功"});
                    }else{
                        res.json({type: "error",msg: "用户已存在"});
                    }
                }
            });
        }else{
            res.json({type: "error",msg: "请保证数据的格式或位数正确"});
        }

    } catch (error) {
        res.json({type: "error",msg: "错误:" + error});
    }
}

module.exports = {
    add_user //增添用户
};