/* 元のURL: https://g.page */
function sEa(){this.o=window.sc_scope||document;tEa(this);uEa(this)}
function tEa(a){(a=a.o.querySelector(".dark-mode-toggle"))&&a.addEventListener("click",function(b){b.preventDefault();vEa()})}
function uEa(a){var b=a.o.querySelector(".dark-mode-toggle"),c=a.o.querySelector(".dark-mode-toggle__tooltip");b&&c&&(b.addEventListener("focus",function(){return void wEa(c)}),b.addEventListener("blur",function(){return void lm(c,"show-dark-mode-toggle__tooltip",!1)}),b.addEventListener("mouseenter",function(){return void wEa(c)}),b.addEventListener("mouseleave",function(){return void lm(c,"show-dark-mode-toggle__tooltip",!1)}))}
function wEa(a){lm(a,"show-dark-mode-toggle__tooltip",!0);window.addEventListener("keyup",function(b){b.key==="Escape"&&lm(a,"show-dark-mode-toggle__tooltip",!1)})}
function vEa(){var a,b;Ra(function(c){a=z();b=a.dark;zm({httpMethod:"POST",endpoint:"prefinsert",params:{v:"0"},requestBody:{resource:{user_pref:[{key:"prefer_dark_mode",value:b?"false":"true"}],helpcenter:"GlobalSettings",key_type:a.li?1:2}},onLoadCallback:function(){var e=Em(),f=new bn(window.location.href);cn(f,"dark",e?"0":"1");Km(f.toString())}});
Ia(c)})}
window.sc_initDarkModeToggle=function(){new sEa};


