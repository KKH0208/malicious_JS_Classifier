/* 元のURL: https://soundcloud.com */

  (function (global) {
    function OptanonWrapper() {
      var activeGroups = (global.OptanonActiveGroups || '').split(',');

      if (Array.isArray(OptanonWrapper.callbacks)) {
        for (var i = 0, max = OptanonWrapper.callbacks.length; i < max; i++) {
          try {
            OptanonWrapper.callbacks[i](activeGroups);
          } catch (e) {}
        }
      }

      OptanonWrapper.isLoaded = true;
    };

    OptanonWrapper.callbacks = [];
    OptanonWrapper.isLoaded = false;

    global.OptanonWrapper = OptanonWrapper;
  }(window));


