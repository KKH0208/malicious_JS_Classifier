/* 元のURL: https://aliyun.com */

    var tracker = TraceSdk({
        pid: 'punish-page',
  		env: 'prod',
  		plugins: [
  			[TracePerfPlugin, {enableLCP: false}],
           	[TraceResourceErrorPlugin]
  		]
    });
    tracker.install();
  	var urlAction = window.location.href.match(/action=([^&]+)/);
  	urlAction = urlAction ? urlAction[1] : window._config_.action;
  	setTimeout(function () {
      if (!document.getElementById('baxia-punish')) {
        if (navigator.userAgent.match(/spider/i)) {
          tracker.logCustom({
            p1: '16',
            c1: window._config_ && window._config_.NCTOKENSTR,
    		c2: window._config_ && window._config_.action || urlAction
          });
        } else {
          tracker.logCustom({
            p1: '17',
            c1: window._config_ && window._config_.NCTOKENSTR,
    		c2: window._config_ && window._config_.action || urlAction
          });
        }
      }
    }, 8000);
    tracker.log({
        code: 11,  // 系统自动生成，请勿修改 100%
        c1: '75842b6894f06fda5f6472b56df04928',
  		c2: '0.1.110',
        msg: '新版处置模板 ' + templateName + ' ' + urlAction,  // 异常信息，推荐传入
        sampling: 0.1,  // 目前采样率为 100.00%
    });


