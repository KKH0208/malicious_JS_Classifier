/* 元のURL: https://shein.com */

    //sa临时代理
    window.sa = function () {
        if (!window.sa.waitingCommands) {
            window.sa.waitingCommands = []
        }
        window.sa.waitingCommands.push(arguments)
    };
    // sdk_analysis config文件1
    ;(function(){
      var isRomwe = 'shein' === 'romwe'
      var shouldOfflineCookie = undefined
      
        shouldOfflineCookie = true
      
      // 不在数组里的站点不把cookie放在头信息中 
      var globalSetting = {
        homeSite: isRomwe ? 'romwe': 'shein',
        deviceType: 'pc',
        currency: { cookieValueDefault:"JPY" },
        userId: { cookieKey: 'memberId' },
        sessionId: { cookieKey: isRomwe ? 'sessionID_rw': 'sessionID_shein' },
        SiteUID: 'jp',
        appLanguage: 'ja',
        environment: 'production',
        host: 'www.srmdata.com',
        config: {
          offlineCookie: shouldOfflineCookie,
          hooks: {
             // onInit: function(d) {
            //   console.log('hooks-init', d);
            // },
            onSetPageData: function(d) {
              if (window.ErrorJs) {
                // 内部会使用 SILog 上报，模板没有引入 SILog 会报错，使用 ErrorJs 上报
                window.ErrorJs.monitor_proxy({
                  metricName: 'sa_page_pv',
                  page_name: d.page_name || 'page_other',
                })
              }
            },
            // onRequest: function(d) {
            //   console.log('hooks-request', d);
            // },
            // onResponse: function(status, d) {
            //   console.log('hooks-response', status, d);
            // },

          }
        }
      }
      if(typeof sa == 'function'){
        sa('set', 'init', globalSetting);
      }
    })();


