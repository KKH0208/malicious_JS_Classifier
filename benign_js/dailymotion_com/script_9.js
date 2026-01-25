/* 元のURL: https://dailymotion.com */

      window.dailymotion = {
        onScriptLoaded() {
          window.performance.mark('pes_lib_loaded');
          if (window.__INITIAL_APP_ENTER_EVENT__ && window.__INITIAL_APP_ENTER_EVENT__.data) {
            window.dailymotion.forwardNeonTrackingData?.(window.__INITIAL_APP_ENTER_EVENT__.data);
          }
        }
      }
    

