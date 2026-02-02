/* 元のURL: https://ebay.com */

    (function(){
        const pre = window.GHpre || {};
        function hide() {
            const wrap = document.getElementById('gh-ident-srvr-wrap');
            if (wrap) { wrap.classList.add('gh-identity__srvr--unrec') };
        }
        if (pre.userAuth) {
            const nm = document.getElementById('gh-ident-srvr-name');
            const user = GH.C.siteId === '77' ? pre.userId || pre.fn : pre.fn || pre.userId;
            nm && user ? nm.textContent = decodeURIComponent(user) : hide();
        } else {
            hide();
        }
    })();


