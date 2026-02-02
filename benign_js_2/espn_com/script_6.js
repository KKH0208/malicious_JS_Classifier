/* 元のURL: https://espn.com */

			var navigator = window.navigator || {};

			if ('serviceWorker' in navigator) {
				navigator.serviceWorker.register('/service-worker.js');
			}
		

