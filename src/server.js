/**
 * Author：lihongye
 * Create Date：2018/3/5
 * Modified By：lihongye
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */

function Student(name,age) {
    this.name = name;
    this.age = age;
}

const http = require('http')
http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type': 'text/plain'})
    let tom = new Student("tom",18);
    res.end(JSON.stringify(tom))
    res.end("hello world\n")
}).listen(1337,'127.0.0.1',function () {
    console.log('Server running at http://127.0.0.1:1337/');
})

