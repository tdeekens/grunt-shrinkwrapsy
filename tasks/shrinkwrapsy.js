/*
* grunt-shrinkwrapsy
* https://github.com/tdeekens/grunt-shrinkwrapsy
*
* Copyright (c) 2014 tdeekens
* Licensed under the MIT license.
*/

'use strict';

var
  shelljs = require('shelljs'),
  fs = require('fs');

module.exports = function(grunt) {
  grunt.registerTask('shrinkwrapsy', 'Generate an npm-shrinkwrap.', function() {
    var
      options = this.options({
        prune: true,
        afterHooks: [],
        beforeHooks: [],
        devDependencies: true,
        withoutDependencies: [],
        withoutDevDependencies: [],
        withoutPeerDependencies: []
      }),
      shrinkwrapCommand,
      pwd = process.cwd(),
      shrinkwrap,
      modifiedDependencies;

    options.beforeHooks.forEach(function(command) {
      grunt.log.ok(['Running specified before-hook-command: ' + command + '.']);
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

    shrinkwrap = require(pwd + '/npm-shrinkwrap.json');

    options.withoutDependencies.forEach(function(dependency) {
      grunt.log.ok(['Removing specified dependency: ' + dependency + '.']);

      if (shrinkwrap.dependencies[dependency]) {
        delete shrinkwrap.dependencies[dependency];
      } else {
        grunt.log.error(['Could not find dependency in shinkwrap!']);
      }
    });

    options.withoutDevDependencies.forEach(function(dependency) {
      grunt.log.ok(['Removing specified devDependency: ' + dependency + '.']);

      if (shrinkwrap.devDependencies[dependency]) {
        delete shrinkwrap.devDependencies[dependency];
      } else {
        grunt.log.error(['Could not find dev dependency in shinkwrap!']);
      }
    });

    options.withoutPeerDependencies.forEach(function(dependency) {
      grunt.log.ok(['Removing specified peerDependency: ' + dependency + '.']);

      if (shrinkwrap.peerDependencies[dependency]) {
        delete shrinkwrap.peerDependencies[dependency];
      } else {
        grunt.log.error(['Could not find peer dependency in shinkwrap!']);
      }
    });

    modifiedDependencies = (
      options.withoutDependencies.length > 0 ||
      options.withoutDevDependencies.length > 0 ||
      options.withoutPeerDependencies.length > 0
    );

    if (modifiedDependencies) {
      fs.writeFileSync(pwd + '/npm-shrinkwrap.json', JSON.stringify(shrinkwrap, null, 2));
    }

    options.afterHooks.forEach(function(command) {
      grunt.log.ok(['Running specified after-hook-command: ' + command + '.']);
      shelljs.exec(command);
    });
  });
};
