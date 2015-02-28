"use strict";
var path = require("path");
var FileSet = require("file-set");
var a = require("array-tools");

/**
@example
{{fileset "*.txt" "*.js" "files"}}
*/
exports.fileset = function fileset(){
    var args = a.arrayify(arguments).slice(0, -1);
    var prop = args.pop();
    if (Array.isArray(args[0])){
        return FileSet(args[0])[prop];
    } else {
        return FileSet(args)[prop];
    }
};
