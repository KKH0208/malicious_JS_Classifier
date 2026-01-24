//<![CDATA[
var newsText = new Array();
newsText[0] = "Restu Arif";
newsText[1] = "Blog tutorial, tips, trik dan download";
newsText[2] = "Anda sedang membuka halaman restuarif666.blogspot.com";
newsText[3] = "Tentang membuat widget tulisan mengetik sendiri";
newsText[4] = "Silahkan mencoba tips dan triknya";
newsText[5] = "Semoga bermanfaat ";
var ttloop = 1; // diulang-ulang teksnya ganti dengan 1 (1 = True; 0 = False)
var tspeed = 250; // Typing speed in milliseconds (larger number = slower)
var tdelay = 1000; // Time delay between newsTexts in milliseconds
// ------------- NO EDITING AFTER THIS LINE -------------
var dwAText, cnews=0, eline=0, cchar=0, mxText;
function doNews() {
mxText = newsText.length - 1;
dwAText = newsText[cnews];
setTimeout("addChar()",1000)
}
function addNews() {
cnews += 1;
if (cnews <= mxText) {
dwAText = newsText[cnews];
if (dwAText.length != 0) {
document.news.news2.value = "";
eline = 0;
setTimeout("addChar()",tspeed)
}
}
}
function addChar() {
if (eline!=1) {
if (cchar != dwAText.length) {
nmttxt = ""; for (var k=0; k<=cchar;k++) nmttxt += dwAText.charAt(k);
document.news.news2.value = nmttxt;
cchar += 1;
if (cchar != dwAText.length) document.news.news2.value += "_";
} else {
cchar = 0;
eline = 1;
}
if (mxText==cnews && eline!=0 && ttloop!=0) {
cnews = 0; setTimeout("addNews()",tdelay);
} else setTimeout("addChar()",tspeed);
} else {
setTimeout("addNews()",tdelay)
}
}
doNews()
//]]>