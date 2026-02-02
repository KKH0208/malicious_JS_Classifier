/* 元のURL: https://mediatek.com */


  // Function to initialize the slider
  $(document).ready(function(){

    $('.module_17568825929363 .card_sec_prod').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      infinite: false,
      
      prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-chevron-left'></i></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa-solid fa-chevron-right'></i></button>",
      responsive: [
      {
      breakpoint: 1249,
      settings: {
      slidesToShow: 4,
      slidesToScroll: 1
      }
                    },
                    {
                    breakpoint: 991,
                    settings: {
                    dots:true,
                    arrows:false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                    }
  },
    {
      breakpoint: 768,
        settings: {
          slidesToShow: 1,
            slidesToScroll: 1,
              dots:true,
                arrows:false,
                  infinite: true,
                    centerMode: true,
                      slidesToShow: 1,
                        centerPadding: '50px',

        }
    }
  ]
  });
  });



