var express = require('express');
var router = express.Router();

var servers=["http://www.maijinyi.cn","http://www.sheiqie.cn/index"]

/* GET users listing. */
router.get('/', function(req, res) {


	res.redirect(servers[0]);
  // res.send('respond with a resource');
});

module.exports = router;
