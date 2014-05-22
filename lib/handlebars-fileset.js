var path = require("path"),
    mfs = require("more-fs"),
    w = require("wodge");

module.exports = function(handlebars){
    handlebars.registerHelper("fileset", function(){
        var args = w.arrayify(arguments);
        args.pop(); // discard handlebars injected arg
        var prop = args.pop();
        return new mfs.FileSet(args)[prop];
    });
};
