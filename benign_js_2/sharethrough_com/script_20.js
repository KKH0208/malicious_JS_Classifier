/* 元のURL: https://sharethrough.com */

      document.addEventListener('DOMContentLoaded', function() {
        function removeSliderOnMobile() {
          if (window.innerWidth < 768) {
            var sliders = document.querySelectorAll('.slider-hero');
            sliders.forEach(function(slider) {
              slider.parentNode.removeChild(slider);
            });
          }
        }

        // Run the function on page load
        removeSliderOnMobile();

        // Optional: Run the function on window resize
        window.addEventListener('resize', function() {
          removeSliderOnMobile();
        });
      });
    

