//<![CDATA[
function removeHtmlTag(strx,chop){
if(strx.indexOf("<")!=-1) { var s = strx.split("<"); for(var i=0;i<s.length;i++){ if(s[i].indexOf(">")!=-1){ s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length); } } strx = s.join("");}
chop = (chop < strx.length-1) ? chop : strx.length-2; while(strx.charAt(chop-1)!=' ' && strx.indexOf(' ',chop)!=-1) chop++; strx = strx.substring(0,chop-1); return strx+'...';}
function createSummaryAndThumb(pID){ var div = document.getElementById(pID); var imgtag = ""; var img = div.getElementsByTagName("img"); 
if(img.length>=1) { imgtag = '<span style="float:left;padding:0px 10px 0 0px;margin:-38px 0 0 0"><img class="bimg" src="'+img[0].src+'" width="120px" height="99px" /></span>';}
if(img.length<1) { imgtag = '<span style="float:left;padding:0px 10px 0 0px;margin:-38px 0 0 0"><img class="bimg" src="http://1.bp.blogspot.com/-xJBXLR81wuI/T_QncMxumoI/AAAAAAAAAbI/QbWAhz1wgW0/s120/no_image.jpg" width="120px" height="99px" /></span>';}
var summary = imgtag + '<div>' + removeHtmlTag(div.innerHTML,150) + '</div>'; div.innerHTML = summary; }
//]]>