/* 元のURL: https://launchpad.net */

        var raw = null;
        if (LP.devmode) {
           raw = 'raw';
        }
        YUI.GlobalConfig = {
            combine: true,
            comboBase: '/+combo/rev1d08ffb47b836b8a4c9a0f11318dfdea7420ab6d/?',
            root: 'yui/',
            filter: raw,
            debug: false,
            fetchCSS: false,
            maxURLLength: 2000,
            groups: {
                lp: {
                    combine: true,
                    base: '/+combo/rev1d08ffb47b836b8a4c9a0f11318dfdea7420ab6d/?lp/',
                    comboBase: '/+combo/rev1d08ffb47b836b8a4c9a0f11318dfdea7420ab6d/?',
                    root: 'lp/',
                    // comes from including lp/meta.js
                    modules: LP_MODULES,
                    fetchCSS: false
                }
            }
        }

