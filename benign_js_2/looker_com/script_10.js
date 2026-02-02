/* 元のURL: https://looker.com */
(function(){'use strict';function g(){var a=k,b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var l=this||self;/*

 Copyright 2024 Google, Inc
 SPDX-License-Identifier: MIT
*/
var m=["focus","blur","error","load","toggle"];function n(a){return a==="mouseenter"?"mouseover":a==="mouseleave"?"mouseout":a==="pointerenter"?"pointerover":a==="pointerleave"?"pointerout":a};function p(a){this.l={};this.m={};this.i=null;this.g=[];this.o=a}p.prototype.handleEvent=function(a,b,c){q(this,{eventType:a,event:b,targetElement:b.target,eic:c,timeStamp:Date.now(),eia:void 0,eirp:void 0,eiack:void 0})};function q(a,b){if(a.i)a.i(b);else{b.eirp=!0;var c;(c=a.g)==null||c.push(b)}}
function r(a,b,c){if(!(b in a.l)&&a.o){var e=function(f,d,B){a.handleEvent(f,d,B)};a.l[b]=e;c=n(c||b);if(c!==b){var h=a.m[c]||[];h.push(b);a.m[c]=h}a.o.addEventListener(c,function(f){return function(d){e(b,d,f)}},void 0)}}p.prototype.j=function(a){return this.l[a]};p.prototype.ecrd=function(a){this.i=a;var b;if((b=this.g)==null?0:b.length){for(a=0;a<this.g.length;a++)q(this,this.g[a]);this.g=null}};var t=typeof navigator!=="undefined"&&/iPhone|iPad|iPod/.test(navigator.userAgent);function u(a){this.g=a;this.i=[]}u.prototype.addEventListener=function(a,b,c){t&&(this.g.style.cursor="pointer");var e=this.i,h=e.push,f=this.g;b=b(this.g);var d=!1;m.indexOf(a)>=0&&(d=!0);f.addEventListener(a,b,typeof c==="boolean"?{capture:d,passive:c}:d);h.call(e,{eventType:a,j:b,capture:d,passive:c})};var k="click dblclick focus focusin blur error focusout keydown keyup keypress load mouseover mouseout mouseenter mouseleave mousemove submit toggle touchstart touchend touchmove touchcancel auxclick change compositionstart compositionupdate compositionend beforeinput input select selectstart textinput copy cut paste mousedown mouseup wheel contextmenu dragover dragenter dragleave drop dragstart dragend pointerdown pointermove pointerup pointercancel pointerenter pointerleave pointerover pointerout gotpointercapture lostpointercapture ended loadedmetadata pagehide pageshow visibilitychange beforematch".split(" ");
if(!(k instanceof Array)){var v;var w=typeof Symbol!="undefined"&&Symbol.iterator&&k[Symbol.iterator];if(w)v=w.call(k);else if(typeof k.length=="number")v={next:g()};else throw Error(String(k)+" is not an iterable or ArrayLike");for(var x,y=[];!(x=v.next()).done;)y.push(x.value)};var z=function(a){return{trigger:function(b){var c=a.j(b.type);c||(r(a,b.type),c=a.j(b.type));var e=b.target||b.srcElement;c&&c(b.type,b,e.ownerDocument.documentElement)},configure:function(b){b(a)}}}(function(){var a=window,b=new u(a.document.documentElement),c=new p(b);k.forEach(function(d){return r(c,d)});var e,h,f;"onwebkitanimationend"in a&&(e="webkitAnimationEnd");r(c,"animationend",e);"onwebkitanimationstart"in a&&(h="webkitAnimationStart");r(c,"animationstart",h);r(c,"animationcancel");"onwebkittransitionend"in
a&&(f="webkitTransitionEnd");r(c,"transitionend",f);return{u:c,container:b}}().u),A=["BOQ_wizbind"],C=window||l,D;for(;A.length&&(D=A.shift());)A.length||z===void 0?C[D]&&C[D]!==Object.prototype[D]?C=C[D]:C=C[D]={}:C[D]=z;}).call(this);


