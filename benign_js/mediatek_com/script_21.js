/* 元のURL: https://mediatek.com */


  // Function to initialize the slider
  $(document).ready(function(){

    $('.card_sec').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      infinite: false,
      prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-chevron-left'></i></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa-solid fa-chevron-right'></i></button>",
      responsive: [
        {
          breakpoint: 1249,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
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

    // Initialize Magnific Popup
    $('.popup-youtube').magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 300,
      preloader: false,
      fixedContentPos: false
    }); 

  });






