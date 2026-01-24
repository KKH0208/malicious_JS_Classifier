//<![CDATA[
function removeHtmlTag(strx,chop){
if(strx.indexOf("<")!=-1)
{
var s = strx.split("<");
for(var i=0;i<s.length;i++){
if(s[i].indexOf(">")!=-1){
s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length);
}
}
strx = s.join("");
}
chop = (chop < strx.length-1) ? chop : strx.length-2;
while(strx.charAt(chop-1)!=' ' && strx.indexOf(' ',chop)!=-1) chop++;
strx = strx.substring(0,chop-1);
return strx+'...';
}
function createSummaryAndThumb(pID, pURL, pTITLE){
var div = document.getElementById(pID);
var imgtag = "";
var img = div.getElementsByTagName("img");
var summ = summary_noimg;
if(img.length<=1) {
imgtag = '<div style="cleat:both; margin:0 10px 10px 0px;float:left;"><a href="'+pURL+'"><img src="http://3.bp.blogspot.com/-JHVpto_ffIg/T9FgAvHt1OI/AAAAAAAADBk/rHFMojqgJEw/s000/default.jpg" width="'+img_thumb_width+'px" height="'+img_thumb_height+'px"/></a></div>';
summ = summary_noimg;
}
if(img.length>=1) {
imgtag = '<div style="cleat:both; margin:0 10px 10px 0px;float:left;"><a href="'+pURL+'"><img src="'+img[0].src+'" width="'+img_thumb_width+'px" height="'+img_thumb_height+'px"/></a></div>';
summ = summary_img;
}
var summary = imgtag + '<div>' + removeHtmlTag(div.innerHTML,summ) + '</div>';
div.innerHTML = summary;
}
//]]>