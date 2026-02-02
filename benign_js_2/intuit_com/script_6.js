/* 元のURL: https://intuit.com */
!function(e,i){e.raas=e.raas||{},e.raas.csLoggingMessages=[];e.raas.CANIUSE=new function(){this.isFeatureSupported=function(t){return!!e[t]},this.addPolyFillForFeature=function(t,e,a){var n;this.attempt=a||3,0<t.length&&(a="https://uxfabric.intuitcdn.net/polyfill/polyfill.min.js?features="+t+"&flags=gated",(n=i.createElement("script")).onload=function(){e()},n.onerror=function(){--this.attempt,0<this.attempt&&this.addPolyFillForFeature(t,e,this.attempt)},n.src=a,(a=i.getElementsByTagName("script")[0]).parentNode.insertBefore(n,a))}}}(window,document);

