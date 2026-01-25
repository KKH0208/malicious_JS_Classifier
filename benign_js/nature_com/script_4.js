/* 元のURL: https://nature.com */

    window.initGTM = function() {
        if (window.config.mustardcut) {
            (function (w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
                var f = d.getElementsByTagName(s)[0],
                        j = d.createElement(s),
                        dl = l != 'dataLayer' ? '&l=' + l : '';
                j.async = true;
                j.src = 'https://sgtm.nature.com/gtm.js?id=' + i + dl;
                f.parentNode.insertBefore(j, f);
                performance.mark('SN GPT Ads gtm-container-fired');
            })(window, document, 'script', 'dataLayer', 'GTM-MRVXSHQ');
        }
    }


