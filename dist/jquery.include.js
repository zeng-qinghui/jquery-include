/*! Include - v0.1.0 - 2014-07-20
* https://github.com/zengohm/jquery-include
* Copyright (c) 2014 zengohm; Licensed MIT */
(function($) {

  // Collection method.
  $.fn.include = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.include = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.include.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.include.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].include = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
