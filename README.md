# grunt-shrinkwrapsy

> Grunt task for shrink wrapping your project's dependencies via npm shrinkwrap

[![Build Status](https://travis-ci.org/tdeekens/grunt-shrinkwrapsy.svg?branch=master)](https://travis-ci.org/tdeekens/grunt-shrinkwrapsy)
[![Build Status](https://drone.io/github.com/tdeekens/grunt-shrinkwrapsy/status.png)](https://drone.io/github.com/tdeekens/grunt-shrinkwrapsy/latest)
[![Circle CI](https://circleci.com/gh/tdeekens/grunt-shrinkwrapsy/tree/master.svg?style=svg)](https://circleci.com/gh/tdeekens/grunt-shrinkwrapsy/tree/master)

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

## The "shrinkwrapsy" task

### Overview
In your project's Gruntfile, the `shrinkwrapsy` task is available to use.

You can run `grunt shrinkwrapsy` standalone
Or add it to an existing task: `grunt.registerTask('test', ['clean', 'shrinkwrapsy']);`

### Options
The `shrinkwrapsy`-task currently has seven options.

```javascript
{
  prune: true,
  afterHooks: [],
  beforeHooks: [],
  devDependencies: true,
  withoutDependencies: [],
  withoutDevDependencies: [],
  withoutPeerDependencies: []
}
```

#### prune
If set to `true` prune npm's dependencies before generating a shrinkwrap.

#### beforeHooks
A little array of shell commands which will be ran through `shelljs` before the any other operation is ran. Maybe useful for cleaning up some files or even removing some of npm's dependencies.

#### afterHooks
Kinda the same as `beforeHooks` only that it - wait for it - runs after all commands have finished running.

#### devDependencies
Another boolean-flag indicating if the shrinkwrap should include npm's development dependencies. It transforms into the `--dev`-flag.

#### withoutDependencies
An `[]` of dependencies names which shall be removed from the generated `npm-shrinkwrap.json`. Might sound a bit woozy but is applicable in cases you e.g. want to symlink forked repositories.

#### withoutDevDependencies
Same as the above only for the `devDependencies` of the `npm-shrinkwrap.json`.

#### withoutPeerDependencies
Again, same as the above only for the `peerDependencies` of the `npm-shrinkwrap.json`.

## Release History
- 0.0.1 - First release.
- 0.0.2 - Adds support for removing dependencies.
- 0.0.3 - Makes removing dependencies more failsave.
- 0.1.0 - Release of first minor, proven stable.
