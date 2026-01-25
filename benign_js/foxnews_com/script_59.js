/* 元のURL: https://foxnews.com */

    if (window && window.foxstrike && Array.isArray(window.foxstrike.cmd)) {
        window.foxstrike.cmd.push((Strike) => {
            if ($("#mobile_mw_hp_adh").is(":visible")) {
                const info = {"target":"#mobile_mw_hp_adh","iu":"mw/hp/adh","sizes":["320x50","300x50","1x1"],"pos":"mobile","props":{"adPrefetchMargin":1000,"adRefreshRate":30},"isNonStandardAd":true,"nonStandardAdIuChannel":"fnc.spec"};
                Strike.loadAd(info);
            }
        });
    } else {
        console.error('Error: window.foxstrike not found');
    }
    

