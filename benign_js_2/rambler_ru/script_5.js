/* 元のURL: https://rambler.ru */
(function sspCallbacksScript() {
  var _window$Begun, _window$Begun$Autocon, _window$Begun$Autocon2;
  const WITH_BRANDING_CLASS_NAME = 'with-branding';
  const WITH_MINI_BILLBOARD_CLASS_NAME = 'with-mini-billboard';
  const DSP_BRANDING = 'DSP-Branding';
  const callbacks = {
    block: {
      drawComplete(result) {
        if (result && result.viewTypes) {
          if (result.viewTypes.indexOf('Branding') !== -1) {
            document.body.classList.add(WITH_BRANDING_CLASS_NAME);
          } else if (result.viewTypes.indexOf('Graph970x100') !== -1) {
            document.body.classList.add(WITH_MINI_BILLBOARD_CLASS_NAME);
          }
          if (result.viewTypes.indexOf('Fullscreen') !== -1) {
            if (typeof window.ym === 'function') {
              window.ym(28161048, 'reachGoal', 'fullscreen_desktop_show');
            }
          }
        }
      }
    },
    page: {
      spaUpdate() {
        document.body.classList.remove(WITH_BRANDING_CLASS_NAME);
        document.body.classList.remove(WITH_MINI_BILLBOARD_CLASS_NAME);

        // @ts-ignore
        if (typeof window[DSP_BRANDING] !== 'undefined') {
          // @ts-ignore
          const banners = Object.keys(window[DSP_BRANDING].banners);
          if (banners.length > 0) {
            banners.forEach(key => {
              // @ts-ignore
              window[DSP_BRANDING].banners[key].removeBanner();
            });
          }
        }
      }
    }
  };

  // https://adtech.pages.rambler-co.ru/sspjs/private/callbacks/
  if (!((_window$Begun = window.Begun) !== null && _window$Begun !== void 0 && (_window$Begun$Autocon = _window$Begun.Autocontext) !== null && _window$Begun$Autocon !== void 0 && (_window$Begun$Autocon2 = _window$Begun$Autocon.Callbacks) !== null && _window$Begun$Autocon2 !== void 0 && _window$Begun$Autocon2.register)) {
    window.begun_new_callbacks = window.begun_new_callbacks || [];
    window.begun_new_callbacks.push(callbacks);
  } else {
    window.Begun.Autocontext.Callbacks.register(callbacks);
  }
})()

