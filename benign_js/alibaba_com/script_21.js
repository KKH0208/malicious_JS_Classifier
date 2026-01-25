/* 元のURL: https://alibaba.com */

window.addEventListener("load",function(){
  !function(e,i){for(var t=e.getElementsByTagName("meta")||[],n=t.length,a="",r="",c=document.body,o=!0,s=8,d=2e3,w=0;w<n;w++){var f=t[w];switch(f.name){case"wpk-bid":a=f.content;break;case"wpk-rel":r=f.content;break;case"wpk-root-id":c=document.getElementById(f.content)||document.body;break;case"wpk-depth":s=Number(f.content);break;case"wpk-check-time":d=Number(f.content);break;case"wpk-disable":o=!1}}var l=!!window.__wpk,k=navigator.userAgent.indexOf("UCBS")>-1&&navigator.userAgent.indexOf("Android");if(o&&!window.__itrace&&!window.__iosInitItrace){var b=[],m="//s.alicdn.com/@g/woodpeckerx/itrace-next/??",u="",_={id:"blank",rootNode:c,maxDepth:s,startCheckingTime:d},p={id:"flow",enable:!1};k?(b=[p],u="".concat(m,"itrace.iife.js")):l?(b=[p,_],u="".concat(m,"itrace-blank.iife.js,itrace.iife.js")):(b=[_],u="".concat(m,"itrace-blank.iife.js,itrace.iife.js")),window.__iosInitItrace=!0,window.__itrace_conf={bid:a,cluster:"intl",plugins:b,rel:r};var g=e.createElement("script");g.async=!0,g.src=u,g.crossOrigin="anonymous",g.onload=function(){window.__itrace&&window.__itrace.setReady()},e.body.appendChild(g)}}(window.document);
})


