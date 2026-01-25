/* 元のURL: https://espn.com */

	(function () {
		var footerLinks, needConsent;

		try {
			footerLinks = JSON.parse('[{"copyright":"\u00a9 ESPN Enterprises, Inc. All rights reserved.","footer":[{"label":"Terms of Use","href":"https://disneytermsofuse.com/japanese/"},{"label":"Privacy Policy","href":"https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/"},{"label":"Interest-Based Ads","href":"https://privacy.thewaltdisneycompany.com/en/privacy-controls/online-tracking-and-advertising/"}]}]');
            needConsent = 'false';
		} catch (e) {
            console.log(e);
        }

		window.espn.footerLinks = footerLinks || {};
        window.espn.needConsent = needConsent || false
	})();


