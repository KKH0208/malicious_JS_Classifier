/* 元のURL: https://ea.com */

    
    if (!CSS.supports('width', 'calc((var(--test))')) {
        window.ShadyCSS = {
            shimcssproperties: true
        };
    }

    document.addEventListener('nds.typeKit.active', function() {
        document.querySelector('html').removeAttribute('wf-loading');
    });


