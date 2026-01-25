/* 元のURL: https://smartadserver.com */

$(".slider-main_component").each(function (index) {
  let loopMode = false;
  if ($(this).attr("loop-mode") === "true") {
    loopMode = true;
  }
  let sliderDuration = 300;
  if ($(this).attr("slider-duration") !== undefined) {
    sliderDuration = +$(this).attr("slider-duration");
  }
  const swiper = new Swiper($(this).find(".carousel")[0], {
    speed: sliderDuration,
    loop: loopMode,
    autoHeight: false,
    centeredSlides: loopMode,
    followFinger: true,
    freeMode: false,
    slideToClickedSlide: false,
    slidesPerView: 1,
    spaceBetween: "4%",
    rewind: false,
    mousewheel: {
      forceToAxis: true
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },
    breakpoints: {
      // mobile landscape
      480: {
        slidesPerView: 1,
        spaceBetween: "4%"
      },
      // tablet
      768: {
        slidesPerView: 2,
        spaceBetween: "4%"
      },
      // desktop
      992: {
        slidesPerView: 3,
        spaceBetween: "2%"
      }
    },
    pagination: {
      el: $(this).find(".swiper-bullet-wrapper")[0],
      bulletActiveClass: "is-active",
      bulletClass: "swiper-bullet",
      bulletElement: "button",
      clickable: true
    },
    navigation: {
      nextEl: $(this).find(".swiper-next")[0],
      prevEl: $(this).find(".swiper-prev")[0],
      disabledClass: "is-disabled"
    },
    scrollbar: {
      el: $(this).find(".swiper-drag-wrapper")[0],
      draggable: true,
      dragClass: "swiper-drag",
      snapOnRelease: true
    },
    slideActiveClass: "is-active",
    slideDuplicateActiveClass: "is-active"
  });
});


