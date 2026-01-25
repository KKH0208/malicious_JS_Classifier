/* 元のURL: https://shein.com */

    // sada 临时代理
  ;(function() {
    var w = window, n = 'sada';
    w[n] = function(a) {return function() {(w[n]._q = w[n]._q || []).push([a, arguments])}};
    var ifs = ['init', 'registerFields', 'registerField', 'registerModel', 'traceModel', 'trace', 'get'];
    for (var i = 0; i < ifs.length; i++) {
      w[n][ifs[i]] = w[n].call(null, ifs[i]);
    }
  })();
  // 初始化
  ;(function(){
    // 给全局变量赋值 sada 的配置
    if (typeof gbCommonInfo !== 'undefined' && gbCommonInfo) {
      gbCommonInfo.SADA_SDK_CONFIG = {}
    }

    window.sada.init({
      server_type: 'central', //
      environment: 'production',
      brand: 'shein',
      appversion: '1.0.0',
      device_type: 'pc',
      site_uid: 'jp',
      cache: {
        loop_time: Number('2') * 1000, // 2 默认两秒
      },
      hooks: {
        onResponse: function(status, response) {
          if (window.ErrorJs) {
            var success = Number(status === 200)
            window.ErrorJs.monitor_proxy({
              metricName: 'web_sada_response',
              status: success,
            })
            if (!success) {
              window.ErrorJs.log_proxy({
                tag: 'sada_response_error',
                info: JSON.stringify(response.res || {}),
              })
            }
          }
        },
      },
    });
  })();


