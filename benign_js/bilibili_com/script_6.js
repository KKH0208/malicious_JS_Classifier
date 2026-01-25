/* 元のURL: https://bilibili.com */

      ;(function () {
        if (document.querySelector('meta[name=server_render]')) {
          return
        }
        var ua = window.navigator.userAgent,
          agents = ['Android', 'Phone', 'SymbianOS', 'iPod'],
          isPC = true
        if (/\sVR\s/g.test(ua)) return
        for (var i = 0, len = agents.length; i < len; i++) {
          if (ua.indexOf(agents[i]) > 0) {
            isPC = false
            break
          }
        }
        if (!isPC) {
          window.location.href = window.location.href.replace('www', 'm')
        }
      })()
    

