/* 元のURL: https://nature.com */

    (function(w,d,t) {
        function cc() {
            var h = w.location.hostname;
            if (h.indexOf('preview-www.nature.com') > -1) return;
            var e = d.createElement(t),
                s = d.getElementsByTagName(t)[0];
            if (h.indexOf('nature.com') > -1) {
                e.src = 'https://cmp.nature.com/production_live/en/consent-bundle-8-99.js';
                e.setAttribute('onload', "initGTM(window,document,'script','dataLayer','GTM-MRVXSHQ')");
            } else {
                e.src = '/static/js/cookie-consent-es5-bundle-8d962b73c2.js';
                e.setAttribute('data-consent', h);
            }
            s.insertAdjacentElement('afterend', e);
        }
        cc();
    })(window,document,'script');


