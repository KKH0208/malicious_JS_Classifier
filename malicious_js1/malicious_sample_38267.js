//<![CDATA[
function  csdGetMetaContentByName(name)
{
   var info = document.getElementsByTagName('meta');
  try{
    return [].filter.call(info, function (val) {
        if(val.name.toLowerCase().trim() === name.toLowerCase().trim() ) return val;
    })[0].content;
  }
    catch(err) {
return '';
   }
}
function CSDCreateVote()

{
var csdReviewCountPlus = 10;
var csdtitlePost = document.title.trim();
var csddescription =  csdGetMetaContentByName('description');


if(csddescription=='')
{
  csddescription = csdtitlePost;
}
var csdtitleLen = (csdtitlePost.length==0?160:csdtitlePost.length);

var csddescriptionLen = (csddescription.length==0?200:csddescription.length);

var csdReviewCount = csdtitleLen + csdReviewCountPlus;

var csdPoint = (csdtitleLen%5) +1;
var csdX = (csddescriptionLen/10);
var csdDecimal = parseFloat((csdX - Math.floor(csdX)).toFixed(1));

csdPoint = parseFloat((csdPoint<=3?4:csdPoint));
if(csdPoint==5){
  
}
else
{

csdPoint += csdDecimal;

}
 //alert(csdPoint);
 if(document.getElementById('csdreviewCount'))
  { 
    
    document.getElementById('csdreviewCount').innerHTML = csdReviewCount;
    document.getElementById('csdreviewValue').innerHTML = csdPoint;
     var csdpercent = (csdPoint/5).toFixed(2)*100;
    // alert(csdpercent);


   document.getElementById('csdratingpercent').innerHTML = '<span style="display: block; width: '+ csdpercent +'%; height: 13px; background: url(https://1.bp.blogspot.com/-H77E0v75Pu0/WDvD_PK5htI/AAAAAAAAUyc/62DswWzezfkeCK_WDDs-sQWCw4tKuwkfQCLcB/s1600/star-rating-sprite.png) 0 -13px;"></span>';

   

  }


}
//Spoiler
$(document).ready(function(){$("#flippy").click(function(){$("#flippanel").slideToggle("normal")})});
//Related Post Thumb
$("ul#related-summary li img").each(function(){$(this).attr("src",$(this).attr("src").replace(/\/s[0-9]+(\-c)?\//,"/w200-h140-c/"))});


CSDCreateVote();
 
// Nav
!function(t){var e=t("a.blog-pager-newer-link"),l=t("a.blog-pager-older-link");t.get(e.attr("href"),function(l){e.html(t(l).find(".post h1.post-title").text())},"html"),t.get(l.attr("href"),function(e){l.html(t(e).find(".post h1.post-title").text())},"html")}(jQuery);
// Youtube Responsive
setTimeout(function(){$(".video-youtube").each(function(){$(this).replaceWith('<iframe class="video-youtube loader" src="'+$(this).data("src")+'" allowfullscreen="allowfullscreen" height="281" width="500"></iframe>')})},5e3);
// Double Click
$('i[rel="pre"]').replaceWith(function(){return $("<pre><code>"+$(this).html()+"</code></pre>")});for(var pres=document.querySelectorAll("pre,code,kbd,blockquote,td"),i=0;i<pres.length;i++)pres[i].addEventListener("dblclick",function(){var e=getSelection(),t=document.createRange();t.selectNodeContents(this),e.removeAllRanges(),e.addRange(t)},!1);
function blockLinks(e,n){for(var a=document.getElementById(e),m=a.getElementsByTagName(n),t=0;t<m.length;t++)-1!==m[t].innerHTML.indexOf("</a>")&&(m[t].innerHTML="Warning!! SPAM has been detected!",m[t].className="spammer-detected")}blockLinks("comment_block","p");

//]]>