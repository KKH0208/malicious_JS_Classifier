/* 元のURL: https://foxnews.com */

        window.foxstrike = window.foxstrike || {};
        window.foxstrike.cmd = window.foxstrike.cmd || [];
        window.foxstrike.cmd.push(function(Strike){
            if ($('#desktop_desk-hp-lb1').is(':visible')) {
                Strike.loadAd({
                    target: '#desktop_desk-hp-lb1',
                    iu: 'desk/hp/lb1',
                    sizes: (function(sz){
                        return (sz && sz.length > 0) ? (sz.split(',')) : [];
                    })('970x250,970x66,728x90'),
                    pos: 'desktop',
                    props: {
                        adPrefetchMargin: typeof parseInt( 250 ) === "number" ? parseInt( 250 ) : 350,
                        adRefreshRate: typeof parseInt( 30 ) === "number" ? parseInt( 30 ) : 30
                    }
                });
            }
        });
        

