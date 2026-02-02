/* 元のURL: https://indiatimes.com */

AdManager.getAdSlot('web', 'MREC').then(adSlot => {
    if(adSlot){
        HeaderBiddingManager.registerAdSlot(adSlot, [[300, 250]], 'div-gpt-ad-it-home-mrec-300-150028');
    }
});


