/* 元のURL: https://amazonvideo.com */

(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('afterLoad').execute(function() {
(function(e,d,f){f=function(){};var k=e.ue||{},m=function(c){return function(){try{return c.apply(this,arguments)}catch(b){l(b,"FATAL")}}},l=function(c){return function(b,a){a||(a="ERROR");b=b&&b.stack&&b.message?b:JSON.stringify(b);c({logLevel:a,attribution:"EdgeRECONAssets",message:b})}}(e.ueLogError||f);(function(c){return function(b,a){c("EdgeRECONAssets:"+b,a)}})(k.count||f)("registered",1);var g=function(){try{var c=d.createElement("link").relList.supports("preload")}catch(b){c=!1}return function(b){var a=
c?d.createElement("link"):new Image;a.onerror=a.onload=m(function(){a&&a.parentElement&&a.parentElement.removeChild(a)});c?(a.rel="preload",a.as="image",a.referrerPolicy="strict-origin-when-cross-origin",a.href=b,d.head.appendChild(a)):(a.style.display="none",a.referrerPolicy="strict-origin-when-cross-origin",a.src=b,d.documentElement.appendChild(a))}}(),h="https://redirect.prod.experiment.routing.cloudfront.aws.a2z.com/x.png?timestamp\x3d"+(new Date).getTime().toString();"loading"!==d.readyState?
setTimeout(g,1E3,h):e.addEventListener&&e.addEventListener("DOMContentLoaded",function(){setTimeout(g,1E3,h)})})(window,document);
});


