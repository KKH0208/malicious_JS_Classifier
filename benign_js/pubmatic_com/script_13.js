/* 元のURL: https://pubmatic.com */

      jQuery(document).ready(function($){
        $('.owl-carousel').each(function (e) {
          var owl = $(this);
          var id = owl.attr('id');

          owl.find('.owl-nav').attr({
            "aria-label":"Slide Arrows",
            "role" : "region"
          });

          owl.find('.owl-prev').attr({
            "aria-controls": id,
            "aria-label":"Previous Slide",
            "role" : "link"
          });
          owl.find('.owl-next').attr({
            "aria-controls": id,
            "aria-label":"Next Slide",
            "role" : "link"
          });
        });

        $('.carousel .carousel-inner').each(function (e) {
          var owl = $(this);
          var id = owl.attr('id');

          owl.find('.owl-nav').attr({
            "aria-label":"Slide Arrows",
            "role" : "region"
          });

          owl.find('.left.carousel-control').attr({
            "aria-controls": id,
            "aria-label":"Previous Slide",
            "role" : "link"
          });
          owl.find('.right.carousel-control').attr({
            "aria-controls": id,
            "aria-label":"Next Slide",
            "role" : "link"
          });
        });
      });
    

