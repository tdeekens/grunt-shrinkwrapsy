/* globals module */
module.exports = {
  shrinkwrap: {
    command: [
      'npm prune',
      'npm shrinkwrap',
      'rm test/fixtures/npm-shrinkwrap.json',
      'mv npm-shrinkwrap.json test/fixtures/npm-shrinkwrap.json'
      ].join('&&')
  },
};
