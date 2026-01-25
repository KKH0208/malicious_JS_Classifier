/* 元のURL: https://indiatimes.com */

AdManager.getAdSlot('web', 'BIG2').then(adSlot => {
    if(adSlot){
        HeaderBiddingManager.registerAdSlot(
            adSlot,
            [[728, 90], [970, 250], [1100, 250], [970, 90], [300, 250]],
            'div-gpt-ad-mweb-play-pt-big-150053-1'
        );
    }
});


