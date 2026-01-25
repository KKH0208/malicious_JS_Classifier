/* 元のURL: https://steamcommunity.com */

	g_sessionID = "c610406bfc4370c05f45f18e";
	g_steamID = false;
	g_strLanguage = "english";
	g_SNR = '2_4_DefaultAction_';
	g_bAllowAppImpressions = true;
		g_ContentDescriptorPreferences = [1,3,4];

	

	// We always want to have the timezone cookie set for PHP to use
	setTimezoneCookies();

	$J( function() {

		InitMiniprofileHovers(( 'https%3A%2F%2Fsteamcommunity.com' ));
		InitEmoticonHovers();
		ApplyAdultContentPreferences();
	});

	$J( function() { InitEconomyHovers( "https:\/\/community.akamai.steamstatic.com\/public\/css\/skin_1\/economy.css?v=AP9ewAqUX_nq&l=english&_cdn=akamai", "https:\/\/community.akamai.steamstatic.com\/public\/javascript\/economy_common.js?v=GYFVZLtXyAJC&l=english&_cdn=akamai", "https:\/\/community.akamai.steamstatic.com\/public\/javascript\/economy.js?v=JS5mlWhxK10V&l=english&_cdn=akamai" );});

