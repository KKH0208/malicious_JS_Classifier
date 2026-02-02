/* 元のURL: https://w3.org */

    var myFont = new FontFaceObserver('Noto Sans');

    Promise.all([myFont.load()]).then(function () {
        document.documentElement.className += " fonts-loaded";
    });

    (function () {
        var linkEl = document.getElementById('advanced-stylesheet');
        if (window.matchMedia && window.matchMedia(linkEl.media).matches) {
            var script = document.createElement('script');
            script.src = 'https://www.w3.org/assets/website-2021/js/main.js?ver=1.4';
            script.defer = true;
            document.querySelector('head').appendChild(script);
            (function (H) {
                H.className = H.className.replace(/\bno-js\b/, 'js')
            })(document.documentElement);
        }
    })();


