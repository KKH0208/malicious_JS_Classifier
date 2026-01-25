/* 元のURL: https://gitlab.com */

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}

  const defaultConsents = window.dataLayer.filter(item => item.length && Array.from(item).indexOf('default') >= 0);

  if(defaultConsents.length <= 2) {
    gtag('consent', 'default', {
      'analytics_storage': 'granted',
      'ad_storage': 'granted',
      'ad_user_data': 'granted',
      'functionality_storage': 'granted',
      'ad_personalization': 'granted',
      'wait_for_update': 500
    });
    gtag('consent', 'default', {
      'analytics_storage': 'denied',
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'functionality_storage': 'denied',
      'ad_personalization': 'denied',
      'region': [
        'AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT','LV','LT','LU','MT','NL','PL','PT','RO','SK','SI','ES','SE','IS','LI','NO','RU','GB','PE','CO','KR','CA-QC'
      ],
      'wait_for_update': 500
    });
  }

  window.geofeed = (options) => {
    dataLayer.push({
      'event': 'OneTrustCountryLoad',
      'oneTrustCountryId': options.country.toString(),
      'oneTrustStateId': options.state?.toString()
    });
  }


