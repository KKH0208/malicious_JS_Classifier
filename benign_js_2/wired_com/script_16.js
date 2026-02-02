/* 元のURL: https://wired.com */

            window.gladlyConfig = {
              appId: 'condenast.com-WIRED',
              env: 'PROD'
            };
  
            (function (window, document, r, env) {
              if (!window[r]) {
                let initArgs, realInit, pending = [];
  
                // Determine CDN based on environment
                const cdn =
                  env !== "PROD" && env
                    ? env === "STAGING"
                      ? "https://cdn.gladly.qa/gladly/chat-sdk/widget.js"
                      : env
                    : "https://cdn.gladly.com/chat-sdk/widget.js";
  
                // Define stub for initialization
                window[r] = {
                  init: function () {
                    initArgs = arguments;
                    const proxy = {
                      then: function (cb) {
                        pending.push({ type: "t", next: cb });
                        return proxy;
                      },
                      catch: function (cb) {
                        pending.push({ type: "c", next: cb });
                        return proxy;
                      },
                    };
                    return proxy;
                  },
                };
  
                // Called when the real SDK is loaded
                window.__onHelpAppHostReady__ = function (actualSdk) {
                  delete window.__onHelpAppHostReady__;
                  window[r] = actualSdk;
                  window[r].loaderCdn = cdn;
  
                  if (initArgs) {
                    let result = actualSdk.init.apply(actualSdk, initArgs);
                    for (let i = 0; i < pending.length; i++) {
                      const task = pending[i];
                      result = task.type === "t"
                        ? result.then(task.next)
                        : result.catch(task.next);
                    }
                  }
                };
  
                // Load the SDK script
                (function () {
                  try {
                    const firstScript = document.getElementsByTagName("script")[0];
                    const sdkScript = document.createElement("script");
                    sdkScript.async = true;
                    sdkScript.src = cdn + "?q=" + new Date().getTime();
                    firstScript.parentNode.insertBefore(sdkScript, firstScript);
                  } catch (e) {
                    // Optionally handle script load errors
                  }
                })();
              }
            })(window, document, "Gladly", "PROD");
          

