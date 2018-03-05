/**
 * Author：lihongye
 * Create Date：2018/3/5
 * Modified By：lihongye
 * Why & What is modified  <修改原因描述>
 * <文件描述>
 */
const express = require('express');
const router = express.Router();

/* 获得首页 */
router.get('/',function (req,res,next) {
    res.render('index',{title:'Express'})
})

module.exports = router;