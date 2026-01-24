var iCWP_WPSF_Recaptcha = new function () {

		var bInvisible = false;

		this.setupForm = function ( oForm ) {

			var recaptchaContainer = oForm.querySelector( '.icwpg-recaptcha' );

			if ( recaptchaContainer !== null ) {

				var recaptchaContainerSpec = grecaptcha.render(
					recaptchaContainer,
					{
						'sitekey': '6LdF9ZkUAAAAADcfHIWIxsdf7n_U-mE9XeUp5bfZ',
						'size': '',
						'theme': 'light',
						'badge': 'bottomright',
						'callback': function ( reCaptchaToken ) {
													},
						'expired-callback': function () {
							grecaptcha.reset( recaptchaContainerSpec );
						}
					}
				);

							}
		};

		this.initialise = function () {
			if ( grecaptcha !== undefined ) {
				for ( var i = 0; i < document.forms.length; i++ ) {
					this.setupForm( document.forms[ i ] );
				}
				/**
				 * For some crazy reason invisible recaptcha badge attaches to div with this class.
				 * Fortunately removing the class at this stage doesn't interrupt normal behaviour.
				 */
				if ( bInvisible ) {
					document.querySelector( 'form' ).classList.remove( 'shake' );
				}
			}
		};
	}();

	var onLoadIcwpRecaptchaCallback = function () {
		iCWP_WPSF_Recaptcha.initialise();
	};