function getCurrentYear(){var e=new Date;return e.getFullYear()}el=document.getElementById("current-year"),el.innerHTML=getCurrentYear();
function show(e){document.getElementById(e).style.display="block"}function hide(e){document.getElementById(e).style.display="none"}
//<![CDATA[
// Back to top button
$(function(){$(window).scroll(function(){


$(this).scrollTop()>400?$(".simplifytotop").addClass('arlniainf'):$(".simplifytotop").removeClass('arlniainf')}),$(".simplifytotop").click(function(){return $("html,body").animate({scrollTop:0},400),!1})});
// Adblock Popup
function hidekeep(){document.getElementById("keep-ads").style.display="none"}setTimeout(function(){var e=document.getElementById("keep-ads"),t=document.querySelectorAll("ins.adsbygoogle");0===$(t).height()&&(e.className="show")},2e3);
$(document).ready(function(){var t=90;$("#PopularPosts1,.recent_posts_arlina").find("img").each(function(a,r){var r=$(r);r.attr({src:r.attr("src").replace(/s\B\d{2,4}/,"s"+t)}),r.attr("width","100%"),r.attr("height","auto")})});
//]]>