require("coffee-script/register")
var download = require("../src/download");
var upload = require("../src/upload");
var importFile = require("../src/importFile");

module.exports = function (grunt) {

  createTask = function(module) {
    return function() {
      options = this.options(this.data);
      callback = this.async();
      module(grunt, options, callback);
    };
  };

  grunt.registerMultiTask('smartling_download', 'downloads from smartling', createTask(download));
  grunt.registerMultiTask('smartling_upload', 'uploads to smartling', createTask(upload));
  grunt.registerMultiTask('smartling_import', 'imports to smartling', createTask(importFile));


};