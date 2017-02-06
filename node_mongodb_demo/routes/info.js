var express = require('express');
var router = express.Router();
var info = require('../database/db').info;
var mongoose = require('mongoose');
var ObjectID = mongoose.Schema.Types.ObjectId;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('index',{ title: 'Express' });
});

router.get('/query', function(req, res, next) {
    info.find({},function(err,result){
      var str = JSON.stringify(result);
      res.write(str);
      res.end();
    })
});

router.post('/queryOne', function(req, res, next) {
  console.log(req.body.id.toString());
  console.log(ObjectID("("+req.body.id.toString()+")"));
  var param  = {_id:ObjectID(req.body.id)};
  param = {_id:ObjectId('58776eaaa6d9263e310d747f')}
  console.log(param);
  info.find(param,function(err,result){
    console.log(result);
    var str = JSON.stringify(result);
    res.write(str);
    res.end();
  })
});

//info添加
router.post("/insertInfo",function(req, res,next) {
  console.log("添加数据");
  console.log(req.body.info);
  var infoModel  = new info({id:'3',info:req.body.info});
  var json = {code:1,msg:'suc'};
  infoModel.save(function(err,doc){
   /*res.create({id:'3',info:req.body.info},function(err,doc){*/
    console.log("insert");
    console.log(err);
    console.log(doc);
    if(err){
      json['code'] = 0;
      json['msg'] = '登录失败'
      console.log("添加失败");
    }
    var str = JSON.stringify(json);
    res.write(str);
    res.end();
    /*if(doc == 1){
      console.log("添加成功");
    }else{
      console.log("添加失败");
    }*/
  })
})

module.exports = router;
