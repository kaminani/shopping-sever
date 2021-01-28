const pool = require("../pool.js"); //引入mysql连接池

const get_products = async (req,res)=>{
    try {
        const pids = req.query.pids; //是一串产品id组成的数组
        // console.log(req.query);
        const output = [];
        for (const pid of pids) {
            await new Promise((open)=>{
                pool.query("select * from product where pid = ?",[pid],(err,result)=>{
                    if (err) {
                        res.json({type: "error",msg: "错误:" + err});
                    }else{
                        output.push(result[0]);
                    }
                    open();
                }); 
            }); 
        }
        res.json(output);
    } catch (error) {
        res.json({type: "error",msg: "错误:" + error});
    }
}

const get_home_product = async (req, res) => {
    try {
        pool.query("select * from product",[],(err,result)=>{
            if (err) {
                res.json({type: "error",msg: "错误:" + err});
            }else{
                res.json(result);
            }
        })
    } catch (error) {
        res.json({type: "error",msg: "错误:" + error})        
    }

}

module.exports = {
    get_products,
    get_home_product
};
