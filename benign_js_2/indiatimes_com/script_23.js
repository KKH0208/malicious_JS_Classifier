/* 元のURL: https://indiatimes.com */

				document.addEventListener("DOMContentLoaded", function () {
					function loadScript(src) {
						const script = document.createElement("script");
						script.src = src;
						script.type = "text/javascript";
						script.async = true; // Ensures execution only after parsing HTML
						document.body.appendChild(script);
					}

					loadScript("https://www.indiatimes.com/assets/app-frontend-1b48e3938d20e402f78d.js");
					loadScript("https://www.indiatimes.com/assets/app-vendor_react-1b48e3938d20e402f78d.js");

					loadScript("https://www.indiatimes.com/assets/app-common_app-1b48e3938d20e402f78d.js");
					loadScript("https://www.indiatimes.com/assets/app-mui_vendor-1b48e3938d20e402f78d.js");
					loadScript("https://www.indiatimes.com/assets/app-m360Package-1b48e3938d20e402f78d.js");
				});
			

