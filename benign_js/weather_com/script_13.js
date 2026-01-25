/* 元のURL: https://weather.com */

      window.dprSdkLoaded = function() {
        if (window.top === window.self ) {
          window.DprSdk.init({
            getApplicationInfo: () => ({"id":"weather.com","version":"2.0.0"}),
            getUserRegime: () => 'jp',
          });
        } else  {
          try {
            window.DprSdk = window.top.DprSdk;
          } catch (e) {
            // do nothing.
          }
        }
      }
    

