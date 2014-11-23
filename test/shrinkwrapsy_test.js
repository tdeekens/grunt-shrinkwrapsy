var grunt = require('grunt');
var fs = require('fs');

exports.shrinkwrapsy = {
  setUp: function(done) {
    done();
  },
  tehtruth: function(test) {
    'use strict';

    test.expect(1);

    test.ok(true, "this assertion should pass");

    test.done();
  }
};
