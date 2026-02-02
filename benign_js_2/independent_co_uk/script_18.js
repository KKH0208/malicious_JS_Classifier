/* 元のURL: https://independent.co.uk */
// 外部JS: https://experianmatch.info/log.js?publisherid=MP001
//start
let ardm = {
    getCookieMatch: function (cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    },
    log: function (txt) {
        if (typeof txt == 'string') {
            console.log('ARDM: onpage cmpHandler: ' + txt);
        } else if (txt.constructor === Array) {
            txt.unshift('ARDM: onpage cmpHandler');
            console.log(txt);
        } else {
            txt.fn = 'ARDM: onpage cmpHandler';
            console.log(txt);
        }
    },
    go: function () {
        if (false) {
            this.pixel(null);
        } else if (window.hasOwnProperty('__cmp')) {
            this.log('ardm: THIS IS TCF1 - currently not implemented. Will not call endpoint 2.');
        } else if (window.hasOwnProperty('__tcfapi')) {
            // alert('TCF2 detected');
            // see https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework/blob/master/TCFv2/IAB%20Tech%20Lab%20-%20CMP%20API%20v2.md
            this.log('ardm: will detect TFC string & call endpoint 2 for TCF V 2');
            __tcfapi('getTCData', 2, (tcData, success) => {
                //console.log('getTCData callback', tcData, success);
                if (!success) {
                    this.log('TCF2 - did not get success for CMP callback');
                    return;
                }
                if (typeof tcData['tcString'] != 'string' || tcData['tcString'].length < 1) {
                    this.log(['TCF 2 getTCData callback - got bad string for tcData - will not log this:', tcData]);
                    return;
                }
                this.pixel(tcData);
            });

            __tcfapi('addEventListener', 2, (tcData, success) => {
                if (success && tcData.eventStatus === 'useractioncomplete') {
                    this.log('__tcfapi - GOING TO PING endpoint - user interaction is finished');
                    this.pixel(tcData);
                } else {
                    this.log(`__tcfapi event listener ignored event: ${tcData.eventStatus}`);
                }
            });

        } else {
            this.log('ardm: cannot detect TCF version - will not call endpoint 2 at all :-(');
        }
    },
    pixel: function (tcData) {

        var cookieConsent = false; // initially set to false
        var cookieParam = '';

        //check for cookieconsent
        if (tcData==null) {
            
            if (!cookieConsent) { this.log("Cookie consent not given"); return; }
        }

        let domain = null;
        try {
            domain = window.location.hostname
        }
        catch {
            // browser failed to get domain from page
        }

        let suburl = null;
        try {
            root = window.location.origin;
            suburl = window.location.href.replace(root, "");
            suburl = suburl.match()[0];
            suburl = encodeURIComponent(suburl);
        }
        catch {
            // browser failed to get domain from page
        }

        let dnt = null;
        try {
            dnt = navigator.doNotTrack;
        }
        catch {
            // browser failed to allow navigator.doNotTrack
        }
 
        //calculate fpids
        var fpid_val='';
if (fpid_val.slice(-1)==',') { fpid_val = fpid_val.slice(0,-1) };

        let qs = `?pxl=1&fpid=${fpid_val}&publisherid=MP001&dnt=${dnt}&domain=${domain}&gdprApplies=${tcData['gdprApplies']}&tcString=${tcData['tcString']}${cookieParam}`;
        p = document.createElement('img');
        p.id = 'ardm_endpoint2';
        p.setAttribute('src', `https://experianmatch.info/log${qs}`);
        document.head.appendChild(p);


    }
}
ardm.go();
//end

