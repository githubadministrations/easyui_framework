var express = require('express');
var router = express.Router();
var user = require('../database/db').user;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('index',{ title: 'Express' });
});

/* GET users listing. */
router.get('/table', function(req, res, next) {
  res.render('table/table',{ title: 'Express' });
});

/* GET users listing. */
router.get('/home', function(req, res, next) {
  res.render('table/home',{ title: 'Express' });
});

/* GET users listing. */
router.get('/insertTable', function(req, res, next) {
  res.render('table/insertTable',{ title: 'Express' });
});

//登录(包含get跳转页面和post请求)
router.route("/login").get( function(req, res) {
    res.render("/user",{title:'User Login'});
  }).post(function(req,res) {
    console.log(req.body.email);
    console.log(req.body.pwd);
    var query = {name: req.body.email, password: req.body.pwd};
    var json = {code:1,msg:'suc'};
  //条件查询
  (function(){
    user.count(query, function(err, doc){    //count返回集合中文档的数量，和 find 一样可以接收查询条件。query 表示查询的条件
      console.log("query");
      console.log(err);
      console.log(doc);
      if(doc == 1){
        console.log(query.name + ": 登陆成功 " + new Date());
      }else{
        json['code'] = 0;
        json['msg'] = '登录失败'
        console.log(query.name + ": 登陆失败 " + new Date());
      }
      var str = JSON.stringify(json);
      res.write(str);
      res.end();
    });
  })(query);
});

module.exports = router;
