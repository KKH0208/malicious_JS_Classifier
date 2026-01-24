(function (window, document) {
        const ready = () => {
            setTimeout(() => {
                const gnInstArea = document.getElementById("gn_interstitial_area");
                // SP インステcloseボタン
                const closeBtn1 = document.querySelector('.is5x7as_closeTarget');
                // SP インステcloseボタン
                const closeBtn2 = document.querySelector('.mobile_close');

                if (!gnInstArea && !closeBtn1 && !closeBtn2) {
                    window._fluxtag.refresh();
                    return;
                }
                if (closeBtn1) {
                    closeBtn1.addEventListener("click", function () {
                        window._fluxtag.refresh();
                    }, false);
                }
                
                if (closeBtn2) {
                    closeBtn2.addEventListener("click", function () {
                        window._fluxtag.refresh();
                    }, false);
                }
            }, 200);  
        };
        if (window.document.readyState === 'loading') {
            window.addEventListener('DOMContentLoaded', () => {
                ready();
            }, false);
        } else {
            ready();
        }
    })(window, document);