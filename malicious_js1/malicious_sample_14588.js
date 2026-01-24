// Banner Rotation Script by Bloggerism
var ban = new Array();
var link = new Array();
var index = 0;
ban[0] = new Image();
ban[0].src = "http://1.bp.blogspot.com/-O8_uuVBE4LU/UfyGz71CYaI/AAAAAAAAOpk/Kl5KdRnRbtI/s1600/seo-gia-re.gif";
link[0] = "http://www.itviet360.com/p/dich-vu-seo-web-gia-re-giai-phap-tot.html";
ban[1] = new Image();
ban[1].src = "http://2.bp.blogspot.com/-QlI5wU2v-Nk/UfyGzx835oI/AAAAAAAAOpU/Z5td_09_Iio/s1600/taigame2-logo.png";
link[1] = "http://taigame2.blogspot.com";
ban[2] = new Image();
ban[2].src = "http://3.bp.blogspot.com/-RBEOHpCaFio/UfyGz_RMybI/AAAAAAAAOpY/cpbppTC444U/s1600/banner-avatar-1.gif";
link[2] = "http://www.itviet360.com/2013/07/tai-game-avatar-222-cho-dien-thoai-android-ios.html";
index = Math.random() * (ban.length);
index = Math.floor(index);
function rotator()
{if (index == ban.length) index = 0;
if (document.images) {
document.images.rotation.src = ban[index].src;
}
else {
document.getElementById('rotation').src=ban[index].src;
}
index++;
setTimeout('rotator()',3000);
}
function go() {window.open(link[index-1]);}