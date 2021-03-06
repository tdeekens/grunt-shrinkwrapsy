module.exports = function(grunt) {

  'use strict';

  require('time-grunt')(grunt);

  grunt.loadNpmTasks('grunt-shrinkwrapsy');

  var path = require('path');

  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'grunt', 'tasks'),
    init: true,
    data: {
      options: {
      },
      webpack: grunt.option('webpack') || '',
      paths: require(path.join(process.cwd(), 'grunt', 'options/') + 'paths.json')
    },
    loadGruntTasks: {
      config: require('./package.json'),
      scope: 'devDependencies'
    },
    postProcess: function() {}
  });

};
