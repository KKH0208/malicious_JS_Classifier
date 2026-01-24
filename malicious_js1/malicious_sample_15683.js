var metaslider_24729 = function($) {$('#metaslider_24729').addClass('flexslider');
            $('#metaslider_24729').flexslider({ 
                slideshowSpeed:2500,
                animation:"fade",
                controlNav:true,
                directionNav:false,
                pauseOnHover:true,
                direction:"horizontal",
                reverse:false,
                animationSpeed:600,
                prevText:false,
                nextText:false,
                fadeFirstSlide:false,
                slideshow:true
            });
            $(document).trigger('metaslider/initialized', '#metaslider_24729');
        };
        var timer_metaslider_24729 = function() {
            var slider = !window.jQuery ? window.setTimeout(timer_metaslider_24729, 100) : !jQuery.isReady ? window.setTimeout(timer_metaslider_24729, 1) : metaslider_24729(window.jQuery);
        };
        timer_metaslider_24729();