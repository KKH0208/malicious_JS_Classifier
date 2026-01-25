/* 元のURL: https://android.com */
// 外部JS: https://www.gstatic.com/marketing-cms/reviewed-scripts/gtm/gtm.js?id=GTM-KZDPH9F&cookieCategory=2A
if (window.trustedTypes) {
  window.trustedTypes.createPolicy('default', {
    createScriptURL: (string) => {
      const url = new URL(string, document.baseURI);
      if (url.origin = window.location.origin ||
              url.origin === 'www.googletagmanager.com' ||
              url.origin === 'www.google-analytics.com')
        return url.href
        throw new TypeError('createScriptURL: invalid URL')
    }
  });
}

const params = new URL(document.currentScript.src).searchParams;
const id = params.get('id');
const cookieCategory = params.get('cookieCategory');

window.dataLayer = window.dataLayer || [];

function glueCookieNotificationBarLoaded() {
  if (!id) {
    return;
  }

  window.dataLayer.push(
      {event: 'pageload', custom_timestamp: new Date().getTime()},
      {custom_timestamp: undefined})
  window.dataLayer.push({
    'locale': navigator.languages[0],
    'page_locale': document.documentElement.getAttribute('locale')
  });
  window.dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});

  const firstScript = document.getElementsByTagName('script')[0];
  const newScript = document.createElement('script');
  newScript.async = true;
  newScript.src = `https://www.googletagmanager.com/gtm.js?id=${id}`;

  firstScript.parentNode.insertBefore(newScript, firstScript);
}

// 2C cookie category sites do not initialize the cookie bar and therefore
// will never call glueCookieNotificationBarLoaded unless we do it manually
// here
const SKIP_COOKIE_BAR_INITIALIZATION = '2C';

if (cookieCategory === SKIP_COOKIE_BAR_INITIALIZATION) {
  glueCookieNotificationBarLoaded();
}


