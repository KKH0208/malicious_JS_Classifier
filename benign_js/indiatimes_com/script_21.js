/* 元のURL: https://indiatimes.com */

(function () {
    console.log("Test: Admanager");
    const AdManagerImpl = (function() {
        const defaultConfig = {
            sectionMappings: {},
            defaultPlatform: 'mweb',
            adSlotsUrl: 'https://www.indiatimes.com/it_adslots.js?v=0.2',
            enableSPADetection: false
        };
      
        let config = {...defaultConfig};
        let isInitialized = false;
        let initializationPromise = null;

        function loadExternalAdSlots() {
            return new Promise((resolve, reject) => {
                if (window.IT_AD_SLOTS) {
                    resolve(window.IT_AD_SLOTS);
                    return;
                }
                const script = document.createElement('script');
                script.src = config.adSlotsUrl;
                script.onload = () => {
                    if (window.IT_AD_SLOTS) {
                        resolve(window.IT_AD_SLOTS);
                    } else {
                        reject(new Error('IT_AD_SLOTS not defined after loading external script'));
                    }
                };
                script.onerror = () => reject(new Error('Failed to load ad slots script'));
                document.head.appendChild(script);
            });
        }

        function initialize() {
            if (initializationPromise) return initializationPromise;
        
            initializationPromise = loadExternalAdSlots()
            .then(externalAdSlots => {
                config.adSlots = externalAdSlots;
                isInitialized = true;
                return true;
            })
            .catch(error => {
                console.error('AdManager initialization failed:', error);
                config.adSlots = {};
                isInitialized = true;
                return false;
            });
            return initializationPromise;
        }

        function isHomePage() {
            const pathname = window.location.pathname;
            return pathname === '/' || pathname === "/hindi" || pathname === "/hindi/";
        }

        function isDetailPage() {
            if (isHomePage()) return false;
            const pathname = window.location.pathname;
            return pathname.endsWith('.html') && !pathname.includes('/author/');
        }

        function getMappedSection(rawSection) {
            if (!rawSection) return '';
            const normalized = rawSection.toLowerCase();
            const sectionMappings = {
                'sports': 'sports',
                'entertainment': 'entertainment', 
                'business': 'business',
                'tech': 'tech',
                'lifestyle': 'lifestyle'
            };
            return config.sectionMappings[normalized] || sectionMappings[normalized] || normalized;
        }

        function getSectionFromUrl() {
            if (isHomePage()) return '';
            const match = window.location.pathname.match(/^\/([^\/]*)/);
            return getMappedSection(match?.[1]);
        }

        async function getAdSlot(platform = config.defaultPlatform, slotName = '') {
            if (!isInitialized) {
                await initialize();
            }

            const normalizedPlatform = platform.toLowerCase();
            const isDetail = isDetailPage();
            const isHome = isHomePage();
            const section = getSectionFromUrl();

            try {
                if (!config.adSlots[normalizedPlatform]) {
                    throw new Error(`Platform '${platform}' not configured`);
                }

                if (isHome) {
                    const homeSlot = config.adSlots[normalizedPlatform].home?.[slotName];
                    if (homeSlot) return homeSlot;
                    throw new Error(`Home slot '${slotName}' not found`);
                }

                const pageType = isDetail ? 'detail' : 'section';
                const pageSlots = config.adSlots[normalizedPlatform][pageType];
                if (!pageSlots) {
                    throw new Error(`Page type '${pageType}' not configured`);
                }

                if (section && pageSlots[section]?.[slotName]) {
                    return pageSlots[section][slotName];
                }

                if (pageSlots.ros?.[slotName]) {
                    return pageSlots.ros[slotName];
                }

                for (const sect in pageSlots) {
                    if (pageSlots[sect][slotName]) {
                        return pageSlots[sect][slotName];
                    }
                }

                throw new Error(`Slot '${slotName}' not found for ${pageType}${section ? ` in '${section}'` : ''}`);

            } catch (error) {
                console.error('AdManager Error:', error.message);
                return null;
            }
        }

        return {
            getAdSlot,
            initialize,
            updateConfig: (newConfig) => {
                Object.assign(config, newConfig);
                if (newConfig.adSlots) {
                    isInitialized = true;
                }
            },
            getCurrentSection: getSectionFromUrl,
            isHomePage,
            isDetailPage,
            config // Expose config for HeaderBiddingManager
        };
    })();

    const HeaderBiddingManager = (function() {
        window.googletag = window.googletag || {cmd: []};
        
        const OUT_OF_PAGE_INTERSTITIAL = 'OUT_OF_PAGE_INTERSTITIAL';
        const OUT_OF_PAGE = 'OUT_OF_PAGE';
        const SKIN = 'SKIN';
        
        let registeredSlots = [];
        
        let adQueue = [];
        let queueTimer = null;
        let isProcessing = false;
        const config = {
            biddingDelay: 500 // milliseconds
        };
        
        const loadScript = function(src, retries = 1) {
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = src;
                script.async = true;
                
                script.onload = () => resolve(script);
                script.onerror = () => {
                    if (retries > 0) {
                        console.warn(`Retrying to load script: ${src}`);
                        resolve(loadScript(src, retries - 1));
                    } else {
                        reject(new Error(`Script load error for ${src}`));
                    }
                };
                
                document.head.appendChild(script);
            });
        };
        
        const loadTAM = function(retries = 1) {
            return new Promise((resolve, reject) => {
                if (window.apstag) {
                    resolve();
                    return;
                }
                
                const script = document.createElement('script');
                script.src = "https://c.amazon-adsystem.com/aax2/apstag.js";
                script.async = true;
                
                script.onload = () => {
                    window.apstag.init({"pubID":"5025","adServer":"googletag"});
                    resolve();
                };
                
                script.onerror = () => {
                    if (retries > 0) {
                        console.warn("Retrying to load apstag.js");
                        loadTAM(retries - 1).then(resolve).catch(reject);
                    } else {
                        reject(new Error("Failed to load apstag.js after retry"));
                    }
                };
                document.head.appendChild(script);
            });
        };
        
        const loadAllScripts = async function() {
            const tilPrebidSrc = 'https://assets.toiimg.com/js/til_prebid.js?v=16';
            let otherScripts = [];
            
            if(typeof googletag === 'undefined' || typeof googletag.pubads === 'undefined'){
                otherScripts.push('https://securepubads.g.doubleclick.net/tag/js/gpt.js');
            }
            
            if(!window._dfpObj || !window._dfpObj.renderAds){
                otherScripts.push('https://timesofindia.indiatimes.com/itads_v2/minify-1.cms');
            }
            
            try {
                // Load til_prebid.js only if window.Times not found
                if(!window.Times){
                    await loadScript(tilPrebidSrc, 1);
                    console.log('til_prebid.js loaded...');
                }
                
                // Load apstag.js
                if(!window.apstag){
                    await loadTAM();
                    console.log('apstag.js loaded...');
                }
                
                // Load other scripts
                if(otherScripts.length > 0){
                    await Promise.all(otherScripts.map(src => loadScript(src, 1)));
                    console.log('Remaining scripts loaded');
                }
                
                // Load Clmb script
                if(!document.querySelector('script[src*="static.clmbtech.com"]')){
                    await loadScript('https://static.clmbtech.com/ase/2360/68/aa.js', 1);
                    console.log('Clmb script loaded');
                }
            } catch (error) {
                console.error('Error loading scripts:', error);
                throw error;
            }
        };
      
        const setCookie = function(name, value, time, unit = 'days') {
            let expires = "";
            if (time) {
                const date = new Date();
                if (unit === 'hours') {
                    date.setTime(date.getTime() + (time * 60 * 60 * 1000));
                } else {
                    date.setTime(date.getTime() + (time * 24 * 60 * 60 * 1000));
                }
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + (value || "") + expires + "; path=/";
        };
      
        const getCookie = function(name) {
            const nameEQ = name + "=";
            const ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        };
      
        // Audience data function
        const getAuds = function() {
            let _auds = ((typeof(colaud)!='undefined') && (typeof colaud.aud !== 'undefined')) ? colaud.aud : '';

            if(typeof localStorage == 'undefined'){
                return _auds;
            }

            if(_auds){
                localStorage.setItem('colaud', _auds);
            } else if(localStorage.getItem('colaud')){
                _auds = localStorage.getItem('colaud');
            }
            return _auds;
        };
      
        // Targeting function
        const setTargeting = function(params = {}) {
            const _tval = function(v) {
                if (typeof(v) === 'undefined') return '';
                if (v.length > 100) return v.substr(0, 100);
                return v;
            };
            
            const _HDL = '';
            const _auds = getAuds();
            let tArray = {};
            
            tArray['sg'] = _auds;
            tArray['HDL'] = _HDL;
            
            if (AdManager.isHomePage()) {
                tArray['Tmpl_SCN'] = 'homepage';
            } else if (AdManager.isDetailPage()) {
                tArray['Tmpl_SCN'] = 'showpage_articles';
                if (params.category) {
                    tArray['SubSCN'] = params.category;
                }
            } else {
                // Section/listing page
                tArray['Tmpl_SCN'] = 'listing_articles';
                const section = AdManager.getCurrentSection();
                if (section) {
                    tArray['SCN'] = section;
                }
            }
            
            if (params.category) {
                tArray['SCN'] = params.category;
            }
            
            if (params.subcategory) {
                tArray['SubSCN'] = params.subcategory;
            }
            
            if (params.keywordSafe2 === 0 || params.keywordSafe2 === 1) {
                tArray['BL'] = `${params.keywordSafe2}`;
            }
            
            if (params.hype) {
                tArray['Hyp1'] = params.hype;
            } else if (params.title) {
                tArray['Hyp1'] = _tval(params.title);
            }
            
            if (params.MetaKeywords) {
                tArray['Meta_Keywords'] = params.MetaKeywords;
            }
            
            // Set targeting on googletag
            googletag.cmd.push(function() {
                Object.keys(tArray).forEach(key => {
                    if (tArray[key]) {
                        googletag.pubads().setTargeting(key, tArray[key]);
                    }
                });
            });
            
            // Store for header bidding
            window.Times = window.Times || {};
            window.Times.adsKeys = tArray;
            
            return tArray;
        };
      
        // Queue processing function
        const processQueue = function() {
            if (adQueue.length === 0) {
                queueTimer = null;
                return;
            }
            
            console.log(`Processing ${adQueue.length} ads from queue`);
            
            // Take current queue and clear it
            const currentBatch = [...adQueue];
            adQueue = [];
            queueTimer = null;
            
            // Add to registered slots for tracking
            registeredSlots.push(...currentBatch);
            
            // Wait for scripts and process
            checkScriptsAndProcess(currentBatch);
        };
      
        // Start queue timer
        const startQueueTimer = function() {
            if (queueTimer) return; // Timer already running
            
            console.log(`Starting queue timer for ${config.biddingDelay}ms`);
            queueTimer = setTimeout(() => {
                processQueue();
            }, config.biddingDelay);
        };
      
        // Ad slot registration function with queue system
        const registerAdSlot = function(unitPath, sizes, divId, slotType = null, params = {}) {

            if (!unitPath) {
                console.error('registerAdSlot: unitPath is required');
                return false;
            }
            
            if (slotType !== OUT_OF_PAGE_INTERSTITIAL && !divId) {
                console.error('registerAdSlot: divId is required for non-interstitial ads');
                return false;
            }
            
            const existingInQueue = adQueue.find(slot => 
                slot.unitPath === unitPath && 
                slot.divId === divId && 
                slot.slotType === slotType
            );
            
            if (existingInQueue) {
                console.warn(`Slot already registered/queued: ${unitPath} with divId: ${divId}`);
                return false;
            }
            
            const slotConfig = {
                unitPath: unitPath,
                sizes: sizes,
                divId: divId,
                slotType: slotType,
                params: params
            };
            
            // Add to queue
            adQueue.push(slotConfig);
            console.log(`Queued slot: ${unitPath} with divId: ${divId || 'NIL'} (Queue size: ${adQueue.length})`);
            
            // Start timer if not running
            startQueueTimer();
            
            return true;
        };
      
        // Check scripts and process batch
        const checkScriptsAndProcess = function(slotBatch, params = {}) {
            // Check if ad_disabled
            if(document.location && document.location.search && document.location.search.indexOf('ad_disabled=1') > -1){
                return;
            }
            
            console.log("HeaderBiddingManager: Processing batch of", slotBatch.length, "slots");
            
            (async function() {
                let processFn = function(){
                    processBatch(slotBatch, params);
                };
                
                if (
                    typeof googletag !== 'undefined' && 
                    typeof googletag.pubads === 'function' && 
                    typeof window.apstag !== 'undefined' && 
                    typeof window.Times !== 'undefined' && 
                    typeof window._dfpObj !== 'undefined' && 
                    typeof window._dfpObj.renderAds === 'function'
                ) {
                    console.log("All scripts already loaded, processing batch");
                    processFn();
                    return;
                }
                
                try {
                    await loadAllScripts();
                    processFn();
                } catch (error) {
                    console.error('Error in checkScriptsAndProcess:', error);
                }
            })();
        };
      
        const processBatch = function(slotBatch, params = {}) {
            // Set targeting first
            setTargeting(params);
            
            // Prepare ads array for header bidding
            const adsArrayForBiddingAds = [];
            
            slotBatch.forEach(slot => {
                let adName = slot.divId ? slot.divId.replace('div-gpt-ad-', '') : 'webInterstitial';
                let divId = slot.divId;
                let sizes = slot.sizes;
                
                if (slot.slotType === OUT_OF_PAGE_INTERSTITIAL) {
                    adName = "webInterstitial";
                    divId = 'NIL';
                }
                
                let adsObj = {
                    adCode: slot.unitPath,
                    divId: divId,
                    size: sizes,
                    name: adName
                };
                
                if (slot.slotType === OUT_OF_PAGE) {
                    delete adsObj['size'];
                }
                
                if (slot.slotType !== OUT_OF_PAGE_INTERSTITIAL) {
                    adsObj.force = true;
                }
                
                adsArrayForBiddingAds.push(adsObj);
            });
            
            console.log("HeaderBiddingManager: Batch adsArrayForBiddingAds=>", adsArrayForBiddingAds);
            
            // Trigger header bidding
            if (adsArrayForBiddingAds.length > 0) {
                window.displayAllAdsInArray(adsArrayForBiddingAds);
            }
        };

        // Display ad slot function
        const displayAdSlot = function(divId) {
            googletag.cmd.push(function() { 
                googletag.display(divId); 
            });
        };
        
        // Configuration function
        const setBiddingDelay = function(milliseconds) {
            if (typeof milliseconds !== 'number' || milliseconds < 0) {
                console.error('setBiddingDelay: delay must be a positive number');
                return false;
            }
            config.biddingDelay = milliseconds;
            console.log(`HeaderBiddingManager: Bidding delay set to ${milliseconds}ms`);
            return true;
        };
        
        // Get queue status for debugging
        const getQueueStatus = function() {
            return {
                queueSize: adQueue.length,
                timerActive: !!queueTimer,
                biddingDelay: config.biddingDelay,
                registeredSlotsCount: registeredSlots.length
            };
        };
      
        // Public API
        return {
            registerAdSlot: registerAdSlot,
            setTargeting: setTargeting,
            displayAdSlot: displayAdSlot,
            setBiddingDelay: setBiddingDelay,
            getQueueStatus: getQueueStatus,
            startQueueTimer: startQueueTimer,
            OUT_OF_PAGE_INTERSTITIAL,
            OUT_OF_PAGE,
            SKIN
        };
    })();

    window.HeaderBiddingManager = HeaderBiddingManager;
    (function drainHBM() {
        const stub = window.HeaderBiddingManager;
        const queue = (stub && stub._q) ? stub._q : [];
        queue.forEach(([method, args]) => {
        try {
            if (HeaderBiddingManager[method]) HeaderBiddingManager[method](...(args || []));
        } catch (e) { /* swallow */ }
        });
    })();

    (function handoff() {
        const stub = window.AdManager;
        const queued = (stub && stub._q) ? stub._q : [];
        window.AdManager = AdManagerImpl;
        window.AdManager.ready = true;

        queued.forEach(([method, args, resolve, reject]) => {
            try {
            const out = (AdManagerImpl[method] || (() => {}))(...(args || []));
            if (out && typeof out.then === 'function') {
                out.then(resolve).catch(reject);
            } else if (resolve) {
                resolve(out);
            }
            } catch (err) {
            if (reject) reject(err);
            }
        });
    })();

    AdManagerImpl.initialize();

})();


