var cli = require('..');
var assert = require('chai').assert;

describe('cli', function () {
  process.argv = ['node', 'some-module',
    'add-one',
    'name',
    'John Doe',
    '--password=abc123',
    '-abc'
  ];

  describe('functions without params', function () {
    var x = 0, y = '';

    cli({
      "add-one": function () { x++; },
      "a": function () { y += 'a'; },
      "b": function () { y += 'b'; },
      "c": function () { y += 'c'; },

      // dont do these ones
      "dont-do-this": function () { x++; },
      "d": function () { y += 'd'; }
    });

    it('should execute the correct functions', function () {
      assert.equal(x, 1);
      assert.equal(y, 'abc');
    });
  });

  describe('functions with params', function () {
    var inputName, inputPass;

    cli({
      "name": function (name) {
        inputName = name;
      },
      "password": function (pass) {
        inputPass = pass;
      }
    });

    it('should pass the params in', function () {
      assert.equal(inputName, 'John Doe');
      assert.equal(inputPass, 'abc123');
    });
  });
});
