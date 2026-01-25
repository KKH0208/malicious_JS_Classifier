/* 元のURL: https://nature.com */

    (function(w, d) {
        w.config = w.config || {};
        w.config.mustardcut = false;

        
        if (w.matchMedia && w.matchMedia('only print, only all and (prefers-color-scheme: no-preference), only all and (prefers-color-scheme: light), only all and (prefers-color-scheme: dark)').matches) {
            w.config.mustardcut = true;
            d.classList.add('js');
            d.classList.remove('grade-c');
            d.classList.remove('no-js');
        }
    })(window, document.documentElement);


