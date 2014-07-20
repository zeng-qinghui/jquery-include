(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#include', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-collection');
      this.elems.include();
    }
  });

  test('one-level include', function() {
    expect(1);
    strictEqual(this.elems.find('h1').length, 2, 'should be included');
  });

  test('two-level include', function() {
    expect(1);
    strictEqual(this.elems.find('h2').length, 2, 'should be included');
  });

  module('jQuery.include',{
      setup: function(){
          $.include();
      }
  });

  test('one-level include', function() {
    expect(1);
    strictEqual($('#qunit-static h1').length, 2, 'should be included');
  });

  test('two-level include', function() {
      expect(1);
      strictEqual($('#qunit-static h2').length, 2, 'should be included');
  });

}(jQuery));
