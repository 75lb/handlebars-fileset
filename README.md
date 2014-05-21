[![view on npm](http://img.shields.io/npm/v/handlebars-fileset.svg)](https://www.npmjs.org/package/handlebars-fileset)
![npm module downloads per month](http://img.shields.io/npm/dm/handlebars-fileset.svg)
[![Dependency Status](https://david-dm.org/75lb/handlebars-fileset.svg)](https://david-dm.org/75lb/handlebars-fileset)

handlebars-fileset
===============

##Install
```sh
$ npm install handlebars-fileset
```

##Usage
```js
var handlebars = require("handlebars");
var handlebarsFileset = require("handlebars-fileset");

/* this will register the handlebars-fileset helpers on your handlebars instance */
handlebarsFileset(handlebars);
```

###Examples
the template
```
Filename: {{path-basename "parsnip.veg" ".veg"}}.txt
```
returns
```
Filename: parsnip.txt
```
