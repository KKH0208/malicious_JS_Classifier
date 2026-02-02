/* 元のURL: https://gravatar.com */

		window._deferredTracksEvents = window._deferredTracksEvents || [];

		window.gravatar = window.gravatar || {};
		
		window._deferredTracksEvents.push(
			[
				'storeContext',
				{
					'blog_id': '0',
					'blog_tz': '0',
					'user_lang': navigator?.language,
					'blog_lang': 'en',
					'user_id': '0',
					'is_new_user': String( document.querySelector( 'body' ).classList.contains( 'gravatar-is-new-user' ) ),
				}
			]
		);

		window.gravatar.recordTrackEvent = function ( name, properties = {} ) {
			window._deferredTracksEvents.push( [ 'recordEvent', name, properties ] );
		};
	

