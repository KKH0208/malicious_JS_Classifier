$(document).ready(function() {
        function isScrolledTo(elem) {
            var docViewTop = $(window).scrollTop(); //num of pixels hidden above current screen
            var docViewBottom = docViewTop + $(window).height();
  
            var elemTop = $(elem).offset().top; //num of pixels above the elem
            var elemBottom = elemTop + $(elem).height();
  
            return ((elemTop <= docViewTop));
        }
  
        var catcher = $('#catcher');
        var sticky = $('#sticky');
         
        $(window).scroll(function() {
            if(isScrolledTo(sticky)) {
                sticky.css('position','fixed');
                sticky.css('top','10px');
            } 
            var stopHeight = catcher.offset().top + catcher.height();
            if ( stopHeight > sticky.offset().top) {
                sticky.css('position','');
                sticky.css('top',stopHeight);
            }
        });
    });