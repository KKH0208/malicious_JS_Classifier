/* 元のURL: https://foxnews.com */

        window.foxstrike = window.foxstrike || {};
        window.foxstrike.cmd = window.foxstrike.cmd || [];
        window.foxstrike.cmd.push(function(Strike){
            if ($('#tablet_tw-hp-lb1').is(':visible')) {
                Strike.loadAd({
                    target: '#tablet_tw-hp-lb1',
                    iu: 'tw/hp/lb1',
                    sizes: (function(sz){
                        return (sz && sz.length > 0) ? (sz.split(',')) : [];
                    })('728x90, 300x50, 320x50'),
                    pos: 'tablet',
                    props: {
                        adPrefetchMargin: typeof parseInt( 350 ) === "number" ? parseInt( 350 ) : 350,
                        adRefreshRate: typeof parseInt( 30 ) === "number" ? parseInt( 30 ) : 30
                    }
                });
            }
        });
        

