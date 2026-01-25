/* 元のURL: https://icloud-content.com */

	// Execute immediately to avoid UI flash
	(function () {
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		const body = document.body;

		// If theme-dark or theme-light is already applied, do nothing and lock it
		if (body.classList.contains("theme-dark") || body.classList.contains("theme-light")) {

			// Set the data-color-scheme attribute based on the existing theme
			body.setAttribute('data-color-scheme', body.classList.contains("theme-dark") ? "dark" : "light");

			// Prevent future modifications
			window.__disableColorScheme = true;

			// Hide the color picker immediately
			const style = document.createElement('style');
			style.textContent = '.color-scheme-toggle { display: none !important; }';
			document.head.appendChild(style);

			return;
		}

		// Otherwise, set theme normally based on user settings or system preference
		if (window.Settings && window.Settings.preferredColorScheme) {
			const colorTheme = (window.Settings.preferredColorScheme === 'auto') && !prefersDark ? 'light'
				: (window.Settings.preferredColorScheme === 'light') ? 'light' : 'dark';
			body.setAttribute('data-color-scheme', colorTheme);
			colorTheme === "dark" ? body.classList.add("theme-dark") : body.classList.add("theme-light");
		} else {
			const colorTheme = prefersDark ? 'dark' : 'light';
			body.setAttribute('data-color-scheme', colorTheme);
			prefersDark ? body.classList.add("theme-dark") : body.classList.add("theme-light");
		}
	})();


