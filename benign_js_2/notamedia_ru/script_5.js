/* 元のURL: https://notamedia.ru */

        (function (ratingRuneta) {
            var rrcid = new URLSearchParams(window.location.search).get(ratingRuneta);
            if (rrcid) window.sessionStorage.setItem(ratingRuneta, rrcid);
            if (!(rrcid = window.sessionStorage.getItem(ratingRuneta))) return;
            (function (m, e, t, r, i, k, a) {
                m[i] = m[i] || function () {
                    (m[i].a = m[i].a || []).push(arguments)
                };
                m[i].l = 1 * new Date();
                for (var j = 0; j < document.scripts.length; j++) {
                    if (document.scripts[j].src === r) {
                        return;
                    }
                }
                k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a
                )
            })
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
            ym(92096748, "init", {
                'clickmap': false,
                'trackLinks': false,
                'accurateTrackBounce': true,
                'webvisor': false,
                'params': {
                    'rrcid': rrcid
                }
            });
        })('rrcid');

    

