var express = require('express');
var app = express();
var settings = require('../../lib')( ['c:/combine-settings/example/common-settings.json', '../other-settings.json', 'settings.json', ]
);

app.use(express.logger('dev'));

app.get('/', function(req, res, next) {
    res.send({
        settings: settings
    });
});

var port=process.env.PORT || 4545
app.listen(port);
console.log(port+'starting');