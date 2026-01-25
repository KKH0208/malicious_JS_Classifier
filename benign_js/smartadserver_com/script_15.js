/* 元のURL: https://smartadserver.com */

$(document).ready(function () {
  new Swiper(".tinyflow-slider", {
    rewind: true,
    navigation: {
      prevEl: '[data-arrow="prev"]',
      nextEl: '[data-arrow="next"]',
    },
    breakpoints: {
      768: {
        direction: "vertical",
      },
    },
    on: {
      beforeInit: function (swiper) {
        let maxCardHeight = 0;
        $(swiper.el)
          .find(".swiper-slide")
          .each((index, slideItem) => {
            maxCardHeight = Math.max(
              maxCardHeight,
              slideItem.getBoundingClientRect().height
            );
          });
        $(swiper.el).css("height", `${maxCardHeight}px`);
      },
    },
  });
});


