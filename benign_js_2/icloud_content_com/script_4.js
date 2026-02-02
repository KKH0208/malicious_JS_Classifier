/* 元のURL: https://icloud-content.com */
// 外部JS: https://icloud-content.com/assets/scripts/DeveloperBreadcrumbs.js?05182434080
<!DOCTYPE html>
<html xmlns="https://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<meta charset="utf-8" />
<meta name="Author" content="Apple Inc." />
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
<link rel="shortcut icon" href="/favicon.ico" />
<link rel="icon" href="/favicon.ico" />
<link rel="mask-icon" href="/apple-logo.svg" color="#333333">

<link rel="stylesheet" href="/assets/styles/global.dist.css?13222540152" type="text/css" />
<link rel="stylesheet" href="/assets/styles/dark-mode.css?06182556073" type="text/css" media="(prefers-color-scheme: dark)" data-color-scheme="dark" />
<link rel="stylesheet" href="/assets/styles/localization.css?02002524063" type="text/css" />

<script src="/assets/scripts/lib/jquery/jquery-3.6.0.min.js?17182448067"></script>
<script src="/assets/scripts/settings.js?17182448067"></script>
<script src="/assets/scripts/language-locales.js?17182448067"></script>
<script src="/assets/scripts/DeveloperBreadcrumbs.js?05182434080"></script>
<script src="/assets/metrics/scripts/analytics-module.js?47192517158"></script>

<script async src="/assets/scripts/retinate.js?30152505148"></script>
<script src="/assets/scripts/global-logout.js?17182448067"></script>

<script async crossorigin src="https://sfss.cdn-apple.com/2.0.0-beta.2/sf-symbol.js?12202542301"></script>
<link rel="stylesheet" href="https://sf-saas.cdn-apple.com/2.4.0-beta.0/animations/all.css" type="text/css" />





	<link rel="stylesheet" href="https://www.apple.com/wss/fonts?families=SF+Pro,v3|SF+Pro+Icons,v3">
<link rel="stylesheet" href="https://www.apple.com/wss/fonts?family=SF+Mono&v=2" type="text/css" />
<link rel="stylesheet" href="https://www.apple.com/wss/fonts?family=Apple+Icons&v=1" type="text/css" />
	<title>iCloud - Apple Developer</title>
	<meta name="omni_page" content="iCloud - (English)" />
	<meta name="Description" content="Securely store your app’s data and documents in iCloud — and keep them up to date across macOS, iOS, watchOS, tvOS, and the web. With iCloud, your users can access the information they want, wherever they want it." />
	<meta name="search_icon" content="/assets/elements/icons/icloud/icloud-96x96_2x.png">

	<meta property="og:locale" content="en_US" />
	<meta property="og:site_name" content="Apple Developer" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://developer.apple.com/news/images/og/icloud-og.jpg" />
	<meta property="og:title" content="iCloud - Apple Developer" />
	<meta property="og:description" content="Securely store your app’s data and documents in iCloud — and keep them up to date across macOS, iOS, watchOS, tvOS, and the web. With iCloud, your users can access the information they want, wherever they want it." />
	<meta property="og:url" content="https://developer.apple.com/icloud/" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://developer.apple.com/news/images/og/icloud-og-twitter.jpg" />
	<meta name="twitter:title" content="iCloud - Apple Developer" />
	<meta name="twitter:description" content="Securely store your app’s data and documents in iCloud — and keep them up to date across macOS, iOS, watchOS, tvOS, and the web. With iCloud, your users can access the information they want, wherever they want it." />
	<meta name="twitter:url" content="https://developer.apple.com/icloud/" />

	<link rel="alternate" href="https://developer.apple.com/cn/icloud/" hreflang="zh-CN" />
	<link rel="alternate" href="https://developer.apple.com/jp/icloud/" hreflang="ja-JP" />
	<link rel="alternate" href="https://developer.apple.com/kr/icloud/" hreflang="ko-KR" />
	<link rel="alternate" href="https://developer.apple.com/icloud/" hreflang="en" />
	<link rel="canonical" href="https://developer.apple.com/icloud/" />

	<link rel="stylesheet" href="/icloud/styles/icloud-common.css" type="text/css">
</head>

<body id="icloud-overview">
	<script>
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
</script>
<link rel="stylesheet" href="/assets/styles/globalnav.css?02002524063" type="text/css" />

<link rel="stylesheet" href="/assets/styles/suggest-lang.css?27202513134" type="text/css" />
<div id="suggest-lang" class="ribbon hide" lang="en">
	<div class="ribbon-content-wrapper">
		<div class="ribbon-content row">
			<div class="column large-12 large-centered">
				<p><a href="#" id="suggest-link" class="ribbon-link more">View in English</a></p>
				<button id="suggest-closer" class="icon icon-after icon-reset" aria-label="Dismiss language suggestion" tabindex="0"></button>
			</div>
		</div>
	</div>
</div>
<script src="/assets/scripts/suggest-lang.js?17182448067"></script>
<aside id="ac-gn-segmentbar" class="ac-gn-segmentbar" lang="en-US" dir="ltr">
</aside>
<input type="checkbox" id="ac-gn-menustate" class="ac-gn-menustate" />
<nav id="ac-globalnav" class="no-js" role="navigation" aria-label="Global" data-hires="false" data-analytics-region="global nav" lang="en-US" dir="ltr"
    data-www-domain="www.apple.com"
    data-store-locale="us"
    data-store-root-path="/us"
    data-store-api="/[storefront]/shop/bag/status"
    data-search-locale="en_US"
    data-search-suggestions-api="/search-services/suggestions/"
    data-search-defaultlinks-api="/search-services/suggestions/defaultlinks/"
    data-search-suggestions-enabled="false">
	<div class="ac-gn-content">
		<ul class="ac-gn-header">
			<li class="ac-gn-item ac-gn-menuicon">
				<label class="ac-gn-menuicon-label" for="ac-gn-menustate" aria-hidden="true">
					<span class="ac-gn-menuicon-bread ac-gn-menuicon-bread-top">
						<span class="ac-gn-menuicon-bread-crust ac-gn-menuicon-bread-crust-top"></span>
					</span>
					<span class="ac-gn-menuicon-bread ac-gn-menuicon-bread-bottom">
						<span class="ac-gn-menuicon-bread-crust ac-gn-menuicon-bread-crust-bottom"></span>
					</span>
				</label>
				<a href="#ac-gn-menustate" role="button" class="ac-gn-menuanchor ac-gn-menuanchor-open" id="ac-gn-menuanchor-open">
					<span class="ac-gn-menuanchor-label">Global Nav Open Menu</span>
				</a>
				<a href="#" role="button" class="ac-gn-menuanchor ac-gn-menuanchor-close" id="ac-gn-menuanchor-close">
					<span class="ac-gn-menuanchor-label">Global Nav Close Menu</span>
				</a>
			</li>
			<li class="ac-gn-item ac-gn-apple">
				<a class="ac-gn-link ac-gn-link-apple-developer" href="/" data-analytics-title="appledeveloper home" id="ac-gn-firstfocus-small">
					<span class="ac-gn-link-text">Apple Developer</span>
				</a>
			</li>
		</ul>
		<div class="ac-gn-search-placeholder-container" role="search">
			<div class="ac-gn-search ac-gn-search-small">
				<a id="ac-gn-link-search-small" class="ac-gn-link" href="/search/" data-analytics-title="search" data-analytics-click="search" data-analytics-intrapage-link aria-label="Search">
					<div class="ac-gn-search-placeholder-bar">
						<div class="ac-gn-search-placeholder-input">
							<div class="ac-gn-search-placeholder-input-text" aria-hidden="true">
								<div class="ac-gn-link-search ac-gn-search-placeholder-input-icon"></div>
								<span class="ac-gn-search-placeholder">Search</span>
							</div>
						</div>
						<div class="ac-gn-searchview-close ac-gn-searchview-close-small ac-gn-search-placeholder-searchview-close">
							<span class="ac-gn-searchview-close-cancel" aria-hidden="true">Cancel</span>
						</div>
					</div>
				</a>
			</div>
		</div>
		<ul class="ac-gn-list">
			<li class="ac-gn-item ac-gn-apple">
				<a class="ac-gn-link ac-gn-link-apple-developer" href="/" data-analytics-title="appledeveloper home" id="ac-gn-firstfocus">
					<span class="ac-gn-link-text">Apple Developer</span>
					</a>
			</li>
			<li class="ac-gn-item ac-gn-item-menu ac-gn-news">
				<a class="ac-gn-link ac-gn-link-news" href="/news/" data-analytics-title="news">
					<span class="ac-gn-link-text">News</span>
					</a>
			</li>
			<li class="ac-gn-item ac-gn-item-menu ac-gn-discover">
				<a class="ac-gn-link ac-gn-link-discover" href="/discover/" data-analytics-title="discover">
					<span class="ac-gn-link-text">Discover</span>
					</a>
			</li>
			<li class="ac-gn-item ac-gn-item-menu ac-gn-design">
				<a class="ac-gn-link ac-gn-link-design" href="/design/" data-analytics-title="design">
					<span class="ac-gn-link-text">Design</span>
					</a>
			</li>
			<li class="ac-gn-item ac-gn-item-menu ac-gn-develop">
				<a class="ac-gn-link ac-gn-link-develop" href="/develop/" data-analytics-title="develop">
					<span class="ac-gn-link-text">Develop</span>
					</a>
			</li>
			<li class="ac-gn-item ac-gn-item-menu ac-gn-distribute">
				<a class="ac-gn-link ac-gn-link-distribute" href="/distribute/" data-analytics-title="distribute">
					<span class="ac-gn-link-text">Distribute</span>
					</a>
			</li>
			<li class="ac-gn-item ac-gn-item-menu ac-gn-dsupport">
				<a class="ac-gn-link ac-gn-link-dsupport" href="/support/" data-analytics-title="dsupport">
					<span class="ac-gn-link-text">Support</span>
					</a>
			</li>
			<li class="ac-gn-item ac-gn-item-menu ac-gn-account">
				<a class="ac-gn-link ac-gn-link-account" href="/account/" data-analytics-title="account">
					<span class="ac-gn-link-text">Account</span>
					</a>
			</li>
			<li class="ac-gn-item ac-gn-item-menu ac-gn-search" role="search">
				<a id="ac-gn-link-search" class="ac-gn-link ac-gn-link-search" href="/search/" data-analytics-title="search" data-analytics-click="search" data-analytics-intrapage-link aria-label="Search"></a>
			</li>
		</ul>
		<aside id="ac-gn-searchview" class="ac-gn-searchview" role="search" data-analytics-region="search">
			<div class="ac-gn-searchview-content">
				<div class="ac-gn-searchview-bar">
					<div class="ac-gn-searchview-bar-wrapper">
						<form id="ac-gn-searchform" class="ac-gn-searchform" action="/search/" method="get">
							<div class="ac-gn-searchform-wrapper">
								<input id="ac-gn-searchform-input" class="ac-gn-searchform-input" type="text" name="q" aria-label="Search" placeholder="Search" autocorrect="off" autocapitalize="off" autocomplete="off" spellcheck="false" role="combobox" aria-autocomplete="list" aria-expanded="true" aria-owns="quicklinks suggestions" />
								<button id="ac-gn-searchform-submit" class="ac-gn-searchform-submit" type="submit" disabled aria-label="Submit Search"></button>
								<button id="ac-gn-searchform-reset" class="ac-gn-searchform-reset" type="reset" disabled aria-label="Clear Search">
										<span class="ac-gn-searchform-reset-background"></span>
									</button>
							</div>
						</form>
						<button id="ac-gn-searchview-close-small" class="ac-gn-searchview-close ac-gn-searchview-close-small" aria-label="Cancel Search">
								<span class="ac-gn-searchview-close-cancel" aria-hidden="true">
									Cancel
								</span>
							</button>
					</div>
				</div>
				<aside id="ac-gn-searchresults" class="ac-gn-searchresults hidden" data-string-quicklinks="Quick Links" data-string-suggestions="Suggested Searches" data-string-noresults="">
                    <section class="ac-gn-searchresults-section ac-gn-searchresults-section-defaultlinks">
                        <div class="ac-gn-searchresults-section-wrapper">
							<div class="search-group-checkbox hidden"><input id="group-input" type="checkbox" name="group-filter" checked>Only search within “<span id="group-search-label"></span>”</div>
                            <h3 class="ac-gn-searchresults-header ac-gn-searchresults-animated">Quick Links</h3>
                            <ul class="ac-gn-searchresults-list" id="defaultlinks" role="listbox">
                            </ul>
                            <span role="status" class="ac-gn-searchresults-count" aria-live="polite">5 Quick Links</span>
                        </div>
                    </section>
                </aside>
			</div>
			<button id="ac-gn-searchview-close" class="ac-gn-searchview-close" aria-label="Cancel Search">
					<span class="ac-gn-searchview-close-wrapper">
						<span class="ac-gn-searchview-close-left"></span>
						<span class="ac-gn-searchview-close-right"></span>
					</span>
				</button>
		</aside>
			</div>
</nav>
<div class="ac-gn-blur"></div>
<div id="ac-gn-curtain" class="ac-gn-curtain"></div>
<div id="ac-gn-placeholder" class="ac-nav-placeholder"></div>
<script src="/assets/scripts/ac-globalnav.built.js?17182448067"></script>
<link rel="stylesheet" href="/assets/styles/search.css?02002524063">
<script src="/assets/scripts/search.js?17182448067"></script>

	<!-- metrics -->
<script>
    /* RSID: */
    var s_account="awdappledeveloper"
</script>	
<script src="/assets/metrics/scripts/analytics.js?072620243"></script>
<script>
    s.pageName= AC && AC.Tracking && AC.Tracking.pageName();
    s.channel="www.en.developer"
    s.channel="www.en.developer";

    
    /************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
    var s_code=s.t();if(s_code)document.write(s_code)
</script>
<!-- /metrics -->
	<link rel="stylesheet" property="stylesheet" href="/assets/styles/localnav.css" type="text/css" />
<input type="checkbox" id="localnav-menustate" class="localnav-menustate"/>
<nav id="localnav" class="localnav localnav-scrim" data-sticky role="navigation">
	<div class="localnav-wrapper">
		<div class="localnav-background"></div>
		<div class="localnav-content">
			<h2 class="localnav-title">
				<a href="/icloud/">iCloud</a>
			</h2>

			<div class="localnav-menu">
				<a href="#localnav-menustate" class="localnav-menucta-anchor localnav-menucta-anchor-open" id="localnav-menustate-open">
					<span class="localnav-menucta-anchor-label">Open Menu</span>
				</a>
				<a href="#" class="localnav-menucta-anchor localnav-menucta-anchor-close" id="localnav-menustate-close">
					<span class="localnav-menucta-anchor-label">Close Menu</span>
				</a>
				<div class="localnav-menu-tray">
					<ul class="localnav-menu-items">
						<li class="localnav-menu-item">
							<a href="/icloud/" class="localnav-menu-link">Overview</a>
						</li>
						<li class="localnav-menu-item">
							<a href="/icloud/cloudkit/" class="localnav-menu-link">CloudKit</a>
						</li>
						<li class="localnav-menu-item">
							<a href="/icloud/telemetry/" class="localnav-menu-link">Telemetry</a>
						</li>
						<li class="localnav-menu-item">
							<a href="/icloud/logs/" class="localnav-menu-link">Logs</a>
						</li>
						<li class="localnav-menu-item">
							<a href="/icloud/dashboards/" class="localnav-menu-link">Dashboards</a>
						</li>
						<li class="localnav-menu-item">
							<a href="/icloud/resources/" class="localnav-menu-link">Resources</a>
						</li>
					</ul>
				</div>
				<div class="localnav-actions localnav-actions-center">
					<div class="localnav-action localnav-action-menucta" aria-hidden="true">
						<label for="localnav-menustate" class="localnav-menucta">
							<span class="localnav-menucta-chevron"></span>
						</label>
					</div>
					<div class="localnav-action localnav-action-button">
						<a class="localnav-button button button-compact button-pill" href="https://icloud.developer.apple.com/">View CloudKit Console<span class="loc-en-only"></span>
							<span class="localnav-action-product">CloudKit Console</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</nav>
<label id="localnav-curtain" for="localnav-menustate"></label>
<script src="/assets/scripts/ac-localnav.built.js"></script>
<script type="text/javascript" src="/assets/scripts/localnav.js"></script>


	<main id="main" class="main" role="main">

		<div class="ribbon ribbon-blue-to-default ribbon-animate-color" id="icloud-s-ribbon">
			<div class="ribbon-content-wrapper">
				<div class="ribbon-content row">
					<div class="column large-8 large-centered">
						<p><a href="/videos/all-videos/?q=%22iCloud%22%20%22CloudKit%22" class="ribbon-link">Watch the latest videos about iCloud and <span class="nowrap icon icon-after icon-playcircle">CloudKit</span></a></p>
					</div>
				</div>
			</div>
		</div>

		<section class="section section-hero">
			<div class="section-content">
				<div class="row">
					<div class="column large-centered large-9 medium-10 small-12 text-center">
						<img src="/assets/elements/icons/icloud/icloud-96x96_2x.png" height="96" alt="">

						<h1 class="typography-headline">iCloud for developers</h1>
						<p class="typography-intro">iCloud securely stores your users’ data and seamlessly keeps it up to date across their devices, so they’ll have a great experience no matter which device they use. And with powerful and intuitive tools, such as CloudKit&nbsp;Console, you can focus on delivering great apps while iCloud handles the details of scaling, consistency, and&nbsp;security.</p>
					</div>
				</div>
			</div>
			<figure class="margin-top-small device-macbook-pro-5th-gen-16-silver center">
				<picture class="device-screen">
					<source media="(max-width: 734px)" srcset="/icloud/images/screen-hero-small_2x.png?1" />
					<source media="(max-width:1068px)" srcset="/icloud/images/screen-hero-medium_2x.png?1" />
					<img src="/icloud/images/screen-hero-large_2x.png?1" width="100%" alt="" aria-label="" />
				</picture>
			</figure>
		</section>

		<section class="section section-topics bg-light">
			<div class="section-content">
				<div class="row">
					<div class="column large-centered large-10 medium-12">
						<div class="row margin-bottom">
							<div class="column large-2 small-12 sv-text-left text-center">
								<sf-symbol name="widget.large.badge.plus" weight="light" scale="small" mode="hierarchical" class="topic-symbol"></sf-symbol>
							</div>
							<div class="column large-10 small-12">

								<h3>Display curated data with Dashboards</h3>
								<p>Surface trends from Telemetry and usage data with Dashboards. Use customizable widgets to display only the most relevant data to help you identify and resolve issues within your CloudKit containers and push notification-enabled apps.</p>
								<p><a href="/icloud/dashboards/" class="more">Learn about Dashboards<span class="loc-en-only"></span></a></p>
							</div>
						</div>
						<div class="row margin-bottom">
							<div class="column large-2 small-12 sv-text-left text-center">
								<sf-symbol name="icloud" weight="light" scale="small" mode="hierarchical" class="topic-symbol"></sf-symbol>
							</div>
							<div class="column large-10 small-12">

								<h3>Build apps using CloudKit</h3>
								<p>Develop apps with world-class authentication, privacy, security, and syncing using the same technologies used by Apple in its most popular cloud offerings. CloudKit provides a robust framework and a comprehensive set of tools that make it easy for you to develop powerful apps that seamlessly sync across iOS, iPadOS, macOS, tvOS, watchOS, visionOS and the web.</p>
								<p><a href="/icloud/cloudkit/" class="more">Learn about CloudKit</a></p>
							</div>
						</div>
						<div class="row margin-bottom">
							<div class="column large-2 small-12 sv-text-left text-center">
								<sf-symbol name="chart.bar.xaxis" weight="light" scale="small" mode="hierarchical" class="topic-symbol"></sf-symbol>
							</div>
							<div class="column large-10 small-12">

								<h3>Gain insights with Telemetry</h3>
								<p>Tailor your apps for responsiveness and relevance to your users by measuring user activity, CloudKit database usage, and trends over time. With Telemetry’s monitoring and analytics features, you can visualize aggregate behavior across all of your users’ devices for all of the data coming into your container.</p>
								<p><a href="/icloud/telemetry/" class="more">Learn about Telemetry</a></p>
							</div>
						</div>
						<div class="row margin-bottom">
							<div class="column large-2 small-12 sv-text-left text-center">
								<sf-symbol name="list.clipboard" weight="light" scale="small" mode="hierarchical" class="topic-symbol"></sf-symbol>
							</div>
							<div class="column large-10 small-12">

								<h3>Access logs that respect user&nbsp;privacy</h3>
								<p>Easily collect, process, and analyze data while keeping your users’ data private. CloudKit’s detailed logs of server activity don’t contain any personal or private data, so you’ll have everything you need to debug and analyze your app while ensuring sensitive user data stays safe and secure.</p>
								<p><a href="/icloud/logs/" class="more">Learn about logs</a></p>
							</div>
						</div>
						<div class="row">
							<div class="column large-2 small-12 sv-text-left text-center">
								<sf-symbol name="bell.badge" weight="light" scale="small" mode="hierarchical" class="topic-symbol"></sf-symbol>
							</div>
							<div class="column large-10 small-12">

								<h3>Send, validate, and monitor push&nbsp;notifications</h3>
								<p>Use the interactive web interface to send test push notifications to Apple devices through the Apple Push Notifications service (APNs). Review and manage the channels you use for broadcast push notifications. Access logs that provide insights into the delivery process and leverage tools to generate and validate tokens. Aggregated metrics give you insights into various statistics for device push notifications, including a detailed breakdown based on push type and priority.</p>
								<p><a href="/notifications/">Learn about <span class="more nowrap">Push Notifications<span class="loc-en-only"></span></span></a></p>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="column large-centered large-10 small-12">
						<div class="grid grid-gutterless margin-top">
							<div class="grid-item large-span-12">
								<a class="block-link" href="/icloud/resources/">
									<div class="tile tile-rounded">
										<div class="tile-content text-center">
											<img src="/assets/elements/icons/xcode-s/xcode-s-96x96_2x.png" width="96" class="large-centered" alt="" />
											<h2>Resources</h2>
											<p>Find the tools and documentation you need to build apps that use CloudKit.</p>
											<p class="link more">View resources</p>
										</div>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

	</main>
	<link rel="stylesheet" href="/assets/styles/footer.dist.css?02002524063">
<footer id="footer" class="footer" role="contentinfo" aria-labelledby="footer-label">
    <div class="footer-content">
        <h2 class="footer-label" id="footer-label">Developer Footer</h2>

	<developer-breadcrumbs>
		<li>iCloud</li>
	</developer-breadcrumbs>
	        <nav class="footer-directory" aria-label="Apple Developer Directory" role="navigation">
	<!--googleoff: all-->
	<div class="footer-directory-column">
		<input class="footer-directory-column-section-state" type="checkbox" id="footer-directory-column-section-state-platform" />
		<div class="footer-directory-column-section">
			<label class="footer-directory-column-section-label" for="footer-directory-column-section-state-platform">
				<h3 class="footer-directory-column-section-title">Platforms</h3>
			</label>
			<a href="#footer-directory-column-section-state-platform" class="footer-directory-column-section-anchor footer-directory-column-section-anchor-open"> <span class="footer-directory-column-section-anchor-label">Open Menu</span> </a>
			<a href="#" class="footer-directory-column-section-anchor footer-directory-column-section-anchor-close"> <span class="footer-directory-column-section-anchor-label">Close Menu</span> </a>
			<ul class="footer-directory-column-section-list">
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/ios/">iOS</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/ipados/">iPadOS</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/macos/">macOS</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/tvos/">tvOS</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/visionos/">visionOS</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/watchos/">watchOS</a></li>
			</ul>
		</div>

		<input class="footer-directory-column-section-state" type="checkbox" id="footer-directory-column-section-state-tools" />
		<div class="footer-directory-column-section">
			<label class="footer-directory-column-section-label" for="footer-directory-column-section-state-tools">
				<h3 class="footer-directory-column-section-title">Tools</h3>
			</label>
			<a href="#footer-directory-column-section-state-tools" class="footer-directory-column-section-anchor footer-directory-column-section-anchor-open"> <span class="footer-directory-column-section-anchor-label">Open Menu</span> </a>
			<a href="#" class="footer-directory-column-section-anchor footer-directory-column-section-anchor-close"> <span class="footer-directory-column-section-anchor-label">Close Menu</span> </a>
			<ul class="footer-directory-column-section-list">
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/swift/">Swift</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/swiftui/">SwiftUI</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/swift-playground/">Swift Playground</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/testflight/">TestFlight</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/xcode/">Xcode</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/xcode-cloud/">Xcode Cloud</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/icon-composer/">Icon Composer</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/sf-symbols/">SF Symbols</a></li>

			</ul>
		</div>
	</div>

	<div class="footer-directory-column">
		<input class="footer-directory-column-section-state" type="checkbox" id="footer-directory-column-section-state-topics" />
		<div class="footer-directory-column-section">
			<label class="footer-directory-column-section-label" for="footer-directory-column-section-state-topics">
				<h3 class="footer-directory-column-section-title">Topics &amp; Technologies</h3>
			</label>
			<a href="#footer-directory-column-section-state-topics" class="footer-directory-column-section-anchor footer-directory-column-section-anchor-open"> <span class="footer-directory-column-section-anchor-label">Open Menu</span> </a>
			<a href="#" class="footer-directory-column-section-anchor footer-directory-column-section-anchor-close"> <span class="footer-directory-column-section-anchor-label">Close Menu</span> </a>
			<ul class="footer-directory-column-section-list">
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/accessibility/">Accessibility</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/accessories/">Accessories</a></li>
				<!-- <li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/apple-intelligence/">Apple Intelligence</a></li> -->
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/app-store/">App Store</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/audio/">Audio &amp; Video</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/augmented-reality/">Augmented Reality</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/business/">Business</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/design/">Design</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/distribute/">Distribution</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/education/">Education</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/fonts/">Fonts</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/games/">Games</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/health-fitness/">Health &amp; Fitness</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/in-app-purchase/">In-App Purchase</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/localization/">Localization</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/maps/">Maps &amp; Location</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/machine-learning/">Machine Learning & AI</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="https://opensource.apple.com">Open Source</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/security/">Security</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/safari/">Safari &amp; Web</a></li>
			</ul>
		</div>
	</div>

	<div class="footer-directory-column">
		<input class="footer-directory-column-section-state" type="checkbox" id="footer-directory-column-section-state-resources" />
		<div class="footer-directory-column-section">
			<label class="footer-directory-column-section-label" for="footer-directory-column-section-state-resources">
				<h3 class="footer-directory-column-section-title">Resources</h3>
			</label>
			<a href="#footer-directory-column-section-state-resources" class="footer-directory-column-section-anchor footer-directory-column-section-anchor-open"> <span class="footer-directory-column-section-anchor-label">Open Menu</span> </a>
			<a href="#" class="footer-directory-column-section-anchor footer-directory-column-section-anchor-close"> <span class="footer-directory-column-section-anchor-label">Close Menu</span> </a>
			<ul class="footer-directory-column-section-list">
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/documentation/">Documentation</a></li>
					<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/documentation/samplecode">Sample Code</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/learn/">Tutorials</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/download/">Downloads</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/forums/">Forums</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/videos/">Videos</a></li>
			</ul>
		</div>

		<input class="footer-directory-column-section-state" type="checkbox" id="footer-directory-column-section-state-support" />
		<div class="footer-directory-column-section">
			<label class="footer-directory-column-section-label" for="footer-directory-column-section-state-support">
				<h3 class="footer-directory-column-section-title">Support</h3>
			</label>
			<a href="#footer-directory-column-section-state-support" class="footer-directory-column-section-anchor footer-directory-column-section-anchor-open"> <span class="footer-directory-column-section-anchor-label">Open Menu</span> </a>
			<a href="#" class="footer-directory-column-section-anchor footer-directory-column-section-anchor-close"> <span class="footer-directory-column-section-anchor-label">Close Menu</span> </a>
			<ul class="footer-directory-column-section-list">
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/support/articles/">Support Articles</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/contact/">Contact Us</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/bug-reporting/">Bug Reporting</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/system-status/">System Status</a></li>
			</ul>
		</div>

		<input class="footer-directory-column-section-state" type="checkbox" id="footer-directory-column-section-state-account" />
		<div class="footer-directory-column-section">
			<label class="footer-directory-column-section-label" for="footer-directory-column-section-state-account">
				<h3 class="footer-directory-column-section-title">Account</h3>
			</label>
			<a href="#footer-directory-column-section-state-account" class="footer-directory-column-section-anchor footer-directory-column-section-anchor-open"> <span class="footer-directory-column-section-anchor-label">Open Menu</span> </a>
			<a href="#" class="footer-directory-column-section-anchor footer-directory-column-section-anchor-close"> <span class="footer-directory-column-section-anchor-label">Close Menu</span> </a>
			<ul class="footer-directory-column-section-list">
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/account/">Apple Developer</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="https://appstoreconnect.apple.com/">App Store Connect</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/account/ios/certificate/">Certificates, IDs, &amp; Profiles</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="https://feedbackassistant.apple.com/">Feedback Assistant</a></li>
			</ul>
		</div>
	</div>
	
	<div class="footer-directory-column">
		<input class="footer-directory-column-section-state" type="checkbox" id="footer-directory-column-section-state-programs" />
		<div class="footer-directory-column-section">
			<label class="footer-directory-column-section-label" for="footer-directory-column-section-state-programs">
				<h3 class="footer-directory-column-section-title">Programs</h3>
			</label>
			<a href="#footer-directory-column-section-state-programs" class="footer-directory-column-section-anchor footer-directory-column-section-anchor-open"> <span class="footer-directory-column-section-anchor-label">Open Menu</span> </a>
			<a href="#" class="footer-directory-column-section-anchor footer-directory-column-section-anchor-close"> <span class="footer-directory-column-section-anchor-label">Close Menu</span> </a>
			<ul class="footer-directory-column-section-list">
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/programs/">Apple Developer Program</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/programs/enterprise/">Apple Developer Enterprise Program</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/app-store/small-business-program/">App Store Small Business Program</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="https://mfi.apple.com/">MFi Program</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/programs/news-partner/">News Partner Program</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/programs/video-partner/">Video Partner Program</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/security-bounty/">Security Bounty Program</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/programs/security-research-device/">Security Research Device Program</a></li>
			</ul>
		</div>

		<input class="footer-directory-column-section-state" type="checkbox" id="footer-directory-column-section-state-events" />
		<div class="footer-directory-column-section">
			<label class="footer-directory-column-section-label" for="footer-directory-column-section-state-events">
				<h3 class="footer-directory-column-section-title">Events</h3>
			</label>
			<a href="#footer-directory-column-section-state-events" class="footer-directory-column-section-anchor footer-directory-column-section-anchor-open"> <span class="footer-directory-column-section-anchor-label">Open Menu</span> </a>
			<a href="#" class="footer-directory-column-section-anchor footer-directory-column-section-anchor-close"> <span class="footer-directory-column-section-anchor-label">Close Menu</span> </a>
			<ul class="footer-directory-column-section-list">
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/events/">Meet with Apple</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/events/developer-centers/">Apple Developer Centers</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/app-store/app-store-awards/">App Store Awards</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/design/awards/">Apple Design Awards</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/academies/">Apple Developer Academies</a></li>
				<li class="footer-directory-column-section-item"><a class="footer-directory-column-section-link" href="/wwdc/">WWDC</a></li>
			</ul>
		</div>
	</div>
	<!--googleon: all-->
</nav>
        <section class="footer-mini" vocab="http://schema.org/" typeof="Organization">
	<div class="footer-mini-news">
		<div class="copy">
			Get the <a href="https://apps.apple.com/us/app/apple-developer/id640199958">Apple Developer app</a>.
		</div>
		<div class="content">
			<div class="color-scheme-toggle"
				role="radiogroup"
				tabindex="0"
				aria-label="Select a color scheme preference">

				<label data-color-scheme-option="light">

					<input type="radio" value="light" autocomplete="off"
						onchange="window.setPreferredColorScheme(event.target.value)" />

					<div class="text">Light</div>

				</label>

				<label data-color-scheme-option="dark">

					<input type="radio" value="dark" autocomplete="off"
						onchange="window.setPreferredColorScheme(event.target.value)" />

					<div class="text">Dark</div>

				</label>

				<label data-color-scheme-option="auto">

					<input type="radio" value="auto" autocomplete="off"
						onchange="window.setPreferredColorScheme(event.target.value)" />

					<div class="text">Auto</div>

				</label>

			</div>
			<script async src="/assets/scripts/color-scheme-toggle.js"></script>
		</div>
	</div>
	<link rel="stylesheet" href="/assets/styles/language-dropdown.css?02002524063">
	<div class="language-dropdown dropdown-container legacy-form hidden">
		<select class="dropdown" aria-label="Language Dropdown"></select>
		<span class="dropdown-icon icon icon-chevrondown" aria-hidden="true"></span>
	</div>
	<script src="/assets/scripts/language-dropdown.js?17182448067"></script>
	<div class="footer-mini-legal">
		<div class="footer-mini-legal-copyright">Copyright ©  2025 <a href="https://www.apple.com">Apple Inc.</a> All rights reserved.</div>
		<div class="footer-mini-legal-links">
			<a class="footer-mini-legal-link" href="https://www.apple.com/legal/internet-services/terms/site.html" class="first">Terms of Use</a>
			<a class="footer-mini-legal-link" href="https://www.apple.com/legal/privacy/">Privacy Policy</a>
			<a class="footer-mini-legal-link" href="/support/terms/">Agreements and Guidelines</a>
		</div>
	</div>
</section>
    </div>
</footer>
</body>
</html>

