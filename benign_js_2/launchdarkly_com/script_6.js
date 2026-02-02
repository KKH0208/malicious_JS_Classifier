/* 元のURL: https://launchdarkly.com */

    function CookieConsentCallback_OnAccept() {
      if (CookieConsent.consent.marketing) {
        window.mutiny.client.optIn();
      }
    }
  

