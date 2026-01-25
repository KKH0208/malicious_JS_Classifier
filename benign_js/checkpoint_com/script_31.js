/* 元のURL: https://checkpoint.com */
// 外部JS: https://www.checkpoint.com/wp-content/themes/checkpoint-theme-v2/js/footer.js?ver=3.80
jQuery(document).ready(function( $ ) {
    // Mail
    $(function() {
        $('a[href^="mailto:"]').each(function() {
            this.href = this.href.replace('(at)', '@').replace(/\(dot\)/g, '.');
        });
    });
    // Table striping
    $('#container-content table').addClass('table table-striped');
});

// Feedback Form Script
boxOpen = false;
function feedbackOpen() {
    jQuery('.iframe-contain').addClass('box-bigger');
    jQuery('.feedback-icon').hide();
    jQuery('.close-x').fadeIn();
    jQuery('#website-feedback iframe').fadeIn();
    boxOpen = true;
};
function feedbackClose(e) {
    jQuery('.iframe-contain').removeClass('box-bigger');
    jQuery('.close-x').hide();
    jQuery('#website-feedback iframe').fadeOut("slow");
    jQuery('.feedback-icon').fadeIn();
    e.stopPropagation(); // stop click event from bubbling to parents
};
$(function() {
    $('.iframe-contain').click(feedbackOpen);
});
$(function() {
    $('.close-x').click(feedbackClose);
});
/*jQuery(document).mouseup(function(e)
{
    var container = jQuery(".iframe-contain");
    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
        feedbackClose();
    }
});*/
jQuery(window).on('scroll', function() {
    scrollPosition = $(this).scrollTop();
    if (scrollPosition >= 0 && boxOpen === true) {
        feedbackClose();
        boxOpen = false;
    }
});

//Feedback
// var websiteFeedback_exists = Cookies.get("websiteFeedback");
// var homeVisit_exists = Cookies.get("homeVisit");
// var navClick_exists = Cookies.get("navClick");
// var isMobile = window.matchMedia("only screen and (max-width: 1200px)").matches;

//Feedback after home page visit
// if(!websiteFeedback_exists && homeVisit_exists && (isMobile !== true)){
//     setTimeout(function(){
//         $('#website-feedback').fadeIn();
//         feedbackOpen();
//         Cookies.set('websiteFeedback', '1', { expires: 30 });
//     }, 20000);
// }
//Feedback after nav click
// if(!websiteFeedback_exists && navClick_exists && (isMobile !== true)){
//     setTimeout(function(){
//         $('#website-feedback').fadeIn();
//         feedbackOpen();
//         Cookies.set('websiteFeedback', '1', { expires: 30 });
//     }, 20000);
// }

//Open Image in Modal
(function($) {
    $('.imagemodal').on('click', function(evt) {
        imagesrc = $(this).attr('href');
        evt.preventDefault();
        $('.imagepreview').attr('src', imagesrc);
        $('#imagemodal').modal('show');
    });
})(jQuery);

//Remove preload class
(function($) {
    $("body").removeClass("preload");
})(jQuery);

// @author Ruben Vega
// @author Brendan Ferriter
// Check Point Software Technologies, Ltd.

