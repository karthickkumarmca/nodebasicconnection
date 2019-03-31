exports.getdetails = function(connection,callback){
	connection.get('user').find({},function(err,result){
		if(err) console.log('connection', err);
		else
			callback(result);
	})
}