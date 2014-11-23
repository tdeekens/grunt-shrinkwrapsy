/*
* grunt-shrinkwrapsy
* https://github.com/tdeekens/grunt-shrinkwrapsy
*
* Copyright (c) 2014 tdeekens
* Licensed under the MIT license.
*/

'use strict';

var shelljs = require('shelljs');

module.exports = function(grunt) {
  grunt.registerTask('shrinkwrapsy', 'Generate an npm-shrinkwrap.', function() {
    var
      options = this.options({
        prune: true,
        afterHooks: [],
        beforeHooks: [],
        devDependencies: true
      }),
      shrinkwrapCommand;

    options.beforeHooks.forEach(function(command) {
      grunt.log.ok(['Running specified before-hook-command: ' + command + ' .']);
      shelljs.exec(command);
    });

    if (options.prune === true) {
      grunt.log.ok(['Pruning npm dependencies.']);

      shelljs.exec('npm prune');
    }

    grunt.log.ok(['Generating npm-shrinkwrap.']);

    shrinkwrapCommand = 'npm shrinkwrap';
    shrinkwrapCommand += (options.devDependencies === true) ? ' --dev' : '';

    shelljs.exec(shrinkwrapCommand);

    options.afterHooks.forEach(function(command) {
      grunt.log.ok(['Running specified after-hook-command: ' + command + ' .']);
      shelljs.exec(command);
    });
  });
};
