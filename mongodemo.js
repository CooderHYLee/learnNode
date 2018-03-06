/**
 * Author：lihongye
 * Create Date：2018/3/6
 * Modified By：lihongye
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */

const MongoClient = require('mongodb').MongoClient
const DB_CONN_STR = 'mongodb://localhost:27017/gomall'

let insertData = function (db,callback) {
    //连接列表
    const collection = db.collection('tb1')
    let data = [{"name":'xyz',"age":21},{"name":'abc',"age":22}];
    collection.insert(data, function(err, result) {
        if (err) {
            console.log('Error:' + err);
            return;
        }
        callback(result);
    });
}

MongoClient.connect(DB_CONN_STR,function (err,db) {
    console.log("连接成功")
    insertData(db,function (result) {
        console.log(result)
        db.close();
    })
})