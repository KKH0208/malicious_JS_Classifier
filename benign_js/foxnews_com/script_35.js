/* 元のURL: https://foxnews.com */

    if (window && window.foxstrike && Array.isArray(window.foxstrike.cmd)) {
        window.foxstrike.cmd.push((Strike) => {
            if ($("#mobile_mw_hp_ban12").is(":visible")) {
                const info = {"target":"#mobile_mw_hp_ban12","iu":"mw/hp/ban12","sizes":["300x250","300x50","320x50","fluid","1x1"],"pos":"mobile","props":{"adPrefetchMargin":1000,"adRefreshRate":30}};
                Strike.loadAd(info);
            }
        });
    } else {
        console.error('Error: window.foxstrike not found');
    }
    

