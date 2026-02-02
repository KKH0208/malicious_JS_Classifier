/* 元のURL: https://nvidia.com */
 $(function() {    if (window.location.href.indexOf("/industries/") > -1) {  if(!$('#main-header').find(".sub-brand-nav").length){ $( "#unibrow-container" ).after('<div class="sub-brand-nav"><div class="sub-brand-nav-container"><div class="brand-nav-left"><div id="sub-brand"><a class="sub-brand-name " href="https://www.nvidia.com/ja-jp/industries/"><span class="sub-brand-label size-small">産業</span></a></div></div></div></div>') ; } 
 $("body").removeClass("nv-megamenu");
}
 }); 

