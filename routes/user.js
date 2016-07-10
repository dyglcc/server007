var express = require('express');
var router = express.Router();

var servers=["http://www.maijinyi.cn/page/index/show20160710","http://www.sheiqie.cn/page/index/show20160710"]

var x=0;
/* GET users listing. */
router.get('/', function(req, res) {

x = x+1;
console.log(x);
if((x%2)==0){
	res.redirect(servers[0]);
}else{
	res.redirect(servers[1]);
}

	
 res.end();
});

module.exports = router;
