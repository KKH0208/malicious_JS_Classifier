/* 元のURL: https://rutube.ru */

      if (typeof window === 'object') {
        function getCookie(name) {
          const cookie = Object.fromEntries(new URLSearchParams(document.cookie.replace(/; /g, '&')));
          return cookie[name] || undefined;
        }
        window.__RUTUBE_STATIC_HANDLER = {
          uuid: getCookie('uuid'),
          url: "https://log.rutube.ru/static_events",
          report: function() {
            if (this.url && this.uuid) {
              try {
                fetch(this.url + '?cid=' + this.uuid);
              } catch (err) { console.error(err); }
            }
          }
        }
      }
    

