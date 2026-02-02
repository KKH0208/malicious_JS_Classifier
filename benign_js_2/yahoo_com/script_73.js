/* 元のURL: https://yahoo.com */

        (function(w) {
            var beaconUrl = '/info/p.gif?rid=2o96q69kg29d8' + '&bucket=900,seamless';
            var shouldShowPrompt = function() {
                var bodyClasses = document.body.className;
                return (bodyClasses.indexOf('pushPromoVisible') === -1);
            };
            var tracker = {
                instance: w.YAHOO && w.YAHOO.i13n && w.YAHOO.i13n.rapidInstance,
                trackerWindowPath: 'rapidInstance'
            };
            w.YAHOO = w.YAHOO || {};
            w.YAHOO.homepageClientConfig = {
                addToHomeScreen: {
                    enabled: false,
                    forNativeApp: false,
                    shouldShowPrompt: shouldShowPrompt,
                    useBeforeInstallPrompt: true
                },
                beacon: {
                    bucket: '900,seamless',
                    rid: '2o96q69kg29d8'
                },
                onboarding: {
                    installCardSwapCount: 3,
                    installCoolOffTime: 168,
                    installOnboardingType: 'native',
                    installSliderSwapCount: true
                },
                pageInfo: {
                    device: 'desktop',
                    lang: 'en-US',
                    region: 'US',
                    site: 'fp'
                },
                promoSlots: {
                    enabled: true
                },
                serviceWorker: {
                    enabled: true
                },
                serviceWorkerFeatures: {
                    didWrite: function didWrite() {
                        w.hpClientInstance.serviceWorker && w.hpClientInstance.serviceWorker.register().catch(function (){
                            // service worker reg failed likely due to non https or browser support.
                            // do nothing and keep this catch to avoid console error log
                        });
                    },
                    values: {
                        cache: 1,
                        convertNotificationUrl: 0,
                        offlineBeacon: 0
                    },
                    write: true
                },
                tracker: tracker,
                userConnectionToast: {
                    enabled: true
                }
            };
            if (w.HomepageClient && w.HomepageClient.PWA) {
                w.hpClientInstance = new w.HomepageClient.PWA(w.YAHOO.homepageClientConfig);
            }
        }(window));
    

