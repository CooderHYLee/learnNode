/**
 * Author：lihongye
 * Create Date：2018/3/5
 * Modified By：lihongye
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
const express = require('express');
const router = express.Router();
const _=require('lodash');

let tasks=[{id:'1',name:'hello'},{id:'2',name:'world'}]; //simple data
let id=3;

/* 获得首页 */
router.get('/', function(req, res, next) {
    res.json(tasks);
});

//return all
router.get('/', function(req, res) {
    res.json(tasks);
});

//create new
router.post('/', function(req, res) {
    let newTask=req.body;
    newTask.id=''+(id++);
    tasks.push(newTask);
    res.json(newTask);
});

//get one
router.get('/:id', function(req, res) {
    let task=_.find(tasks,{id:req.params.id});
    res.json(task);
});

//update one
router.put('/:id', function(req, res) {
    _.remove(tasks,{id:req.params.id});
    let newTask=req.body;
    newTask.id=req.params.id;
    tasks.push(newTask);
    res.json(newTask);
});

//remove one
router.delete('/:id', function(req, res) {
    _.remove(tasks,{id:req.params.id});
    res.json({id:req.params.id});
});

module.exports = router;

