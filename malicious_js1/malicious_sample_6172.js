const cyrb53 = function(str, seed = 0) {
			let h1 = 0xdeadbeef ^ seed,
				h2 = 0x41c6ce57 ^ seed;
			for (let i = 0, ch; i < str.length; i++) {
				ch = str.charCodeAt(i);
				h1 = Math.imul(h1 ^ ch, 2654435761);
				h2 = Math.imul(h2 ^ ch, 1597334677);
			}
			h1 = Math.imul(h1 ^ h1 >>> 16, 2246822507) ^ Math.imul(h2 ^ h2 >>> 13, 3266489909);
			h2 = Math.imul(h2 ^ h2 >>> 16, 2246822507) ^ Math.imul(h1 ^ h1 >>> 13, 3266489909);
			return 4294967296 * (2097151 & h2) + (h1 >>> 0);
		};

		const getNavigatorId = function() {
			let notAvailable = "unknown";

			let ua = navigator.userAgent || notAvailable;
			let lang = window.navigator.language || window.navigator.userLanguage || window.navigator.browserLanguage || window.navigator.systemLanguage || not_available;
			let colors = window.screen.colorDepth || notAvailable;
			let memKey = window.navigator.deviceMemory || notAvailable;
			let pixels = window.devicePixelRatio || notAvailable;
			let res = [window.screen.width, window.screen.height].sort().reverse().join("x");

			return ua + ";" + lang + ";" + colors + ";" + memKey + ";" + pixels + ";" + res;
		};

		let validityInterval = Math.round (new Date() / 1000 / 3600 / 24 / 7);
		let clientIDSource = window.location.host + ";" + getNavigatorId() + ";" + validityInterval;

		window.clientIDHashed = cyrb53(clientIDSource).toString(16);
window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-63120345-5', {'client_storage': 'none', 'client_id': window.clientIDHashed, 'anonymize_ip': true} );