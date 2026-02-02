/* 元のURL: https://zoom.us */

    (function () {
      const COOKIE_KEY = 'cf_fallback';
      const TTL_MINUTES = 10;
      const TEST_IMG_URL = 'https://st1.zoom.us/cdn-detect.png';
      function setCookie(name, value, minutes) {
        const d = new Date();
        d.setTime(d.getTime() + (minutes * 60 * 1000));
        document.cookie = name + '=' + value + ';expires=' + d.toUTCString() + ';path=/';
      }
      function checkCDN(url, timeout = 3000) {
        return new Promise((resolve, reject) => {
          const img = new Image();
          let done = false;
          const timer = setTimeout(() => {
            if (!done) {
              done = true;
              reject();
            }
          }, timeout);
          img.onload = () => {
            if (!done) {
              clearTimeout(timer);
              done = true;
              resolve();
            }
          };
          img.onerror = () => {
            if (!done) {
              clearTimeout(timer);
              done = true;
              reject();
            }
          };
          img.src = url + '?_t=' + Date.now();
        });
      }
      if (!document.cookie.includes(COOKIE_KEY)) {
        checkCDN(TEST_IMG_URL).catch(() => {
          setCookie(COOKIE_KEY, '1', TTL_MINUTES);
          location.reload();
        });
      }
    })();
  

