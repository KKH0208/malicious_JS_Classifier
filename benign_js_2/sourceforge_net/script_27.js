/* 元のURL: https://sourceforge.net */

    (function () {
        function load_bombora() {
            /*global _ml:true, window */
            _ml = window._ml || {};
            
            _ml.eid = '771';
            _ml.fp = '85a8e1e0-276f-4b56-acd3-1e198fab0fc8';  
            var s = document.getElementsByTagName('script')[0], cd = new Date(), mltag = document.createElement('script');
            mltag.type = 'text/javascript';
            mltag.async = true;
            mltag.defer = true;
            mltag.src = '//ml314.com/tag.aspx?' + cd.getDate() + cd.getMonth() + cd.getFullYear();
            s.parentNode.insertBefore(mltag, s);
        }
        bizx.cmp.ifConsent({ purposes: 'all', vendors: 'bombora'}, load_bombora);
    })();


