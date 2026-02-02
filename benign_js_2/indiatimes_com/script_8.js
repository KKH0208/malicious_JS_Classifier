/* 元のURL: https://indiatimes.com */

window.HeaderBiddingManager = window.HeaderBiddingManager || (function () {
    const q = [];
    return {
        _q: q,
        registerAdSlot: (...args) => { q.push(['registerAdSlot', args]); return true; },
        setTargeting: (...args) => { q.push(['setTargeting', args]); },
        displayAdSlot: (...args) => { q.push(['displayAdSlot', args]); },
        setBiddingDelay: (...args) => { q.push(['setBiddingDelay', args]); },
        startQueueTimer: (...args) => { q.push(['startQueueTimer', args]); },
        getQueueStatus: () => ({ queued: q.length, pending: true })
    };
})();


