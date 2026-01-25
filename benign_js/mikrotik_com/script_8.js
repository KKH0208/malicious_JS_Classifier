/* 元のURL: https://mikrotik.com */

		// a quick fix for Foundation tooltip performance issues
		// @see https://github.com/foundation/foundation-sites/issues/6944#issuecomment-154242356
		// @see https://github.com/foundation/foundation-sites/issues/6092#issuecomment-73912088
		var isInitted = false;
		Foundation.libs.tooltip.events = function (instance) {
			var self = this,
				S = self.S;

			self.create(this.S(instance));

			if (isInitted) {
				return;
			}
			isInitted = true;

			function _startShow(elt, $this, immediate) {
				if (elt.timer) {
					return;
				}

				if (immediate) {
					elt.timer = null;
					self.showTip($this);
				} else {
					elt.timer = setTimeout(function () {
						elt.timer = null;
						self.showTip($this);
					}.bind(elt), self.settings.hover_delay);
				}
			}

			function _startHide(elt, $this) {
				if (elt.timer) {
					clearTimeout(elt.timer);
					elt.timer = null;
				}

				self.hide($this);
			}

			$(this.scope)
				.off('.tooltip')
				.on('mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip',
					'[' + this.attr_name() + ']', function (e) {
						var $this = S(this),
							settings = $.extend({}, self.settings, self.data_options($this)),
							is_touch = false;

						if (Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type) && S(e.target).is('a')) {
							return false;
						}

						if (/mouse/i.test(e.type) && self.ie_touch(e)) {
							return false;
						}

						if ($this.hasClass('open')) {
							if (Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type)) {
								e.preventDefault();
							}
							self.hide($this);
						} else {
							if (settings.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type)) {
								return;
							} else if (!settings.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type)) {
								e.preventDefault();
								S(settings.tooltip_class + '.open').hide();
								is_touch = true;
								// close other open tooltips on touch
								if ($('.open[' + self.attr_name() + ']').length > 0) {
									var prevOpen = S($('.open[' + self.attr_name() + ']')[0]);
									self.hide(prevOpen);
								}
							}

							if (/enter|over/i.test(e.type)) {
								_startShow(this, $this);

							} else if (e.type === 'mouseout' || e.type === 'mouseleave') {
								_startHide(this, $this);
							} else {
								_startShow(this, $this, true);
							}
						}
					})
				.on('mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip', '[' + this.attr_name() + '].open', function (e) {
					if (/mouse/i.test(e.type) && self.ie_touch(e)) {
						return false;
					}

					if ($(this).data('tooltip-open-event-type') == 'touch' && e.type == 'mouseleave') {
						return;
					} else if ($(this).data('tooltip-open-event-type') == 'mouse' && /MSPointerDown|touchstart/i.test(e.type)) {
						self.convert_to_touch($(this));
					} else {
						_startHide(this, $(this));
					}
				})
				.on('DOMNodeRemoved', '[' + this.attr_name() + ']:not(a)', function (e) {
					_startHide(this, S(this));
				});
		};
	

