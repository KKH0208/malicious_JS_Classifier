/* 元のURL: https://wp.com */


	(function(window) {
		window.googleOneTapAuth = {

		/**
		 * Initializes the module.
		 *
		 * @param {Object} wpcom The wpcom.js module.
		 */
		init: function( wpcom ) {
			wpcom.add_scripts( [ 'https://accounts.google.com/gsi/client' ] );

			window.addEventListener( 'load', function() {
				window.google.accounts.id.initialize( {
					client_id: window.homepage.google_auth_client_id,
					callback: googleOneTapAuth.handleCredentialResponse,
					prompt_parent_id: 'landpack-google-one-tap-auth-container',
				} );
				window.google.accounts.id.prompt();
			} );
		},

		/**
		 * Handles the credential response from Google One Tap.
		 * This function is called when the user successfully signs in with Google.
		 *
		 * @param {Object} response The response object containing the credential (authentication code).
		 */
		handleCredentialResponse: function( response ) {
			if ( ! response || ! response.credential ) {
				window._tkq.push( [ 'recordEvent', 'wpcom_google_one_tap_auth_error', {
					error_message: 'No credential received from Google One Tap.'
				} ] );
				return;
			}

			window._tkq.push( [ 'recordEvent', 'wpcom_google_one_tap_auth_start' ] );

			googleOneTapAuth.redirectToLoginOrSignup( response.credential );
		},

		/**
		 * Redirects the user to the login or signup page based on if they are already registered.
		 *
		 * @param authCode The authentication code received from Google One Tap.
		 */
		redirectToLoginOrSignup: function( authCode ) {
			var authNonce;

			googleOneTapAuth.fetchAuthNonce()
				.then( function( response ) {
					authNonce = response.nonce;

					return googleOneTapAuth.exchangeSocialAuth( authCode, authNonce );
				} )
				.then( function( authData ) {
					var userExists = authData && authData.wpcom_user_id;
					var query = new URLSearchParams( {
						oneTapAuth: true,
						service: 'google',
						code: authCode,
						state: authNonce
					} ).toString();

					if ( userExists ) {
						// If the user is registered, redirect to the login page.
						window.location.href = '/log-in?' + query;
					} else {
						// Otherwise, redirect to the signup page.
						window.location.href = '/setup/onboarding?' + query;
					}
				} ).catch( function( error ) {
					window._tkq.push( [ 'recordEvent', 'wpcom_google_one_tap_auth_error', {
						error_message: error.message
					} ] );

					// Redirect to the login page and show an error notice.
					window.location.href = '/log-in?error=google_one_tap_auth';
				} );
		},

		/**
		 * Exchanges the social auth code for an authentication token.
		 * This is done to verify the user's identity and obtain an ID token.
		 *
		 * @param {string} authCode The authentication code received from Google One Tap.
		 * @param {string} authNonce The authentication nonce.
		 * @returns {Promise<Object>} A promise that resolves to the authentication data.
		 */
		exchangeSocialAuth: function( authCode, authNonce ) {
			return window.fetch( '/wp-login.php?action=exchange-social-auth-code', {
				method: 'POST',
				body: new URLSearchParams( {
					service: 'google',
					auth_code: authCode,
					state: authNonce,
					client_id: window.homepage.lohp_client_id,
				} )
			} ).then( function( response ) {
				return response.json();
			} ).then( function( response ) {
				if ( ! response.success ) {
					throw new Error( 'Failed to exchange auth code.' );
				}

				return response.data;
			} );
		},

		/**
		 * Fetches an authentication nonce from the WordPress.com API.
		 *
		 * @returns {Promise<Object>} A promise that resolves to the nonce data.
		 */
		fetchAuthNonce: function() {
			return window.fetch( 'https://public-api.wordpress.com/wpcom/v2/generate-authorization-nonce', {
				credentials: 'include'
			} ).then( function( response ) {
				return response.json();
			} ).then( function( response ) {
				if ( ! response.nonce ) {
					throw new Error( 'Failed to fetch the auth nonce.' );
				}

				return response;
			} );
		}
	};

	})(window);


