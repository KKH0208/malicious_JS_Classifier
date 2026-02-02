/* 元のURL: https://lencr.org */

let hasResized = false;
window.addEventListener('message', function(e) {
    if (hasResized) return;
    if (e.origin !== 'https://outreach.abetterinternet.org') return;
    if (e.data && typeof e.data === 'object' && e.data.type === 'resize' && e.data.height) {
        hasResized = true;
        document.getElementById('newsletter-iframe').style.height = (e.data.height + 20) + 'px';
    }
});


