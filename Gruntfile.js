module.exports = function(grunt) {

  var marked = require("marked");
  var fs = require("fs");
  var _ = grunt.util._;
  var pkg = require("./package");

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-connect");

  grunt.initConfig({
    watch: {
      development: {
        files: [
          "templates/**/*.*",
          "content/**/*.*",
          "styles/**/*.*"
        ],

        tasks: ["makeSlides"],

        options: {
          livereload: true
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 8080,
          base: "."
        }
      }
    }
  });
  
  // This compiles the slides from Markdown to HTML and injects them into the
  // template.
  grunt.registerTask("makeSlides", function() {
    var template = _.template(grunt.file.read("templates/deck.html"));
    var slides = require(__dirname + "/content/order");

    // Map all the slides to their rendered content.
    slides = slides.map(function(slidePath) {
      return marked(grunt.file.read("content/slides/" + slidePath + ".md"));
    });

    // Augment the main slide deck entry.
    grunt.file.write("index.html", template({ slides: slides, pkg: pkg }));
  });

  // Generate fresh slides and run the watch task for changes.
  grunt.registerTask("default", ["makeSlides", "connect", "watch"]);

};
