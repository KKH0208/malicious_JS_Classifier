/* 元のURL: https://kaspersky.com */

    window.kameleoonIframeURL = "/content-public/analytics-scripts/kameleoon/com/kameleoon_static_file.html";
    window.kameleoonLightIframe = false;
    var kameleoonIframeOriginElement = document.createElement("a");
    kameleoonIframeOriginElement.href = kameleoonIframeURL;
    window.kameleoonIframeOrigin = kameleoonIframeOriginElement.origin || (kameleoonIframeOriginElement.protocol + "//" + kameleoonIframeOriginElement.hostname);
    if (location.href.indexOf(window.kameleoonIframeOrigin) !== 0) {
        window.kameleoonLightIframe = true;
        var kameleoonProcessMessageEvent = function(event) {
            if (window.kameleoonIframeOrigin === event.origin && event.data.slice && event.data.slice(0,9) == "Kameleoon") {
                window.removeEventListener("message", kameleoonProcessMessageEvent);
                window.kameleoonExternalIFrameLoaded = true;
                if (window.Kameleoon) {
                    Kameleoon.Utils.runProtectedScript(event.data);
                    Kameleoon.Analyst.load();
                } else {
                    window.kameleoonExternalIFrameLoadedData = event.data;
                }
            }
        };
        if (window.addEventListener) {
            window.addEventListener("message", kameleoonProcessMessageEvent, false);
        }
        var iframeNode = document.createElement("iframe");
        iframeNode.src = kameleoonIframeURL;
        iframeNode.id = "kameleoonExternalIframe";
        iframeNode.style = "float: left !important; opacity: 0.0 !important; width: 0px !important; height: 0px !important;";
        document.head.appendChild(iframeNode);
    }


