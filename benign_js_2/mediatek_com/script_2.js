/* 元のURL: https://mediatek.com */

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }


  // Determine actual values based on your own requirements, 
  gtag('consent', 'default', {
    'analytics_storage': 'denied',
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    // Use region, to specifiy where this default should be applied.
    'region': ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR",
               "DE", "GR", "HU", "IS", "IE", "IT", "LV", "LI", "LT", "LU",
               "MT", "NL", "NO", "PL", "PT", "RO", "SK", "SI", "ES", "SE",
               "CH"
              ]
  });

  // Step 3: This snippet sends consent updates from the HubSpot cookie banner to Google's tags using Consent Mode v2
  var _hsp = window._hsp = window._hsp || []; 
  _hsp.push(['addPrivacyConsentListener', function(consent) {
    var hasAnalyticsConsent = consent && (consent.allowed || (consent.categories && consent.categories.analytics));
    var hasAdsConsent = consent && (consent.allowed || (consent.categories && consent.categories.advertisement));

    gtag('consent', 'update', {
      'ad_storage': hasAdsConsent ? 'granted' : 'denied',
      'analytics_storage': hasAnalyticsConsent ? 'granted' : 'denied',
      'ad_user_data': hasAdsConsent ? 'granted' : 'denied',
      'ad_personalization': hasAdsConsent ? 'granted' : 'denied'
    });
  }]);


