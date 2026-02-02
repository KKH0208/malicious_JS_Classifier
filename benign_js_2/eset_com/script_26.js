/* 元のURL: https://eset.com */

    import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
  
    document.addEventListener("DOMContentLoaded", function () {
        const awardsSwiper = new Swiper("#content-premium-visuality-awards", {
            initialSlide: 0,
            wrapperClass: "section-content",
            slideClass: "frame-type-esetbase_fce_svgicons",
            slidesPerView: "auto",
            controller: {
                inverse: true,
            },
            resistanceRatio: 0,
            breakpoints: {
                767: {
                    resistanceRatio: 0.85,
                },
            },
        });
    });


