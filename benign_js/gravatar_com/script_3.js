/* 元のURL: https://gravatar.com */

document.addEventListener( 'DOMContentLoaded', () => {
	if ( window.gravatar && window.gravatar.recordTrackEvent ) {
		window.gravatar.recordTrackEvent( 'gravatar_page_view', { path: '/' } );
	}
} );


