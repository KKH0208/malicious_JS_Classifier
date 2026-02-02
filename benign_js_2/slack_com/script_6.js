/* 元のURL: https://slack.com */

window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}

gtag('consent', "default", {"ad_storage":"granted","ad_user_data":"granted","ad_personalization":"granted","personalization_storage":"granted","analytics_storage":"granted","functionality_storage":"granted","security_storage":"granted","wait_for_update":1000});

function loadGTM() {
	window.dataLayer.push({
		'gtm.start': Date.now(),
		'event': 'gtm.js',
		'AnalyticsActiveGroups': ",1,2,3,4,",
		'policy_ga_only': false,
	});
	var firstScript = document.getElementsByTagName('script')[0];
	var thisScript = document.createElement('script');
	thisScript.async = true;
	thisScript.src = '//www.googletagmanager.com/gtm.js?id=GTM-KH2LPK';
	firstScript.parentNode.insertBefore(thisScript, firstScript);
}




