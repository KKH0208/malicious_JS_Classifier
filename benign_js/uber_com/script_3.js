/* 元のURL: https://uber.com */

          const messageCounts = {};
          const httpRegex = /^https?:///;
          onerror = function (m, s, l, c, e) {
            if (s && !httpRegex.test(s)) return;
            var getError = function(e){var t=e;return"object"==typeof e&&(e instanceof Array||(t={},Object.getOwnPropertyNames(e).forEach((function(r){t[r]=e[r]})))),t};
            var _e = e || {};
            messageCounts[m] = (messageCounts[m] || 0) + 1;
            if (_e.__handled || messageCounts[m] > 3) return;
            var x = new XMLHttpRequest();
            x.open('POST', '/_errors');
            x.setRequestHeader('Content-Type', 'application/json');
            x.send(
              JSON.stringify({
                ssr_build_hash: '7e52339224f2ddde4a0efa37d2483e28eefc0396',
                message: m,
                source: s,
                line: l,
                col: c,
                error: getError(_e),
              })
            );
            _e.__handled = true;
          };
          

