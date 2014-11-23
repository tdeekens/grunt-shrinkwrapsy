var grunt = require('grunt');
var fs = require('fs');

exports.shrinkwrapsy = {
  setUp: function(done) {
    done();
  },
  compare_shrinkwraps: function(test) {
    test.expect(1);

    var expected = grunt.file.read('test/fixtures/npm-shrinkwrap.json');
    var actual = grunt.file.read('npm-shrinkwrap.json');

    test.equal(actual, expected, 'should have generated the same npm-shrinkwrap.json');

    test.done();
  }
};
