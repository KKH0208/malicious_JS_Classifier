/* 元のURL: https://g.page */
function WHa(){this.o=window.location}
WHa.prototype.init=function(a){var b=this;a=a||document;a=a.querySelectorAll("form.language-selector");for(var c={},e=0;e<a.length;c={gz:void 0},++e){var f=a[e];c.gz=f.querySelector('select[name="hl"]');c.gz&&(f.addEventListener("focusin",function(){window.sc_trackStatsEvent(169,8)}),c.gz.addEventListener("change",function(h){return function(){var k=h.gz.value;
window.sc_trackStatsEvent(169,22,k);Km(cn(new bn(b.o.href),"hl",k).toString())}}(c)))}window.sc_trackStatsEvent(169,4)};
window.sc_initLanguageSelector=function(){(new WHa).init(window.sc_scope)};


