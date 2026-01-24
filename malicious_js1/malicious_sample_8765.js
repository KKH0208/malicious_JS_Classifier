//<![CDATA[
//Auto ReadMore
function bp_thumbnail_resize(
image_url,post_title){
var image_width=210;
var image_height=130;
image_tag='<img width="'+image_width+'" height="'+image_height+'" src="'+image_url.replace('/s72-c/','/w'+image_width+'-h'+image_height+'-c/')+'" alt="'+post_title.replace(/"/g,"")+'" title="'+post_title.replace(/"/g,"")+'" itemprop="image"/>';if(post_title!="")return image_tag;else return"";}
function removeHtmlTag(strx,chop){if(strx.indexOf("<")!=-1){var s=strx.split("<");for(var i=0;i<s.length;i++){if(s[i].indexOf(">")!=-1){s[i]=s[i].substring(s[i].indexOf(">")+1,s[i].length);}}
strx=s.join("");}
chop=(chop<strx.length-1)?chop:strx.length-2;while(strx.charAt(chop-1)!=' '&&strx.indexOf(' ',chop)!=-1)chop++;strx=strx.substring(0,chop-1);return strx+'...';}
function createSummary(pID){var div=document.getElementById(pID);var summ=105;var summary='<div>'+removeHtmlTag(div.innerHTML,summ)+'</div>';div.innerHTML=summary;}
//]]>