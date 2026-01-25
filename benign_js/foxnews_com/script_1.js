/* 元のURL: https://foxnews.com */

    (function () {
      window.foxstrike = window.foxstrike || {};
      window.foxstrike.cmd = window.foxstrike.cmd || [];
      window.foxstrike.config = {
        taboolaEnabled: true,
        meta: {
          channel: "fnc",
          pageType: "homepage",
          section: "root"
        },
        props: {
          adPrefetchMargin: 350,
          adRefreshRate: 30
        }
        , dynamicProps: {
                    deskPeakInterstitial: true,
                    deskInterstitial: true,
                    mobPeakInterstitial: true,
                    mobInterstitial: true,
                    tabletPeakInterstitial: true,
                    tabletInterstitial: true,
                }
      };

      var dt = new Date();
      window.foxstrike.cmd.push(function (Strike) {
        if (Strike.plog) {
          Strike.plog('global', {
            msg: 'page load start',
            start: true,
            ts: dt
          });
        }
      });
    })();

  

