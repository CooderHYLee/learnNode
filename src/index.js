/**
 * Author：lihongye
 * Create Date：2018/3/5
 * Modified By：lihongye
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
const _ = require('lodash')

var products=[];
products.push({name:"ZTE U880",price:899.8});
products.push({name:"HuWei 荣耀8",price:1899.8});
products.push({name:"iPhone 7 Plus 128G",price:5899.8});

//1、取出第一个元素
let obj1=_.first(products);
console.log(obj1.name);  //ZTE U880

//2、取出最后一个元素
let obj2=_.last(products);
console.log(obj2.name);  //iPhone 7 Plus 128G

//3、指定查找条件返回符合条件的索引
let obj3=_.findIndex(products,function(obj){
    return obj.price>=1000&&obj.name.indexOf("7")>0;
});
console.log(obj3);  //2

//4、指定查找条件返回查找到的对象
let obj4=_.find(products,function(obj){
    return obj.price>=1000&&obj.name.indexOf("7")>0;
});
console.log(obj4);  //{ name: 'iPhone 7 Plus 128G', price: 5899.8 }

//5、排序
let obj5=_.orderBy(products,["price","name"],["desc","asc"]);
console.log(obj5);

//[ { name: 'iPhone 7 Plus 128G', price: 5899.8 },
//{ name: 'HuWei 荣耀8', price: 1899.8 },
//{ name: 'ZTE U880', price: 899.8 } ]

//6、查找价格为1899.8的产品的key
let obj6=_.findKey(products,{price:1899.8});
console.log(obj6);   //1

