var sampling_active = 0;
					var sampling_rate   = 100;
					var do_request = false;

					if ( !sampling_active ) {
						do_request = true;
					} else {
						var num = Math.floor(Math.random() * sampling_rate) + 1;
						do_request = ( 1 === num );
					}

					if ( do_request ) {

						/* Create XMLHttpRequest object and set variables */
						var xhr = ( window.XMLHttpRequest )
						  ? new XMLHttpRequest()
						  : new ActiveXObject( "Microsoft.XMLHTTP" ),
						url = 'https://www.papayamobile.com/academy/wp-admin/admin-ajax.php',
						params = 'action=update_views_ajax&token=b20830e5ea&wpp_id=2716';
						/* Set request method and target URL */
						xhr.open( "POST", url, true );
						/* Set request header */
						xhr.setRequestHeader( "Content-type", "application/x-www-form-urlencoded" );
						/* Hook into onreadystatechange */
						xhr.onreadystatechange = function() {
							if ( 4 === xhr.readyState && 200 === xhr.status ) {
								if ( window.console && window.console.log ) {
									window.console.log( xhr.responseText );
								}
							}
						};
						/* Send request */
						xhr.send( params );

					}