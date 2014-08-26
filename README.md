combine-settings
================

Combines two settings files. The second file overwrites any common attributes. The paths can be absolute or else relative to the main module.
# Examples

```js
var settings = require('combine-settings')( ['c:/combine-settings/example/common-settings.json', '../other-settings.json', 'settings.json', ]
);

```


This is useful if you have a set of micro services with the following structure;

```
microservices/
common-settings.json
serviceone/settings.json
servicetwo/settings.json
```

``common-settings.json`` is used for shared settings such as database connections. The specific settings of each given service will override any common attributes from ``common-settings.json``.
When using relative paths ``process.mainModule.filename`` is used to locate the files. This means that services can be started as follows
```
node serviceon\app.js
node servicetwo\app.js
```
and the settings files will be correctly located

## Release History
|Version|Date|Description|
|:--:|:--:|:--|
|v0.2.0|2014-08-26| Array of settings filenames|
|v0.1.0|2014-04-28| Initial Version|

# License 

(The MIT License)
