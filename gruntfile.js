'use strict';

module.exports = function(grunt) {

  grunt.initConfig({

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
    }





  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('build', ['karma', 'concat', 'babel']);

};
