/* 元のURL: https://wp.com */

	( function() {
		'use strict';

		/**
		 * Establish the farthest away parent from an element matching
		 * a given list of selectors. Selectors can be css classes, IDs,
		 * element types, etc. (e.g. '.my-class', '#my-id', 'div', etc.)
		 */
		const getLastMatchingAncestor = ( element, selectors ) => {
			let foundElement = null;

			while ( element && !foundElement ) {
				for ( const selector of selectors ) {
					if ( element.matches( selector ) ) {
						foundElement = element;
						break;
					}
				}

				element = element.parentElement;
			}

			return foundElement;
		}

		/**
		 * Establish the closest parent from an element matching
		 * a given list of selectors. Selectors can be css classes, IDs,
		 * element types, etc. (e.g. '.my-class', '#my-id', 'div', etc.)
		 */
		const getClosestMatchingAncestor = ( element, selectors ) => {
			let foundElement;

			for ( const selector of selectors ) {
				foundElement = element.closest( selector );
				if ( foundElement ) {
					break;
				}
			}

			return foundElement;
		}

		/**
		 * Main function to setup analytics.
		 */
		const setupAnalytics = () => {
			/**
			 * Returns the current page path.
			 */
			function getCurrentPagePath( pathname = '' ) {
				return ( pathname || window.location.pathname ).replace( /^\/|\/$/g, '' );
			}

			/**
			 * Returns the current page name.
			 */
			function getCurrentPageName( pathname = '' ) {
				return getCurrentPagePath( pathname ).replace( getLocaleInPagePathRegExp(), '' );
			}

			/**
			 * Returns the current page locale.
			 */
			function getCurrentPageLocale() {
				const currentPagePath = getLocaleInPagePathRegExp().exec( getCurrentPagePath() );
				return currentPagePath !== null && currentPagePath.length === 2 ? currentPagePath[1] : '';
			}
			/**
			 * Helper function to extract locale from page path.
			 */
			function getLocaleInPagePathRegExp() {
				return /^(af|als|am|an|ar|arc|as|ast|av|ay|az|ba|bel|bg|bm|bn|bo|br|bs|ca|ce|ckb|cs|csb|cv|cy|da|de|dv|dz|el|el\-po|en|en\-gb|eo|es|es\-mx|et|eu|fa|fi|fo|fr|fr\-be|fr\-ca|fr\-ch|fur|fy|ga|gd|gl|gn|gu|he|hi|hr|hu|hy|ia|id|ii|ilo|is|it|ja|ka|kal|kir|km|kn|ko|kk|ks|kv|la|li|lo|lv|lt|mk|ml|mwl|mn|mr|ms|mya|nah|nap|ne|nds|nl|nn|nb|non|nv|oci|or|os|pa|pl|ps|pt|pt\-br|qu|ro|ru|rup|sc|si|sk|skr|sl|snd|so|sq|sr|su|sv|ta|te|th|tl|tir|tr|tt|ty|udm|ug|uk|ur|uz|vec|vi|wa|xal|yi|yo|za|zh\-cn|zh\-hk|zh\-tw)(?:\/|$)/;
			}

			/**
			 * Returns the config for WPcom analytics. Sets various event props
			 * used in tracking, e.g. locale, page path, etc. Mainly used for Tracks
			 * event props.
			 */
			function getWPCOMAnalyticsDefaultConfig() {
								const currentGenericPageName = "logged-out-homepage";
				const cannonicalPath = null;
				return {
					// Current page props.
					currentPagePath: getCurrentPagePath(),
					currentPageName: getCurrentPageName(),
					
					currentGenericPageName: currentGenericPageName ?? getCurrentPageName( cannonicalPath ),
					currentPageLocale: getCurrentPageLocale(),

					// Page variation props.
					pageVariation: '',
					pagePersonalVariation: '',

					// Current user props.
					currentUserIdHash: "",
					currentUserIdHashShort: "",
					currentUserEmailHash: "",

					// Other misc. props.
					isHomepage: true,
					affiliateJSVersion: "1716355472",
				}
			}


			// When a8c-analytics:loaded is fired, start main event handling.
			document.addEventListener( 'a8c-analytics:loaded', () => {
				const cb            = window.a8cAnalytics.cb;
				const kit           = window.a8cAnalytics.kit;
				const config        = getWPCOMAnalyticsDefaultConfig();
				const configOptions = window.a8cAnalyticsConfig.fireAnalyticsOptions;

				// Extend config with any custom props.
				Object.assign( window.a8cAnalyticsConfig, config );

				// Backcompat. for `lpName` and `lpVariation` config properties.
				config.currentPageName = ! configOptions.currentPageName && 'logged-out-homepage' === configOptions.lpName ? configOptions.lpName : config.currentPageName;
				config.currentPageName = ! configOptions.currentPageName && 'logged-out-app-promo' === configOptions.lpName ? configOptions.lpName : config.currentPageName;

				// Backcompat. for `lpPersonalVariation` config property.
				config.pageVariation        = ! configOptions.pageVariation && configOptions.lpVariation ? configOptions.lpVariation : config.pageVariation;
				config.pagePersonalVariation = ! configOptions.pagePersonalVariation && configOptions.lpPersonalVariation ? configOptions.lpPersonalVariation : config.pagePersonalVariation;

				/**
				 * Applies linkers, e.g. for "forwarding" certain URL parameters between WordPress.com
				 * and other properties (e.g. Jetpack.com). Used for affiliate tracking, coupons, etc.
				 */
				const applyLinkers = () => {
					kit.linkQueryVars( [
						{
							includeRegExps: [
								/^(?:[^\/]+\.)?(?:wordpress|jetpack|woocommerce|crowdsignal|wpjobmanager)\.com(?:\/|$)/i,
							],
							linkQueryVars: [
								'aff',
								'affiliate',
								'cid', // Aff campaign ID.
								'sid', // Aff sub ID.
								'irclickid' // Impact Affiliate Click ID
							],
						},
						{
							includeRegExps: [
								/^(?:[^\/]+\.)?(?:wordpress|jetpack)\.com(?:\/|$)/i,
							],
							linkQueryVars: [
								'coupon',
							],
						},
					] );
				}

				/**
				 * Handles currencies. Gets the currency value from cookies, and sets the currency
				 * if the cookie is not present. Can also be overridden by setting the `currency` URL
				 * paramter.
				 */
				const fireCurrencyHandlers = () => {
					let currency = kit.getQueryVar( 'currency' ) || '';

					if ( ! currency && 'amex-business-in' === config.currentPageName ) {
						currency = 'USD'; // Special case for this LP.
					}
					if ( currency ) {
						kit.docCookies.setItem( 'landingpage_currency', currency, 31536000, '/', '.rootDomain' );
					}
				};

				/**
				 * Fires the `wpcom_page_view` Tracks event.
				*/
				const fireTracks = () => {
					const props = Object.assign( {}, kit.getQueryVars( '', kit.QUERY_PARAMS ), {
						// Page props.
						path: config.currentPagePath,
						name: config.currentPageName,
						locale: config.currentPageLocale,
						variation: config.pageVariation,
						personal_variation: config.pagePersonalVariation,

						// Back compat. LP props.
						lp_name: config.currentGenericPageName,
						lp_variation: config.pageVariation,
						lp_personal_variation: config.pagePersonalVariation,
						vph: window.innerHeight,
						vpw: window.innerWidth,
					} );
					window._tkq.push( [ 'recordEvent', 'wpcom_page_view', props ] );
				};
				function fireRedditAdvertisingPixel() {
					!function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement("script");t.src="https://www.redditstatic.com/ads/pixel.js",t.async=!0;var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s)}}(window,document);
					rdt('init','a2_ehx23cq176s3');
					rdt('track', 'PageVisit');
				}

				/**
				 * Handles the referral tracking.
				*/
				const fireAffiliateReferrals = () => {
					kit.attachScriptElement( 'https://s1.wp.com/wp-content/themes/h4/landing/marketing/js/affiliate-referrals.js?v=' + config.affiliateJSVersion );
				};

				/**
				 * Loads the Google Ads gtag.
				 */
				const loadGoogleAdsGtag = () => {
						kit.loadGtag( 'AW-946162814' );
				}

				/**
				 * Loads and fires the Google Analytics 4.
				*/
				const fireGoogleAnalyticsFour = () => {
					const gtagOptions = {
						'anonymize_ip': true,
						'use_amp_client_id': true
					};

					kit.loadGtag( 'G-1H4VG5F5JF', gtagOptions );
				}

				const fireParsely = ( trackingId ) => {
					kit.loadParselyTracker( trackingId );
				}

				const fireHotJar = () => { 
					if ( ! kit.pertainsToSTS() ) {
						kit.fireHotjar( 227769 );
					}
				}
				const fireHubspot = () => {
					if ( config.currentPageLocale !== 'es' ) {
						return;
					}
					kit.loadHubSpot( 145630858 );
					// TODO: Identify user via email
				}
				
				/**
				 * Loads and fires the Facebook Pixel.
				 */
				const fireFacebook = () => {
					kit.loadFacebook();
					fbq( 'init', '823166884443641' );
					fbq( 'track', 'PageView' );
				}

				/**
				 * Loads and fires Microsoft Clarity
				 */
				const fireMicrosoftClarity = () => {
					if ( window.clarity ) {
						return;
					}

					// Needs to be set prior to loading the external script.
					window.clarity =
						window.clarity ||
						function () {
							( window.clarity.q = window.clarity.q || [] ).push( arguments );
						};

					const clarityScript = kit.attachScriptElement( 'https://www.clarity.ms/tag/j0cc1i1dba' );

					document.body.appendChild( clarityScript );
				};

				const fireImpactAffiliate = () => {
					kit.loadImpactAffiliate( config.currentUserIdHash, config.currentUserEmailHash );
				}

				/**
				 * Handles scroll percentage tracking.
				 */
				const trackScrollPercentage = () => {
					const scrollPosition = window.pageYOffset;
					const pageHeight = document.body.scrollHeight - window.innerHeight;
					const scrollProgress = ( scrollPosition / pageHeight ) * 100;

					// Check if the user has scrolled to 25%, 50%, 75%, or 100% of the page
					if ( scrollProgress >= 25 && scrollProgress < 50 ) {
						dispatchScrollCustomEvent( 25 )
					} else if ( scrollProgress >= 50 && scrollProgress < 75 ) {
						dispatchScrollCustomEvent( 50 )
					} else if ( scrollProgress >= 75 && scrollProgress < 100 ) {
						dispatchScrollCustomEvent( 75 )
					} else if ( scrollProgress >= 100 ) {
						dispatchScrollCustomEvent( 100 )
					}
				}

				/**
				 * Dispatches a custom event with the scroll percentage.
				 */
				const dispatchScrollCustomEvent = ( scrollPercentage ) => {
					const event = new CustomEvent( `PageScrollPercentage${scrollPercentage}`, { detail: scrollPercentage } );
					window.dispatchEvent(event);
				}

				/**
				 * Handles the scroll tracking callback. E.g. firing Tracks and GA events.
				 */
				const scrollTrackingCallback = ( event ) => {
					const { detail: scrollPercentage } = event;
					const trackingProps = {};

					// Event props.
					trackingProps.percent = event.detail ?? 0;
					trackingProps.path = config.currentPagePath || '';
					trackingProps.name = config.currentPageName || '';
					trackingProps.locale = config.currentPageLocale || '';
					trackingProps.variation = config.pageVariation || '';
					trackingProps.personal_variation = config.pagePersonalVariation || '';
					trackingProps.lp_name = config.currentGenericPageName || '';
					trackingProps.lp_variation = config.pageVariation || '';
					trackingProps.lp_personal_variation = config.pagePersonalVariation || '';
					trackingProps.vph = window.innerHeight;
					trackingProps.vpw = window.innerWidth;

					tracksAnalyticsScrollEvent( trackingProps );
				}

				/**
				 * Dispatches a Tracks event for page scroll.
				 */
				const tracksAnalyticsScrollEvent = ( trackingProps ) => {
					window._tkq.push( [ 'recordEvent', 'wpcom_page_scroll', trackingProps ] );
				}

				// Call the trackScrollProgress function every time the user scrolls
				window.addEventListener( 'scroll', trackScrollPercentage );

				// Listen to events for specific scroll percentages, each event is only acted upon once.
				window.addEventListener( 'PageScrollPercentage25', scrollTrackingCallback, { once: true } )
				window.addEventListener( 'PageScrollPercentage50', scrollTrackingCallback, { once: true } )
				window.addEventListener( 'PageScrollPercentage75', scrollTrackingCallback, { once: true } )
				window.addEventListener( 'PageScrollPercentage100', scrollTrackingCallback, { once: true } )

				/**
				 * Handles click tracking for certain elements in Tracks and GA.
				 */
				const setupTracksGAClickTracking = () => {
					document.querySelector( 'body' ).addEventListener( 'click', ( event ) => {
						// We only care about clicks on certain elements.
						let { target: clickEventTarget } = event;

						// Check if clicked element is either within a .lp-record-click container or is itself a trackable element.
						const recordClickTarget = getClosestMatchingAncestor( clickEventTarget, [ '.lp-record-click' ] );
						if ( recordClickTarget || clickEventTarget.matches( 'a, button, .click-tracking-enabled' ) ) {
							clickEventTarget = recordClickTarget || clickEventTarget;

							// Initialize eventProps object with some defaults.
							const eventProps = {};
							eventProps.path = config.currentPagePath || '';
							eventProps.name = config.currentPageName || '';
							eventProps.lp_name = config.currentGenericPageName || '';
							eventProps.locale = config.currentPageLocale || '';
							eventProps.variation = config.pageVariation || '';
							eventProps.personal_variation = config.pagePersonalVariation || '';

							// Identify farthest and closest parent element.
							const selectors = [ '.lp-record-click', '.wpcom-masterbar.wpcom-header', '.lpc', '.lp-block', '.lp-module', 'section', 'post', 'article' ];
							const section = getLastMatchingAncestor( clickEventTarget, selectors );
							const container = getClosestMatchingAncestor( clickEventTarget, selectors );

							// Get class name and ID for container and add to props.
							eventProps.container_id = container ? container.getAttribute( 'id' ) : '';
							eventProps.container_class = container ? container.getAttribute( 'class' ) : '';
							eventProps.container = eventProps.container_id || eventProps.container_class;

							// What type of element have we clicked?
							eventProps.is_cta = clickEventTarget.matches( 'is-cta' ) ?? false;
							eventProps.is_in_header_nav = clickEventTarget.classList.contains('x-nav-link') || clickEventTarget.classList.contains('x-dropdown-link') || clickEventTarget.classList.contains('x-menu-link') || section === 'lpc-header-nav' || section === 'wpcom-masterbar.wpcom-header';
							const isClickedElementButton = clickEventTarget.classList.contains('lpc-button') || clickEventTarget.classList.contains('button') || clickEventTarget.classList.contains('wp-block-button__link');
							const isParentElementButton = clickEventTarget.parentElement && (clickEventTarget.parentElement.classList.contains('lpc-button') || clickEventTarget.parentElement.classList.contains('button') || clickEventTarget.parentElement.classList.contains('wp-block-button__link'));
							eventProps.is_button = isClickedElementButton || isParentElementButton;

							// Link data.
							eventProps.href = clickEventTarget.getAttribute( 'href' ) || '';
							eventProps.target = clickEventTarget.getAttribute( 'target' ) || '';
							eventProps.text = clickEventTarget.innerText || '';
							eventProps.use_beacon = true;
							eventProps.vph = window.innerHeight;
							eventProps.vpw = window.innerWidth;

							// Emit tracking event in Tracks and GA.
							window._tkq.push( [ 'recordEvent', 'wpcom_link_click', eventProps ] );

							// TODO: Implement a click delay on navigation links and CTA buttons to improve data integrity.
							// if ( props.is_in_header_nav || props.is_cta || props.is_button ) {
							// 	if ( props.href && 0 !== props.href.indexOf( '#' ) && -1 !== [ '', '_top', '_self' ].indexOf( props.target ) ) {
							// 		event.preventDefault(); // Allow time for trackers to record the click.

							// 		setTimeout( function() {
							// 			document.location = props.href;
							// 		}, 300 );
							// 	}
							// }

						}
					});
				}


				/**
				 * Add cookie and stats tracking for the Landpack language picker.
				 */
				const setupLocaleChangeTracking = () => {

					function createLocaleCookie( locale ) {
						const cookieDomain = '.wordpress.com';
						const cookieName   = 'wpcom_locale';

						const date = new Date();
						date.setTime( date.getTime() + ( 5 * 365 * 24 * 60 * 60 * 1000 ) );

						const expires = " expires=" + date.toGMTString();
						document.cookie = cookieName + '=' + locale + ';' + expires +'; path=/; domain=' + cookieDomain;
					}

					function createStatsRequest( locale, href ) {
						const languageChangeStat = new Image();
						languageChangeStat.onload = () => window.location.href = href;

						languageChangeStat.onerror = languageChangeStat.onload;
						languageChangeStat.src     = 'https://pixel.wp.com/g.gif?v=wpcom-no-pv&x_language-switcher=manual-switch-' + locale + '&rm=' + Math.random();
					}

					document.body.addEventListener( 'click', ( event ) => {
						const { target } = event;

						if ( target.matches( '.lp-language-picker a[lang]' ) ) {
							event.preventDefault();

							const code = target.getAttribute( 'lang' );
							const href = target.getAttribute( 'href' );

							createLocaleCookie( code );
							createStatsRequest( code, href );
						}
					});
				}

				/**
				 * Loads and fires the Bing tracking pixel.
				 */
				const fireBing = () => {
					( function( w, d, t, r, u ) {
						var f, n, i;
						w[ u ] = w[ u ] || [], f = function() {
							var o = { ti: "4074038" };
							o.q = w[ u ], w[ u ] = new UET( o ), w[ u ].push( "pageLoad" )
						}, n = d.createElement( t ), n.src = r, n.async = 1, n.onload = n.onreadystatechange = function() {
							var s = this.readyState;
							s && s !== "loaded" && s !== "complete" || ( f(), n.onload = n.onreadystatechange = null )
						}, i = d.getElementsByTagName( t )[ 0 ], i.parentNode.insertBefore( n, i )
					} )( window, document, "script", "//bat.bing.com/bat.js", "uetq" );
				}

				/**
				 * Loads and fires the LinkedIn Insight tracking.
				 */
				const fireLinkedIn = () => {
					kit.loadLinkedinInsight( "7224796" );
					if ( window.lintrk ) {
						window.lintrk( 'track', { conversion_id: 19839604 } );
					}
				}

				/**
				 * Adds a click event for Facebook pixel tracking on the /webinar sub pages.
				 */
				const trackFacebookWebinarClicks = () => {
					const facebookPixelURL = 'https://www.facebook.com/tr?id=759053181468957&ev=SubscribedButtonClick&noscript=1';

					const elementsToTrack = document.getElementsByClassName( 'webinar-facebook-click-track' );

					const handleFacebookClickEvent = ( event ) => {
						const facebookImgPixel = document.createElement( 'img' );
						facebookImgPixel.width = 1;
						facebookImgPixel.height = 1;
						facebookImgPixel.src = facebookPixelURL;

						document.body.appendChild( facebookImgPixel );
					}

					Array.from( elementsToTrack ).forEach( ( element ) => element.addEventListener( 'click', handleFacebookClickEvent ));
				}

				// Apply the URL parameter linkers.
				applyLinkers();

				// Add "essential" trackers to queue.
				cb.addTracker( 'essential', false, fireCurrencyHandlers );

				// Add "analytics" trackers to queue.
				cb.addTracker( 'analytics', false, fireTracks );
				cb.addTracker( 'analytics', false, fireAffiliateReferrals );
				cb.addTracker( 'analytics', false, setupTracksGAClickTracking );
				cb.addTracker( 'analytics', false, trackScrollPercentage );
				cb.addTracker( 'analytics', false, setupLocaleChangeTracking );
				cb.addTracker( 'analytics', true, fireGoogleAnalyticsFour );
				cb.addTracker( 'analytics', true, () => fireParsely( 'wordpress.com' ) );
				cb.addTracker( 'analytics', true, fireHubspot );

				// Add "advertising" trackers to queue.
				cb.addTracker( 'advertising', true, loadGoogleAdsGtag );
				cb.addTracker( 'advertising', true, fireFacebook );
				// cb.addTracker( 'advertising', true, trackFacebookWebinarClicks );
				cb.addTracker( 'advertising', true, fireBing );
				// cb.addTracker( 'advertising', true, fireRedditAdvertisingPixel );
				// cb.addTracker( 'advertising', true, fireLinkedIn );
				cb.addTracker( 'advertising', true, fireHotJar );
				// cb.addTracker( 'advertising', true, fireMicrosoftClarity ); - Disabling for now.
				cb.addTracker( 'advertising', true, fireImpactAffiliate );

				// Maybe fire trackers now, via cookie banner, based on bucketed consent.
				cb.maybeFireTrackers();
			});
		};
		// CCPA - Do Not Sell My Data.
		document.addEventListener( 'a8c-analytics:loaded-is-ccpa', ( event ) => {
			const { detail } = event;
			const isCCPAEligible = JSON.parse( detail ).isCCPA;

			if ( ! isCCPAEligible ) {
				document.querySelectorAll( '[data-is-ccpa-dnsd]' ).forEach( ( element ) => {
					const parent = element.parentNode;
					const parentTagName = parent.tagName.toLowerCase();

					// If the link in a part of a list, remove the entire parent item.
					// Otherwise, remove only the link element.
					( parentTagName === 'li' ? parent : element ).remove();
				} );
				return;
			}

			document.querySelector( '[data-is-ccpa-dnsd-trigger]' ).onclick = ( event ) => {
				event.preventDefault();
				window.a8cAnalytics.dnsd.show();
			};
		} );

		if ( window.defQueue && defQueue.isLOHP && defQueue.isLOHP === 2020 ) {
			defQueue.items.push( setupAnalytics );
		} else {
			setupAnalytics();
		}
	} )();
	

