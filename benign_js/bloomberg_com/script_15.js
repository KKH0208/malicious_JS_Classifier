/* 元のURL: https://bloomberg.com */

            (function(){
                function getCookieValue(name) {
                    const matches = document.cookie.match("(^|;) ?" + name + "=([^;$]*)");
                    return matches ? matches[2] : "";
                }
                const isKisa = true && getCookieValue("country_code") === "KR";
                window._sp_queue = [];
                window._sp_ = {
                    config: {
                        accountId: 1425,
                        authCookie: "_breg-uid",
                        baseEndpoint: "https://sourcepointcmp.bloomberg.com",
                        propertyId: isKisa ? 29886 : 31489,
                        propertyHref: isKisa ? "https://kisa.bloomberg.com" : "https://mc.bloomberg.com",
                        joinHref: true,
                        targetingParams: {
                            isKisa: isKisa,
                            view: window.isTerminal ? "terminal" : "web"
                        },
                        usnat: {
                            includeUspApi: true
                        },
                        gdpr: {},
                        events: {}
                    }
                }
            })();
        

