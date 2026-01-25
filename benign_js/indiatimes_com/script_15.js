/* 元のURL: https://indiatimes.com */

AdManager.getAdSlot('web', 'TOP_PPD').then(adSlot => {
    if(adSlot){
        HeaderBiddingManager.registerAdSlot(
            adSlot,
            [[728, 90], [970, 90]],
            'div-gpt-ad-mweb-play-pt-big-150050-1'
        );
    }
});


