var express = require('express');
var router = express.Router();
var model = require('./model');

router.get('/',function(req,res){
	model.getdetails(res.locals.connection,function(data){
		res.send({data:data});
	})
});

module.exports = router;