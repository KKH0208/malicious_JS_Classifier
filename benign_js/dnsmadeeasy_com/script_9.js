/* 元のURL: https://dnsmadeeasy.com */

// 'elementor/frontend/init' loads after 'load'.
window.addEventListener( 'elementor/frontend/init',function() {
	jQuery('body').addClass('initialized');
	//just a fallback in case
	setTimeout(function() {
		if(!jQuery('body').hasClass('initialized')){
			jQuery('body').addClass('initialized');
		}
		jQuery('body').addClass('loading_stopped');
	}, 5000);
});


