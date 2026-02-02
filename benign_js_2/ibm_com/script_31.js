/* 元のURL: https://ibm.com */
// 外部JS: https://ibm.com/etc.clientlibs/adobe-cms/components/content/molecules/cta-section-item/clientlibs.lc-06abd45fa5966d11f20d1a510a93fdda-lc.min.js
function getStatParts(a){return a.match(/\d+[-\u2013\u2014]\d+/)?null:(a=a.match(/([^\d]*)(\d+(?:\.\d+)?)(.*)/))?{prefix:a[1],number:parseFloat(a[2]),suffix:a[3]}:null}
function initializeStatAnimations(){document.querySelectorAll('span[slot\x3d"statistics"]').forEach(function(a){var d=a.textContent.trim(),b=getStatParts(d),c=a.closest(".cmp-tabs__tabpanel:not(.cmp-tabs__tabpanel--active)");d&&!c&&null!==b&&(d=b.prefix,c=b.number,b=b.suffix,isNaN(c)||new CountUp(a,c,{decimalPlaces:Number.isInteger(c)?0:1,duration:1.5,separator:"",prefix:d,suffix:b,enableScrollSpy:!0,scrollSpyOnce:!0}))})}
window.addEventListener("load",function(){"en"===document.getElementsByName("languageCode")[0].content&&initializeStatAnimations()});

