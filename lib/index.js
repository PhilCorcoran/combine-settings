var path=require('path');

module.exports=function(options){
	options=options || {};
	var common=options.common || path.join(path.dirname(process.mainModule.filename),'../','common-settings.json');
	var specific=options.specific || path.join(path.dirname(process.mainModule.filename),'settings.json');
	var combined={};
	if(common){
		var settings=require(path.resolve(common));
		for(i in settings){
			combined[i]=settings[i];
		}
	}
	if(specific){
		var settings=require(path.resolve(specific));
		for(i in settings){
			combined[i]=settings[i];
		}
	}
	return combined;
}