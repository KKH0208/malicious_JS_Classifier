/* 元のURL: https://sentry.io */

        (function(w, l) {
          w[l] = w[l] || [];
          if(/in-app/.test(window.location.pathname)){
            w[l].push({ 'disableDrift': 'true' })
          }
          w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
        })(window, 'dataLayer');
      

