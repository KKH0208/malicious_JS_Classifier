/* 元のURL: https://foxnews.com */

        window.foxstrike = window.foxstrike || {};
        window.foxstrike.cmd = window.foxstrike.cmd || [];
        window.foxstrike.cmd.push(function(Strike){
          if ($('#mobile_mw_hp_ban1').is(':visible')) {
            Strike.loadAd({
                target: '#mobile_mw_hp_ban1',
                iu: 'mw/hp/ban1',
                sizes: (function(sz){
                    return (sz && sz.length > 0) ? (sz.split(',')) : [];
                })('300x250,300x50,320x50,fluid,1x1'),
                pos: 'mobile',
                props: {
                    adPrefetchMargin: typeof parseInt( 1000 ) === "number" ? parseInt( 1000 ) : 1000,
                    adRefreshRate: typeof parseInt( 30 ) === "number" ? parseInt( 30 ) : 30
                }
            });
          }
          (function(){
            if (typeof Strike.pageReady === 'function') {
              Strike.pageReady();
            }

            if (typeof Strike.pageLoadDynamicAdPlacementsReady === 'function') {
              Strike.pageLoadDynamicAdPlacementsReady('mobile');
            }
          })();
        });
      

