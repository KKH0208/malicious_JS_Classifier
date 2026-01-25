/* 元のURL: https://bugsnag.com */

	document.addEventListener("scroll", initGTMOnEvent);
	document.addEventListener("mousemove", initGTMOnEvent);
	document.addEventListener("touchstart", initGTMOnEvent);
	const createScript = (props = {}) => {
		const script = document.createElement("script");
		Object.entries(props).forEach(([key, value]) => {
			if (value !== undefined) script[key] = value;
		});

		document.head.appendChild(script);
		return script;
	};
	function initGTMOnEvent(event) {
		initGTM();
		event.currentTarget.removeEventListener(event.type, initGTMOnEvent);
	}
	function initGTM() {
		console.log("initGTM");
		if (window.gtmDidInit) {
			return false;
		}
		window.gtmDidInit = true;
        createScript({
			src: "https://code.jquery.com/jquery-3.7.1.min.js",
			type: "text/javascript",
			async: true,
		});
		createScript({
			type: "text/javascript",
			async: true,
			src: "https://www.googletagmanager.com/gtm.js?id=GTM-MTQKQW6",
			onload: () => {
				window.dataLayer = window.dataLayer || [];
				window.dataLayer.push({
					event: "gtm.js",
					"gtm.start": new Date().getTime(),
					"gtm.uniqueEventId": 0,
				});
			},
		});
	}


