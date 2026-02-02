/* 元のURL: https://foxnews.com */

    if (window && window.foxstrike && Array.isArray(window.foxstrike.cmd)) {
        window.foxstrike.cmd.push((Strike) => {
            if ($("#tablet_tw_hp_adh").is(":visible")) {
                const info = {"target":"#tablet_tw_hp_adh","iu":"tw/hp/adh","sizes":["728x90","1x1"],"pos":"tablet","props":{"adPrefetchMargin":125,"adRefreshRate":30},"isNonStandardAd":true,"nonStandardAdIuChannel":"fnc.spec"};
                Strike.loadAd(info);
            }
        });
    } else {
        console.error('Error: window.foxstrike not found');
    }
    

