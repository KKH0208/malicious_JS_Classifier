/* 元のURL: https://office.com */

    function showShyHeader(el) {
        const rect = el.getBoundingClientRect();
        return (rect.bottom < 0) && (window.pageYOffset > (el.offsetTop + el.offsetHeight));
    }

    function scrollShyHeader() {
        const personalizationSignIn = document.getElementById("hero-banner-sign-back-in-to-microsoft-365-link");
        const defaultSignUp = document.getElementById("hero-banner-sign-in-microsoft-365-link");
        const shyHeader = document.getElementsByClassName("shy-header-consumer")[0];
        if ((window.scrollY > 200) && (!personalizationSignIn || !elementInViewport(personalizationSignIn)) && (!defaultSignUp || !elementInViewport(defaultSignUp))) {
            if (shyHeader.className.indexOf("visible") === -1) {
                shyHeader.className += " visible";
            }
        }
        else {
            shyHeader.className = shyHeader.className.replace(" visible", "");
        }
    }
    window.addEventListener("scroll", scrollShyHeader);


