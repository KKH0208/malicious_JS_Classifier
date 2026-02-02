/* 元のURL: https://kaspersky.com */

    var kameleoonLoadingTimeout = 1000;
    window.kameleoonQueue = window.kameleoonQueue || [];
    window.kameleoonStartLoadTime = new Date().getTime();
    if (!document.getElementById("kameleoonLoadingStyleSheet") && !window.kameleoonDisplayPageTimeOut) {
        var kameleoonS = document.getElementsByTagName("script")[0];
        var kameleoonCc = "* { visibility: hidden !important; background-image: none !important; }";
        var kameleoonStn = document.createElement("style");
        kameleoonStn.type = "text/css";
        kameleoonStn.id = "kameleoonLoadingStyleSheet";
        if (kameleoonStn.styleSheet) {
            kameleoonStn.styleSheet.cssText = kameleoonCc;
        } else {
            kameleoonStn.appendChild(document.createTextNode(kameleoonCc));
        }
        kameleoonS.parentNode.insertBefore(kameleoonStn, kameleoonS);
        window.kameleoonDisplayPage = function(fromEngine) {
            if (!fromEngine) {
                window.kameleoonTimeout = true;
            }
            if (kameleoonStn.parentNode) {
                kameleoonStn.parentNode.removeChild(kameleoonStn);
            }
        };
        window.kameleoonDisplayPageTimeOut = window.setTimeout(window.kameleoonDisplayPage, kameleoonLoadingTimeout);
    }


