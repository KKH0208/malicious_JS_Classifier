/* 元のURL: https://sourceforge.net */

    bizx.cmp.ifConsent({ purposes: ['storage', 'measurement'], vendors: 'google-analytics'}, function () {
        /* jshint ignore:start */
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
        /* jshint ignore:end */

        window.dataLayer = window.dataLayer || [];
        function gtag(){ window.dataLayer.push(arguments); }
        window.gtag = window.gtag || gtag;
        bizx.cmp.embedScript("https://www.googletagmanager.com/gtag/js");
        gtag('js', new Date());
        gtag('set', {
            'page_location': 'https://sourceforge.net/',
        });
    });


