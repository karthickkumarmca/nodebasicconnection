var express = require('express');
var app = express();
const monk = require('monk');
var manage = require('./manage');

app.use(function(req,res,next){
	res.locals.connection = monk('superAdmin:admin123@192.168.2.168:27017/MoveX_V1',{authSource:'admin'},function(err,db){
		if(err) console.log('err',err.message);
		else console.log('Database successfully connected..')
	});
	next();
});

app.use('/',manage);



app.listen(3005,function(err){
	if(err) console.log(err);
	else{
		console.log('Server started  3005');
	}
})