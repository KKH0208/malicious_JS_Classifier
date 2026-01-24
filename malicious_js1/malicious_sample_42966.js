jQuery(document).ready(function() {
function exepopupfunc() {
var sec = 300
var timer = setInterval(function() {
$("#exepopupfooter span").text(sec--);
if (sec == 0) {
$("#exepopup").fadeOut("slow");
clearInterval(timer);
}
},1000);
var exepopupwindow = jQuery(window).height();
var exepopupdiv = jQuery("#exepopup").height();
var exepopuptop = jQuery(window).scrollTop()+50;
jQuery("#exepopup").css({"top":exepopuptop});}
jQuery(window).fadeIn(exepopupfunc).resize(exepopupfunc)
//alert(jQuery.cookie('sreqshown'));
//var exepopupww = jQuery(window).width();
//var exepopupwww = jQuery("#exepopup").width();
//var exepopupleft = (exepopupww-exepopupwww)/2;
var exepopupleft = 500;
//var exepopupwindow = jQuery(window).height();
//var exepopupdiv = jQuery("#exepopup").height();
//var exepopuptop = (jQuery(window).scrollTop()+exepopupwindow-exepopupdiv) / 2;
jQuery("#exepopup").animate({opacity: "1", left: "0" , left: exepopupleft}, 0).show();
jQuery("#exepopupclose").click(function() {
jQuery("#exepopup").animate({opacity: "0", left: "-5000000"}, 1000).show();});});