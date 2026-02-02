/* 元のURL: https://foxnews.com */

    if (window && window.foxstrike && Array.isArray(window.foxstrike.cmd)) {
        window.foxstrike.cmd.push((Strike) => {
            if ($("#tablet_tw_hp_ban13").is(":visible")) {
                const info = {"target":"#tablet_tw_hp_ban13","iu":"tw/hp/ban13","sizes":["728x90","300x250","300x50","320x50","fluid","1x1"],"pos":"tablet","props":{"adPrefetchMargin":125,"adRefreshRate":30}};
                Strike.loadAd(info);
            }
        });
    } else {
        console.error('Error: window.foxstrike not found');
    }
    

