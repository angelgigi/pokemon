var express = require('express');
var router = express.Router();

//导入 lowdb
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(__dirname + '/../data/db.json');
//获取 db 对象
const db = low(adapter);
const shortid = require('shortid');
// 记账本列表
router.get('/account', function(req, res, next) {
  // 获取账单信息
  const accounts = db.get('accounts').value();
  res.render('list',{accounts});
});

// 添加记录
router.get('/account/create', function(req, res, next) {
  res.render('create');
});

router.post('/account', function(req, res, next) {
  console.log(req.body);
  // 生成id
  const id = shortid.generate();
  // 写入文件
  db.get('accounts').unshift({id,...req.body}).write();
  res.render('success',{
    msg:'添加成功',
    url:'/account'
  })
});

// 删除记录
router.get('/account/:id', function(req, res, next) {
  const id = req.params.id;
  db.get('accounts').remove({id}).write();
  res.render('success',{
    msg:'删除成功',
    url:'/account'
  })
});

module.exports = router;