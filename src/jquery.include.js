/*
 * include
 * https://github.com/zengohm/jquery-include
 *
 * Copyright (c) 2014 zengohm
 * Licensed under the MIT license.
 */

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function($) {
  var makePathName = function(base,path){
      base = arguments[0]?arguments[0]:location.pathname;
      path = arguments[1]?arguments[1]:'';
      if(path[0]==='/' || path.match(/^\w+\:\/\//)){
          return path;
      }else {
          return base.substr(0, base.lastIndexOf('/')) + '/' + path;
      }
  };
  // Collection method.
  $.fn.include = function() {
    return this.each(function() {
      // Do something awesome to each selected element.
      $(this).find('[jq-include]').not('[jq-include-ignore]').each(function(){
        var obj = $(this);
        var parentFrom = obj.parents('[jq-include]:first').attr('jq-include-from');
        if(!parentFrom){
            parentFrom = makePathName();
        }
        var url = makePathName(parentFrom,$(this).attr('jq-include'));
        obj.attr('jq-include-from',makePathName(url)).attr('jq-include-ignore',true);

        $(this).html($.ajax({'async':false,'method':'get','url':url}).responseText);
        $(this).include();
      });
    });
  };

  // Static method.
  $.include = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.include.options, options);
    // Return something awesome.
    return $('body').include();
  };

  // Static method default options.
  $.include.options = {
  };


}));