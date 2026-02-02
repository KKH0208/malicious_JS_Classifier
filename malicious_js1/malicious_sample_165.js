//<![CDATA[
function stripHtmlTags(s,max){return s.replace(/<.*?>/ig, '').split(/\s+/).slice(0,max-1).join(' ')}

function getSummaryLikeWP(id) {
       return document.getElementById(id).innerHTML.split(/<!--\s*more\s*-->/)[0];
}

function getSummaryImproved(post,max){
  var re = /<.*?>/gi
  var re2 = /<br.*?>/gi
  var re3 = /(<\/{1}p>)|(<\/{1}div>)/gi
  var re4 = /(<style.*?\/{1}style>)|(<script.*?\/{1}script>)|(<table.*?\/{1}table>)|(<form.*?\/{1}form>)|(<code.*?\/{1}code>)|(<pre.*?\/{1}pre>)/gi
 
  post = post.replace(re4,'')
  post = post.replace(re3,'<br /> ').split(re2)
 
  for(var i=0; i<post.length; i++){
   post[i] = post[i].replace(re,'');
  }
var post2 = new Array();
for(var i in post) {
 //if(post[i]!='' && post[i]!=' ' && post[i] != '\n') post2.push(post[i]);
 if(/[a-zA-Z0-9]/.test(post[i])) post2.push(post[i]) ;

}


var s = "";
var indentBlank = "";
for(var i=0;i<indent;i++){
 indentBlank += " ";
}
if(post2.join('<br/>').split(' ').length < max-1 ){
  s = post2.join(indentBlank +' <br/>');
} else {
 var i = 0;
 while(s.split(' ').length < max){
  s += indentBlank + ' ' + post2[i]+'<br/>';
  i++;
 }
}  
return s;
}


function createSummaryAndThumb(pID){
var div = document.getElementById(pID);
var content = div.innerHTML;
if (/<!--\s*more\s*-->/.test(content)) {
 div.innerHTML = getSummaryLikeWP(pID);
 div.style.display = "block";
}
else {

var imgtag = "";
var img = div.getElementsByTagName("img");
var summ = summary_noimg;
if(img.length>=1) {
 if(thumbnail_mode == "float") {
  imgtag = '<span class="thumbnailimg"><img src="'+img[0].src+'" /></span>';
  summ = summary_img;
 } else {
  imgtag = '<div class="thumbnailimg" align="center"><img src="'+img[0].src+'" /></div>';
  summ = summary_img;
 }
}

var summary = (classicMode) ? imgtag + '<div>' + stripHtmlTags(content,summ) + '</div>' : imgtag + '<div>' + getSummaryImproved(content,summ) + '</div>';

div.innerHTML = summary;
div.style.display = "block";
}
}
//]]>