/* 元のURL: https://office.com */

        var appId = '';
        var el = document.getElementById('unauthConfig');
        var config = el && JSON.parse(el.textContent) || {};
        var signInUrl = config.loginUrl;
        if (true) {
            if (isSessionStorageAvailable && sessionStorage.getItem('DefaultSignInCalledBefore') !== 'true') {
                var viewType = 'NewUserView';

                if (viewType !== "SignoutUserView") {
                    var myConfigOptions = {
                        msaConfig: { replyUri: 'https://www.office.com/', host: 'login.live.com' },
                        aadConfig: { replyUri: 'https://www.office.com/', host: 'login.microsoftonline.com', appId: '4345a7b9-9a63-4910-a426-35363201d503' },
                        preferredIdp: AuthType.aad,
                        enableConsoleLogging: false,
                        msaFedEnabled: true
                    };

                    DefaultSignInHandler.DefaultSignInAdapter.signIn(signInUrl, myConfigOptions, 500).then(function (loginUrl) {
                            if (isSessionStorageAvailable) {
                            sessionStorage.setItem('DefaultSignInCalledBefore', 'true');
                        }

                        if (loginUrl) {
                            window.location.href = loginUrl;
                        } else {
                            document.body.style.display = "block";
                            window.standaloneOteLogger && window.standaloneOteLogger.logPageView({ pageName: 'OfficeHome', pageType: viewType, isIntentional: true });
                        }
                    });
                }
            }
        }

        function setShellOptions(shellOptions) {

            if (window.msCommonShell) {
                window.msCommonShell.load(shellOptions);
            } else {
                window.onShellReadyToLoad = function () {
                    window.onShellReadyToLoad = null;
                    window.msCommonShell.load(shellOptions);
                }
            }
        }

            var SendMeControlSignInEvent = function () {
            unauth1dsAnalytics && unauth1dsAnalytics.isInitialized() && unauth1dsAnalytics.capturePageAction(document.getElementById('meControl'), { isAuto: false, behavior: oneDS.Behavior.SIGNIN, actionType: oneDS.ActionType.CLICKLEFT });

            if (typeof StandaloneAriaLogger !== 'undefined' && typeof StandaloneAriaLogger.Logger !== 'undefined' && typeof StandaloneAriaLogger.Logger.LogUnauthClick !== 'undefined') {
                var viewType = 'NewUserView';
                StandaloneAriaLogger.Logger.LogUnauthClick(viewType, 'meLnkSignin');
            }

            window.standaloneOteLogger && window.standaloneOteLogger.logUnAuthUserAction({ id: "meLnkSignin", area: "MeControl", result: "SignIn", target: "Office", pageName: appId ? appId : "OfficeHome", pageType: "NewUserView" });
        }

        function SetConsent() {
            var cookieConsentBannerNeeded = false;
            if (cookieConsentBannerNeeded) {
                var mscc = window.mscc;
                // Remove this SetConsent when WCP is 100%
                if (!window.WcpConsent && mscc && !mscc.hasConsent()) {
                    mscc.setConsent();
                }
            }
        }

        var shellOptions = {
            meControlOptions: {
                rpData: {
                    aadInfo: {
                        signInUrl: signInUrl,
                        signOutUrl: 'https://login.microsoft.com/logout.srf'
                    },
                    msaInfo: {
                        meUrl: null
                    },
                    preferredIdp: 'aad'
                },
                events: {
                    onEventLog: function (eventId) {
                            switch (eventId) {
                            case 'SignIn':
                                SetConsent();
                                SendMeControlSignInEvent();
                                break;
                            default:
                                return;
                        }
                    }
                }
            }
        };

        setShellOptions(shellOptions);


                    if (window.history && window.history.replaceState) {
                        config.pathAndQuery && window.history.replaceState(window.history.state || {}, '', config.pathAndQuery);
                    }
                    

