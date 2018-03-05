/**
 * Author：lihongye
 * Create Date：2018/3/5
 * Modified By：lihongye
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
const express = require('express')
const router = express.Router()
const _ = require('lodash')

const cars = []
cars.push({id:201701,name:"BMW",price:190,speed:"210km/h",color:"白色"});
cars.push({id:201702,name:"BYD",price:25,speed:"160km/h",color:"红色"});
cars.push({id:201703,name:"Benz",price:300,speed:"215km/h",color:"蓝色"});
cars.push({id:201704,name:"Honda",price:190,speed:"170km/h",color:"黑色"});
cars.push({id:201705,name:"QQ",price:130,speed:"210km/h",color:"白色"});

router.get('/',function (req,res,next) {
    res.json(cars)
})

router.get('/:id',function (req,res,next) {
    let id = parseInt(req.param.id)
    let car = _.find(cars,{id:id})
    res.json(car)
})


/*Post*/
/*添加汽车*/
/*url：/cars/car  */
router.post('/car', function(req, res, next) {
    console.log("添加汽车");
    let car=req.body;  //从请求正文中获得json对象
    car.id=_.last(cars).id+1;  //将编号修改为最后一辆车的编号+1
    cars.push(car);  //将汽车对象添加到集合中
    res.json(car);  //将添加成功的车以json的形式返回
});


/*Put*/
/*修改汽车*/
/*url：/cars/car  */
router.put('/car', function(req, res, next) {
    let car=req.body;  //从请求正文中获得json对象
    console.log(req.body);
    let index=_.findIndex(cars,{id:parseInt(car.id)});  //根据id获得车在集合中的下标

    cars[index]=car;  //替换原对象
    //res.json(car);  //将修改后的车以json的形式返回
    res.send({status:"success", message:"更新成功!"});
});

/*Delete*/
/*删除汽车*/
/*url：/cars/:id  */
router.delete('/id/:id', function(req, res, next) {
    //获得url中的编号参数
    let id=parseInt(req.params.id);
    let index=_.findIndex(cars,{id:id});  //根据id获得车在集合中的下标
    cars.splice(index,1);   //在cars数组中删除下标从index开始的1条数据
    res.json(cars);
});

module.exports = router;
