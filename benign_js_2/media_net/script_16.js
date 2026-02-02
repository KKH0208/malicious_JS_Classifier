/* 元のURL: https://media.net */

        window.addEventListener('load', (event) => {

            var cookiesToBeSkipped = ['usprivacy', 'usp_status', 'OptanonConsent', 'varCook', 'OptanonAlertBoxClosed', 'pubconsole_session', 'JSESSIONID', 'amsg', 'mnet_optout'];

            if(typeof window.mnetGetCookie !== 'function') {
              return;
            }

            if(window.mnetGetCookie('mnet_optout') != 1) {
              return;
            }

            var i, x, y, ARRcookies = document.cookie.split(";");

            if( ARRcookies.length == 0 ) {
              return;
            }

            for (i = 0; i < ARRcookies.length; i++) {
                x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
                y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
                x = x.replace(/^\s+|\s+$/g, "");

                if (! cookiesToBeSkipped.includes(x)) {
                    // Delete cookies.
                    document.cookie = x + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=.media.net;SameSite=None;Secure=true;';
                    document.cookie = x + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;domain=.www.media.net;SameSite=None;Secure=true;";
                    document.cookie = x + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=.media.net;path=/;SameSite=None;Secure=true;';
                    document.cookie = x + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;domain=.www.media.net;path=/;SameSite=None;Secure=true;";
                    document.cookie = x + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=.media.net;';
                    document.cookie = x + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;domain=.www.media.net;";
                    document.cookie = x + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=.media.net;path=/;';
                    document.cookie = x + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;domain=.www.media.net;path=/;";
                }
            }

        });
    

