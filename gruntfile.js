'use strict';

module.exports = function(grunt) {

  grunt.initConfig({

    clean: ['build/'],

    jshint: {
      appjs: {
        options: {
          jshintrc: '.jshintrc'
        },
        files: {
          src: ['src/**/*.js']
        }
      }
    },

    karma: {

      all: {

        options: {
          frameworks: ['mocha', 'chai'],
          browsers: ['Chrome'],
          files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'src/js/inventory.module.js',
            'src/js/**/*.js',
            'tests/**/*.spec.js'
          ],
          singleRun: true,
          preprocessors: {
            'src/js/**/*.js': ['coverage']
          },
          reporters: ['dots', 'coverage'],
          coverageReporter: {
            type: 'text-summary'
          }
        }
      }
    },

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'build/styles.css' : 'src/sass/main.scss'
        }
      }
    },

    babel: {
      all: {
        options: {
          sourceMap: true,
          presets: ['es2015']
        },
        files: {
          'build/js/app.js' : 'build/js/app.js'
        }
      }
    },

    concat: {
      dist: {
        src: ['src/js/inventory.module.js', 'src/js/**/*.js'],
        dest: 'build/js/app.js'
      }
    },

    copy: {
      html: {
        files: [
          {
            cwd: 'src/',
            src: ['*.html'],
            dest: 'build/',
            expand: true
          }
        ]
      },
      img: {
        files: [
          {
            cwd: 'src',
            src: ['img/*.png'],
            dest: 'build/img/',
            expand: true
          }
        ]
      }
    }

  });

  // require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('build', ['jshint', 'karma', 'clean', 'concat', 'babel', 'copy', 'sass']);

};
