//封装的函数存放于此文件

//封装生成验证码函数
const captcha = function(){
    const arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"];
    //声明新数组
    const newArr = [];
    //声明一个临时存放随机值的变量
    let n = 0;
    //声明一个存放布尔值的变量
    let bool = true;
    //循环4次
    for(let i = 0;i < 6;){
        //将随机得到的字母或数字赋值给 n 变量
        n = arr[ Math.floor( Math.random() * arr.length ) ];
        //遍历newArr并判断newArr数组里是否有与 n 变量相同的值
        for(let j = 0;j < newArr.length;j++){
            //如果有的话，就将 bool 变量重新赋值为 false ，并用 break关键字及时结束当前循环层
            if( n == newArr[j] ){
                bool = false;
                break;
            }
        }

        //如果bool依旧为true的话，就说明 newArr 数组里没有与 n 变量重复的值，就往 newArr数组里添加一个 n 变量的值，并将 i 自增 1;
        if(bool){
            newArr.push(n);
            i++;
            //如果 bool 为 false的话，则将bool 重新赋值为true，并跳过 i 的自增;从新来过
        }else if(!bool){
            bool = true;
        }
    }
    
    return newArr.join("");
}

//封装以元素为对象的数组排序函数
const arraySort = function(arr,ziduan,isShengxu){ // 对象数组排序，默认降序,arr:元素为对象的数组; ziduan：数组里的对象元素里的属性名；isShengxu: 值为true会升序排列，值为false会将序排列;会改变本来数组
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i][ziduan] > arr[j][ziduan]){
                continue;
            }else{
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    if(isShengxu === true){
        arr.reverse();
    }
}

module.exports = {
    captcha,
    arraySort
}