/* 元のURL: https://harvard.edu */

			function is_ie() {
				var ua = window.navigator.userAgent; //Check the userAgent property of the window.navigator object
				var msie = ua.indexOf('MSIE '); // IE 10 or older
				var trident = ua.indexOf('Trident/'); //IE 11

				return (msie > 0 || trident > 0);
			}

			function not_excluded_page() {
				return (window.location.href.indexOf("/unsupported-browser/") === - 1 && document.title.toLowerCase().indexOf('page not found') === - 1);
			}

			if (is_ie() && not_excluded_page()) {
				window.location = location.protocol + '//' + location.host + '/unsupported-browser/';
			}
		

