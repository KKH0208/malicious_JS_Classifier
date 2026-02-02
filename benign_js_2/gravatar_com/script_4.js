/* 元のURL: https://gravatar.com */

document.addEventListener( 'DOMContentLoaded', () => {
	if ( ! window.gravatar || ! window.gravatar.recordTrackEvent ) {
		return;
	}

	const cookies = document.cookie.split( ';' );

	for ( let i = 0; i < cookies.length; i++ ) {
		const cookie = cookies[i].trim();

		if ( cookie.indexOf( 'tracks-email-verify' ) === 0 ) {
			document.cookie = 'tracks-email-verify=; Path=/; Domain=.gravatar.com; Expires=Thu, 01 Jan 1970 00:00:01 GMT';

			window.gravatar.recordTrackEvent( 'gravatar_email_verified' );
		}
	}
} );


