/* 元のURL: https://steampowered.com */

	var g_AccountID = 0;
	var g_Languages = ["english"];
	var g_sessionID = "330b68263fcaa547310d571f";
	var g_ServerTime = 1761684064;
	var g_bUseNewCartAPI = true;

	$J( InitMiniprofileHovers( 'https%3A%2F%2Fstore.steampowered.com%2F' ) );

	
	if ( typeof GStoreItemData != 'undefined' )
	{
		GStoreItemData.AddNavParams({
			__page_default: "1_4_4_",
			__page_default_obj: {"domain":"store.steampowered.com","controller":"default","method":"default","submethod":"","feature":null,"depth":null,"countrycode":"JP","webkey":null,"is_client":false,"curator_data":null,"is_likely_bot":true,"is_utm":null},
			__originating_obj: {"domain":"store.steampowered.com","controller":"direct-navigation","method":"","submethod":"","feature":"","depth":0,"countrycode":"","webkey":null,"is_client":false,"curator_data":null,"is_likely_bot":true,"is_utm":false},
			storemenu_recommendedtags: "1_4_4__17"		});
	}

	if ( typeof GDynamicStore != 'undefined' )
	{
		GDynamicStore.Init(0, false, "", {"primary_language":null,"secondary_languages":null,"platform_windows":null,"platform_mac":null,"platform_linux":null,"timestamp_updated":null,"hide_store_broadcast":null,"review_score_preference":null,"timestamp_content_descriptor_preferences_updated":null,"provide_deck_feedback":null,"additional_languages":null}, 'JP',
			{"bNoDefaultDescriptors":true});
		GStoreItemData.SetCurrencyFormatter(function( nValueInCents, bWholeUnitsOnly ) { var fmt = function( nValueInCents, bWholeUnitsOnly ) {	var format = v_numberformat( nValueInCents / 100, bWholeUnitsOnly ? 0 : 2, ".", ",");format = format.replace( ".00", '' ); return format; };var strNegativeSymbol = '';return strNegativeSymbol + "\u00a5 " + fmt( nValueInCents, bWholeUnitsOnly );});
		GStoreItemData.SetCurrencyMinPriceIncrement(100);
	}


