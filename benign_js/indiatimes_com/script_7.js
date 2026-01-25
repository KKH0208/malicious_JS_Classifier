/* 元のURL: https://indiatimes.com */

    window.googletag = window.googletag || { cmd: [] };
    window.AdManager = window.AdManager || (function () {
        // Queue for early calls
        const q = [];
        // Stub API: mirror the real API surface enough to avoid breaking callers
        const api = {
        _q: q,
        ready: false,
        // Promise-returning to match the real method
        getAdSlot: (...args) => new Promise((resolve, reject) => {
            q.push(['getAdSlot', args, resolve, reject]);
        }),
        initialize: (...args) => { q.push(['initialize', args]); },
        updateConfig: (...args) => { q.push(['updateConfig', args]); },
        isHomePage: (...args) => { q.push(['isHomePage', args]); },
        isDetailPage: (...args) => { q.push(['isDetailPage', args]); },
        getCurrentSection: (...args) => { q.push(['getCurrentSection', args]); }
        };
        return api;
    })();


