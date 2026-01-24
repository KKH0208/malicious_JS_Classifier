var currenttab = 1;
var maxtab = 3; // số tab cuộn qua ví dụ bạn có 15 bài thì chọn là 3, 20 bài chọn 4...
var round_t = setTimeout("roundHotNews()",5000); //thời gian bài viết tự động scroll
/* <![CDATA[ */ function slide_forward() {
currenttab++;
if (currenttab > maxtab) currenttab = 1;
if (currenttab <= maxtab) {
var leftpx = (currenttab-1) * (-1000);
$('#slide_animation').animate({ left: leftpx }, 500); 
}
clearTimeout(round_t);
}
function slide_backward() {
currenttab--;
if (currenttab < 1) currenttab = maxtab;
if (currenttab >= 1) {
var leftpx = (currenttab-1) * (-1000);
$('#slide_animation').animate({ left: leftpx }, 500);
}
clearTimeout(round_t);
}

function roundHotNews()
{
if(currenttab == 1) currenttab=2;
else if(currenttab == 2) currenttab=3;
else if(currenttab == 3) currenttab=1;
if (currenttab >= 1) {
var leftpx = (currenttab-1) * (-1000);
$('#slide_animation').animate({ left: leftpx }, 500);
}
round_t = setTimeout("roundHotNews()",5000); //thời gian bài viết tự động scroll
}/* ]]> */