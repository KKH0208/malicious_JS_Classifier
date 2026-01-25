/* 元のURL: https://g.page */
function rEa(){this.o=!1}
rEa.prototype.init=function(){var a=this;window.addEventListener("load",function(){if(!a.o){var b=document.querySelector(".csi");if(b&&!b.value){var c=(new Date).getTime(),e=window.prt-window.start,f=c-window.start,h=window.performance&&window.performance.timing;if(h){var k=h.responseStart-h.requestStart;e=window.prt-h.responseStart;f=c-h.responseStart}c=!1;h={};typeof f==="number"&&f>=0&&f<=99999&&(h.ol=f,c=!0);typeof e==="number"&&e>=0&&e<=99999&&(h.prt=e,c=!0);typeof k==="number"&&k>=0&&k<=99999&&
(h.srt=k,c=!0);c&&(window.sc_trackStatsLatency(h),window.sc_trackScaledSupportPageView(h));window.sc_pageLatency={ol:f,prt:e,srt:k};b.value=1;a.o=!0}}},!1)};
window.sc_initCsiLite=function(){window.sc_initCsiLiteDone||((new rEa).init(),window.sc_initCsiLiteDone=!0)};


