/* 元のURL: https://gmail.com */
(function(){'use strict';var d=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},f=function(){var a=document.querySelectorAll('div[data-button-type="multipleChoiceIdentifier"]'),b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:d(a)};throw Error(String(a)+" is not an iterable or ArrayLike");};/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var l=function(){this.i=new window.botguard.bg(k,function(){});this.h=this.g=null;this.i&&window.addEventListener("load",this.j.bind(this))};l.prototype.j=function(){var a=this;this.g=document.getElementById("hiddenMultipleChoiceIdentifier");this.h=function(){a.i.invoke(a.l)};this.g?m(this):document.addEventListener("submit",this.h.bind(this))};l.prototype.l=function(a){var b=document.getElementById("bgresponse");b&&(b.value=a)};
var m=function(a){for(var b=function(e){a.g&&(a.g.value=e);a.h()},q=function(e,p){p.keyCode===13&&(a.g&&(a.g.value=e),a.h())},g=f(),c=g.next();!c.done;c=g.next()){c=c.value.getElementsByTagName("button")[0];var h=c.value;c.addEventListener("click",b.bind(a,h));c.addEventListener("keydown",q.bind(a,h))}},n=document.getElementById("program");if(n){var k=n.getAttribute("program-data");k&&new l};}).call(this);


