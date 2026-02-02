/* 元のURL: https://looker.com */
(function(){'use strict';var c=window,d=[];c.aft_counter=d;var e=[],f=0;function _recordIsAboveFold(a){if(!c._isLazyImage(a)&&!a.hasAttribute("data-noaft")&&a.src){var b=(c._isVisible||function(){})(c.document,a);a.setAttribute("data-atf",b);b&&(e.indexOf(a)!==-1||d.indexOf(a)!==-1||a.complete||d.push(a),a.hasAttribute("data-iml")&&(a=Number(a.getAttribute("data-iml")),a>f&&(f=a)))}}
c.initAft=function(){f=0;e=Array.prototype.slice.call(document.getElementsByTagName("img")).filter(function(a){return!!a.getAttribute("data-iml")});[].forEach.call(document.getElementsByTagName("img"),function(a){try{_recordIsAboveFold(a)}catch(b){throw b.message=a.hasAttribute("data-iid")?b.message+"\nrecordIsAboveFold error for defer inlined image":b.message+("\nrecordIsAboveFold error for img element with <src: "+a.src+">"),b;}});if(d.length===0)c.onaft(f)};}).call(this);
initAft()

