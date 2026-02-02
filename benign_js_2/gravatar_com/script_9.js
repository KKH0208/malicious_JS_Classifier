/* 元のURL: https://gravatar.com */

	window.a8cAnalyticsConfig = {"cookieBanner":{"skipBanner":false,"version":"2","cookieDomain":"gravatar.com","v2CookieName":"cb_eu","v2Text":"As an open source company, we take your privacy seriously and want to be as transparent as possible. So: We use cookies to collect some personal data from you (like your browsing data, IP addresses, and other unique identifiers). Some of these cookies we absolutely need in order to make things work, and others you can choose in order to optimize your experience while using our site and services.","v2OptionsText":"Your privacy is critically important to us. We and our partners use, store, and process your personal data to optimize: our <strong>website<\/strong> such as by improving security or conducting analytics, <strong>marketing activities<\/strong> to help deliver relevant marketing or content, and your <strong>user experience<\/strong> such as by remembering your account name, language settings, or cart information, where applicable. You can customize your cookie settings below. Learn more in our <a href=\"https:\/\/automattic.com\/privacy\/\" target=\"_blank\">Privacy Policy<\/a> and <a href=\"https:\/\/automattic.com\/cookies\/\" target=\"_blank\">Cookie Policy<\/a>.","v2EssentialOptionHeading":"Required","v2EssentialOptionText":"These cookies are essential for our websites and services to perform basic functions and are necessary for us to operate certain features. These include those required to allow registered users to authenticate and perform account-related functions, store preferences set by users such as account name, language, and location, and ensure our services are operating properly.","v2AnalyticsOptionHeading":"Analytics","v2AnalyticsOptionText":"These cookies allow us to optimize performance by collecting information on how users interact with our websites, including which pages are visited most, as well as other analytical data. We use these details to improve how our websites function and to understand how users interact with them. You can opt-out by logging into your account and changing your privacy settings at <a target=\"_blank\" href=\"https:\/\/wordpress.com\/me\/privacy\">https:\/\/wordpress.com\/me\/privacy<\/a>.","v2AdvertisingOptionHeading":"Advertising","v2AdvertisingOptionText":"These cookies are set by us and our advertising partners to provide you with relevant content and to understand that content\u2019s effectiveness. They may be used to collect information about your online activities over time and across different websites to predict your preferences and to display more relevant advertisements to you. These cookies also allow a profile to be built about you and your interests, and enable personalized ads to be shown to you based on your profile.","v2CustomizeButtonText":"Customize","v2AcceptAllButtonText":"Accept All","v2AcceptSelectionButtonText":"Accept Selection","v2EssentialsOnlyButtonText":"Decline Non-Essential Cookies"}};

	document.addEventListener( 'a8c-analytics:loaded', function() {
		var cb = window.a8cAnalytics.cb;
		var kit = window.a8cAnalytics.kit;

		if ( kit.doNotTrack() ) {
			return;
		}

		cb.addTracker(
			'analytics',
			true,
			function () {
				kit.loadGtag(
					'G-ZK2E2B4FHH',
					Object.assign(
						{
							anonymize_ip: true,
							transport_type: typeof navigator.sendBeacon === 'function' ? 'beacon' : 'xhr',
							optimize_id: '',
						},
						{}					)
				);
			}
		);
	} );


