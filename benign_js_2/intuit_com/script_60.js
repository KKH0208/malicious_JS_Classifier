/* 元のURL: https://intuit.com */

// JS to trigger video link when video button is clicked
document.addEventListener('DOMContentLoaded', function() {
    console.log('dom loaded', document.querySelector('#icom-hp-hero'));
    document.querySelector('#icom-hp-hero').addEventListener('click', function(e) {
        console.log('hero clicked');
        const playBtn = e.target.closest('#icom-hp-hero button[class*="AButton-cta-play-icon-"]');
        if (playBtn) {
            e.preventDefault();
            document.querySelector('#icom-hp-hero button[data-testid="videolink"]')?.click();
        }
    });
});


