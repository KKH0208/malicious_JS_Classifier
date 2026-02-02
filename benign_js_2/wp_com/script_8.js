/* 元のURL: https://wp.com */

( function() {
	const newUrl = "https:\/\/wordpress.com\/setup\/onboarding\/?ref=logged-out-homepage-lp&intent=default_websitebuilder";

	function updateSignupLinks() {
		const links = document.querySelectorAll( '.x-nav--sign-up a' );

		links.forEach( function( link ) {
			link.href = newUrl;
		} );
	}

	// Run as early as possible
	if ( document.readyState === 'loading' ) {
		document.addEventListener( 'DOMContentLoaded', updateSignupLinks );
	} else {
		updateSignupLinks();
	}
} )();


