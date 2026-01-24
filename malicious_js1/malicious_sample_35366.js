//jCarouselLite
    $(function() {
        $(".slider").jCarouselLite({
        btnNext: ".next",
        btnPrev: ".prev",
		auto:2000,
		speed:1000,
        visible: 6
    });
});

//Captify
$(document).ready(function(){
    $('img.captify').captify({
    // all of these options are... optional
    // speed of the mouseover effect
    speedOver: 'fast',
    // speed of the mouseout effect
    speedOut: 'normal',
    // how long to delay the hiding of the caption after mouseout (ms)
    hideDelay: 500,
    // 'fade', 'slide', 'always-on'
    animation: 'slide',
    // text/html to be placed at the beginning of every caption
    prefix: '',
    // opacity of the caption on mouse over
    opacity: '0.7',
    // the name of the CSS class to apply to the caption box
    className: 'caption-bottom',
    // position of the caption (top or bottom)
    position: 'bottom',
    // caption span % of the image
    spanWidth: '100%'
    });
});