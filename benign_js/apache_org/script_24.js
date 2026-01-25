/* 元のURL: https://apache.org */

    jQuery(function($) {
        $(document)
        .on('click', '.faq', function(){
            $(this).find('.faq-answer').slideToggle(500);
            $(this).toggleClass('open');
        });
    });
  

