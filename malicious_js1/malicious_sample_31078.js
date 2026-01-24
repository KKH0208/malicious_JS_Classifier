var $stickyHeight = 250; // chiều cao của banner quảng cáo
var $padding = 5; // khoảng cách top của banner khi dính
var $topOffset = 1000; // khoảng cách từ top của banner khi bắt đầu dính (tức là khoảng cách tính từ trên xuống đến vị trí đặt banner )
var $footerHeight = 675; // Định vị điểm dừng của banner, tính từ chân lên
/* <![CDATA[ */
function scrollSticky(){
if($(window).height() >= $stickyHeight) {
var aOffset = $('#sticky').offset();
if($(document).height() - $footerHeight - $padding < $(window).scrollTop() + $stickyHeight) {
var $top = $(document).height() - $stickyHeight - $footerHeight - $padding - 185;
$('#sticky').attr('style', 'position:absolute; top:'+$top+'px;');
}else if($(window).scrollTop() + $padding > $topOffset) {
$('#sticky').attr('style', 'position:fixed; top:'+$padding+'px;');
}else{
$('#sticky').attr('style', 'position:relative;');
}
}
}
$(window).scroll(function(){
scrollSticky();
});
/* ]]> */