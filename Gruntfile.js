/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON("package.json"),
    banner: "// ========================= \n" +
      "// <%= pkg.title %> - <%= pkg.version %>\n" +
      "// ========================= \n" + 
      "// <%= grunt.template.today(\"yyyy-mm-dd\") %>\n" +
      "// http://erikroyall.github.com/<%= pkg.name %>/\n" +
      "// Copyright (c) 2013 Erik Royall\n" +
      "// Licensed under <%= pkg.license %> (see LICENSE) \n\n",
    // Task configuration.
    concat: {
      options: {
        banner: "<%= banner %>",
        stripBanners: true
      },
      dist: {
        src: [
          "src/start.js",
          "src/end.js"
          ],
        dest: "build/<%= pkg.name %>.js"
      }
    },
    uglify: {
      options: {
        banner: "<%= banner %>"
      },
      dist: {
        src: "<%= concat.dist.dest %>",
        dest: "build/<%= pkg.name %>.min.js"
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {}
      },
      gruntfile: {
        src: "Gruntfile.js"
      },
      hilo: {
        src: ["build/hilo.js"]
      }
    },
    jasmine: {
      options: {
        helpers: "build/<%= concat.dist.dest %>.js"
      },
      hilo: {
        src: "test/spec/**/*.spec.js"
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ["concat", "jshint", "jasmine", "uglify", "watch"]
      },
      hilo: {
        files: "<%= concat.dist.src %>",
        tasks: ["concat", "jshint", "jasmine", "uglify", "watch"]
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-jasmine");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-watch");

  // Default task.
  grunt.registerTask("default", ["concat", "jshint", "jasmine", "uglify", "watch"]);

};
