/* 元のURL: https://ft.com */

(function() { // Chartbeat script snippet

	function loadScript(src) {
		const script = document.createElement('script');
		script.async = true;
		script.src = src;
		script.onerror = function(error) { console.warn(error) };
		const last = document.scripts[document.scripts.length - 1];
		last.parentNode.insertBefore(script, last);
	}

	try {

		const testing = new URL(location).searchParams.has('chartbeatTest') || false;

		window._sf_async_config = {
			uid: 14181,
			domain: testing ? 'testing.ft.com' : 'ft.com',
			title: 'FT.com home page international edition',
			useCanonical: false,
			useCanonicalDomain: false,
			path: 'www.ft.com/?edition=international',
			topStorageDomain: 'ft.com',
			loadLibrary: () => loadScript('https://static.chartbeat.com/js/chartbeat.js')
		};

		loadScript('https://static.chartbeat.com/js/chartbeat_mab.js')

	} catch(error) {
		// clean up
		delete window._sf_async_config
		console.error(error)
	}
})();


