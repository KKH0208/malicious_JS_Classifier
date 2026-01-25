/* 元のURL: https://wordpress.org */

( function(){
	try {
		if ( ! document.getElementById( 'lang-guess-wrap' ) ) {
			return;
		}
		fetch( '/lang-guess/lang-guess-ajax.php?uri=%2F' ).then( function( response ) {
			return response.text();
		}).then( function( body ) {
			document.getElementById( 'lang-guess-wrap' ).innerHTML = body;
		});
	} catch (e) {}
} )();
//# sourceURL=lang-guess-js-after


