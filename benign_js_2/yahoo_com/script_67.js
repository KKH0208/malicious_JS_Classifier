/* 元のURL: https://yahoo.com */

    (function(w) {
        if (w.YAHOO && w.YAHOO.i13n && w.YAHOO.i13n.Rapid) {
            YAHOO.i13n.SPACEID = '2023538075';
            var enableApvBeacon = true;
            var clientOnly = 1;
            var rapidConfig = {"click_timeout":200,"keys":{"_rid":"2o96q69kg29d8","abk":"","colo":"gq1","mrkt":"us","p_sec":"default","partner":"none","site":"fp","uh_vw":0,"pt":"home","navtype":"server","ver":"megastrm","version":"US","uloc":"AAEBAQJERQIEAZDkmwMEABENxAUEAa-p0QcEACPLnAgEAWVvWA","dmi_consent":false},"perf_navigationtime":2,"test_id":["900","seamless"],"tracked_mods_viewability":{"module-sda":"sda","module-featureBar":"featurebar","module-financeUpsellTicker":"f-upsell-HPStream","module-ntk":"strm","module-electionStats":"app-electionStats","module-stream":"strm","module-trending":"tc-ts","module-weather":"app-wea","module-scores":"app-scor","module-horoscope":"app-hor","module-footer":"footer","module-featureBarFull":"featurebar"},"viewability":true,"yql_host":"udc.yahoo.com","yql_path":"/v2/public/yql","tag_id":"G-B40QGCQW3G"};
            rapidConfig.spaceid = YAHOO.i13n.SPACEID;

            if(typeof clientOnly !== 'undefined') {
                rapidConfig.client_only = clientOnly;
            }
            // beacon apv for mobile web
            if (enableApvBeacon) {
                rapidConfig.apv_callback = function(apvObj) {
                    try {
                        if ('2023538075' === YAHOO.i13n.SPACEID) {
                            var img = new Image();
                            img.src = '/info/p.gif?beaconType=apv&sp=' + YAHOO.i13n.SPACEID
                                + '&device=desktop&intl=US&pixel_pos='
                                + apvObj.pixel_pos + '&scroll_dir='
                                + apvObj.scroll_dir;
                        }
                    } catch (e) {}
                };
            }

            // ensure webworker is loaded from yaho.com cdn path
            YAHOO.i13n.WEBWORKER_FILE = '/__rapid-worker-1.2.js';

            // setup rapid instance
            YAHOO.i13n.rapidInstance = w.rapidInstance = w.YAHOO.i13n.Rapid(rapidConfig);

            // expose rapid config for homepage-viewer client
            if (!w.rapidPageConfig) {
                w.rapidPageConfig = {
                    rapidConfig: rapidConfig
                }
            }
        }
    }(window));


