/*jslint node:true*/
"use strict";
module.exports = function(grunt) {
  grunt.initConfig({
    pkg : grunt.file.readJSON("package.json"), // this will parse and store package.json into 'pkg'
    uglify : {
      options : {
        banner : "/*! <%= pkg.name %> <%=  grunt.template.today('yyyy-mm-dd') %> */\n"
        //this will be added at the top of every file that's uglified by this plugin
      },
      build : {
        src : "src/<%= pkg.name %>.js",
        dest : "build/<%= pkg.name %>.min.js"
      }
    }
  });
  // Load the plugin that provides *uglify* task.
  grunt.loadNpmTasks("grunt-contrib-uglify");
  // Default task(s)
  grunt.registerTask("default", ["uglify"]);
};