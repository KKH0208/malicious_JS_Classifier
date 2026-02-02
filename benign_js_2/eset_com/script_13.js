/* 元のURL: https://eset.com */

    import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
  
    document.addEventListener("DOMContentLoaded", function () {
        let options = {
            initialSlide: 1,
            wrapperClass: "row",
            slideClass: "col",
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
        };

        const compareTableSwiper1 = new Swiper('[id^="content-premium-visuality-plans-selector-1"]', options);
        const compareTableSwiper2 = new Swiper('[id^="content-premium-visuality-plans-selector-2"]', options);
    });


