const pool = require("../pool.js"); //引入mysql连接池

//以下封装的箭头函数前，要加async关键字用来包装为异步
const add_user = async (req,res) => {
    try {
        const user = req.body;//获取前端传来的用户信息
        if (user.username && user.password && user.phone) {
            pool.query("INSERT INTO user(uname,upwd,phone,avatar) VALUES(?,?,?,?)",[ user.username, user.password, user.phone,"/public/img/default/avatar.png" ],(err,result)=>{
                if(err){  //如果错误，则返回错误
                    res.json({type: "error",msg:"用户已存在"});
                }else{
                    if(result.affectedRows>0){//进行数据库插入后返回的结果，如果result.affectedRows>0则会插入成功
                        res.json({type: "success",msg: "注册成功"});
                    }else{
                        res.json({type: "error",msg: "注册出错"});
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

const user_login = async (req,res) => {
    try {
        const user = req.body;
        if (user.phone && user.password) {
            pool.query("select * from user where phone=? and upwd=?",[user.phone,user.password],(err,result)=>{
                if(err) throw err;
                if(result.length>0){
                    req.session["uid"]=result[0]["uid"];//将uid存入会话中
                    req.session["phone"]=result[0]["phone"];//将phone存入会话中
                    //这样就可在其他路由中直接req.session.uid就可以直接获取uid了，req.session.uname获取同理
                    res.json({type: "success",msg: "登录成功"});
                }else{
                    res.json({type: "error",msg: "帐号或密码不正确"});
                }
            });
        }else{
            res.json({type: "error",msg: "请保证数据的格式或位数正确"});
        }
    } catch (error) {
        res.json({type: "error",msg: "错误:" + error});
    }
}

const get_my_user = async (req,res) => {
    const uid = req.session["uid"];//取出存入会话中的uid
    try {
        pool.query("select * from user where uid = ?",[uid],(err,result)=>{
            if(err){
                res.json({type: "error",msg:"查询时出错"});
            }else{
                res.json(result[0]);
            }
        });
    } catch (error) {
        res.json({type: "error",msg: "错误:" + error});
    }
}


module.exports = {
    add_user, //增添用户
    user_login,
    get_my_user
};