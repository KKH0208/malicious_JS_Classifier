/* 元のURL: https://cisco.com */

    window['adrum-start-time'] = new Date().getTime();
    window['environ'] = "prod";

    ((config) => {
        config.appKey = "AD-AAB-ABZ-DKA";
        config.adrumExtUrlHttp = "http://cdn.appdynamics.com";
        config.adrumExtUrlHttps = "https://cdn.appdynamics.com";
        config.beaconUrlHttp = "http://pdx-col.eum-appdynamics.com";
        config.beaconUrlHttps = "https://pdx-col.eum-appdynamics.com";
        config.fetch = true;
        config.isZonePromise = true;
        config.maxUrlLength = 512;
        config.resTiming = {
            "bufSize": 200,
            "clearResTimingOnBeaconSend": true
        };
    })(window["adrum-config"] || (window["adrum-config"] = {}));


