/* 元のURL: https://windows.com */


        WcpConsent.init("en-us", "cookie-banner", function (err, _siteConsent) {
            if (err != undefined) {
                return error;
            } else {
                siteConsent = _siteConsent;
            }
        }, onConsentChanged);

        function onConsentChanged() {
            var msccvalue = window.getCookie("MSCC");
            window.mldcc = "MSCC:" + GetCategoryFromMSCC(msccvalue.toLowerCase());
        }

        $(window).on('load', function (e) {
            ShowHideManageCookies('Manage cookies');
        });
        /* updating cookie when user hit back button */
        function checkAndUpdateMLDCC() {
            var msccCookieValue = window.getCookie("MSCC");
            if (msccCookieValue && msccCookieValue.indexOf('c1=') != -1) {
                var mldccFromCookie = "c1=" + msccCookieValue.split('c1=')[1];
                if (mldccFromCookie !== window.mldcc.split(":")[1]) {
                    var intervalId = setInterval(() => {
                        onConsentChanged();
                        if (mldccFromCookie === window.mldcc.split(":")[1]) {
                            clearInterval(intervalId);
                        }
                    }, 500);
                }
            }
        }
        checkAndUpdateMLDCC();
    

