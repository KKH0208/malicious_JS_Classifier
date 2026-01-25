/* 元のURL: https://pubmatic.com */
// 外部JS: https://pubmatic.com/wp-content/themes/pubmatic/js/jquery.alignHeight.js?ver=1.0
/**
 * Plugin Name: alignHeight
 */
(function($) {
	
	// ALIGN HEIGHT CLASS DEFINITION
	// ======================

	var AlignHeight = function(element, options) {
		this.options = options;
		this.$body = $(document.body);
		this.$element = $(element);
		
		this.init();
	}
	
	AlignHeight.DEFAULTS = {
		target: ""
	}
	
	AlignHeight.prototype.init = function() {
		var height = 0;
		var $items = this.$element.find(this.options.target);
		$items.each(function() {
			var itemHeight = this.offsetHeight;
			height = itemHeight > height ? itemHeight : height;
		});

		if (height != 0)
			$items.outerHeight(height);
	}

	// ALIGN HEIGHT PLUGIN DEFINITION
	// =======================

	$.fn.alignHeight = function(option) {
		return this.each(function() {
			var $this = $(this);
			var options = $.extend({}, AlignHeight.DEFAULTS, $this.data(), typeof option == "object" && option);
	
			$this.data("mblm.commons.alignHeight", (data = new AlignHeight(this, options)));
		})
	};

	$.fn.alignHeight.Constructor = AlignHeight;

	// ALIGN HEIGHT DATA-API
	// ==============

	window.onload = function() {
		$items = $("[data-align-height]");
		$items.each(function() {
			$this = $(this);
			var targets = $this.attr("data-align-height").split(",");
			for (i = 0; i < targets.length; i++) {
				$this.alignHeight({target: targets[i] });
			}
		});
	};
	
}(jQuery));

