const pool = require("../pool.js"); //引入mysql连接池

//以下封装的箭头函数前，要加async关键字用来包装为异步
const add_user = async (req,res) => {
    try {
        const user = req.body;//获取前端传来的用户信息

        pool.query("INSERT INTO user(uname,upwd) VALUES(?,?)",[ user.username, user.password ],(err,result)=>{
            if(err){  //如果错误，则打印错误
                res.json({type: "error",msg:"插入失败"});
                console.error(err);
            }else{
                if(result.affectedRows>0){//进行数据库插入后返回的结果，如果result.affectedRows>0则会插入成功
                    res.json({type: "success",msg: "插入成功"});
                }else{
                    res.json({type: "error",msg: "插入失败"});
                }
            }
        });

    } catch (error) {
        res.json({type: "error",msg: "错误:" + error});
    }
    console.log(req.body);
}

module.exports = {
    add_user //增添用户
};