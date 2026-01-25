/* 元のURL: https://qq.com */

  try {
    function ignoreBrowsers() {
      var userAgent = window.navigator.userAgent || '';
      return [
        /(googlebot|bingbot|yandex|twitterbot|facebookexternalhit|rogerbot|linkedinbot|embedly|quora link preview|showyoubot|outbrain|pinterest\/0\.|pinterestbot|slackbot|vkShare|W3C_Validator|whatsapp|petalbot|applebot|mpcrawler|spider)/i,
      ].some(function(element) {
        return element.test(userAgent);
      });
    }
    function ignoreErrors(errDesc) {
      if (!errDesc) {
        return false;
      }
      return [
        "chrome-extension",
        "ResizeObserver loop completed with undelivered notification",
      ].some(function (element) {
        return errDesc.indexOf(element) > -1;
      });
    }
    var reportHost = ['i.news.qq.com', 'otheve.beacon.qq.com', 'op.ssp.qq.com', 'n.ssp.qq.com', 'news.ssp.qq.com', 'vm.gtimg.cn', 'r.inews.qq.com'];
    var staticHost = ['.gtimg.com', '.gtimg.cn', 'qq.com'];
    window.emonitorIns = emonitor.create({
      name: 'newqqhome',
      atta: {
        name: 'newqqhome'
      },
      mode: '007',
      cdn: {
        sampling: 0.01,
      },
      onBeforeSend: function(data) {
        try {
          if (ignoreBrowsers()) {
            return false;
          }
          var emonitorCgiHost = data.source.cgihost;
          var emonitorHttpCode = String(data.source.httpcode);

          if (data.type === 'cgi') {
            var cgiHost = data.source.cgihost;
            return reportHost.indexOf(cgiHost) >= 0;
          }

          if (data.type === 'ajax' || data.type === 'fetch') {
            var requestUrl = data.url.toString();
            if(!reportHost.find(item => requestUrl.indexOf(item) >= 0)) {
              return false;
            }
          }

          if (data.type === 'promise') {
            var errorMsg = data.source.err_msg;
            if (!errorMsg) {
              return false
            }
          }

          if (data.type === 'script' || data.type === 'css' || data.type === 'img') {
            var resourceUrl = data.url;
            if(!staticHost.find(item => resourceUrl.indexOf(item) >= 0)) {
              return false;
            }
          }

          if (data.type === 'console' || data.type === 'jserror') {
            var errorMsg = data.source.err_msg;
            if (errorMsg && ignoreErrors(errorMsg)) {
              return false;
            }
            var errorDesc = data.source.err_desc;
            if (errorDesc && ignoreErrors(errorDesc)) {
              return false;
            }
          }
        } catch (err) {
          console.warn(err);
        }
      },
      onMaxTimeOut: function(defaultConfig) {
        var rootDOM = document.getElementById('root');
        if (rootDOM && rootDOM.childNodes && rootDOM.childNodes.length === 0) {
          emonitorIns.config({
            baseUrl: defaultConfig.pecker.error,
          }).send({
            err_type: 'whitescreen',
          });
        }
      }
    });
  } catch (err) {
    console.warn(err);
  }


