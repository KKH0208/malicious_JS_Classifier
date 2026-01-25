/* 元のURL: https://foxnews.com */

    if (window && window.foxstrike && Array.isArray(window.foxstrike.cmd)) {
        window.foxstrike.cmd.push((Strike) => {
            if ($("#desktop-sm_desk_hp_rvr4_1").is(":visible")) {
                const info = {"target":"#desktop-sm_desk_hp_rvr4_1","iu":"desk/hp/rvr4","sizes":["300x250","320x50","300x50","fluid","1x1"],"pos":"desktop","props":{"adPrefetchMargin":350,"adRefreshRate":30}};
                Strike.loadAd(info);
            }
        });
    } else {
        console.error('Error: window.foxstrike not found');
    }
    

