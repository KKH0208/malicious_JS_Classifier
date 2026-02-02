/* 元のURL: https://ea.com */

        (() => {
            const getPrivacyCookie = () => {
                const privacyCookie = document.cookie.match('(^|;)\\s*cmapi_cookie_privacy\\s*=\\s*([^;]+)');

                return privacyCookie ? privacyCookie.pop() : null;
            };

            const getBehaviorCookie = () => {
                const behaviorCookie = document.cookie.match('(^|;)\\s*notice_behavior\\s*=\\s*([^;]+)');

                return behaviorCookie ? behaviorCookie.pop() : null;
            };

            const hasOptedIn = () => {
                const behaviorCookie = getBehaviorCookie();
                const privacyCookie = getPrivacyCookie();

                return behaviorCookie && behaviorCookie.match(/^none$/) || privacyCookie && privacyCookie.match(/2|3/);
            }

            const appendOptimize = () => {
                const head = document.getElementsByTagName('head')[0];

                if (head) {
                    const script = document.createElement('script');

                    script.src = 'https://www.googleoptimize.com/optimize.js?id=GTM-M6BQF2W';
                    script.id = "google-optimize"
                    head.append(script);
                }
            };

            const removeOptimize = () => {
                const head = document.getElementsByTagName('head')[0];
                const optimizeScript = document.getElementById('google-optimize');

                if (head && optimizeScript) {
                    head.removeChild(optimizeScript);
                }
            }

            /**
             * Append or remove Google Optimize script to head,
             * depending on whether user's cookie preferences
             * have opted in and Google Optimize script already
             * exists in head.
             */
            const handleConsentDecision = () => {
                const googleOptimizeScript = document.getElementById('google-optimize');
                if (hasOptedIn() && !googleOptimizeScript) {
                    appendOptimize();
                } else if (!hasOptedIn() && googleOptimizeScript) {
                    removeOptimize();
                }
            }

            /**
             * Callbacks will occur in the form of a PostMessage event. This code listens for the
             * appropriately formatted PostMessage event, gets the new consent decision, and then sets
             * the new cookie preferences.
             */
            const handlePreferencesUpdated = (e) => {
                try {
                    const { capabilities, action } = JSON.parse(e.data).PrivacyManagerAPI || {};
                    if (capabilities && action === 'getConsentDecision') {
                        handleConsentDecision();
                    }
                } catch (error) {
                    console.error(error);
                }
            }

            /**
             * Registers with the TrustArc Content Manager (CM) API to receive callbacks when
             * a preference update occurs, and initialized dispatched preferences array to
             * the user's current preferences. You must wait for the CM API (PrivacyManagerAPI object)
             * to exist on the page before registering.
             */
            const CMICallbackRegister = () => {
                const interval = setInterval(() => {
                    if (window.PrivacyManagerAPI && interval) {
                        const apiObject = {
                            PrivacyManagerAPI: {
                                action: 'getConsentDecision',
                                timestamp: new Date().getTime(),
                                self: window.location.host
                            }
                        };
                        window.top.postMessage(JSON.stringify(apiObject), '*');
                        clearInterval(interval);
                    }
                }, 50);
            }

            /**
             * Listener registers a message callback on the TrustArc Content Manager when
             * user's cookie preferences are updated and adds an event listener
             * on the message events that occur when said preference updates occur.
             */
            const trustArcScriptLoadListener = () => {
                if (typeof window.truste === 'object') {
                    CMICallbackRegister();
                    window.addEventListener('message', handlePreferencesUpdated);
                }
            }

            window.addEventListener('load', trustArcScriptLoadListener);
            const behaviorCookie = getBehaviorCookie();

            if (behaviorCookie === null) {
                // wait for TrustArc script to load before checking cookies
                let numIntervals = 0;
                const scriptLoadInterval = setInterval( () => {
                    if(getBehaviorCookie()) {
                        handleConsentDecision();
                        clearInterval(scriptLoadInterval);
                    }
                    // Stop running interval after 8 times (8x the documented 500ms it
                    // should take to load the TrustArc script on the BE) to prevent running forever
                    if (++numIntervals >= 10) {
                        clearInterval(scriptLoadInterval);
                    }
                } , 500);
            } else {
                handleConsentDecision();
            }
        })();


