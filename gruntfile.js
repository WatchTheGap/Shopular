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
          singleRun: true
        }
      }
    }





  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.registerTask('build', ['karma']);

};
