combine-settings
================

Combines two settings files. The second file overwrites any common attributes
# Examples

```js
var options={common:'\path\to\common.json',specific:'\path\to\specific.json'};
var settings=require('combined-settings')(options);
```

The following example uses default values for the paths.
```js
var settings=require('combined-settings')();
```

This is useful if you have a set of micro services with the following structure;

```
microservices/
common-settings.json
serviceone/settings.json
servicetwo/settings.json
```

``common-settings.json`` is used for shared settings such as database connections. The specific settings of each given service will override any common attributes from ``common-settings.json``.
When using the defaults ``process.mainModule.filename`` is used to locate the files. This means that services can be started as follows
```
node serviceon\app.js
node servicetwo\app.js
```
and the default settings files will be correctly located

## Release History
|Version|Date|Description|
|:--:|:--:|:--|
|v0.1.0|2014-04-28| Initial Version|

# License 

(The MIT License)
