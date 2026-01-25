/* 元のURL: https://mediatek.com */

  $('.blog_cards_wrapper .blog_cards').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:false,
    dots: false,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-chevron-left'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa-solid fa-chevron-right'></i></button>",
    responsive: [
    {
    breakpoint: 1150,
    settings: {
    arrows:true,
    centerMode: false,
    dots:false,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
  }
                                             },
                                             {
                                             breakpoint: 991,
                                             settings: {
                                             arrows: false,
                                             dots:true,
                                             slidesToShow: 2,
                                             slidesToScroll: 1
                                             }
  },
    {
      breakpoint: 768,
        settings: {
          centerMode: true,
            slidesToShow: 1,
              centerPadding: '50px',
                arrows: false,
                  infinite: true,
                    dots:true
        }
    }
  ]
  });


