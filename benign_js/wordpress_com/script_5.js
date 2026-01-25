/* 元のURL: https://wordpress.com */

	// Try to remain compatible with older browsers
	( function() {
		try {
			var cookies = document.cookie.split( ';' );
			// Don't set if already set
			for ( var i = 0; i < cookies.length; i++ ) {
				if ( cookies[ i ].trim().indexOf( 'tk_ai=' ) == 0 ) {
					return;
				}
			}

			var randomBytes = [];
			if ( window.crypto && window.crypto.getRandomValues ) {
				randomBytes = new Uint8Array( 18 );
				window.crypto.getRandomValues( randomBytes );
			} else {
				for ( var i = 0; i < 18; i++ ) {
					randomBytes[ i ] = Math.floor( Math.random() * 256 );
				}
			}

			var anonId = btoa( String.fromCharCode.apply( String, randomBytes ) );
			var date = new Date();
			date.setFullYear( date.getFullYear() + 5 );
			document.cookie =
				'tk_ai=' + encodeURIComponent( anonId )
				+ '; domain=.wordpress.com; path=/; expires=' + date.toUTCString();
		} catch ( e ) {
			return;
		}
	} )();
	

