/* 元のURL: https://foxnews.com */

        window.foxstrike = window.foxstrike || {};
        window.foxstrike.cmd = window.foxstrike.cmd || [];
        window.foxstrike.cmd.push(function(Strike){
            if ($('#desktop_desk-hp-ban2').is(':visible')) {
                Strike.loadAd({
                    target: '#desktop_desk-hp-ban2',
                    iu: 'desk/hp/ban2',
                    sizes: (function(sz){
                        return (sz && sz.length > 0) ? (sz.split(',')) : [];
                    })('300x250, 300x600, 160x600, fluid'),
                    pos: 'desktop',
                    props: {
                        adPrefetchMargin: typeof parseInt( 350 ) === "number" ? parseInt( 350 ) : 350,
                        adRefreshRate: typeof parseInt( 30 ) === "number" ? parseInt( 30 ) : 30
                    }
                });
            }
        });
        

