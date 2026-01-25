/* 元のURL: https://harvard.edu */

			var modernTribe = window.modern_tribe || {};
			modernTribe.events = {
				trigger: function (event_type, event_data, el) {
					var event;
					try {
						event = new CustomEvent(event_type, {detail: event_data});
					} catch (e) {
						event = document.createEvent('CustomEvent');
						event.initCustomEvent(event_type, true, true, event_data);
					}
					el.dispatchEvent(event);
				}
			};
			var coreCallback = function () {
				if (document.readyState == 'complete') {
					modernTribe.events.trigger('google_custom_search_loaded', null, document);
				} else {
					google.setOnLoadCallback(function () {
						modernTribe.events.trigger('google_custom_search_loaded', null, document);
					}, true);
				}
			};
			var resultsRenderedCallback = function () {
				if (document.readyState == 'complete') {
					modernTribe.events.trigger('google_custom_search_results_rendered', null, document);
				} else {
					google.setOnLoadCallback(function () {
						modernTribe.events.trigger('google_custom_search_results_rendered', null, document);
					}, true);
				}
			};
			window.__gcse = {
				callback: coreCallback,
				searchCallbacks: {
					web: {
						rendered: 'resultsRenderedCallback',
					},
				}
			};
			(function () {
				var cx = '006776768860476326824:n4rl30fjc-e';
				var gcse = document.createElement('script');
				gcse.type = 'text/javascript';
				gcse.async = true;
				gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//cse.google.com/cse.js?cx=' + cx;
				var s = document.getElementsByTagName('script')[0];
				s.parentNode.insertBefore(gcse, s);
			})();
		

