/* 元のURL: https://shein.com */

  function createInterceptorManager () {
    var handlers = []
    function use (fulfilled) {
      if (!fulfilled) return
      handlers.push(fulfilled)
      return handlers.length - 1
    }
    function eject (id) {
      if (handlers[id]) {
        handlers[id] = null
      }
    }
    function clear () {
      handlers.length = 0
    }
    function forEach (fn) {
      handlers.forEach(function (_f) {
        _f && fn(_f)
      })
    }
    return {
      use: use,
      eject: eject,
      clear: clear,
      forEach: forEach
    }
  }
  window.analysisBeforeInterceptor = createInterceptorManager()


