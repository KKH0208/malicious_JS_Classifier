(function($) {
		window.cookie_location = 'off';
		// this cookie_content should already be pre-encoded from CookieSettingView.js
		window.cookie_content = 'By using this site you consent to the use of cookies. Cookies can be managed in your browser or device settings.' || _W.stl('templates.publish.virtual-includes.footerCode_1');
		window.cookie_policy_key = '444397986939759792_cookie_policy';
		window.cookie_content_hash = 'e67c816bde33ee2f23878d228c1c751d80249811';

		if (!_W.getCookie(window.cookie_policy_key) || _W.getCookie(window.cookie_policy_key) !== window.cookie_content_hash){
			if (window.cookie_location === 'top' || window.cookie_location === 'bottom'){
				$('#eu-cookie-content').text(decodeURIComponent(window.cookie_content));
				(window.cookie_location === 'top') ? animateFromTop() : animateFromBottom();
				$('#eu-cookie').show();
			}
		}

		$('#eu-cookie-close').click(function(){
			_W.setCookie(window.cookie_policy_key, window.cookie_content_hash, 100000);
			$('#eu-cookie').hide();
		});

		function animateFromTop(){
			$('#eu-cookie').css({
				'top': '0px',
				'animation': 'reveal-top 1 2s'
			});
		}

		function animateFromBottom(){
			$('#eu-cookie').css({
				'bottom': '0px',
				'animation': 'reveal-bottom 1 2s'
			});
		}
	})(window._W && _W.jQuery);