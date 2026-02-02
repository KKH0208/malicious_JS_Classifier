/* 元のURL: https://office.com */

    function dismissBanner() {
        document.getElementsByClassName('hero-section--mobile-banner')[0].style.display = "none";
    }
    var button = document.getElementById('hero-section--mobile-banner-dismiss-button');
    if (button) {
        button.addEventListener('click', dismissBanner);
    }


