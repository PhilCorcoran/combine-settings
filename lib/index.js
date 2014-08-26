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
    return combined;
}