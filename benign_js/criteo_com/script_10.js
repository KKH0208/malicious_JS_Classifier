/* 元のURL: https://criteo.com */

      function initSlider($slider) {
        if ( $slider.length && $slider.find('img').length > 2 && !$slider.hasClass('slick-initialized')) {
          setTimeout(function() {
            $slider.slick({
              autoplay: true,
              arrows: false,
              dots: false,
              infinite: true,
              slidesToShow: 2,
              slidesToScroll: 1,
              autoplaySpeed: 0,
              speed: 8000,
              pauseOnHover: false,
              cssEase: 'linear'
            });
          }, 500);
        }
      }

      $(document).ready(function(){
        $('.post-inner:visible .post-logo.slider').each(function() {
          initSlider($(this));
        });

        $(document).on('mouseenter', '.post-wrapper', function() {
          $(this).find('.post-inner.display-on-hover .post-logo.slider').each(function(){
            initSlider($(this));
          });
        });
      });
      

