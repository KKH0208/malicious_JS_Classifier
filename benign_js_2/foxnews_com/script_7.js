/* 元のURL: https://foxnews.com */

          window.foxstrike = window.foxstrike || {};
          window.foxstrike.cmd = window.foxstrike.cmd || [];
          window.foxstrike.cmd.push(function(Strike){
            if ($('#desk-hp-mktupdte').is(':visible')) {
              Strike.loadAd({
                  target: '#desk-hp-mktupdte',
                  iu: 'desk/hp/mktupdte',
                  sizes: ['88x31'],
                  pos: 'stocksearch'
              });
            }
          });
        

