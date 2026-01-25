/* 元のURL: https://wordpress.com */

				( function() {
					'use strict';

					var setupAnalytics = function() {
						window.a8cAnalyticsConfig = {"cookieBanner":{"version":"2","cssZIndex":50001,"skipBanner":false,"cookieDomain":"wordpress.com","v1CookieName":"sensitive_pixel_option","v2CookieName":"sensitive_pixel_options","v1Text":"Our websites and dashboards use cookies. By continuing, you agree to their use. <a target=\"_blank\" href=\"https:\/\/automattic.com\/cookies\/\">Learn more<\/a>, including how to control cookies.","v2Text":"As an open-source company, we take your privacy seriously and want to be as transparent as possible. We use cookies to collect some personal data from you, such as browsing data, IP addresses, and other unique identifiers. Some of these cookies we absolutely need in order to make things work, and others you can choose in order to optimize your experience while using our site and services.","v2OptionsText":"Your privacy is critically important to us. We and our partners use, store, and process your personal data to optimize: our <strong>website<\/strong> such as by improving security or conducting analytics, <strong>marketing activities<\/strong> to help deliver relevant marketing or content, and your <strong>user experience<\/strong> such as by remembering your account name, language settings, or cart information, where applicable. You can customize your cookie settings below. Learn more in our <a href=\"https:\/\/automattic.com\/privacy\/\" target=\"_blank\">Privacy Policy<\/a> and <a href=\"https:\/\/automattic.com\/cookies\/\" target=\"_blank\">Cookie Policy<\/a>.","v2EssentialOptionHeading":"Required","v2EssentialOptionText":"These cookies are essential for our websites and services to perform basic functions and are necessary for us to operate certain features, like allowing registered users to authenticate and perform account-related functions, storing preferences set by users (like account name, language, and location), and ensuring our services operate properly.","v2AnalyticsOptionHeading":"Analytics","v2AnalyticsOptionText":"These cookies allow us to optimize performance by collecting information on how users interact with our websites.","v2AdvertisingOptionHeading":"Advertising","v2AdvertisingOptionText":"We and our advertising partners set these cookies to provide you with relevant content and to understand that content\u2019s effectiveness.","v1ButtonText":"Got It!","v2CustomizeButtonText":"Customize","v2AcceptAllButtonText":"Accept all","v2AcceptSelectionButtonText":"Accept selection","v2EssentialsOnlyButtonText":"Decline non-essential cookies","hiddenConsents":[],"isLoggedIn":false},"doNotSellDialog":{"contactEmailAddress":"privacypolicyupdates@automattic.com"},"fireAnalyticsOptions":{"lpName":"logged-out-homepage","lpVariation":"","lpPersonalVariation":null}};
					};

					if ( window.defQueue && defQueue.isLOHP && defQueue.isLOHP === 2020 ) {
						defQueue.items.push( setupAnalytics );
					} else {
						setupAnalytics();
					}
				} )();
			

