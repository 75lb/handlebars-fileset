var path = require("path"),
    mfs = require("more-fs");

module.exports = function(handlebars){
    handlebars.registerHelper("fileset", function(globPatterns){
        return new mfs.FileSet(globPatterns);
    });
};
