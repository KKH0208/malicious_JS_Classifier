/* 元のURL: https://cloud.microsoft */

        var unauth1dsAnalytics;
        $(function () {
            HomePage.init();
            var cookieConsentBannerNeeded = false;

            var viewType = 'NewUserView';

            function initializeLogging() {
                var el = document.getElementById('sharedClientStartupContext');
                var sharedClientStartupContext = el && el.textContent && JSON.parse(el.textContent) || {};

                var unauthConfigEl = document.getElementById('unauthConfig');
                var unauthConfig = unauthConfigEl && unauthConfigEl.textContent && JSON.parse(unauthConfigEl.textContent) || {};
                var analyticsConsentRequired = cookieConsentBannerNeeded && !unauthConfig.userConsentStatus.AnalyticsCookiesConsented;

                function _getWcpUserConsentDetails() {
                    return {
                        Required: unauthConfig.userConsentStatus.EssentialCookiesConsented,
                        Analytics: unauthConfig.userConsentStatus.AnalyticsCookiesConsented,
                        SocialMedia: unauthConfig.userConsentStatus.SocialMediaCookiesConsented,
                        Advertising: unauthConfig.userConsentStatus.AdvertisingCookiesConsented
                    };
                }

                unauth1dsAnalytics = new oneDS.ApplicationInsights();
                var unauth1dsAnalyticsConfigconfig = {
                    instrumentationKey: "aa86c364bc9e4a5a94a6b232c110af26-72da2ec9-498a-44df-8cca-7fd88cf654c1-7527",
                    channelConfiguration:{ // Post channel configuration
                        eventsLimitInMem: 5000 //5000 is the suggested eventsLimitInMem from the 1DS SDK for improved telemetry buffering efficiency and reduce the frequency of flush operations
                    },
                    propertyConfiguration: { // Properties Plugin configuration
                        gpcDataSharingOptIn: false,
                        env: "PROD", 
                        callback: {
                           userConsentDetails: _getWcpUserConsentDetails
                        },
                    },
                    webAnalyticsConfiguration:{ // Web Analytics Plugin configuration
                        urlCollectQuery: false,
                        autoCapture: {
                          lineage: true,
                          jsError: false
                        },
                        coreData: { 
                            pageName: "UnauthOhp",
                            market: "en-US"
                        },
                    }
                };

                unauth1dsAnalytics.initialize(unauth1dsAnalyticsConfigconfig, []);
                unauth1dsAnalytics.captureContentUpdate();
            }

            initializeLogging();

            // log OTEL PageView event
            if (true) {
                var fromCode = '';
                function initializeOtelLogging() {
                    // TODO: We have to eventually move away from taking dependency on embedded config.
                    var el = document.getElementById('sharedClientStartupContext');
                    var sharedClientStartupContext = el && el.textContent && JSON.parse(el.textContent) || {};

                    var unauthConfigEl = document.getElementById('unauthConfig');
                    var unauthConfig = unauthConfigEl && unauthConfigEl.textContent && JSON.parse(unauthConfigEl.textContent) || {};
                    var analyticsConsentRequired = cookieConsentBannerNeeded && !unauthConfig.userConsentStatus.AnalyticsCookiesConsented;
                    fromCode = sharedClientStartupContext.fromcode || '';

                    var otelContext = {
                        appName: sharedClientStartupContext.oTelAppName,
                        appPlatform: sharedClientStartupContext.oTelAppPlatform,
                        appWorkload: 'Web', // TODO: Replace the hardcoded value
                        appWorkloadType: 'Web-Cosmic',
                        bundleBuildDate: sharedClientStartupContext.buildDateUtc,
                        bundleBuildId: sharedClientStartupContext.buildId,
                        correlationId: sharedClientStartupContext.correlationId,
                        deploymentEnvironment: sharedClientStartupContext.deploymentEnvironment,
                        domainOrigin: sharedClientStartupContext.domainOrigin,
                        eventCategoryConfig: {
                            actionEnabled: sharedClientStartupContext.oTelClickEnabled,
                            diagnosticEnabled: sharedClientStartupContext.oTelDiagnosticEnabled,
                            errorEnabled: sharedClientStartupContext.oTelErrorEnabled,
                            impressionEnabled: sharedClientStartupContext.oTelImpressionEnabled,
                            pageViewEnabled: sharedClientStartupContext.oTelPageViewEnabled,
                            perfEnabled: sharedClientStartupContext.oTelPerfEnabled,
                            requestEnabled: sharedClientStartupContext.oTelRequestEnabled,
                            featureEnabled: sharedClientStartupContext.oTelFeatureEnabled
                            },
                        flights: sharedClientStartupContext.flights,
                        isCorpNet: sharedClientStartupContext.corpNet,
                        isTestTraffic: sharedClientStartupContext.testTraffic,
                        oTelEnabled: sharedClientStartupContext.oTelEnabled,
                        oTelAriaTenant: sharedClientStartupContext.oTelAriaTenant,
                        oTelAriaNameSpace: sharedClientStartupContext.oTelNameSpace,
                        sessionId: sharedClientStartupContext.sessionId,
                        serverLocation: sharedClientStartupContext.geoName,
                        requestOrigin: sharedClientStartupContext.requestOrigin,
                        initialPageName: "Unauth-MCM" || 'OfficeHome',
                        initialPageType: viewType,
                        fromCode: fromCode,
                    };
                    window.standaloneOteLogger && window.standaloneOteLogger.initializeUnAuthOTel(otelContext);
                }

                function addUnauthOtelTelemetry(){
                    var pageName = "Unauth-MCM" || 'OfficeHome';
                    $('button, a').on('click', function() {
                        var elementId = $(this).attr("id");
                        if (elementId) {
                            var actionResult = '';
                            var actionTarget = '';
                            var actionArea = '';
                            var actionTargetId = '';
                            // IMG page: Handle dynamic img-prompt-{guid}
                            if (elementId.startsWith('img-prompt-')) {
                                actionResult = 'SignIn';
                                actionTarget = 'UnauthImg';
                                actionTargetId = elementId;
                                actionArea = 'ImgPromptCarousel';
                            }
                            // Create page: Handle dynamyc ids
                            else if (elementId.startsWith('create-prompt-grid')) {
                                actionResult = 'SignIn';
                                actionTarget = 'UnauthCreate';
                                actionTargetId = elementId;
                                actionArea = 'CreatePromptGrid';
                            }
                            else if (elementId.startsWith('create-app-template-link-')) {
                                actionResult = 'Get';
                                actionTarget = 'UnauthCreate';
                                actionTargetId = elementId;
                                actionArea = 'CreateAppTemplates';
                            }
                            else if (elementId.startsWith('create-prompt-card')) {
                                actionResult = 'SignIn';
                                actionTarget = 'UnauthCreate';
                                actionTargetId = elementId;
                                actionArea = 'CreatePrompt';
                            }
                            else if (elementId.startsWith('info-card-stack-')) {
                                actionResult = 'Navigate';
                                actionTarget = 'UnauthCcm';
                                actionTargetId = elementId;
                                actionArea = 'CcmInfoCardStack';
                            }
                            else {
                                switch (elementId) {
                                    // Hero area clicks
                                    case 'hero-banner-sign-in-to-office-365-link':
                                        actionResult = 'SignIn';
                                        actionTarget = 'Office';
                                        actionArea = 'Hero';
                                        break;
                                    case 'hero-banner-sign-back-in-to-office-365-link':
                                        actionResult = 'SignIn';
                                        actionTarget = 'Office';
                                        actionArea = 'Hero';
                                        break;
                                    case 'hero-banner-get-office-link':
                                        actionResult = 'Get';
                                        actionTarget = 'Office';
                                        actionTargetId = 'Home';
                                        actionArea = 'Hero';
                                        break;
                                    case 'hero-banner-free-upsell-v1-link':
                                        actionResult = 'SignUp';
                                        actionTarget = 'Office';
                                        actionArea = 'Hero';
                                        break;
                                    case 'hero-banner-see-plans-link':
                                        actionResult = 'Get';
                                        actionTarget = 'Office';
                                        actionArea = 'Hero';
                                        break;
                                    case 'hero-banner-free-version-microsoft-365-link':
                                        actionResult = 'SignUp';
                                        actionTarget = 'Microsoft365';
                                        actionArea = 'Hero';
                                        break;
                                    case 'hero-banner-premium-plans-microsoft-365-link':
                                        actionResult = 'Get';
                                        actionTarget = 'Microsoft365';
                                        actionArea = 'Hero';
                                        break;
                                    case 'hero-banner-sign-in-microsoft-365-link':
                                        actionResult = 'SignIn';
                                        actionTarget = 'Microsoft365';
                                        actionArea = 'Hero';
                                        break;
                                    case 'hero-banner-m365-learn-more-link':
                                        actionResult = 'Get';
                                        actionTarget = 'Microsoft365';
                                        actionTargetId = 'LearnMoreM365Copilot';
                                        actionArea = 'Hero';
                                        break;
                                    case 'hero-banner-download-desktop-apps-link':
                                        actionResult = 'Get';
                                        actionTarget = 'Microsoft365';
                                        actionArea = 'Hero';
                                        break;
                                    // GetOffice area clicks
                                    case 'get-office-today-for-home-link':
                                        actionResult = 'Get';
                                        actionTarget = 'Office';
                                        actionTargetId = 'Home';
                                        actionArea = 'GetOffice';
                                        break;
                                    case 'get-office-today-enterprise-link':
                                        actionResult = 'Get';
                                        actionTarget = 'Office';
                                        actionTargetId = 'Enterprise';
                                        actionArea = 'GetOffice';
                                        break;
                                    case 'get-office-today-for-business-link':
                                        actionResult = 'Get';
                                        actionTarget = 'Office';
                                        actionTargetId = 'Business';
                                        actionArea = 'GetOffice';
                                        break;
                                    case 'get-office-today-edu-link':
                                        actionResult = 'Get';
                                        actionTarget = 'Office';
                                        actionTargetId = 'Education';
                                        actionArea = 'GetOffice';
                                        break;
                                    // UniversalHeader area clicks
                                    case 'BuyOffice365':
                                        actionResult = 'Get';
                                        actionTarget = 'Office';
                                        actionTargetId = 'Home';
                                        actionArea = 'UniversalHeader';
                                        break;
                                    case 'shy-header-consumer-signup-for-free':
                                        actionResult = 'SignUp';
                                        actionTarget = 'Office';
                                        actionTargetId = 'Home';
                                        actionArea = 'ShyHeader';
                                        break;
                                    case 'shy-header-consumer-go-premium':
                                        actionResult = 'Get';
                                        actionTarget = 'Office';
                                        actionTargetId = 'Home';
                                        actionArea = 'ShyHeader';
                                        break;
                                    case 'shy-header-consumer-sign-in':
                                        actionResult = 'SignIn';
                                        actionTarget = 'Office';
                                        actionTargetId = 'Home';
                                        actionArea = 'ShyHeader';
                                        break;
                                    case 'shy-header-commercial-try-for-free':
                                        actionResult = 'SignUp';
                                        actionTarget = 'Office';
                                        actionTargetId = 'Business';
                                        actionArea = 'ShyHeader';
                                        break;
                                    case 'shy-header-commercial-see-plans-and-pricing':
                                        actionResult = 'Get';
                                        actionTarget = 'Office';
                                        actionTargetId = 'Business';
                                        actionArea = 'ShyHeader';
                                        break;
                                    case 'shy-header-commercial-sign-in':
                                        actionResult = 'SignIn';
                                        actionTarget = 'Office';
                                        actionTargetId = 'Business';
                                        actionArea = 'ShyHeader';
                                        break;
                                    case 'shy-header-edu-sign-up':
                                        actionResult = 'SignUp';
                                        actionTarget = 'Office';
                                        actionTargetId = 'Education';
                                        actionArea = 'ShyHeader';
                                        break;
                                    case 'shy-header-edu-sign-in':
                                        actionResult = 'SignIn';
                                        actionTarget = 'Office';
                                        actionTargetId = 'Education';
                                        actionArea = 'ShyHeader';
                                        break;
                                    case 'unauth-tab-home':
                                        actionResult = 'NavigateTabs';
                                        actionTarget = 'Office';
                                        actionTargetId = 'Home';
                                        actionArea = 'Tabs';
                                        break;
                                    case 'unauth-tab-commercial':
                                        actionResult = 'NavigateTabs';
                                        actionTarget = 'Office';
                                        actionTargetId = 'Business';
                                        actionArea = 'Tabs';
                                        break;
                                    case 'unauth-tab-edu':
                                        actionResult = 'NavigateTabs';
                                        actionTarget = 'Office';
                                        actionTargetId = 'Education';
                                        actionArea = 'Tabs';
                                        break;
                                    case 'unauth-tab-home--footer':
                                        actionResult = 'NavigateTabs';
                                        actionTarget = 'Office';
                                        actionTargetId = 'Home';
                                        actionArea = 'Tabs';
                                        break;
                                    case 'unauth-tab-commercial--footer':
                                        actionResult = 'NavigateTabs';
                                        actionTarget = 'Office';
                                        actionTargetId = 'Business';
                                        actionArea = 'Tabs';
                                        break;
                                    case 'unauth-tab-edu--footer':
                                        actionResult = 'NavigateTabs';
                                        actionTarget = 'Office';
                                        actionTargetId = 'Education';
                                        actionArea = 'Tabs';
                                        break;
                                    // Mobile download clicks
                                    case 'app-store-link':
                                        actionResult = 'Download';
                                        actionTarget = 'Office';
                                        actionTargetId = 'Mobile';
                                        actionArea = 'Footer';
                                        break;
                                    case 'mobile-app-banner-app-store-link':
                                        actionResult = 'Download';
                                        actionTarget = 'Office';
                                        actionTargetId = 'Mobile';
                                        actionArea = 'Hero';
                                        break;
                                    case 'hero-banner-sign-in-copilot-link':
                                        actionResult = 'SignIn';
                                        actionTarget = 'Copilot';
                                        actionArea = 'Hero';
                                        break;
                                    case 'hero-banner-learn-more-about-copilot-link':
                                        actionResult = 'Get';
                                        actionTarget = 'Copilot';
                                        actionTargetId = 'LearnMoreAboutCopilot';
                                        actionArea = 'Hero';
                                        break;
                                    //Unuath MCM Additions
                                    case "mcm-hero-banner-signin":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmHeroSignIn';
                                        actionArea = 'McmHero';
                                        break;
                                    case "mcm-hero-banner-background":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmHeroSignInBG';
                                        actionArea = 'McmHero';
                                        break;
                                    case "mcm-hero-banner-secondary":
                                        actionResult = 'Get';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmHeroSecondary';
                                        actionArea = 'McmHero';
                                        break;
                                    case "mcm-hero-banner-personalized-sign-in":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmHeroPersonalizedSignIn';
                                        actionArea = 'McmHero';
                                        break;
                                    case "mcm-hero-banner-switch-sign-in":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmHeroSwitchAccountSignIn';
                                        actionArea = 'McmHero';
                                        break;
                                    case "mcm-hero-banner-switch-account":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmHeroSwitchAccount';
                                        actionArea = 'McmHero';
                                        break;
                                    case "mcm-hero-banner-forget-account":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmHeroForgetAccount';
                                        actionArea = 'McmHero';
                                        break;
                                    case "module-cta-search":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmPromptModuleCtaSearch';
                                        actionArea = 'McmPromptModule';
                                        break;
                                    case "module-cta-create":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmPromptModuleCtaCreate';
                                        actionArea = 'McmPromptModule';
                                        break;
                                    case "module-cta-chat":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmPromptModuleCtaChat';
                                        actionArea = 'McmPromptModule';
                                        break;
                                    case "module-cta-apps":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmPromptModuleCtaApps';
                                        actionArea = 'McmPromptModule';
                                        break;
                                    case "carousel-nav-prev":
                                        actionResult = 'Navigate';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmPromptCarouselPrevious';
                                        actionArea = 'McmPromptCarousel';
                                        break;
                                    case "carousel-nav-next":
                                        actionResult = 'Navigate';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmPromptCarouselNext';
                                        actionArea = 'McmPromptCarousel';
                                        break;
                                    case "mcm-prompt-link-1":
                                    case "prompt-link-1": // Keep for backward compatibility and A/B testing and remove once A/B test is done
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmPromptCarouselLink1';
                                        actionArea = 'McmPromptCarousel';
                                        break;
                                    case "mcm-prompt-link-2":
                                    case "prompt-link-2":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmPromptCarouselLink2';
                                        actionArea = 'McmPromptCarousel';
                                        break;
                                    case "mcm-prompt-link-3":
                                    case "prompt-link-3":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmPromptCarouselLink3';
                                        actionArea = 'McmPromptCarousel';
                                        break;
                                    case "mcm-prompt-link-4":
                                    case "prompt-link-4":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmPromptCarouselLink4';
                                        actionArea = 'McmPromptCarousel';
                                        break;
                                    case "mcm-prompt-link-5":
                                    case "prompt-link-5":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmPromptCarouselLink5';
                                        actionArea = 'McmPromptCarousel';
                                        break;
                                    case "mcm-prompt-link-6":
                                    case "prompt-link-6":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmPromptCarouselLink6';
                                        actionArea = 'McmPromptCarousel';
                                        break;
                                    case "mcm-prompt-link-7":
                                    case "prompt-link-7":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmPromptCarouselLink7';
                                        actionArea = 'McmPromptCarousel';
                                        break;
                                    case "mcm-prompt-link-8":
                                    case "prompt-link-8":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmPromptCarouselLink8';
                                        actionArea = 'McmPromptCarousel';
                                        break;
                                    case "faqExpandAll":
                                        actionResult = 'Navigate';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'McmFaqExpandAll';
                                        actionArea = 'McmPromptFaq';
                                        break;
                                    case "faq-item-0":
                                        actionResult = 'Navigate';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'FaqItem1';
                                        actionArea = 'McmPromptFaq';
                                        break;
                                     case "faq-item-1":
                                        actionResult = 'Navigate';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'FaqItem2';
                                        actionArea = 'McmPromptFaq';
                                        break;
                                    case "faq-item-2":
                                        actionResult = 'Navigate';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'FaqItem3';
                                        actionArea = 'McmPromptFaq';
                                        break;
                                    case "faq-item-3":
                                        actionResult = 'Navigate';
                                        actionTarget = 'UnauthMcm';
                                        actionTargetId = 'FaqItem4';
                                        actionArea = 'McmPromptFaq';
                                        break;
                                    // Unauth ODC redesign additions
                                    case "odc-hero-signin":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthOdc';
                                        actionTargetId = 'OdcHeroSignIn';
                                        actionArea = 'OdcHero';
                                        break;
                                    case "odc-hero-secondary":
                                        actionResult = 'Get';
                                        actionTarget = 'UnauthOdc';
                                        actionTargetId = 'OdcHeroSecondary';
                                        actionArea = 'OdcHero';
                                        break;
                                    case "odc-prompt-link-1":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthOdc';
                                        actionTargetId = 'OdcPromptCarouselLink1';
                                        actionArea = 'OdcPromptCarousel';
                                        break;
                                    case "odc-prompt-link-2":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthOdc';
                                        actionTargetId = 'OdcPromptCarouselLink2';
                                        actionArea = 'OdcPromptCarousel';
                                        break;
                                    case "odc-prompt-link-3":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthOdc';
                                        actionTargetId = 'OdcPromptCarouselLink3';
                                        actionArea = 'OdcPromptCarousel';
                                        break;
                                    case "odc-prompt-link-4":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthOdc';
                                        actionTargetId = 'OdcPromptCarouselLink4';
                                        actionArea = 'OdcPromptCarousel';
                                        break;
                                    case "odc-prompt-link-5":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthOdc';
                                        actionTargetId = 'OdcPromptCarouselLink5';
                                        actionArea = 'OdcPromptCarousel';
                                        break;
                                    case "odc-prompt-link-6":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthOdc';
                                        actionTargetId = 'OdcPromptCarouselLink6';
                                        actionArea = 'OdcPromptCarousel';
                                        break;
                                    case "app-module-cta-0":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthOdc';
                                        actionTargetId = 'AppModuleCta0';
                                        actionArea = 'OdcAppModule';
                                        break;
                                    case "app-module-cta-1":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthOdc';
                                        actionTargetId = 'AppModuleCta1';
                                        actionArea = 'OdcAppModule';
                                        break;
                                    case "app-module-cta-2":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthOdc';
                                        actionTargetId = 'AppmModuleCta2';
                                        actionArea = 'OdcAppModule';
                                        break;
                                    case "app-module-cta-3":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthOdc';
                                        actionTargetId = 'AppModuleCta3';
                                        actionArea = 'OdcAppModule';
                                        break;
                                    case "module-cta-search-odc":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthOdc';
                                        actionTargetId = 'OdcPromptModuleCtaSearch';
                                        actionArea = 'OdcPromptModule';
                                        break;
                                    case "module-cta-create-odc":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthOdc';
                                        actionTargetId = 'OdcPromptModuleCtaCreate';
                                        actionArea = 'OdcPromptModule';
                                        break;
                                    case "module-cta-chat-odc":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthOdc';
                                        actionTargetId = 'OdcPromptModuleCtaChat';
                                        actionArea = 'OdcPromptModule';
                                        break;
                                    case "module-cta-apps-odc":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthOdc';
                                        actionTargetId = 'OdcPromptModuleCtaApps';
                                        actionArea = 'OdcPromptModule';
                                        break;
                                    // IMG page - Hero
                                    case "img-hero-banner-signin":
                                    case "img-hero-banner-breadcrumb-link":
                                    case "img-hero-banner-background":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthImg';
                                        actionTargetId = elementId;
                                        actionArea = 'ImgHero';
                                        break;
                                    // IMG page - Info Text Grid
                                    case "info-text-grid-item-1":
                                    case "info-text-grid-item-2":
                                    case "info-text-grid-item-3":
                                    case "info-text-grid-item-4":
                                    case "info-text-grid-item-5":
                                    case "info-text-grid-item-6":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthImg';
                                        actionTargetId = elementId;
                                        actionArea = 'ImgInfoTextGrid';
                                        break;
                                    // IMG page - Info Card Grid
                                    case "info-card-link_1":
                                    case "info-card-link_2":
                                    case "info-card-link_3":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthImg';
                                        actionTargetId = elementId;
                                        actionArea = 'ImgInfoCardGrid';
                                        break;
                                    // IMGED page - Hero
                                    case "img-ed-hero-banner-breadcrumb-link":
                                        actionResult = 'Navigate';
                                        actionTarget = 'UnauthImgEd';
                                        actionTargetId = elementId;
                                        actionArea = 'ImgEdHero';
                                        break;
                                    case "img-ed-hero-banner-signin":
                                    case "img-ed-hero-banner-background":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthImgEd';
                                        actionTargetId = elementId;
                                        actionArea = 'ImgEdHero';
                                        break;
                                    // IMGED page - AppsModules/Accordion Section
                                    case "img-ed-app-module-cta-0":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthImgEd';
                                        actionTargetId = elementId;
                                        actionArea = 'ImgEdAppModule';
                                        break;
                                    case "img-ed-app-module-cta-1":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthImgEd';
                                        actionTargetId = elementId;
                                        actionArea = 'ImgEdAppModule';
                                        break;
                                    case "img-ed-app-module-cta-2":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthImgEd';
                                        actionTargetId = elementId;
                                        actionArea = 'ImgEdAppModule';
                                        break;
                                    case "img-ed-app-module-cta-3":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthImgEd';
                                        actionTargetId = elementId;
                                        actionArea = 'ImgEdAppModule';
                                        break;
                                    // IMGED page - Create Section
                                    case "img-ed-create-cta":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthImgEd';
                                        actionTargetId = elementId;
                                        actionArea = 'ImgEdCreate';
                                        break;
                                    // IMGED page - Info Card Grid WIP
                                    case "img-ed-info-card-link_1":
                                    case "img-ed-info-card-link_2":
                                    case "img-ed-info-card-link_3":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthImgEd';
                                        actionTargetId = elementId;
                                        actionArea = 'ImgEdInfoCardGrid';
                                        break;
                                    // PromptGallery App Cards - Word
                                    case "pg-app-word-prompt-link-0":
                                    case "pg-app-word-prompt-link-1":
                                    case "pg-app-word-prompt-link-2":
                                    case "pg-app-excel-prompt-link-0":
                                    case "pg-app-excel-prompt-link-1":
                                    case "pg-app-excel-prompt-link-2":
                                    case "pg-app-powerpoint-prompt-link-0":
                                    case "pg-app-powerpoint-prompt-link-1":
                                    case "pg-app-powerpoint-prompt-link-2":
                                    case "pg-app-outlook-prompt-link-0":
                                    case "pg-app-outlook-prompt-link-1":
                                    case "pg-app-outlook-prompt-link-2":
                                    case "pg-app-copilot-prompt-link-0":
                                    case "pg-app-copilot-prompt-link-1":
                                    case "pg-app-copilot-prompt-link-2":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthPromptGallery';
                                        actionTargetId = elementId;
                                        actionArea = 'PromptGalleryApps';
                                        break;
                                    // PromptGallery Featured Cards
                                    case "pg-featured-prompt-link-0":
                                    case "pg-featured-prompt-link-1":
                                    case "pg-featured-prompt-link-2":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthPromptGallery';
                                        actionTargetId = elementId;
                                        actionArea = 'PromptGalleryFeatured';
                                        break;
                                    // PromptGallery Featured Sign In
                                    case "pg-featured-signin":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthPromptGallery';
                                        actionTargetId = elementId;
                                        actionArea = 'PromptGalleryFeatured';
                                        break;
                                    // PromptGallery Hero Actions
                                    case "pg-hero-signin":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthPromptGallery';
                                        actionTargetId = elementId;
                                        actionArea = 'PromptGalleryHero';
                                        break;
                                    case "pg-hero-breadcrumb-link":
                                        actionResult = 'Navigate';
                                        actionTarget = 'UnauthPromptGallery';
                                        actionTargetId = elementId;
                                        actionArea = 'PromptGalleryHero';
                                        break;
                                    // Prompt Gallery Apps Navigation Pills (Word, Excel, PowerPoint, Outlook, Copilot)
                                    case 'pg-pill-app-word':
                                    case 'pg-pill-app-excel':
                                    case 'pg-pill-app-powerpoint':
                                    case 'pg-pill-app-outlook':
                                    case 'pg-pill-app-copilot':
                                        actionResult = 'Navigate';
                                        actionTarget = 'UnauthPromptGallery';
                                        actionTargetId = elementId;
                                        actionArea = 'PromptGalleryApps';
                                        break;
                                    // Prompt Gallery Task Navigation Pills (Catch up, Ask, Learn, Create, etc.)
                                    case 'pg-pill-task-catchup':
                                    case 'pg-pill-task-ask':
                                    case 'pg-pill-task-learn':
                                    case 'pg-pill-task-create':
                                    case 'pg-pill-task-analyze':
                                    case 'pg-pill-task-prepare':
                                    case 'pg-pill-task-understand':
                                    case 'pg-pill-task-code':
                                    case 'pg-pill-task-execute':
                                    case 'pg-pill-task-find':
                                    case 'pg-pill-task-edit':
                                    case 'pg-pill-task-schedule':
                                        actionResult = 'Navigate';
                                        actionTarget = 'UnauthPromptGallery';
                                        actionTargetId = elementId;
                                        actionArea = 'PromptGalleryTasks';
                                        break;
                                    // Task Section Sign In Button
                                    case 'pg-task-signin':
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthPromptGallery';
                                        actionTargetId = elementId;
                                        actionArea = 'PromptGalleryTasks';
                                        break;
                                    // PromptGallery Task Cards - Dynamic handling for all task prompt links
                                    case 'pg-task-catchup-prompt-link-0':
                                    case 'pg-task-catchup-prompt-link-1':
                                    case 'pg-task-catchup-prompt-link-2':
                                    case 'pg-task-ask-prompt-link-0':
                                    case 'pg-task-ask-prompt-link-1':
                                    case 'pg-task-ask-prompt-link-2':
                                    case 'pg-task-learn-prompt-link-0':
                                    case 'pg-task-learn-prompt-link-1':
                                    case 'pg-task-learn-prompt-link-2':
                                    case 'pg-task-create-prompt-link-0':
                                    case 'pg-task-create-prompt-link-1':
                                    case 'pg-task-create-prompt-link-2':
                                    case 'pg-task-analyze-prompt-link-0':
                                    case 'pg-task-analyze-prompt-link-1':
                                    case 'pg-task-analyze-prompt-link-2':
                                    case 'pg-task-prepare-prompt-link-0':
                                    case 'pg-task-prepare-prompt-link-1':
                                    case 'pg-task-prepare-prompt-link-2':
                                    case 'pg-task-understand-prompt-link-0':
                                    case 'pg-task-understand-prompt-link-1':
                                    case 'pg-task-understand-prompt-link-2':
                                    case 'pg-task-code-prompt-link-0':
                                    case 'pg-task-code-prompt-link-1':
                                    case 'pg-task-code-prompt-link-2':
                                    case 'pg-task-execute-prompt-link-0':
                                    case 'pg-task-execute-prompt-link-1':
                                    case 'pg-task-execute-prompt-link-2':
                                    case 'pg-task-find-prompt-link-0':
                                    case 'pg-task-find-prompt-link-1':
                                    case 'pg-task-find-prompt-link-2':
                                    case 'pg-task-edit-prompt-link-0':
                                    case 'pg-task-edit-prompt-link-1':
                                    case 'pg-task-edit-prompt-link-2':
                                    case 'pg-task-schedule-prompt-link-0':
                                    case 'pg-task-schedule-prompt-link-1':
                                    case 'pg-task-schedule-prompt-link-2':
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthPromptGallery';
                                        actionTargetId = elementId;
                                        actionArea = 'PromptGalleryTasks';
                                        break;
                                    // Create page - Hero
                                    case "create-hero-banner-signin":
                                    case "create-hero-banner-breadcrumb-link":
                                    case "create-hero-banner-background":
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthCreate';
                                        actionTargetId = elementId;
                                        actionArea = 'CreateHero';
                                        break;
                                    // Create page - Logo Wall
                                    case "create-logo-wall-card-1":
                                    case "create-logo-wall-card-2":
                                    case "create-logo-wall-card-3":
                                    case "create-logo-wall-card-4":
                                    case "create-logo-wall-card-5":
                                    case "create-logo-wall-card-6":
                                        actionResult = 'Get';
                                        actionTarget = 'UnauthCreate';
                                        actionTargetId = elementId;
                                        actionArea = 'CreateLogoWall';
                                        break;
                                    // Create page - App Templates
                                    case 'create-pill-Word':
                                    case 'create-pill-Excel':
                                    case 'create-pill-PowerPoint':
                                    case 'create-pill-Designer':
                                    case 'create-pill-Clipchamp':
                                        actionResult = 'Navigate';
                                        actionTarget = 'UnauthCreate';
                                        actionTargetId = elementId;
                                        actionArea = 'CreateAppTemplates';
                                        break;
                                    // CCM page
                                    case 'ccm-hero-primary-cta':
                                        actionResult = 'SignIn';
                                        actionTarget = 'UnauthCcm';
                                        actionTargetId = 'CcmHeroPrimaryCta';
                                        actionArea = 'CcmHero';
                                        break;
                                    case 'ccm-hero-secondary-cta':
                                        actionResult = 'Get';
                                        actionTarget = 'UnauthCcm';
                                        actionTargetId = 'CcmHeroSecondaryCta';
                                        actionArea = 'CcmHero';
                                        break;
                                    default:
                                        actionResult = 'Navigate';
                                        actionTarget = 'Other';
                                }
                            }
                            window.standaloneOteLogger && window.standaloneOteLogger.logUnAuthUserAction({ id: elementId, area: actionArea, result: actionResult, target: actionTarget, targetId: actionTargetId, pageName: pageName, pageType: viewType});
                        }
                    });

                    if (!true || (isSessionStorageAvailable && sessionStorage.getItem('DefaultSignInCalledBefore') === 'true') || 'NewUserView' === 'SignoutUserView' ) {
                        // only log page view if page is displayed
                        window.standaloneOteLogger && window.standaloneOteLogger.logPageView({ pageName: pageName, pageType: viewType, isIntentional: true, fromCode: fromCode}, true);
                    }
                }
                initializeOtelLogging();
                addUnauthOtelTelemetry();
            }
        });
    

