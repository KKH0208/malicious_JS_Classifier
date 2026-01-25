/* 元のURL: https://checkpoint.com */
// 外部JS: https://checkpoint.com/wp-content/themes/checkpoint-theme-v2/styles/carousels-staging.js?v1.632590131
if (typeof Swiper == 'function') {

    /* Customer carousel with tabs */
    var galleryThumbs = new Swiper('.carousel-tabs', {
        spaceBetween: 0,
        slidesPerView: 3,
        loop: false,
        //loopedSlides: 3, //looped slides should be the same
       // watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.customer-carousel', {
        a11y: {
            enabled: true,
        },
        keyboard: {
            enabled: true,
        },
        crossFade: true,
        spaceBetween: 0,
        speed: 2000,
        loop: true,
        //centeredSlides: true,
        watchSlidesProgress: true,
        //simulateTouch: true,
        slidesPerView: 1,
        //touchMoveStopPropagation: true,
       // loopedSlides: 3, //looped slides should be the same
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs,
            slideThumbActiveClass: 'active'
        },
        breakpoints: {
            320: {
                pagination: {
                    el: '.customer-mobile-pagination',
                    clickable: true,
                    enabled: true
                },
                thumbs: {
                    enabled: false
                }
            },
            768: {
                pagination: {
                    el: '.customer-mobile-pagination',
                    clickable: true,
                    enabled: true
                },
                thumbs: {
                    enabled: false
                }
            },
            992: {
                pagination: {
                    enabled: false
                },
                thumbs: {
                    enabled: true
                }
            }
        }
    });
    /* Slider for spotlight resources that only appears on mobile */
    var spotlightSwiper = new Swiper('.swiper-resources-top', {
        a11y: {
            enabled: true,
        },
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: '.swiper-resources-top .swiper-pagination',
            clickable: true,
        },
        spaceBetween: 0,
        loop: true,
        breakpoints: {
            450: {
                slidesPerView: 1.25,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            }
        }
    });
    /* Slider for the analyst reports section on the the home page. Appears on mobile */
    var analystSwiper = new Swiper('.swiper-resources-analysts', {
        a11y: {
            enabled: true,
        },
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: '.swiper-resources-analysts .swiper-pagination',
            clickable: true,
        },
        spaceBetween: 0,
        slidesPerView: 4,
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
                pagination: {
                    enabled: true
                },
            },
            768: {
                slidesPerView: 2,
                pagination: {
                    enabled: true
                },
            },
            992: {
                pagination: {
                    enabled: true
                },
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 4,
            }
        }
    });
    /* Slider for the resource section on the bottom of the home page. Appears on mobile and if > 4 cards */
    var resourceSwiper = new Swiper('.swiper-resources-bottom', {
        a11y: {
            enabled: true,
        },
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: '.swiper-resources-bottom .swiper-pagination',
            clickable: true,
        },
        spaceBetween: 0,
        slidesPerView: 4,
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            }
        }
    });

}

