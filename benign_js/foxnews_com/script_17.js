/* 元のURL: https://foxnews.com */

                  window.foxstrike = window.foxstrike || {};
                  window.foxstrike.cmd = window.foxstrike.cmd || [];
                  window.foxstrike.cmd.push(function(Strike){
                    if ($('#tw-hp-weather').is(':visible')) {
                      Strike.loadAd({
                          target: '#tw-hp-weather',
                          isDynamicAd: true,
                          iu: 'tw/hp/weath',
                          sizes: (function(sz){
                              return (sz && sz.length > 0) ? (sz.split(',')) : [];
                          })('88x31'),
                          pos: 'tablet',
                          props: {
                              adPrefetchMargin: typeof parseInt( 250 ) === "number" ? parseInt( 250 ) : 350,
                              adRefreshRate: -1
                          }
                      });
                    }
                  });
            

