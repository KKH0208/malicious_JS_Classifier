jQuery.noConflict();

					jQuery(function () {
					jQuery("#scrolling_share_bar").stickySidebar({
					speed: 400,
					easing: "easeInOutBack"
		});
		});

				jQuery.noConflict();
				jQuery(document).ready(function($) {
				if($(window).width()>=(930)-20){
				$('#scrolling_share_bar').show();
	}else{
				$('#scrolling_share_bar').hide()
	}
				$(window).resize(function() {
				if($(window).width()>= (930)-20){
				$('#scrolling_share_bar').show()
	}else{
				$('#scrolling_share_bar').hide()
	}
	});
	});
window.addEvent('domready', function() {
			$$('.ja-k2filter-tip').each(function(el) {
				var title = el.get('title');
				if (title) {
					var parts = title.split('::', 2);
					el.store('tip:title', parts[0]);
					el.store('tip:text', parts[1]);
				}
			});
			var JTooltips = new Tips($$('.ja-k2filter-tip'), { maxTitleChars: 50, hideDelay: 1500, className: 'jak2-tooltip', fixed: true});
		});