/* 元のURL: https://uber.com */
(function () {
        try {
          for (var i = 0; i < document.scripts.length; i++) {
            var script = document.scripts[i];
            var prevOnError = script.onerror;
            script.onerror = function (event) {
              var errorMessage = 'Error loading script ' + this.src;
              console.debug(errorMessage);
              window.onerror(
                errorMessage,
                'load-error-handler: ' + window.location.href,
                0,
                0,
                new Error(errorMessage)
              );
              if (prevOnError) {
                prevOnError(event);
              }
            };
          }
        } catch (e) {
          // we do not want this script to cause problems
          console.debug('load-error-handler', {
            e,
          });
        }
      })()

