/* 元のURL: https://crpt.ru */
// 外部JS: https://crpt.ru/static/js/separate-js/site.js
$(document).ready(function () {
    $('.n-select').niceSelect();

    $(".photo-gallery").lightGallery({
        thumbnail: false,
        share: false,
        download: false,
    });
});



var tabSlider = new Swiper('.page-slider', {
    autoHeight: true,
    noSwiping: true,
    allowTouchMove: false,
    hashNavigation: false,
    loop: false,

})

$('.p-tab__item').click(function () {
    $('.p-tab__item--active').removeClass('p-tab__item--active');
    $(this).addClass('p-tab__item--active');
    var slideIndex = $('.p-tab__item').index(this);
    tabSlider.slideTo(slideIndex);
});





var homeSlider;


function initHomeSlider() {
    if (window.innerWidth > 750 && homeSlider == undefined) {
        homeSlider = new Swiper('.swiper-container', {
            noSwiping: true,
            allowTouchMove: false,
            slidesPerView: 'auto',
            speed: 1200,
            nextButton: '.home-slider__button--next',
            prevButton: '.home-slider__button--prev',
            loop: true,
            roundLengths: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

        });

        homeSlider.on('slideChangeTransitionEnd', function () {
            console.log('slider index ' + homeSlider.realIndex);
            $('.home-slider .swiper-slide-active').find('video').each(function (index) {
                console.log('video index ' + index);
                this.play();
            });
            $('.home-slider .swiper-slide:not(.swiper-slide-active)').find('video').each(function (index) {
                //console.log('video index ' + index);
                this.pause();
            });
        });

    }
    else if (window.innerWidth <= 750 && homeSlider != undefined) {
        homeSlider.destroy(true, true);
        homeSlider = undefined
        console.log('destroy slider')
    }

}



initHomeSlider();

$(window).on('resize', function () {
    try {
        initHomeSlider();
    }
    catch (e) {

    }

});


$('.news-slide__content').hover(function () {
    if (window.innerWidth > 1100) {
        $(this).toggleClass('news-slide__content--hovered');
    }
});



$('.home-slider__button--next').click(function () {
    homeSlider.slideNext()
});

$('.home-slider__button--prev').click(function () {
    homeSlider.slidePrev()
});

$('.home-slider').on('click', '.swiper-slide-next', function () {
    homeSlider.slideNext()
});

$(".js-video-open").modalVideo();





