/* 元のURL: https://criteo.com */

        var $ = jQuery.noConflict();
        const lightSchemeIcon = document.querySelector('link#lightico');
        const darkSchemeIcon = document.querySelector('link#darkico');
        matcher = window.matchMedia('(prefers-color-scheme: dark)');
        matcher.addListener(onUpdate);
        onUpdate();


        function onUpdate() {
            if (matcher.matches) {
                lightSchemeIcon.remove();
                document.head.append(darkSchemeIcon);
            } else {
                document.head.append(lightSchemeIcon);
                darkSchemeIcon.remove();
            }
        }
    

