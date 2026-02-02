/* 元のURL: https://espn.com */

	(function () {
		var webviewFeatureGating;

		try {
			webviewFeatureGating = JSON.parse('{"showstory":{"fantasy":{"android":"8.15.0","ios":"8.15.0"},"espnapp":{"android":"7.17.0","ios":"7.17.0"},"tcmen":{"android":"14.0.0","ios":"14.0.0"}}}');
		} catch (e) {}

		window.espn.webviewFeatureGating = webviewFeatureGating || {};
	})();


