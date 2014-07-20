# Include

The best jQuery plugin ever.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/zengohm/jquery-include/master/dist/include.min.js
[max]: https://raw.github.com/zengohm/jquery-include/master/dist/include.js

In your web page:

```html
<div jq-include="what-want-to-include-path"></div>
<script src="jquery.js"></script>
<script src="dist/include.min.js"></script>
<script>
jQuery(function($) {
  $.include(); // "awesome"
});
</script>
```

##Usage
Run in all document body
```javasript
$.include();
```

Run in selector
```javasript
$(selector).include();
```

## Authors
[Zeng Ohm](https://github.com/zengohm)