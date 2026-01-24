setTimeout(function() {
					$('.com-order-select').change(function() {
						var elem = $(this);
						var oldValue = ( /0wc3stylecomOrder=(asc|desc)/.exec(document.cookie) || {} )[1] || '';
						var newValue = elem.val();
						console.log(oldValue, newValue);
						if (newValue == oldValue) {
							return;
						}
						document.cookie = '0wc3stylecomOrder=' + encodeURIComponent(newValue) + '; path=/; expires=' + (new Date((new Date).getTime() + 1000*60*60*24*365)).toGMTString();
						window.console && console.info && console.info('comment order changed: "' + oldValue + '" >> "' + newValue + '"');
						// elem.parents('.com-order-wrap').eq(0).find('.com-order-apply').fadeIn().removeClass('com-order-apply-hidden').addClass('com-order-apply-visible');
						newValue = newValue || 'default';
						location.search = location.search
							? /[?&]comments_order=([^&]*)/.test(location.search)
								? location.search.replace(/comments_order=([^&]*)/, 'comments_order=' + newValue)
								: location.search + '&comments_order=' + newValue
							: '?comments_order=' + newValue;
					});
				}, 100);