//<![CDATA[
var classicMode = false ;
var summary = 40;
var indent = 3;

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

function createSummaryAndThumb(pID,title,url,date,comment){
 var posturl= url;
 var title=title;
 var date =date;
 var comment = comment;
 var div = document.getElementById(pID);
 var content = div.innerHTML;
 if (/<!--\s*more\s*-->/.test(content)) {
  div.innerHTML = getSummaryLikeWP(pID);
  div.style.display = "block";
 } 
 else {
 
 var imgtag = "";
 var img = div.getElementsByTagName("img");
 var summ = summary;
 if(img.length>=1) { 
   imgtag = '<a href="'+posturl+'"><img width="520" height="300" src="'+img[0].src+'" class="entry-thumb wp-post-image" alt="'+title+'"/></a>';
   }
   var summary1 = ''+imgtag+'<div class="entry-meta"> <span class="meta-date">Posted on '+date+'</em></span> / <span class="meta-comment"><a href="'+posturl+'#comments" title="'+title+'">'+comment+' Comments</a></span> </div><div class="entry-excerpt">'+stripHtmlTags(content,summary)+'...<a href="'+posturl+'" class="read-more">more &rarr;</a></div><!-- .entry-excerpt --><div class="clear"></div>';
 
 div.innerHTML = summary1;
 div.style.display = "block";
 }
}
//]]>