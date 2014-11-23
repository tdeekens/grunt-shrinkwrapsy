# grunt-shrinkwrapsy

> Grunt task for shrink wrapping your project's dependencies via npm shrinkwrap

[![Build Status](https://travis-ci.org/tdeekens/grunt-shrinkwrapsy.svg?branch=master)](https://travis-ci.org/tdeekens/grunt-shrinkwrapsy)

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-shrinkwrapsy --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-shrinkwrapsy');
```

## The "shrinkwrap" task

### Overview
In your project's Gruntfile, the `shrinkwrapsy` task is available to use.

You can run `grunt shrinkwrapsy` standalone
Or add it to an existing task: `grunt.registerTask('test', ['clean', 'shrinkwrapsy']);`

## Release History
0.0.1 - First release.
