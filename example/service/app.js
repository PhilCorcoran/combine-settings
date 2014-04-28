var express = require('express');
var app = express();
var settings=require('../../lib')();
if('development'==app.get('env')){
	console.log('settings:%s',JSON.stringify(settings));
}

app.use(express.logger('dev'));

app.get('/',function(req,res,next){
	res.send(settings);
});

app.listen(process.env.PORT || 4545);
console.log("4545: starting"); 