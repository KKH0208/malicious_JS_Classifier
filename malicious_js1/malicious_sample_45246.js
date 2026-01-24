(function($) {
    $.fn.iklanaccordion = function(settings) {
        settings = jQuery.extend({
            active: 1,
            sUpSpeed: 50,
            sDownSpeed: 50,
            sUpEasing: null,
            sDownEasing: null
        }, settings);

        return this.each(function() {
            var $this = $(this),
                $item = $this.children('div[data-header]'),
                activePanel = settings.active - 1;

            $item.each(function() {
                $(this).hide().before('<h2 class="iklan-header">' + $(this).data('header') + '</h2>');
            });

            $this.children('div:eq(' + activePanel + ')').show().prev().addClass('active');
            $this.find('.iklan-header').on("mouseover", function() {
                $this.children('h2').removeClass('active');
                $item.slideUp(settings.sUpSpeed, settings.sUpEasing);
                $(this).addClass('active').next().slideDown(settings.sDownSpeed, settings.sDownEasing);
            });

        });
    };

})(jQuery);

$(function() {
    $('#iklan-teks').iklanaccordion();
});
$(document).ready(function() {
    $('.info-icon').hover(function() {
        $('.info-iklan').toggle();
    });
});