var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('index', { title: 'MY DEMO' });
});

/* GET home page. */
router.get('/user', function(req, res, next) {
  res.render('user', { title: 'Login' });
});



module.exports = router;
