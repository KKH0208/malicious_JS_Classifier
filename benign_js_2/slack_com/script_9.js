/* 元のURL: https://slack.com */

window.dataLayer = window.dataLayer || [];

function afterConsentScripts() {
	window.TD.analytics.doPush();

	const bottomBannerEl = document.querySelector('.c-announcement-banner-bottom');
	if (bottomBannerEl !== null) {
		bottomBannerEl.classList.remove('c-announcement-banner-bottom-invisible');
	}
}



let initOneTrustReady = false;
let intOneTrustLoaded = false;
function OptanonWrapper() {
	
	if (!intOneTrustLoaded) {
		document.dispatchEvent(new CustomEvent('OneTrustLoaded'));
		intOneTrustLoaded = true;
	}
	window.dataLayer.push({'event': 'OneTrustReady'});
	if (!initOneTrustReady) {
		document.dispatchEvent(new CustomEvent('OneTrustReady'));
		loadGTM();
		initOneTrustReady = true;
	}

	if (!Optanon.GetDomainData().ShowAlertNotice || false) {
		afterConsentScripts();
	} else {
		document.querySelector('#onetrust-accept-btn-handler').focus()
	}
	Optanon.OnConsentChanged(function() {
		afterConsentScripts();
	});

}

