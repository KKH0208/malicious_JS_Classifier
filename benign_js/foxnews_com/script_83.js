/* 元のURL: https://foxnews.com */

    if (window && window.foxstrike && Array.isArray(window.foxstrike.cmd)) {
        window.foxstrike.cmd.push((Strike) => {
            if ($("#mobile_mw_hp_ban21_10").is(":visible")) {
                const info = {"target":"#mobile_mw_hp_ban21_10","iu":"mw/hp/ban21","sizes":["300x250","300x50","320x50","fluid","1x1"],"pos":"mobile","props":{"adPrefetchMargin":1000,"adRefreshRate":30}};
                Strike.loadAd(info);
            }
        });
    } else {
        console.error('Error: window.foxstrike not found');
    }
    

