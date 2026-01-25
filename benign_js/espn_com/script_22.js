/* 元のURL: https://espn.com */

	var espn_ui = window.espn_ui || {};
	var espn = window.espn || {};
	espn_ui.staticRef = "https://a.espncdn.com/redesign/0.748.2";
	espn_ui.imgRef = "https://a.espncdn.com/redesign/assets/img/";
	espn_ui.insertRef = "https://a.espncdn.com";
	espn_ui.deviceType = "desktop";
	espn_ui.pageShell = false;
	espn_ui.pubKey =  "espn-en-frontpage-index" ;
	espn.api = {};
	espn_ui.webview = false;
	espn_ui.useNativeBridge = false;
	espn_ui.onefeed = true;
	espn_ui.abtests = {"kahuna":40,"kplus":41,"kminus":42,"auddev1":45,"auddev2":46,"auddevcontrol":47,"headlinetester":48,"control":52,"carousel":53,"followcarouselcontrol":54,"followcarouseltest":55,"followcarouselenabled":56,"adtestcontrol":57,"favesTest":58,"tierTest":59,"relatedVideosCDP":60,"relatedVideosATG":61,"stayOnHttps":62,"hideminifeed":63,"epluslogo":64,"everscroll":65,"taboola-5":70,"taboola-10":71,"taboola-15":72,"taboola-1x6mobile":73,"taboola-1x8mobile":74,"eplusmodulelinks":75,"eplusmoduledescriptor":76,"controlvariant":77,"personalizedvariant":78,"plethoravariant1":79,"plethoravariant2":80,"plethoravariant3":81,"plethoracontrol":82,"controllegalfooter":83,"whitelegalfooter":84,"graylegalfooter":85,"paragraphpaywalltext0":86,"paragraphpaywalltext1":87,"paywalltextcontrol":88,"paragraphpaywalltext3":89,"paywalltextoverride":90,"articleinlinefooter":91,"articlebottompopupfooter":92,"plethoravariant4":93,"plethoravariant5":94,"plethoravariant6":95,"plethoravariant7":96,"plethoracontrol2":97,"articleadslot":98,"articleadslotcontrol":99};
	espn_ui.isCurated = true;
	espn_ui.error = false;
	espn_ui.dcf   = false;

	function setIsCurated () {
		$('#news-feed').attr('data-curated', espn_ui.isCurated);
		$(document).trigger('checkIfShouldAutoUpdate');
		espn_ui.checkIfShouldAutoUpdate = true;
	}

	//this is also set on ajax page loads in js/helpers/page.js
	if (document.readyState == 'complete') {
		setIsCurated();
	} else {
		window.onload = setIsCurated;
	}

	var tcStatus = {"tcTwoLocked":false,"fantasyLocked":false,"tcLocked":false,"tcwLocked":false,"tcTwoOn":false,"tcwOn":false,"fantasyOn":false,"tcOn":false,"tcwTwoOn":false,"tcwTwoLocked":false};



