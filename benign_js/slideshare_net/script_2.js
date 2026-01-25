/* 元のURL: https://slideshare.net */

          performance.mark('gtm.start');
          (function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            j.onload = function () {
              performance.mark('gtm.end');
              performance.measure('gtm', 'gtm.start', 'gtm.end');
            };
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-M36RG8PT');
        

