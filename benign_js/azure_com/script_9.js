/* 元のURL: https://azure.com */

        var isModernBrowser = (
            'fetch' in window &&
            'assign' in Object
        );

        if ( !isModernBrowser ) {
            var scriptElement = document.createElement('script');

            scriptElement.async = false;
            scriptElement.src = '/acom/etc.clientlibs/cascade.component.authoring/clientlibs/clientlib-polyfills/resources/ie11-polyfills.js';

            var polyfillScriptElement = document.querySelector('#ie11-polyfill-script');

            if (polyfillScriptElement) {
                polyfillScriptElement.parentNode.insertBefore(scriptElement, polyfillScriptElement.nextSibling);
            }
        }
    

