/* 元のURL: https://indiatimes.com */

AdManager.getAdSlot('web', 'BIG3').then(adSlot => {
    if(adSlot){
        HeaderBiddingManager.registerAdSlot(
            adSlot,
            [[970, 90], [970, 250], [728, 90], [1100, 250], [300, 250]],
            'div-gpt-ad-mweb-play-pt-big-150054-1'
        );
    }
});


