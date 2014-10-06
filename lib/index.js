var path = require('path'),
debug = require('debug')('com-set');

module.exports = function(options) {
    options = options || {};
    debug('options:%s', JSON.stringify(options));
    if (!options|| !options instanceof Array) {
        throw new Error('Array of settings filenames not provided');
    }
    var combined = {};
    for (var i = 0; i < options.length; i++) {
        var settings;
        try {
            var filename=path.resolve(path.join(path.dirname(process.mainModule.filename), options[i]));
            debug('reading file:%s',filename);
            settings = require(filename);
        } catch (err) {
            debug('reading absolute file:%s', options[i]);
            settings = require(options[i]);
        }
        for (j in settings) {
            combined[j] = settings[j];
        }
    }
    return markUp(combined);
}

function markUp(combined){
	if(combined.markup && combined.markup.file) {
		var filename=path.resolve(path.dirname(process.mainModule.filename), combined.markup.file);
		debug('reading markup file', filename);
		var properties = require(filename);
		var re = /\{\{(.+?)\}\}/g,
			combinedString = JSON.stringify(combined),
			tags = combinedString.match(re) || [],
			i = 0,
			prop;
		debug('' + tags.length + ' tags found to replace');
		while ((tag = tags[i++])) {
			prop = tag.substr(2, tag.length - 4);
			if(!properties.hasOwnProperty(prop))
				throw new Error('Missing property in markup file', prop);
			combinedString = combinedString.replace(tag, properties[prop])
		}
		debug('tag replace complete'); 
		return JSON.parse(combinedString);
	}
	return combined;
}
