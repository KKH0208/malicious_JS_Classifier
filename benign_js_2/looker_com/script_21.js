/* 元のURL: https://looker.com */
this.gbar_=this.gbar_||{};(function(_){var window=this;
try{
var qe=function(){_.aa.call(this)};_.z(qe,_.Zd);_.re=function(a,b){if(b in a.i)return a.i[b];throw new qe(b);};_.se=function(a){return _.re(_.Wd.i(),a)};
}catch(e){_._DumpException(e)}
try{
/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var ve,we;_.te=function(a){var b=a.length;if(b>0){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};ve=function(a){return new _.ue(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})};we=0;_.xe=function(a){return Object.prototype.hasOwnProperty.call(a,_.ic)&&a[_.ic]||(a[_.ic]=++we)};_.ye=globalThis.trustedTypes;_.ze=function(a){this.i=a};_.ze.prototype.toString=function(){return this.i};_.Ae=new _.ze("about:invalid#zClosurez");_.ue=function(a){this.Yj=a};_.Be=[ve("data"),ve("http"),ve("https"),ve("mailto"),ve("ftp"),new _.ue(function(a){return/^[^:]*([/?#]|$)/.test(a)})];_.Ce=function(a){this.i=a};_.Ce.prototype.toString=function(){return this.i+""};_.De=new _.Ce(_.ye?_.ye.emptyHTML:"");
}catch(e){_._DumpException(e)}
try{
var Ie,Te,We,He,Je;_.Ee=function(a){return/^[\s\xa0]*$/.test(a)};_.Fe=function(a){if(a==null)return a;if(typeof a==="string"&&a)a=+a;else if(typeof a!=="number")return;return(0,_.Sa)(a)?a|0:void 0};_.Ge=function(a,b){return a.lastIndexOf(b,0)==0};Ie=function(){var a=null;if(!He)return a;try{var b=function(c){return c};a=He.createPolicy("ogb-qtm#html",{createHTML:b,createScript:b,createScriptURL:b})}catch(c){}return a};_.Ke=function(){Je===void 0&&(Je=Ie());return Je};
_.Me=function(a){var b=_.Ke();a=b?b.createScriptURL(a):a;return new _.Le(a)};_.Ne=function(a){if(a instanceof _.Le)return a.i;throw Error("L");};_.Pe=function(a){if(Oe.test(a))return a};_.Qe=function(a){if(a instanceof _.ze)if(a instanceof _.ze)a=a.i;else throw Error("L");else a=_.Pe(a);return a};_.Re=function(a,b){b=b===void 0?document:b;var c,d;b=(d=(c=b).querySelector)==null?void 0:d.call(c,a+"[nonce]");return b==null?"":b.nonce||b.getAttribute("nonce")||""};
_.T=function(a,b,c){return _.Ra(_.ud(a,b,c,_.td))};_.Se=function(a,b){return _.Fe(_.ud(a,b,void 0,_.td))};Te=function(a){this.J=_.x(a)};_.z(Te,_.Q);Te.prototype.Lb=function(a){return _.O(this,24,a)};_.Ue=function(){return _.H(_.Rd,Te,1)};_.Ve=function(a){var b=_.Pa(a);return b=="array"||b=="object"&&typeof a.length=="number"};He=_.ye;_.Le=function(a){this.i=a};_.Le.prototype.toString=function(){return this.i+""};var Oe=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;var bf,ff,Xe;_.Ze=function(a){return a?new Xe(_.Ye(a)):We||(We=new Xe)};_.$e=function(a,b){return typeof b==="string"?a.getElementById(b):b};_.V=function(a,b){var c=b||document;c.getElementsByClassName?a=c.getElementsByClassName(a)[0]:(c=document,a=a?(b||c).querySelector(a?"."+a:""):_.af(c,"*",a,b)[0]||null);return a||null};_.af=function(a,b,c,d){a=d||a;return(b=b&&b!="*"?String(b).toUpperCase():"")||c?a.querySelectorAll(b+(c?"."+c:"")):a.getElementsByTagName("*")};
_.cf=function(a,b){_.Ib(b,function(c,d){d=="style"?a.style.cssText=c:d=="class"?a.className=c:d=="for"?a.htmlFor=c:bf.hasOwnProperty(d)?a.setAttribute(bf[d],c):_.Ge(d,"aria-")||_.Ge(d,"data-")?a.setAttribute(d,c):a[d]=c})};bf={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
_.df=function(a){return a?a.defaultView:window};_.gf=function(a,b){var c=b[1],d=_.ef(a,String(b[0]));c&&(typeof c==="string"?d.className=c:Array.isArray(c)?d.className=c.join(" "):_.cf(d,c));b.length>2&&ff(a,d,b);return d};
ff=function(a,b,c){function d(h){h&&b.appendChild(typeof h==="string"?a.createTextNode(h):h)}for(var e=2;e<c.length;e++){var f=c[e];if(!_.Ve(f)||_.hc(f)&&f.nodeType>0)d(f);else{a:{if(f&&typeof f.length=="number"){if(_.hc(f)){var g=typeof f.item=="function"||typeof f.item=="string";break a}if(typeof f==="function"){g=typeof f.item=="function";break a}}g=!1}_.Dc(g?_.te(f):f,d)}}};_.hf=function(a){return _.ef(document,a)};
_.ef=function(a,b){b=String(b);a.contentType==="application/xhtml+xml"&&(b=b.toLowerCase());return a.createElement(b)};_.jf=function(a){for(var b;b=a.firstChild;)a.removeChild(b)};_.kf=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null};_.lf=function(a,b){if(!a||!b)return!1;if(a.contains&&b.nodeType==1)return a==b||a.contains(b);if(typeof a.compareDocumentPosition!="undefined")return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};
_.Ye=function(a){return a.nodeType==9?a:a.ownerDocument||a.document};Xe=function(a){this.i=a||_.t.document||document};_.l=Xe.prototype;_.l.H=function(a){return _.$e(this.i,a)};_.l.Oa=function(a,b,c){return _.gf(this.i,arguments)};_.l.appendChild=function(a,b){a.appendChild(b)};_.l.nf=_.jf;_.l.Vg=_.kf;_.l.Ug=_.lf;
}catch(e){_._DumpException(e)}
try{
_.zj=function(a){var b=_.Re("script",a.ownerDocument);b&&a.setAttribute("nonce",b)};_.Aj=function(a){if(!a)return null;a=_.L(a,4);var b;a===null||a===void 0?b=null:b=_.Me(a);return b};_.Bj=function(a,b,c){a=a.J;return _.Fb(a,a[_.v]|0,b,c)!==void 0};_.Cj=function(a){this.J=_.x(a)};_.z(_.Cj,_.Q);_.Dj=function(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b};_.Ej=function(a,b){return(b||document).getElementsByTagName(String(a))};
}catch(e){_._DumpException(e)}
try{
var Gj=function(a,b,c){a<b?Fj(a+1,b):_.Ud.log(Error("ja`"+a+"`"+b),{url:c})},Fj=function(a,b){if(Hj){var c=_.hf("SCRIPT");c.async=!0;c.type="text/javascript";c.charset="UTF-8";c.src=_.Ne(Hj);_.zj(c);c.onerror=_.lc(Gj,a,b,c.src);_.Ej("HEAD")[0].appendChild(c)}},Ij=function(a){this.J=_.x(a)};_.z(Ij,_.Q);var Jj=_.H(_.Rd,Ij,17)||new Ij,Kj,Hj=(Kj=_.H(Jj,_.Cj,1))?_.Aj(Kj):null,Lj,Mj=(Lj=_.H(Jj,_.Cj,2))?_.Aj(Lj):null,Nj=function(){Fj(1,2);if(Mj){var a=_.hf("LINK");a.setAttribute("type","text/css");a.href=_.Ne(Mj).toString();a.rel="stylesheet";var b=_.Re("style",document);b&&a.setAttribute("nonce",b);_.Ej("HEAD")[0].appendChild(a)}};(function(){var a=_.Ue();if(_.T(a,18))Nj();else{var b=_.Se(a,19)||0;window.addEventListener("load",function(){window.setTimeout(Nj,b)})}})();
}catch(e){_._DumpException(e)}
})(this.gbar_);
// Google Inc.


