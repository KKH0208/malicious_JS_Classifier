/* 元のURL: https://espn.com */

	(function() {
		function loadDefer() {
			var deferScripts = [
				'https://a.espncdn.com/redesign/0.748.2/js/espn-defer.js',
				'https://a.espncdn.com/redesign/0.748.2/js/espn-defer-low.js'
			];

			$.when(deferScripts.map(function (script) {
				var deferred = $.Deferred();
				$.getScriptCache(script, deferred.resolve);
				return deferred;
			})).done(function () {
				if(espn.siteType === 'data-lite' && typeof espn.ads.loadGPT === 'function') {
					espn.ads.loadGPT();
				}
			});
		}

		if(window.espn.loadType === "loadEnd" && espn_ui.deviceType !== 'desktop') {
			var race = [];
			$.when(function () {
				var deferred = $.Deferred();
				$(window).load(deferred.resolve);
				if(espn.siteType !== 'data-lite') {
					setTimeout( deferred.resolve, 5000 );
				}
				return deferred;
			}()).then(loadDefer)

		}else{
			loadDefer();
		}

	})();
	

