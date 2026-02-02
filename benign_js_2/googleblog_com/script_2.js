/* 元のURL: https://googleblog.com */

          document.querySelectorAll('.deferred-stylesheet').forEach(function(link) {
            function enableStylesheet() {
              if (link.rel !== 'stylesheet') {
                link.rel = 'stylesheet';
              }
            }

            // Attach the normal load-listener
            link.addEventListener('load', enableStylesheet);

            // Safely check if Performance API is supported
            if (window.performance && typeof performance.getEntriesByType === 'function') {
              // Check the Performance entries buffer for a matching URL
              const url = link.href;
              const alreadyFetched = performance
                .getEntriesByType('resource')
                .some(entry => entry.name === url);

              if (alreadyFetched) {
                // Preload was fulfilled (from cache or just fast), so activate now
                enableStylesheet();
              }
            }
          });
        

