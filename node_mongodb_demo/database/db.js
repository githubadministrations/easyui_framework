var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017/mydb');//；连接数据库
console.log(db);
var Schema = mongoose.Schema;
//用户信息
var userScheMa = new Schema({
  name: String,
  password: String
});
//日志信息
var infoScheMa = new Schema({
  id: String,
  info: String
});
//  定义了一个新的模型，但是此模式还未和users集合有关联
var userModel = db.model('users', userScheMa); //  与users集合关联
var infoModel = db.model('info', infoScheMa); //  与users集合关联

/*添加*/
/*var content = {name:"nick111",password:"12345226"};
var monInsert = new userModel(content);
monInsert.save(function(err){
  if(err){
    console.log(err);
  }else{
    console.log(err);
  }
  db.close();
})*/
/*删除*/
/*var del = {name:"nick111"};
userModel.remove(del,function(err,result){
  if(err){
    console.log(err);
  }else{
    console.log("update");
  }
  db.close();
});*/
/*修改*/
/*var oldValue  = {name:"nick"};
var newData = {$set:{name:"tony"}};
userModel.update(oldValue,newData,function(err,result){
  if(err){
    console.log(err);
  }else{
    console.log("update");
  }
  db.close();
});*/
/*条件查询*/
/*var content = {name:"demo1"};*/
/*var field = {name:1,password:1};
userModel.find(content,field,function(err,result){*/
/*userModel.find(content,function(err,result){
  if(err){
    console.log(err);
  }else{
    console.log(result);
  }
});*/
/*查询所有*/
/*userModel.find({},function(err,result){
  if(err){
    console.log(err);
  }else{
    console.log(result);
  }
});*/
exports.user = userModel
exports.info = infoModel
