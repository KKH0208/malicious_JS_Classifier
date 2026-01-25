/* 元のURL: https://cdc.gov */
// 外部JS: https://cdc.gov/TemplatePackage/5.0/js/modules/banner.js
/**
 * @version 4.25.8
 * Date: 2025-09-29T21:19:15.879Z
 */
(!window.CDC2025BANNER) && (() => {

	window.CDC2025BANNER = true;
	const CDC2025Banners = () => {

		const lang = String(document.documentElement?.lang).includes('es') ? 'es' : 'en';
		const tpCheck = parseInt(document.querySelector('meta[property="cdc:template_version"]')?.getAttribute('content') || 0);
		const legacyCheck = parseInt(document.querySelector('meta[name="template.version"]')?.getAttribute('content') || 0);
		const tp = tpCheck || legacyCheck || 4;

		const subdomain = String(document.location.hostname).toLowerCase().replace('.cdc.gov','');
		const url = String(document.querySelector('link[rel="canonical"]')?.href || location.href).trim().toLowerCase().replace(/[\?\#].*$/, '');
		const path = url.replace(/^https?:\/\/[^\/]+/, '');

		// prep banner
		const style = document.createElement('style');
		style.setAttribute('data-banner-style', '');
		style.innerHTML = `
			.cdc-banner2025 { background: #FEF0C8; padding: 1rem; border-radius: 0.5rem; margin: 0.5rem auto 1rem auto; font-size: 0.9rem; max-width: 1115px; }
			.cdc-gs202510-banner {
				background: #FBF0E8;
				padding: 0.25rem 1rem !important;
				margin: 0.5rem auto !important;
				max-width: 900px;
				border-radius: 0.25rem;
				font-size: 0.8rem;
				color: #000;
				padding: 0.25rem 0.5rem;
				text-align: left;
				@media (max-width: 900px) { border-radius: 0; }
			}
			.cdc-gs202510-banner p { margin: 0.25rem; line-height: 1.25; }
			.cdc-gs202510-banner a { color: #005EA2; }
		`;
		document.head.appendChild(style);

		const addBanner = (bannerVersion) => {

			// build banner
			const sitename = location.hostname.includes('atsdr') ? 'ATSDR' : 'CDC';
			let text = `${sitename}'s website is being modified to comply with President Trump's Executive Orders.`;
			if (2 === bannerVersion) {
				text = `Per a court order, HHS is required to restore this website as of 11:59PM ET, February 11, 2025.
				Any information on this page promoting gender ideology is extremely inaccurate and disconnected from the immutable biological reality
				that there are two sexes, male and female. The Trump Administration rejects gender ideology and condemns the harms it causes to children,
				by promoting their chemical and surgical mutilation, and to women, by depriving them of their dignity, safety, well-being, and opportunities.
				This page does not reflect biological reality and therefore the Administration and this Department rejects it.`;
			}
			if (3 === bannerVersion) {
				text = `Per a court order, HHS is required to restore this website as of 11:59PM ET, February 14, 2025.
				Any information on this page promoting gender ideology is extremely inaccurate and disconnected from the immutable biological reality
				that there are two sexes, male and female. The Trump Administration rejects gender ideology and condemns the harms it causes to children,
				by promoting their chemical and surgical mutilation, and to women, by depriving them of their dignity, safety, well-being, and opportunities.
				This page does not reflect biological reality and therefore the Administration and this Department rejects it.`;
			}
			if (4 === bannerVersion) {
				text = `Per a court order, HHS is required to restore this website to its version as of 12:00 AM on January 29, 2025.
				Information on this page may be modified and/or removed in the future subject to the terms of the court’s order and
				implemented consistent with applicable law. Any information on this page promoting gender ideology is extremely
				inaccurate and disconnected from truth. The Trump Administration rejects gender ideology due to the harms and
				divisiveness it causes. This page does not reflect reality and therefore the Administration and this Department reject it.`;
			}
			if (5 === bannerVersion) {
				text = `Consistent with Executive Order (E.O.) 14217, entitled "Commencing the Reduction of the Federal Bureaucracy,"
				the CLIAC was declared terminated by the Secretary of HHS on March 31, 2025. The information on this page is no longer being updated.`;
			}
			const banner = document.createElement('div');
			banner.setAttribute('class', 'cdc-banner2025');
			banner.dataset.banner = bannerVersion;
			banner.innerHTML = text;

			if (document.querySelector('html.cdc-page-type--2024home')) {
				banner.style = 'padding-left:1rem;padding-right:1rem;';
				document.querySelector('.official-notice')?.insertAdjacentElement('afterend', banner);
			} else if (4 === tp) {
				document.querySelector('main')?.prepend(banner);
			} else if (2 === tp) {
				document.querySelector('#content')?.insertAdjacentElement('beforebegin', banner);
			} else {
				document.querySelector('.cdc-page-title')?.insertAdjacentElement('beforebegin', banner);
			}
		}

		const configHost = String(location.hostname).includes('dev') ? 'wwwdev.cdc.gov' : 'www.cdc.gov';

		// shutdown banner
		(() => {
			let msg = `The Trump Administration is working to reopen the government for the American people.
				Mission-critical activities of CDC will continue during the Democrat-led government shutdown.
				Certain federal government activities have ceased due to a lack of appropriated funding.
				During the government shutdown, only web sites supporting excepted functions will be updated.
				As a result, the information on this website may not be up to date and the agency may not be able to respond to inquiries.`;
			if (['/','/index.html','/spanish/','/spanish/index.html'].includes(path)) {
				msg = `The Trump Administration is working to reopen the government for the American people.
				Mission-critical activities of CDC will continue during the Democrat-led government shutdown.`;
			}

			const banner = document.createElement('div');
			banner.setAttribute('class', 'cdc-gs202510-banner');
			banner.innerHTML = `<p>${msg}</p>`;

			const subdomains = 'data|wwwdev|www|wwwncdev|wwwnctest|wwwnc|www.vaccines.gov|vaccines.gov|atsdrdev|www.atsdr|atsdr|wonder|search|dataset|data|communitycountsdataviz'.split('|');
			let display = subdomains.includes(subdomain);

			// exceptions
			const exceptions = [
				'/vessel-sanitation/',
				'/measles/data-research/index.html',
				'/wtc/',
				'/niosh/rap/',
				'/niosh/cwhsp/',
				'/niosh/ocas/',
				'/cfa-qualitative-assessments/php/php/data-research/evd2025-riskassessment.html',
				'/cfa-qualitative-assessments/php/data-research/eboladrc2025-scenarioassessment.html',
				'/cfa-modeling-and-forecasting/measles-outbreak-simulator/index.html',
			];
			exceptions.forEach(exc => {
				if (0 === path.indexOf(exc) || 0 === url.indexOf(exc)) {
					display = false;
				}
			});
			if (display) {
				// append
				if ('www.vaccines.gov' === subdomain) {
					document.querySelector('header').insertAdjacentElement('afterend', banner);
				} else if ('communitycountsdataviz' === subdomain) {
					document.querySelector('#appTemplate')?.prepend(banner);
				} else if ('data' === subdomain) {
					document.querySelector('#noticeContainer')?.append(banner);
				} else if (document.querySelector('.cdc-header-official-notice')) {
					document.querySelector('.cdc-header-official-notice').insertAdjacentElement('afterend', banner);
				} else if (document.querySelector('header.official-notice')) {
					document.querySelector('header.official-notice').insertAdjacentElement('afterend', banner);
				} else {
					document.querySelector('.cdc-page-banner')?.insertAdjacentElement('afterend', banner);
				}
			}
		})();

		fetch(`https://${configHost}/config/banner.txt?v2`)
			.then(response => response.text())
			.then(doc => {
				const checks = String(doc).trim().split(/\s+/);
				let bannerVersion = 1;
				for (let i in checks) {
					let check = String(checks[i]).trim().toLowerCase();
					if (check.match(/^\d+$/)) {
						bannerVersion = parseInt(check);
						continue;
					}
					if (0 === path.indexOf(check) || 0 === url.indexOf(check)) {
						// bannerversion can be 0 for up top skips
						if (bannerVersion) {
							addBanner(bannerVersion);
						}
						break;
					}
				}
			});
	};

	if (document.readyState === 'complete' || document.readyState === 'interactive') {
		CDC2025Banners();
	} else {
		document.addEventListener('DOMContentLoaded', () => CDC2025Banners());
	}
})();


