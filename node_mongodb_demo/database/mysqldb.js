var mysql = require('mysql');

var TEST_TABLE = 'device';

//创建连接
var client = mysql.createConnection({
  host: '192.168.4.145',//远程MySQL数据库的ip地址
  user: 'root',
  password: '1q2w3e4r',
  database:'web_automation_v2',
  port: '3306'
});

client.connect();

var selectSQL = 'select * from agent_ip';
var insertSQL = 'INSERT INTO agent_ip(ip,mac_type) VALUES("1.1.1.1",1)';
var updateSQL = 'update agent_ip set mac_type=2 where ip="1.1.1.1"';
var deleteSQL = 'delete from agent_ip where ip="1.1.1.1" ';

//删除
/*client.query(deleteSQL, function (err3, res3) {
  if (err3) console.log(err3);
  console.log("DELETE Return ==> ");
  console.log(res3);
});*/

//更新
/*
client.query(updateSQL, function (err3, res3) {
  if (err3) console.log(err3);
  console.log("UPDATE Return ==> ");
  console.log(res3);
});
*/

//添加
/*client.query(insertSQL, function (err1, res1) {
  if (err1) console.log(err1);
  console.log("INSERT Return ==> ");
  console.log(res1);
});*/

//查询
/*
client.query(selectSQL, function(err, results) {
  for (var i in results) {
    console.log(results[i].id+"-"+results[i].ip+"-"+results[i].desc);
  }

  if (err) {
        throw err;
      }
      client.end();
    }
);
*/
