/* 元のURL: https://taboola.com */
// 外部JS: https://swissknife.taboola.com/TaboolaForm/tbf-dist.js?version=1.5
/**
 * FingerprintJS v4.3.0 - Copyright (c) FingerprintJS, Inc, 2024 (https://fingerprint.com)
 *
 * Licensed under Business Source License 1.1 https://mariadb.com/bsl11/
 * Licensor: FingerprintJS, Inc.
 * Licensed Work: FingerprintJS browser fingerprinting library
 * Additional Use Grant: None
 * Change Date: Four years from first release for the specific version.
 * Change License: MIT, text at https://opensource.org/license/mit/ with the following copyright notice:
 * Copyright 2015-present FingerprintJS, Inc.
 */

var FingerprintJS=function(e){"use strict";var n=function(){return n=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},n.apply(this,arguments)};function t(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(n){i(n)}}function c(e){try{u(r.throw(e))}catch(n){i(n)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}u((r=r.apply(e,n||[])).next())}))}function r(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(u){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(t=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=n.call(e,a)}catch(u){c=[6,u],r=0}finally{t=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}}function o(e,n,t){if(t||2===arguments.length)for(var r,o=0,i=n.length;o<i;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))}var i="4.3.0";function a(e,n){return new Promise((function(t){return setTimeout(t,e,n)}))}function c(){return a(0)}function u(e){return!!e&&"function"==typeof e.then}function s(e,n){try{var t=e();u(t)?t.then((function(e){return n(!0,e)}),(function(e){return n(!1,e)})):n(!0,t)}catch(r){n(!1,r)}}function l(e,n,o){return void 0===o&&(o=16),t(this,void 0,void 0,(function(){var t,i,c,u;return r(this,(function(r){switch(r.label){case 0:t=Array(e.length),i=Date.now(),c=0,r.label=1;case 1:return c<e.length?(t[c]=n(e[c],c),(u=Date.now())>=i+o?(i=u,[4,a(0)]):[3,3]):[3,4];case 2:r.sent(),r.label=3;case 3:return++c,[3,1];case 4:return[2,t]}}))}))}function d(e){e.then(void 0,(function(){}))}function f(e){return parseInt(e)}function m(e){return parseFloat(e)}function v(e,n){return"number"==typeof e&&isNaN(e)?n:e}function h(e){return e.reduce((function(e,n){return e+(n?1:0)}),0)}function p(e,n){if(void 0===n&&(n=1),Math.abs(n)>=1)return Math.round(e/n)*n;var t=1/n;return Math.round(e*t)/t}function b(e,n){var t=e[0]>>>16,r=65535&e[0],o=e[1]>>>16,i=65535&e[1],a=n[0]>>>16,c=65535&n[0],u=n[1]>>>16,s=0,l=0,d=0,f=0;d+=(f+=i+(65535&n[1]))>>>16,f&=65535,l+=(d+=o+u)>>>16,d&=65535,s+=(l+=r+c)>>>16,l&=65535,s+=t+a,s&=65535,e[0]=s<<16|l,e[1]=d<<16|f}function y(e,n){var t=e[0]>>>16,r=65535&e[0],o=e[1]>>>16,i=65535&e[1],a=n[0]>>>16,c=65535&n[0],u=n[1]>>>16,s=65535&n[1],l=0,d=0,f=0,m=0;f+=(m+=i*s)>>>16,m&=65535,d+=(f+=o*s)>>>16,f&=65535,d+=(f+=i*u)>>>16,f&=65535,l+=(d+=r*s)>>>16,d&=65535,l+=(d+=o*u)>>>16,d&=65535,l+=(d+=i*c)>>>16,d&=65535,l+=t*s+r*u+o*c+i*a,l&=65535,e[0]=l<<16|d,e[1]=f<<16|m}function g(e,n){var t=e[0];32===(n%=64)?(e[0]=e[1],e[1]=t):n<32?(e[0]=t<<n|e[1]>>>32-n,e[1]=e[1]<<n|t>>>32-n):(n-=32,e[0]=e[1]<<n|t>>>32-n,e[1]=t<<n|e[1]>>>32-n)}function w(e,n){0!==(n%=64)&&(n<32?(e[0]=e[1]>>>32-n,e[1]=e[1]<<n):(e[0]=e[1]<<n-32,e[1]=0))}function L(e,n){e[0]^=n[0],e[1]^=n[1]}var k=[4283543511,3981806797],V=[3301882366,444984403];function S(e){var n=[0,e[0]>>>1];L(e,n),y(e,k),n[1]=e[0]>>>1,L(e,n),y(e,V),n[1]=e[0]>>>1,L(e,n)}var W=[2277735313,289559509],Z=[1291169091,658871167],x=[0,5],M=[0,1390208809],F=[0,944331445];function R(e,n){var t=function(e){for(var n=new Uint8Array(e.length),t=0;t<e.length;t++){var r=e.charCodeAt(t);if(r>127)return(new TextEncoder).encode(e);n[t]=r}return n}(e);n=n||0;var r,o=[0,t.length],i=o[1]%16,a=o[1]-i,c=[0,n],u=[0,n],s=[0,0],l=[0,0];for(r=0;r<a;r+=16)s[0]=t[r+4]|t[r+5]<<8|t[r+6]<<16|t[r+7]<<24,s[1]=t[r]|t[r+1]<<8|t[r+2]<<16|t[r+3]<<24,l[0]=t[r+12]|t[r+13]<<8|t[r+14]<<16|t[r+15]<<24,l[1]=t[r+8]|t[r+9]<<8|t[r+10]<<16|t[r+11]<<24,y(s,W),g(s,31),y(s,Z),L(c,s),g(c,27),b(c,u),y(c,x),b(c,M),y(l,Z),g(l,33),y(l,W),L(u,l),g(u,31),b(u,c),y(u,x),b(u,F);s[0]=0,s[1]=0,l[0]=0,l[1]=0;var d=[0,0];switch(i){case 15:d[1]=t[r+14],w(d,48),L(l,d);case 14:d[1]=t[r+13],w(d,40),L(l,d);case 13:d[1]=t[r+12],w(d,32),L(l,d);case 12:d[1]=t[r+11],w(d,24),L(l,d);case 11:d[1]=t[r+10],w(d,16),L(l,d);case 10:d[1]=t[r+9],w(d,8),L(l,d);case 9:d[1]=t[r+8],L(l,d),y(l,Z),g(l,33),y(l,W),L(u,l);case 8:d[1]=t[r+7],w(d,56),L(s,d);case 7:d[1]=t[r+6],w(d,48),L(s,d);case 6:d[1]=t[r+5],w(d,40),L(s,d);case 5:d[1]=t[r+4],w(d,32),L(s,d);case 4:d[1]=t[r+3],w(d,24),L(s,d);case 3:d[1]=t[r+2],w(d,16),L(s,d);case 2:d[1]=t[r+1],w(d,8),L(s,d);case 1:d[1]=t[r],L(s,d),y(s,W),g(s,31),y(s,Z),L(c,s)}return L(c,o),L(u,o),b(c,u),b(u,c),S(c),S(u),b(c,u),b(u,c),("00000000"+(c[0]>>>0).toString(16)).slice(-8)+("00000000"+(c[1]>>>0).toString(16)).slice(-8)+("00000000"+(u[0]>>>0).toString(16)).slice(-8)+("00000000"+(u[1]>>>0).toString(16)).slice(-8)}function G(e){return"function"!=typeof e}function I(e,n,o){var i=Object.keys(e).filter((function(e){return!function(e,n){for(var t=0,r=e.length;t<r;++t)if(e[t]===n)return!0;return!1}(o,e)})),a=l(i,(function(t){return function(e,n){var t=new Promise((function(t){var r=Date.now();s(e.bind(null,n),(function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var o=Date.now()-r;if(!e[0])return t((function(){return{error:e[1],duration:o}}));var i=e[1];if(G(i))return t((function(){return{value:i,duration:o}}));t((function(){return new Promise((function(e){var n=Date.now();s(i,(function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var i=o+Date.now()-n;if(!t[0])return e({error:t[1],duration:i});e({value:t[1],duration:i})}))}))}))}))}));return d(t),function(){return t.then((function(e){return e()}))}}(e[t],n)}));return d(a),function(){return t(this,void 0,void 0,(function(){var e,n,t,o;return r(this,(function(r){switch(r.label){case 0:return[4,a];case 1:return[4,l(r.sent(),(function(e){var n=e();return d(n),n}))];case 2:return e=r.sent(),[4,Promise.all(e)];case 3:for(n=r.sent(),t={},o=0;o<i.length;++o)t[i[o]]=n[o];return[2,t]}}))}))}}function Y(){var e=window,n=navigator;return h(["MSCSSMatrix"in e,"msSetImmediate"in e,"msIndexedDB"in e,"msMaxTouchPoints"in n,"msPointerEnabled"in n])>=4}function j(){var e=window,n=navigator;return h(["msWriteProfilerMark"in e,"MSStream"in e,"msLaunchUri"in n,"msSaveBlob"in n])>=3&&!Y()}function X(){var e=window,n=navigator;return h(["webkitPersistentStorage"in n,"webkitTemporaryStorage"in n,0===n.vendor.indexOf("Google"),"webkitResolveLocalFileSystemURL"in e,"BatteryManager"in e,"webkitMediaStream"in e,"webkitSpeechGrammar"in e])>=5}function P(){var e=window,n=navigator;return h(["ApplePayError"in e,"CSSPrimitiveValue"in e,"Counter"in e,0===n.vendor.indexOf("Apple"),"getStorageUpdates"in n,"WebKitMediaKeys"in e])>=4}function C(){var e=window,n=e.HTMLElement,t=e.Document;return h(["safari"in e,!("ongestureend"in e),!("TouchEvent"in e),!("orientation"in e),n&&!("autocapitalize"in n.prototype),t&&"pointerLockElement"in t.prototype])>=4}function E(){var e,n=window;return e=n.print,!!/^function\s.*?\{\s*\[native code]\s*}$/.test(String(e))&&h(["[object WebPageNamespace]"===String(n.browser),"MicrodataExtractor"in n])>=1}function H(){var e,n,t=window;return h(["buildID"in navigator,"MozAppearance"in(null!==(n=null===(e=document.documentElement)||void 0===e?void 0:e.style)&&void 0!==n?n:{}),"onmozfullscreenchange"in t,"mozInnerScreenX"in t,"CSSMozDocumentRule"in t,"CanvasCaptureMediaStream"in t])>=4}function A(){var e=window,n=navigator,t=e.CSS,r=e.HTMLButtonElement;return h([!("getStorageUpdates"in n),r&&"popover"in r.prototype,"CSSCounterStyleRule"in e,t.supports("font-size-adjust: ex-height 0.5"),t.supports("text-transform: full-width")])>=4}function N(){var e=document;return e.fullscreenElement||e.msFullscreenElement||e.mozFullScreenElement||e.webkitFullscreenElement||null}function J(){var e=X(),n=H(),t=window,r=navigator,o="connection";return e?h([!("SharedWorker"in t),r[o]&&"ontypechange"in r[o],!("sinkId"in new window.Audio)])>=2:!!n&&h(["onorientationchange"in t,"orientation"in t,/android/i.test(navigator.appVersion)])>=2}function T(e,n,o){var i,c,u;return void 0===o&&(o=50),t(this,void 0,void 0,(function(){var t,s;return r(this,(function(r){switch(r.label){case 0:t=document,r.label=1;case 1:return t.body?[3,3]:[4,a(o)];case 2:return r.sent(),[3,1];case 3:s=t.createElement("iframe"),r.label=4;case 4:return r.trys.push([4,,10,11]),[4,new Promise((function(e,r){var o=!1,i=function(){o=!0,e()};s.onload=i,s.onerror=function(e){o=!0,r(e)};var a=s.style;a.setProperty("display","block","important"),a.position="absolute",a.top="0",a.left="0",a.visibility="hidden",n&&"srcdoc"in s?s.srcdoc=n:s.src="about:blank",t.body.appendChild(s);var c=function(){var e,n;o||("complete"===(null===(n=null===(e=s.contentWindow)||void 0===e?void 0:e.document)||void 0===n?void 0:n.readyState)?i():setTimeout(c,10))};c()}))];case 5:r.sent(),r.label=6;case 6:return(null===(c=null===(i=s.contentWindow)||void 0===i?void 0:i.document)||void 0===c?void 0:c.body)?[3,8]:[4,a(o)];case 7:return r.sent(),[3,6];case 8:return[4,e(s,s.contentWindow)];case 9:return[2,r.sent()];case 10:return null===(u=s.parentNode)||void 0===u||u.removeChild(s),[7];case 11:return[2]}}))}))}function _(e){for(var n=function(e){for(var n,t,r="Unexpected syntax '".concat(e,"'"),o=/^\s*([a-z-]*)(.*)$/i.exec(e),i=o[1]||void 0,a={},c=/([.:#][\w-]+|\[.+?\])/gi,u=function(e,n){a[e]=a[e]||[],a[e].push(n)};;){var s=c.exec(o[2]);if(!s)break;var l=s[0];switch(l[0]){case".":u("class",l.slice(1));break;case"#":u("id",l.slice(1));break;case"[":var d=/^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(l);if(!d)throw new Error(r);u(d[1],null!==(t=null!==(n=d[4])&&void 0!==n?n:d[5])&&void 0!==t?t:"");break;default:throw new Error(r)}}return[i,a]}(e),t=n[0],r=n[1],o=document.createElement(null!=t?t:"div"),i=0,a=Object.keys(r);i<a.length;i++){var c=a[i],u=r[c].join(" ");"style"===c?D(o.style,u):o.setAttribute(c,u)}return o}function D(e,n){for(var t=0,r=n.split(";");t<r.length;t++){var o=r[t],i=/^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(o);if(i){var a=i[1],c=i[2],u=i[4];e.setProperty(a,c,u||"")}}}var z=44100;function B(){return t(this,void 0,void 0,(function(){var e,n,o;return r(this,(function(i){switch(i.label){case 0:return n=new Promise((function(e){var n=document,t="visibilitychange",r=function(){n.hidden||(n.removeEventListener(t,r),e())};n.addEventListener(t,r),r()})).then((function(){return a(500)})),o=function(){return t(this,void 0,void 0,(function(){var e,n,t,o,i,a,c;return r(this,(function(r){switch(r.label){case 0:return e=window,(n=e.OfflineAudioContext||e.webkitOfflineAudioContext)?O()?[2,-1]:[4,U(n)]:[2,-2];case 1:return(t=r.sent())?(o=new n(1,t.length-1+4e4,z),(i=o.createBufferSource()).buffer=t,i.loop=!0,i.loopStart=(t.length-1)/z,i.loopEnd=t.length/z,i.connect(o.destination),i.start(),[4,Q(o)]):[2,-3];case 2:return(a=r.sent())?(c=function(e,n){for(var t=void 0,r=!1,o=0;o<n.length;o+=Math.floor(n.length/10))if(0===n[o]);else if(void 0===t)t=n[o];else if(t!==n[o]){r=!0;break}void 0===t?t=e.getChannelData(0)[e.length-1]:r&&(t=function(e){for(var n=1/0,t=-1/0,r=0;r<e.length;r++){var o=e[r];0!==o&&(o<n&&(n=o),o>t&&(t=o))}return(n+t)/2}(n));return t}(t,a.getChannelData(0).subarray(t.length-1)),[2,Math.abs(c)]):[2,-3]}}))}))}().then((function(n){return e=[!0,n]}),(function(n){return e=[!1,n]})),[4,Promise.race([n,o])];case 1:return i.sent(),[2,function(){if(!e)return-3;if(!e[0])throw e[1];return e[1]}]}}))}))}function O(){return P()&&!C()&&!(h(["DOMRectList"in(e=window),"RTCPeerConnectionIceEvent"in e,"SVGGeometryElement"in e,"ontransitioncancel"in e])>=3);var e}function U(e){return t(this,void 0,void 0,(function(){var n,t,o,i;return r(this,(function(r){switch(r.label){case 0:return 3395,n=new e(1,3396,z),(t=n.createOscillator()).type="square",t.frequency.value=1e3,(o=n.createDynamicsCompressor()).threshold.value=-70,o.knee.value=40,o.ratio.value=12,o.attack.value=0,o.release.value=.25,(i=n.createBiquadFilter()).type="allpass",i.frequency.value=5.239622852977861,i.Q.value=.1,t.connect(o),o.connect(i),i.connect(n.destination),t.start(0),[4,Q(n)];case 1:return[2,r.sent()]}}))}))}function Q(e){return new Promise((function(n,t){var r=25;e.oncomplete=function(e){return n(e.renderedBuffer)};var o=function(){try{var i=e.startRendering();u(i)&&d(i),"suspended"===e.state&&(document.hidden||r--,r>0?setTimeout(o,200):n(null))}catch(a){t(a)}};o()}))}var K=["monospace","sans-serif","serif"],q=["sans-serif-thin","ARNO PRO","Agency FB","Arabic Typesetting","Arial Unicode MS","AvantGarde Bk BT","BankGothic Md BT","Batang","Bitstream Vera Sans Mono","Calibri","Century","Century Gothic","Clarendon","EUROSTILE","Franklin Gothic","Futura Bk BT","Futura Md BT","GOTHAM","Gill Sans","HELV","Haettenschweiler","Helvetica Neue","Humanst521 BT","Leelawadee","Letter Gothic","Levenim MT","Lucida Bright","Lucida Sans","Menlo","MS Mincho","MS Outlook","MS Reference Specialty","MS UI Gothic","MT Extra","MYRIAD PRO","Marlett","Meiryo UI","Microsoft Uighur","Minion Pro","Monotype Corsiva","PMingLiU","Pristina","SCRIPTINA","Segoe UI Light","Serifa","SimHei","Small Fonts","Staccato222 BT","TRAJAN PRO","Univers CE 55 Medium","Vrinda","ZWAdobeF"];function $(e){return t(this,void 0,void 0,(function(){var n,t,o,i,a,c,u;return r(this,(function(r){switch(r.label){case 0:return n=!1,i=function(){var e=document.createElement("canvas");return e.width=1,e.height=1,[e,e.getContext("2d")]}(),a=i[0],c=i[1],function(e,n){return!(!n||!e.toDataURL)}(a,c)?[3,1]:(t=o="unsupported",[3,4]);case 1:return n=function(e){return e.rect(0,0,10,10),e.rect(2,2,6,6),!e.isPointInPath(5,5,"evenodd")}(c),e?(t=o="skipped",[3,4]):[3,2];case 2:return[4,ee(a,c)];case 3:u=r.sent(),t=u[0],o=u[1],r.label=4;case 4:return[2,{winding:n,geometry:t,text:o}]}}))}))}function ee(e,n){return t(this,void 0,void 0,(function(){var t,o;return r(this,(function(r){switch(r.label){case 0:return function(e,n){e.width=240,e.height=60,n.textBaseline="alphabetic",n.fillStyle="#f60",n.fillRect(100,1,62,20),n.fillStyle="#069",n.font='11pt "Times New Roman"';var t="Cwm fjordbank gly ".concat(String.fromCharCode(55357,56835));n.fillText(t,2,15),n.fillStyle="rgba(102, 204, 0, 0.2)",n.font="18pt Arial",n.fillText(t,4,45)}(e,n),[4,c()];case 1:return r.sent(),t=ne(e),o=ne(e),t!==o?[2,["unstable","unstable"]]:(function(e,n){e.width=122,e.height=110,n.globalCompositeOperation="multiply";for(var t=0,r=[["#f2f",40,40],["#2ff",80,40],["#ff2",60,80]];t<r.length;t++){var o=r[t],i=o[0],a=o[1],c=o[2];n.fillStyle=i,n.beginPath(),n.arc(a,c,40,0,2*Math.PI,!0),n.closePath(),n.fill()}n.fillStyle="#f9c",n.arc(60,60,60,0,2*Math.PI,!0),n.arc(60,60,20,0,2*Math.PI,!0),n.fill("evenodd")}(e,n),[4,c()]);case 2:return r.sent(),[2,[ne(e),t]]}}))}))}function ne(e){return e.toDataURL()}function te(){var e=screen,n=function(e){return v(f(e),null)},t=[n(e.width),n(e.height)];return t.sort().reverse(),t}var re,oe;function ie(){var e=this;return function(){if(void 0===oe){var e=function(){var n=ae();ce(n)?oe=setTimeout(e,2500):(re=n,oe=void 0)};e()}}(),function(){return t(e,void 0,void 0,(function(){var e;return r(this,(function(n){switch(n.label){case 0:return ce(e=ae())?re?[2,o([],re,!0)]:N()?[4,(t=document,(t.exitFullscreen||t.msExitFullscreen||t.mozCancelFullScreen||t.webkitExitFullscreen).call(t))]:[3,2]:[3,2];case 1:n.sent(),e=ae(),n.label=2;case 2:return ce(e)||(re=e),[2,e]}var t}))}))}}function ae(){var e=screen;return[v(m(e.availTop),null),v(m(e.width)-m(e.availWidth)-v(m(e.availLeft),0),null),v(m(e.height)-m(e.availHeight)-v(m(e.availTop),0),null),v(m(e.availLeft),null)]}function ce(e){for(var n=0;n<4;++n)if(e[n])return!1;return!0}function ue(e){var n;return t(this,void 0,void 0,(function(){var t,o,i,u,s,l,d;return r(this,(function(r){switch(r.label){case 0:for(t=document,o=t.createElement("div"),i=new Array(e.length),u={},se(o),d=0;d<e.length;++d)"DIALOG"===(s=_(e[d])).tagName&&s.show(),se(l=t.createElement("div")),l.appendChild(s),o.appendChild(l),i[d]=s;r.label=1;case 1:return t.body?[3,3]:[4,a(50)];case 2:return r.sent(),[3,1];case 3:return t.body.appendChild(o),[4,c()];case 4:r.sent();try{for(d=0;d<e.length;++d)i[d].offsetParent||(u[e[d]]=!0)}finally{null===(n=o.parentNode)||void 0===n||n.removeChild(o)}return[2,u]}}))}))}function se(e){e.style.setProperty("visibility","hidden","important"),e.style.setProperty("display","block","important")}function le(e){return matchMedia("(inverted-colors: ".concat(e,")")).matches}function de(e){return matchMedia("(forced-colors: ".concat(e,")")).matches}function fe(e){return matchMedia("(prefers-contrast: ".concat(e,")")).matches}function me(e){return matchMedia("(prefers-reduced-motion: ".concat(e,")")).matches}function ve(e){return matchMedia("(prefers-reduced-transparency: ".concat(e,")")).matches}function he(e){return matchMedia("(dynamic-range: ".concat(e,")")).matches}var pe=Math,be=function(){return 0};var ye={default:[],apple:[{font:"-apple-system-body"}],serif:[{fontFamily:"serif"}],sans:[{fontFamily:"sans-serif"}],mono:[{fontFamily:"monospace"}],min:[{fontSize:"1px"}],system:[{fontFamily:"system-ui"}]};function ge(e){if(e instanceof Error){if("InvalidAccessError"===e.name){if(/\bfrom\b.*\binsecure\b/i.test(e.message))return-2;if(/\bdifferent\b.*\borigin\b.*top.level\b.*\bframe\b/i.test(e.message))return-3}if("SecurityError"===e.name&&/\bthird.party iframes?.*\bnot.allowed\b/i.test(e.message))return-3}throw e}var we=new Set([10752,2849,2884,2885,2886,2928,2929,2930,2931,2932,2960,2961,2962,2963,2964,2965,2966,2967,2968,2978,3024,3042,3088,3089,3106,3107,32773,32777,32777,32823,32824,32936,32937,32938,32939,32968,32969,32970,32971,3317,33170,3333,3379,3386,33901,33902,34016,34024,34076,3408,3410,3411,3412,3413,3414,3415,34467,34816,34817,34818,34819,34877,34921,34930,35660,35661,35724,35738,35739,36003,36004,36005,36347,36348,36349,37440,37441,37443,7936,7937,7938]),Le=new Set([34047,35723,36063,34852,34853,34854,34229,36392,36795,38449]),ke=["FRAGMENT_SHADER","VERTEX_SHADER"],Ve=["LOW_FLOAT","MEDIUM_FLOAT","HIGH_FLOAT","LOW_INT","MEDIUM_INT","HIGH_INT"],Se="WEBGL_debug_renderer_info";function We(e){if(e.webgl)return e.webgl.context;var n,t=document.createElement("canvas");t.addEventListener("webglCreateContextError",(function(){return n=void 0}));for(var r=0,o=["webgl","experimental-webgl"];r<o.length;r++){var i=o[r];try{n=t.getContext(i)}catch(a){}if(n)break}return e.webgl={context:n},n}function Ze(e,n,t){var r=e.getShaderPrecisionFormat(e[n],e[t]);return r?[r.rangeMin,r.rangeMax,r.precision]:[]}function xe(e){return Object.keys(e.__proto__).filter(Me)}function Me(e){return"string"==typeof e&&!e.match(/[^A-Z0-9_x]/)}function Fe(){return H()}function Re(e){return"function"==typeof e.getParameter}var Ge={fonts:function(){var e=this;return T((function(n,o){var i=o.document;return t(e,void 0,void 0,(function(){var e,n,t,o,a,u,s,l,d,f,m;return r(this,(function(r){switch(r.label){case 0:return(e=i.body).style.fontSize="48px",(n=i.createElement("div")).style.setProperty("visibility","hidden","important"),t={},o={},a=function(e){var t=i.createElement("span"),r=t.style;return r.position="absolute",r.top="0",r.left="0",r.fontFamily=e,t.textContent="mmMwWLliI0O&1",n.appendChild(t),t},u=function(e,n){return a("'".concat(e,"',").concat(n))},s=function(){for(var e={},n=function(n){e[n]=K.map((function(e){return u(n,e)}))},t=0,r=q;t<r.length;t++){n(r[t])}return e},l=function(e){return K.some((function(n,r){return e[r].offsetWidth!==t[n]||e[r].offsetHeight!==o[n]}))},d=function(){return K.map(a)}(),f=s(),e.appendChild(n),[4,c()];case 1:for(r.sent(),m=0;m<K.length;m++)t[K[m]]=d[m].offsetWidth,o[K[m]]=d[m].offsetHeight;return[2,q.filter((function(e){return l(f[e])}))]}}))}))}))},domBlockers:function(e){var n=(void 0===e?{}:e).debug;return t(this,void 0,void 0,(function(){var e,t,o,i,a;return r(this,(function(r){switch(r.label){case 0:return P()||J()?(c=atob,e={abpIndo:["#Iklan-Melayang","#Kolom-Iklan-728","#SidebarIklan-wrapper",'[title="ALIENBOLA" i]',c("I0JveC1CYW5uZXItYWRz")],abpvn:[".quangcao","#mobileCatfish",c("LmNsb3NlLWFkcw=="),'[id^="bn_bottom_fixed_"]',"#pmadv"],adBlockFinland:[".mainostila",c("LnNwb25zb3JpdA=="),".ylamainos",c("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"),c("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")],adBlockPersian:["#navbar_notice_50",".kadr",'TABLE[width="140px"]',"#divAgahi",c("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd")],adBlockWarningRemoval:["#adblock-honeypot",".adblocker-root",".wp_adblock_detect",c("LmhlYWRlci1ibG9ja2VkLWFk"),c("I2FkX2Jsb2NrZXI=")],adGuardAnnoyances:[".hs-sosyal","#cookieconsentdiv",'div[class^="app_gdpr"]',".as-oil",'[data-cypress="soft-push-notification-modal"]'],adGuardBase:[".BetterJsPopOverlay",c("I2FkXzMwMFgyNTA="),c("I2Jhbm5lcmZsb2F0MjI="),c("I2NhbXBhaWduLWJhbm5lcg=="),c("I0FkLUNvbnRlbnQ=")],adGuardChinese:[c("LlppX2FkX2FfSA=="),c("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"),"#widget-quan",c("YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd"),c("YVtocmVmKj0iLjE5NTZobC5jb20vIl0=")],adGuardFrench:["#pavePub",c("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"),".mobile_adhesion",".widgetadv",c("LmFkc19iYW4=")],adGuardGerman:['aside[data-portal-id="leaderboard"]'],adGuardJapanese:["#kauli_yad_1",c("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="),c("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="),c("LmFkZ29vZ2xl"),c("Ll9faXNib29zdFJldHVybkFk")],adGuardMobile:[c("YW1wLWF1dG8tYWRz"),c("LmFtcF9hZA=="),'amp-embed[type="24smi"]',"#mgid_iframe1",c("I2FkX2ludmlld19hcmVh")],adGuardRussian:[c("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="),c("LnJlY2xhbWE="),'div[id^="smi2adblock"]',c("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"),"#psyduckpockeball"],adGuardSocial:[c("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="),c("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="),".etsy-tweet","#inlineShare",".popup-social"],adGuardSpanishPortuguese:["#barraPublicidade","#Publicidade","#publiEspecial","#queTooltip",".cnt-publi"],adGuardTrackingProtection:["#qoo-counter",c("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="),c("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="),c("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="),"#top100counter"],adGuardTurkish:["#backkapat",c("I3Jla2xhbWk="),c("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="),c("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"),c("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")],bulgarian:[c("dGQjZnJlZW5ldF90YWJsZV9hZHM="),"#ea_intext_div",".lapni-pop-over","#xenium_hot_offers"],easyList:[".yb-floorad",c("LndpZGdldF9wb19hZHNfd2lkZ2V0"),c("LnRyYWZmaWNqdW5reS1hZA=="),".textad_headline",c("LnNwb25zb3JlZC10ZXh0LWxpbmtz")],easyListChina:[c("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="),c("LmZyb250cGFnZUFkdk0="),"#taotaole","#aafoot.top_box",".cfa_popup"],easyListCookie:[".ezmob-footer",".cc-CookieWarning","[data-cookie-number]",c("LmF3LWNvb2tpZS1iYW5uZXI="),".sygnal24-gdpr-modal-wrap"],easyListCzechSlovak:["#onlajny-stickers",c("I3Jla2xhbW5pLWJveA=="),c("LnJla2xhbWEtbWVnYWJvYXJk"),".sklik",c("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")],easyListDutch:[c("I2FkdmVydGVudGll"),c("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="),".adstekst",c("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="),"#semilo-lrectangle"],easyListGermany:["#SSpotIMPopSlider",c("LnNwb25zb3JsaW5rZ3J1ZW4="),c("I3dlcmJ1bmdza3k="),c("I3Jla2xhbWUtcmVjaHRzLW1pdHRl"),c("YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0=")],easyListItaly:[c("LmJveF9hZHZfYW5udW5jaQ=="),".sb-box-pubbliredazionale",c("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"),c("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"),c("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")],easyListLithuania:[c("LnJla2xhbW9zX3RhcnBhcw=="),c("LnJla2xhbW9zX251b3JvZG9z"),c("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"),c("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"),c("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")],estonian:[c("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],fanboyAnnoyances:["#ac-lre-player",".navigate-to-top","#subscribe_popup",".newsletter_holder","#back-top"],fanboyAntiFacebook:[".util-bar-module-firefly-visible"],fanboyEnhancedTrackers:[".open.pushModal","#issuem-leaky-paywall-articles-zero-remaining-nag","#sovrn_container",'div[class$="-hide"][zoompage-fontsize][style="display: block;"]',".BlockNag__Card"],fanboySocial:["#FollowUs","#meteored_share","#social_follow",".article-sharer",".community__social-desc"],frellwitSwedish:[c("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="),c("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="),"article.category-samarbete",c("ZGl2LmhvbGlkQWRz"),"ul.adsmodern"],greekAdBlock:[c("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"),c("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="),c("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"),"DIV.agores300","TABLE.advright"],hungarian:["#cemp_doboz",".optimonk-iframe-container",c("LmFkX19tYWlu"),c("W2NsYXNzKj0iR29vZ2xlQWRzIl0="),"#hirdetesek_box"],iDontCareAboutCookies:['.alert-info[data-block-track*="CookieNotice"]',".ModuleTemplateCookieIndicator",".o--cookies--container","#cookies-policy-sticky","#stickyCookieBar"],icelandicAbp:[c("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],latvian:[c("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="),c("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")],listKr:[c("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="),c("I2xpdmVyZUFkV3JhcHBlcg=="),c("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="),c("aW5zLmZhc3R2aWV3LWFk"),".revenue_unit_item.dable"],listeAr:[c("LmdlbWluaUxCMUFk"),".right-and-left-sponsers",c("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="),c("YVtocmVmKj0iYm9vcmFxLm9yZyJd"),c("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")],listeFr:[c("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="),c("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="),c("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="),".site-pub-interstitiel",'div[id^="crt-"][data-criteo-id]'],officialPolish:["#ceneo-placeholder-ceneo-12",c("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"),c("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="),c("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="),c("ZGl2I3NrYXBpZWNfYWQ=")],ro:[c("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"),c("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"),c("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="),c("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd"),'a[href^="/url/"]'],ruAd:[c("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"),c("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="),c("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="),"#pgeldiz",".yandex-rtb-block"],thaiAds:["a[href*=macau-uta-popup]",c("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="),c("LmFkczMwMHM="),".bumq",".img-kosana"],webAnnoyancesUltralist:["#mod-social-share-2","#social-tools",c("LmN0cGwtZnVsbGJhbm5lcg=="),".zergnet-recommend",".yt.btn-link.btn-md.btn"]},t=Object.keys(e),[4,ue((a=[]).concat.apply(a,t.map((function(n){return e[n]}))))]):[2,void 0];case 1:return o=r.sent(),n&&function(e,n){for(var t="DOM blockers debug:\n```",r=0,o=Object.keys(e);r<o.length;r++){var i=o[r];t+="\n".concat(i,":");for(var a=0,c=e[i];a<c.length;a++){var u=c[a];t+="\n  ".concat(n[u]?"🚫":"➡️"," ").concat(u)}}console.log("".concat(t,"\n```"))}(e,o),(i=t.filter((function(n){var t=e[n];return h(t.map((function(e){return o[e]})))>.6*t.length}))).sort(),[2,i]}var c}))}))},fontPreferences:function(){return function(e,n){void 0===n&&(n=4e3);return T((function(t,r){var i=r.document,a=i.body,c=a.style;c.width="".concat(n,"px"),c.webkitTextSizeAdjust=c.textSizeAdjust="none",X()?a.style.zoom="".concat(1/r.devicePixelRatio):P()&&(a.style.zoom="reset");var u=i.createElement("div");return u.textContent=o([],Array(n/20<<0),!0).map((function(){return"word"})).join(" "),a.appendChild(u),e(i,a)}),'<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">')}((function(e,n){for(var t={},r={},o=0,i=Object.keys(ye);o<i.length;o++){var a=i[o],c=ye[a],u=c[0],s=void 0===u?{}:u,l=c[1],d=void 0===l?"mmMwWLliI0fiflO&1":l,f=e.createElement("span");f.textContent=d,f.style.whiteSpace="nowrap";for(var m=0,v=Object.keys(s);m<v.length;m++){var h=v[m],p=s[h];void 0!==p&&(f.style[h]=p)}t[a]=f,n.append(e.createElement("br"),f)}for(var b=0,y=Object.keys(ye);b<y.length;b++){r[a=y[b]]=t[a].getBoundingClientRect().width}return r}))},audio:function(){return t(this,void 0,void 0,(function(){var e;return r(this,(function(n){switch(n.label){case 0:return[4,B()];case 1:return e=n.sent(),[2,function(){return function(e,n){if(0===e)return e;var t=Math.floor(Math.log10(Math.abs(e)))-Math.floor(n)+1,r=Math.pow(10,-t)*(10*n%10||1);return Math.round(e*r)/r}(e(),6.2)}]}}))}))},screenFrame:function(){var e=this;if(P()&&A()&&E())return function(){return Promise.resolve(void 0)};var n=ie();return function(){return t(e,void 0,void 0,(function(){var e,t;return r(this,(function(r){switch(r.label){case 0:return[4,n()];case 1:return e=r.sent(),[2,[(t=function(e){return null===e?null:p(e,10)})(e[0]),t(e[1]),t(e[2]),t(e[3])]]}}))}))}},canvas:function(){return $(P()&&A()&&E())},osCpu:function(){return navigator.oscpu},languages:function(){var e,n=navigator,t=[],r=n.language||n.userLanguage||n.browserLanguage||n.systemLanguage;if(void 0!==r&&t.push([r]),Array.isArray(n.languages))X()&&h([!("MediaSettingsRange"in(e=window)),"RTCEncodedAudioFrame"in e,""+e.Intl=="[object Intl]",""+e.Reflect=="[object Reflect]"])>=3||t.push(n.languages);else if("string"==typeof n.languages){var o=n.languages;o&&t.push(o.split(","))}return t},colorDepth:function(){return window.screen.colorDepth},deviceMemory:function(){return v(m(navigator.deviceMemory),void 0)},screenResolution:function(){if(!(P()&&A()&&E()))return te()},hardwareConcurrency:function(){return v(f(navigator.hardwareConcurrency),void 0)},timezone:function(){var e,n=null===(e=window.Intl)||void 0===e?void 0:e.DateTimeFormat;if(n){var t=(new n).resolvedOptions().timeZone;if(t)return t}var r,o=(r=(new Date).getFullYear(),-Math.max(m(new Date(r,0,1).getTimezoneOffset()),m(new Date(r,6,1).getTimezoneOffset())));return"UTC".concat(o>=0?"+":"").concat(o)},sessionStorage:function(){try{return!!window.sessionStorage}catch(e){return!0}},localStorage:function(){try{return!!window.localStorage}catch(e){return!0}},indexedDB:function(){if(!Y()&&!j())try{return!!window.indexedDB}catch(e){return!0}},openDatabase:function(){return!!window.openDatabase},cpuClass:function(){return navigator.cpuClass},platform:function(){var e=navigator.platform;return"MacIntel"===e&&P()&&!C()?function(){if("iPad"===navigator.platform)return!0;var e=screen,n=e.width/e.height;return h(["MediaSource"in window,!!Element.prototype.webkitRequestFullscreen,n>.65&&n<1.53])>=2}()?"iPad":"iPhone":e},plugins:function(){var e=navigator.plugins;if(e){for(var n=[],t=0;t<e.length;++t){var r=e[t];if(r){for(var o=[],i=0;i<r.length;++i){var a=r[i];o.push({type:a.type,suffixes:a.suffixes})}n.push({name:r.name,description:r.description,mimeTypes:o})}}return n}},touchSupport:function(){var e,n=navigator,t=0;void 0!==n.maxTouchPoints?t=f(n.maxTouchPoints):void 0!==n.msMaxTouchPoints&&(t=n.msMaxTouchPoints);try{document.createEvent("TouchEvent"),e=!0}catch(r){e=!1}return{maxTouchPoints:t,touchEvent:e,touchStart:"ontouchstart"in window}},vendor:function(){return navigator.vendor||""},vendorFlavors:function(){for(var e=[],n=0,t=["chrome","safari","__crWeb","__gCrWeb","yandex","__yb","__ybro","__firefox__","__edgeTrackingPreventionStatistics","webkit","oprt","samsungAr","ucweb","UCShellJava","puffinDevice"];n<t.length;n++){var r=t[n],o=window[r];o&&"object"==typeof o&&e.push(r)}return e.sort()},cookiesEnabled:function(){var e=document;try{e.cookie="cookietest=1; SameSite=Strict;";var n=-1!==e.cookie.indexOf("cookietest=");return e.cookie="cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT",n}catch(t){return!1}},colorGamut:function(){for(var e=0,n=["rec2020","p3","srgb"];e<n.length;e++){var t=n[e];if(matchMedia("(color-gamut: ".concat(t,")")).matches)return t}},invertedColors:function(){return!!le("inverted")||!le("none")&&void 0},forcedColors:function(){return!!de("active")||!de("none")&&void 0},monochrome:function(){if(matchMedia("(min-monochrome: 0)").matches){for(var e=0;e<=100;++e)if(matchMedia("(max-monochrome: ".concat(e,")")).matches)return e;throw new Error("Too high value")}},contrast:function(){return fe("no-preference")?0:fe("high")||fe("more")?1:fe("low")||fe("less")?-1:fe("forced")?10:void 0},reducedMotion:function(){return!!me("reduce")||!me("no-preference")&&void 0},reducedTransparency:function(){return!!ve("reduce")||!ve("no-preference")&&void 0},hdr:function(){return!!he("high")||!he("standard")&&void 0},math:function(){var e,n=pe.acos||be,t=pe.acosh||be,r=pe.asin||be,o=pe.asinh||be,i=pe.atanh||be,a=pe.atan||be,c=pe.sin||be,u=pe.sinh||be,s=pe.cos||be,l=pe.cosh||be,d=pe.tan||be,f=pe.tanh||be,m=pe.exp||be,v=pe.expm1||be,h=pe.log1p||be;return{acos:n(.12312423423423424),acosh:t(1e308),acoshPf:(e=1e154,pe.log(e+pe.sqrt(e*e-1))),asin:r(.12312423423423424),asinh:o(1),asinhPf:function(e){return pe.log(e+pe.sqrt(e*e+1))}(1),atanh:i(.5),atanhPf:function(e){return pe.log((1+e)/(1-e))/2}(.5),atan:a(.5),sin:c(-1e300),sinh:u(1),sinhPf:function(e){return pe.exp(e)-1/pe.exp(e)/2}(1),cos:s(10.000000000123),cosh:l(1),coshPf:function(e){return(pe.exp(e)+1/pe.exp(e))/2}(1),tan:d(-1e300),tanh:f(1),tanhPf:function(e){return(pe.exp(2*e)-1)/(pe.exp(2*e)+1)}(1),exp:m(1),expm1:v(1),expm1Pf:function(e){return pe.exp(e)-1}(1),log1p:h(10),log1pPf:function(e){return pe.log(1+e)}(10),powPI:function(e){return pe.pow(pe.PI,e)}(-100)}},pdfViewerEnabled:function(){return navigator.pdfViewerEnabled},architecture:function(){var e=new Float32Array(1),n=new Uint8Array(e.buffer);return e[0]=1/0,e[0]=e[0]-e[0],n[3]},applePay:function(){var e=window.ApplePaySession;if("function"!=typeof(null==e?void 0:e.canMakePayments))return-1;try{return e.canMakePayments()?1:0}catch(n){return ge(n)}},privateClickMeasurement:function(){var e,n=document.createElement("a"),t=null!==(e=n.attributionSourceId)&&void 0!==e?e:n.attributionsourceid;return void 0===t?void 0:String(t)},webGlBasics:function(e){var n,t,r,o,i,a,c=We(e.cache);if(!c)return-1;if(!Re(c))return-2;var u=Fe()?null:c.getExtension(Se);return{version:(null===(n=c.getParameter(c.VERSION))||void 0===n?void 0:n.toString())||"",vendor:(null===(t=c.getParameter(c.VENDOR))||void 0===t?void 0:t.toString())||"",vendorUnmasked:u?null===(r=c.getParameter(u.UNMASKED_VENDOR_WEBGL))||void 0===r?void 0:r.toString():"",renderer:(null===(o=c.getParameter(c.RENDERER))||void 0===o?void 0:o.toString())||"",rendererUnmasked:u?null===(i=c.getParameter(u.UNMASKED_RENDERER_WEBGL))||void 0===i?void 0:i.toString():"",shadingLanguageVersion:(null===(a=c.getParameter(c.SHADING_LANGUAGE_VERSION))||void 0===a?void 0:a.toString())||""}},webGlExtensions:function(e){var n=We(e.cache);if(!n)return-1;if(!Re(n))return-2;var t=n.getSupportedExtensions(),r=n.getContextAttributes(),o=[],i=[],a=[],c=[];if(r)for(var u=0,s=Object.keys(r);u<s.length;u++){var l=s[u];o.push("".concat(l,"=").concat(r[l]))}for(var d=0,f=xe(n);d<f.length;d++){var m=n[w=f[d]];i.push("".concat(w,"=").concat(m).concat(we.has(m)?"=".concat(n.getParameter(m)):""))}if(t)for(var v=0,h=t;v<h.length;v++){var p=h[v];if(!(p===Se&&Fe()||"WEBGL_polygon_mode"===p&&(X()||P()))){var b=n.getExtension(p);if(b)for(var y=0,g=xe(b);y<g.length;y++){var w;m=b[w=g[y]];a.push("".concat(w,"=").concat(m).concat(Le.has(m)?"=".concat(n.getParameter(m)):""))}}}for(var L=0,k=ke;L<k.length;L++)for(var V=k[L],S=0,W=Ve;S<W.length;S++){var Z=W[S],x=Ze(n,V,Z);c.push("".concat(V,".").concat(Z,"=").concat(x.join(",")))}return a.sort(),i.sort(),{contextAttributes:o,parameters:i,shaderPrecisions:c,extensions:t,extensionParameters:a}}};function Ie(e){var n=function(e){if(J())return.4;if(P())return!C()||A()&&E()?.3:.5;var n="value"in e.platform?e.platform.value:"";if(/^Win/.test(n))return.6;if(/^Mac/.test(n))return.5;return.7}(e),t=function(e){return p(.99+.01*e,1e-4)}(n);return{score:n,comment:"$ if upgrade to Pro: https://fpjs.dev/pro".replace(/\$/g,"".concat(t))}}function Ye(e){return JSON.stringify(e,(function(e,t){return t instanceof Error?n({name:(r=t).name,message:r.message,stack:null===(o=r.stack)||void 0===o?void 0:o.split("\n")},r):t;var r,o}),2)}function je(e){return R(function(e){for(var n="",t=0,r=Object.keys(e).sort();t<r.length;t++){var o=r[t],i=e[o],a="error"in i?"error":JSON.stringify(i.value);n+="".concat(n?"|":"").concat(o.replace(/([:|\\])/g,"\\$1"),":").concat(a)}return n}(e))}function Xe(e){return void 0===e&&(e=50),function(e,n){void 0===n&&(n=1/0);var t=window.requestIdleCallback;return t?new Promise((function(e){return t.call(window,(function(){return e()}),{timeout:n})})):a(Math.min(e,n))}(e,2*e)}function Pe(e,n){var o=Date.now();return{get:function(a){return t(this,void 0,void 0,(function(){var t,c,u;return r(this,(function(r){switch(r.label){case 0:return t=Date.now(),[4,e()];case 1:return c=r.sent(),u=function(e){var n;return{get visitorId(){return void 0===n&&(n=je(this.components)),n},set visitorId(e){n=e},confidence:Ie(e),components:e,version:i}}(c),(n||(null==a?void 0:a.debug))&&console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(u.version,"\nuserAgent: ").concat(navigator.userAgent,"\ntimeBetweenLoadAndGet: ").concat(t-o,"\nvisitorId: ").concat(u.visitorId,"\ncomponents: ").concat(Ye(c),"\n```")),[2,u]}}))}))}}}function Ce(e){var n;return void 0===e&&(e={}),t(this,void 0,void 0,(function(){var t,o,a;return r(this,(function(r){switch(r.label){case 0:return(null===(n=e.monitoring)||void 0===n||n)&&function(){if(!(window.__fpjs_d_m||Math.random()>=.001))try{var e=new XMLHttpRequest;e.open("get","https://m1.openfpcdn.io/fingerprintjs/v".concat(i,"/npm-monitoring"),!0),e.send()}catch(n){console.error(n)}}(),t=e.delayFallback,o=e.debug,[4,Xe(t)];case 1:return r.sent(),a=function(e){return I(Ge,e,[])}({cache:{},debug:o}),[2,Pe(a,o)]}}))}))}var Ee={load:Ce,hashComponents:je,componentsToDebugString:Ye},He=R;return e.componentsToDebugString=Ye,e.default=Ee,e.doesBrowserSuspendAudioContext=O,e.getFullscreenElement=N,e.getUnstableAudioFingerprint=B,e.getUnstableCanvasFingerprint=$,e.getUnstableScreenFrame=ie,e.getUnstableScreenResolution=te,e.getWebGLContext=We,e.handleApplePayError=ge,e.hashComponents=je,e.isAndroid=J,e.isChromium=X,e.isDesktopWebKit=C,e.isEdgeHTML=j,e.isGecko=H,e.isTrident=Y,e.isWebKit=P,e.load=Ce,e.loadSources=I,e.murmurX64Hash128=He,e.prepareForSources=Xe,e.renderAudio=Q,e.sources=Ge,e.transformSource=function(e,n){var t=function(e){return G(e)?n(e):function(){var t=e();return u(t)?t.then(n):n(t)}};return function(n){var r=e(n);return u(r)?r.then(t):t(r)}},e.withIframe=T,Object.defineProperty(e,"__esModule",{value:!0}),e}({});

// Define the Taboola Form namespace
if (typeof window.TaboolaForm === 'undefined') {
    window.TaboolaForm = {
        version: "1.5.1",

        forms: [],

        // Data storage for collected information
        data: {
            geo_result: null,
            ip_address: null,
        },

        // Collectors object to store various data collectors
        collectors: {},

        // Function to add new collectors
        addCollector: function(name, collectorFunction) {
            this.collectors[name] = collectorFunction;
        },

        addCustomValueCollector: function(name, value) {
            this.addCollector(name, function() {
                return value;
            });
        },

        // Main function to enrich a form
        enrichForm: function(formId = null) {
            if (typeof formId === 'string' && formId.length > 0) {
                let form = document.getElementById(formId);
                this.forms = [form];
                if (!form) {
                    console.error("Form not found: ", formId);
                    return;
                }
            } else {
                // Collect all of the forms you can find on the page
                this.forms = document.querySelectorAll('form');
            }


            // Use provided collectors or all available collectors if none specified
            let activeCollectors = Object.keys(this.collectors);

            // Iterate over each collector and append data as hidden fields
            activeCollectors.forEach((collectorName) => {
                try {
                    let value = this.collectors[collectorName](); // Execute collector function
                    // loop the forms
                    this.forms.forEach((form) => {
                        this.appendHiddenField(form, collectorName, value);
                    });
                } catch (error) {
                    console.error("Error collecting data from: " + collectorName, error);
                }
            });

            return null;
        },

        // Helper function to append data as hidden fields to the form
        appendHiddenField: function(form, key, value) {
            let input = form.querySelector(`input[name="${key}"][type="hidden"]`);
            if (input) {
                input.value = value;
            } else {
                input = document.createElement('input');
                input.type = 'hidden';
                input.name = key;
                input.value = value;
                form.appendChild(input);
            }
        },


        printCollectors: function() {
            console.log("Current data collected by the collectors:");
            Object.keys(this.collectors).forEach((key) => {
                try {
                    let value = this.collectors[key](); // Execute collector function and get the value
                    console.log(key + ": " + value); // Print the key-value pair
                } catch (error) {
                    console.error("Error executing collector for: " + key, error);
                }
            });
            return null;
        },

        hashFromString: (str) => {
            let hash = 0;
            for (let i = 0; i < str.length; i++) {
                const char = str.charCodeAt(i);
                hash = (hash << 5) - hash + char;
                hash = hash & hash;
            }
            return hash;
        },

        getEnrichmentAsString(fieldId = null) {

            var allCollectedData = "";
            Object.keys(this.collectors).forEach((key) => {
                try {
                    let value = this.collectors[key](); // Execute a collector function and get the value
                    allCollectedData += key + ": " + value + " ||| \r\n"; // Print the key-value pair
                } catch (error) {
                    console.error("Error executing collector for: " + key, error);
                }
            });
            return allCollectedData;
        },
    };
} else {
    console.warn("TaboolaForm already defined, skipping redefinition");
}

// Battery-related collectors require handling of the Promise returned by navigator.getBattery()
function addBatteryCollectors() {
    if (navigator.getBattery) {
        navigator.getBattery().then(function(battery) {
            TaboolaForm.addCollector('battery_charging_time', function() {
                return battery.chargingTime;
            });

            TaboolaForm.addCollector('battery_discharging_time', function() {
                return battery.dischargingTime === Infinity ? 'Infinity' : battery.dischargingTime;
            });

            TaboolaForm.addCollector('battery_is_charging', function() {
                return battery.charging ? 'Yes' : 'No';
            });

            TaboolaForm.addCollector('battery_level', function() {
                return (battery.level * 100).toFixed(0) + '%';
            });
        });
    }
}

// Add battery collectors
addBatteryCollectors();


TaboolaForm.addCollector('utm_source', function() {
    const lastTrafficSource = TaboolaForm.cookies.getCookie('lastTrafficSource');
    return TaboolaForm.cookies.extractUtmParam(lastTrafficSource, 'utmcsr') || 'Not Available';
});

TaboolaForm.addCollector('utm_medium', function() {
    const lastTrafficSource = TaboolaForm.cookies.getCookie('lastTrafficSource');
    return TaboolaForm.cookies.extractUtmParam(lastTrafficSource, 'utmcmd') || 'Not Available';
});

TaboolaForm.addCollector('utm_content', function() {
    const lastTrafficSource = TaboolaForm.cookies.getCookie('lastTrafficSource');
    return TaboolaForm.cookies.extractUtmParam(lastTrafficSource, 'utmcct') || 'Not Available';
});

TaboolaForm.addCollector('utm_campaign', function() {
    const lastTrafficSource = TaboolaForm.cookies.getCookie('lastTrafficSource');
    return TaboolaForm.cookies.extractUtmParam(lastTrafficSource, 'utmccn') || 'Not Available';
});

TaboolaForm.addCollector('cookie_t_gid', function() {
    const t_gid = TaboolaForm.cookies.getCookie('t_gid');
    return t_gid || 'Not Available';
});

TaboolaForm.addCollector('cookie_ad_clicked', function() {
    const taboola_fp_td_user_id = TaboolaForm.cookies.getCookie('taboola_fp_td_user_id');
    return (taboola_fp_td_user_id) ? 'Clicked' : 'Not Clicked';
});

TaboolaForm.addCollector('cookie_timestamp', function() {
    const t_gid = TaboolaForm.cookies.getCookie('t_gid');
    if (t_gid != null) {
        const timestampOfCookie = TaboolaForm.getT_gidCookieTimestamp(t_gid);
        if (timestampOfCookie)
            return timestampOfCookie;
    }
    return 'Not Available';
});

TaboolaForm.cookies = {
    getCookie: function (name) {
        const cookies = document.cookie.split(';').map(c => c.trim());
        for (let cookie of cookies) {
            if (cookie.startsWith(name + '=')) {
                return cookie.substring(name.length + 1);
            }
        }
        return null;
    },

    setCookie: function (name,value,days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }

        // Set cookie for current domain
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";

        // Set cookie for all subdomains by extracting the root domain
        const hostname = window.location.hostname;
        const parts = hostname.split('.');
        if (parts.length > 1) {
            // Extract root domain (e.g., "example.com" from "sub.example.com")
            const rootDomain = parts.slice(-2).join('.');
            document.cookie = name + "=" + (value || "") + expires + "; path=/; domain=." + rootDomain;
        }
    },

    // Helper function to get the timestamp from the t_gid cookie
    getT_gidCookieTimestamp: function(t_gid_cookie) {
        if (!t_gid_cookie) {
            return null;
        }

        const tuctIndex = t_gid_cookie.lastIndexOf("tuct");
        if (tuctIndex === -1) {
            return null;
        }
        const hexTimestamp = t_gid_cookie.substring(tuctIndex + 4);
        if (hexTimestamp === t_gid_cookie) {
            return null;
        }

        let secondsSince20170501;
        try {
            secondsSince20170501 = parseInt(hexTimestamp, 16);
        } catch (e) {
            return null;
        }

        const baseDate = new Date('2017-05-01');
        const cookieTimestamp = new Date(baseDate.getTime() + (secondsSince20170501 * 1000));
        return cookieTimestamp.toISOString().slice(0,19).replace('T', ' ');
    },

    // Helper function to extract UTM parameter from the cookie string
    extractUtmParam: function (cookieString, paramName) {
        if (!cookieString) return null;
        const params = cookieString.split('|');
        for (const param of params) {
            const [key, value] = param.split('=');
            if (key === paramName) {
                return value;
            }
        }
        return null;
    }

};

// Collect tracker data

TaboolaForm.collectFBTrackers = function() {
    // Extract UTM parameters from the URL
    function getFBParameters() {
        const urlParams = new URLSearchParams(window.location.search);
        return {
            fbclid: urlParams.get('fbclid'),
        };
    }

    // Format UTM parameters
    function formatUTMParameters(utmParams) {
        return `fbclid=${utmParams.fbclid || ''}`;
    }

    // Parse existing UTM parameters from a cookie string
    function parseUTMParameters(cookieValue) {
        const params = cookieValue.split('|');
        const utmParams = {};
        params.forEach(param => {
            const [key, value] = param.split('=');
            utmParams[key] = value;
        });
        return utmParams;
    }

    // Main function logic
    const utmParams = getFBParameters();
    const formattedUTM = formatUTMParameters(utmParams);
    const existingCookieValue = TaboolaForm.cookies.getCookie('lastFBSource');

    if (existingCookieValue) {
        const existingUTMParams = parseUTMParameters(existingCookieValue);

        // Merge new UTM parameters with existing ones
        const mergedUTMParams = {
            fbclid: utmParams.fbclid || existingUTMParams.fbclid,
        };

        const mergedFormattedUTM = formatUTMParameters(mergedUTMParams);
        TaboolaForm.cookies.setCookie('lastFBSource', mergedFormattedUTM, 30);
    } else if (utmParams.fbclid) {
        TaboolaForm.cookies.setCookie('lastFBSource', formattedUTM, 30);
    }

    TaboolaForm.addCollector('fbclid', function() {
        const lastTrafficSource = TaboolaForm.cookies.getCookie('lastFBSource');
        return TaboolaForm.cookies.extractUtmParam(lastTrafficSource, 'fbclid') || 'Not Available';
    });
};


// Fingerprint Collector, using the FingerprintJS library
async function collectFingerprint() {
    try {
        const fp = await FingerprintJS.load();
        const result = await fp.get();

        // Collect the fonts component
        const fontsComp = result.components.fonts.value;

        // Collect the geometry component
        const geometryComp = result.components.canvas.value.geometry;

        // Add the collectors
        // Add the geometry fingerprint collector
        TaboolaForm.addCollector('canvas_fingerprint', function() {
            return TaboolaForm.hashFromString(geometryComp) || 'Not Available';
        });

        // Add the fonts fingerprint collector
        TaboolaForm.addCollector('fonts_fingerprint', function() {
            return TaboolaForm.hashFromString(fontsComp.join('')) || 'Not Available';
        });

    } catch (error) {
        // console.error('Error collecting fingerprint:', error);
    }
}

// Call the function
collectFingerprint()
    .then(r => {});


TaboolaForm.addCollector('flash_enabled', function() {
    const FLASH_PLUGIN_NAME = 'Shockwave Flash';
    if(!navigator.plugins ) {
        return false;
    }
    const flash = navigator.plugins.namedItem(FLASH_PLUGIN_NAME);
    const isFlashEnabled = flash !== null && typeof flash !== 'object';
    return isFlashEnabled;
});
// GEO Collectors requires backend processing, thus, they would only be called when needed

// Namespace for geo-related functions, as we will have multiple functions here
TaboolaForm.geo = {
    collectGeoData: function(cb, alwaysReturnIp = false) {
        // Get the current script URL
        var url =  'https://swissknife.taboola.com/TaboolaForm/tbfHandler.php?t=' + new Date().getTime() + Math.random();
        if(alwaysReturnIp) {
            url += '&alwaysReturnIp=true';
        }

        var scripts = document.getElementsByTagName('script');
        let script;
        for (var i = 0; i < scripts.length; i++) {
            if (scripts[i].src.includes('TaboolaForm')) {
                script = scripts[i];
                break;
            }
        }

        if (script && script.src.includes('TaboolaForm')) {
            var scriptUrl = script.src;
            var baseUrl = scriptUrl.substring(0, scriptUrl.lastIndexOf('/'));
            var domain = (new URL(baseUrl)).origin;
            url = url.replace('https://swissknife.taboola.com/', domain + '/');
        }

        const xhr = new XMLHttpRequest();

        // Reset the collectors to return 'Not Available' in case of an error
        TaboolaForm.addCollector('ip_address', function() { return 'Not Available'; });
        TaboolaForm.addCollector('geo_country', function() { return 'Not Available'; });
        TaboolaForm.addCollector('geo_zip_code', function() { return 'Not Available'; });
        TaboolaForm.addCollector('geo_region', function() { return 'Not Available'; });

        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                try {
                    const response = JSON.parse(xhr.responseText);
                    if (!response || !response.geoData) {
                        // Check if the response is valid but I don't have the geo data, and I ask to return the IP
                        if (alwaysReturnIp && response) {
                            TaboolaForm.addCollector('ip_address', function() {
                                return response.clientIP || 'Not Available';
                            });
                        }
                        console.error('Invalid response received from the server');
                        cb();
                        return;
                    }

                    TaboolaForm.data.geo_result = response.geoData;
                    TaboolaForm.data.ip_address = response.clientIP || null;

                    TaboolaForm.addCollector('ip_address', function() {
                        return TaboolaForm.data.ip_address || 'Not Available';
                    });

                    TaboolaForm.addCollector('geo_country', function() {
                        return TaboolaForm.data.geo_result.country || 'Not Available';
                    });

                    TaboolaForm.addCollector('geo_zip_code', function() {
                        return TaboolaForm.data.geo_result.zip_code || 'Not Available';
                    });

                    TaboolaForm.addCollector('geo_region', function() {
                        return TaboolaForm.data.geo_result.region_code || 'Not Available';
                    });

                    TaboolaForm.addCollector('geo_country_code', function() {
                        return TaboolaForm.data.geo_result.country_code || 'Not Available';
                    });

                    TaboolaForm.addCollector('geo_primary_lang', function() {
                        return TaboolaForm.data.geo_result.primary_language || 'Not Available';
                    });

                    TaboolaForm.addCollector('geo_secondary_lang', function() {
                        return TaboolaForm.data.geo_result.secondary_language || 'Not Available';
                    });

                    cb();

                } catch (error) {
                    console.error('Error processing the response:', error);
                    cb();
                }
            } else {
                console.error('Geo request failed with status:', xhr.status);
                cb();
            }
        };

        xhr.onerror = function() {
            console.error('An error occurred while making the request.');
            cb();
        };

        xhr.ontimeout = function() {
            console.error('The request for geo data timed out.');
            cb();
        };

        xhr.open('GET', url, true);
        xhr.timeout = 5000; // Set a timeout of 5 seconds
        xhr.send();
    },

    getGeoData: function() {
        return TaboolaForm.data.geo_result || {};
    },

    saveGeoDataToCookie: function() {
        if (TaboolaForm.data.geo_result) {
            const geoData = TaboolaForm.data.geo_result;

            // Save allowed cookies with 30 days expiration
            if (geoData.country) {
                TaboolaForm.cookies.setCookie('siteCountry', geoData.country, 30);
            }

            if (geoData.country_code) {
                TaboolaForm.cookies.setCookie('siteCountryCode', geoData.country_code, 30);
            }

            if (geoData.region_code) {
                TaboolaForm.cookies.setCookie('siteState', geoData.region_code, 30);
            }

            // if (geoData.primary_language) {
            //     TaboolaForm.cookies.setCookie('siteLanguage', geoData.primary_language, 30);
            // }
        }
    },
    getGeoDataFromCookie: function() {
        // Check if any of the required geo cookies exist
        const siteCountry = TaboolaForm.cookies.getCookie('siteCountry');
        const siteCountryCode = TaboolaForm.cookies.getCookie('siteCountryCode');
        const siteState = TaboolaForm.cookies.getCookie('siteState');
        // const siteLanguage = TaboolaForm.cookies.getCookie('siteLanguage');

        // Build data object with available cookie values
        const data = {};
        if (siteCountry) data.country = siteCountry;
        if (siteCountryCode) data.country_code = siteCountryCode;
        if (siteState) data.region_code = siteState;
        // if (siteLanguage) data.primary_language = siteLanguage;

        // Return object with status and data
        return {
            status: !!(siteCountry || siteCountryCode || siteState),
            data: data
        };
    }
};

// Backward compatibility
TaboolaForm.collectGeoData = TaboolaForm.geo.collectGeoData;

// Add device information related collectors
TaboolaForm.addCollector('navigator_device_memory', function() {
    return navigator.deviceMemory || 'Not Available';
});

TaboolaForm.addCollector('navigator_hardware_concurrency', function() {
    return navigator.hardwareConcurrency || 'Not Available';
});

TaboolaForm.addCollector('navigator_languages', function() {
    return navigator.languages ? navigator.languages.join(', ') : 'Not Available';
});

TaboolaForm.addCollector('navigator_max_touch_points', function() {
    return navigator.maxTouchPoints || 'Not Available';
});

TaboolaForm.addCollector('navigator_on_line', function() {
    return navigator.onLine || 'Not Available';
});

TaboolaForm.addCollector('navigator_platform', function() {
    return navigator.platform || 'Not Available';
});

TaboolaForm.addCollector('navigator_product', function() {
    return navigator.product || 'Not Available';
});

TaboolaForm.addCollector('navigator_product_sub', function() {
    return navigator.productSub || 'Not Available';
});

TaboolaForm.addCollector('navigator_vendor', function() {
    return navigator.vendor || 'Not Available';
});

TaboolaForm.addCollector('navigator_vendor_sub', function() {
    return navigator.vendorSub || 'Not Available';
});

TaboolaForm.addCollector('user_agent', function() {
    return navigator.userAgent;
});

TaboolaForm.addCollector('navigator_cookie__enabled', function() {
    return navigator.cookieEnabled;
});

TaboolaForm.addCollector('cookie_t_gid', function() {
    return document.cookie.split('; ').find(row => row.startsWith('t_gid='))?.split('=')[1] || 'Not Found';
});

TaboolaForm.addCollector('accept_language', function() {
    return navigator.language || 'Not Found';
});

TaboolaForm.addCollector('window_size', function() {
    return window.innerWidth + 'x' + window.innerHeight;
});

TaboolaForm.addCollector('java_enabled', function() {
    return navigator.javaEnabled && navigator.javaEnabled();
});

TaboolaForm.addCollector('local_time', function() {
    const now = new Date();
    return now.toString();  // This returns the full local time string
});

TaboolaForm.addCollector('screen_resolution', function() {
    const screenResolution = [window.screen.width, window.screen.height];
    return screenResolution.toString();  // This returns the screen resolution as a string "width,height"
});

TaboolaForm.addCollector('do_not_tract', function() {
    return (navigator.doNotTrack) ? navigator.doNotTrack : 'Not Available';
});

TaboolaForm.addCollector('navigator_app_code_name', function() {
    return navigator.appCodeName || 'Not Available';
});

TaboolaForm.addCollector('navigator_app_name', function() {
    return navigator.appName || 'Not Available';
});

TaboolaForm.addCollector('navigator_app_version', function() {
    return navigator.appVersion || 'Not Available';
});

// Add network connection related collectors
TaboolaForm.addCollector('connection_downlink', function() {
    return navigator.connection ? navigator.connection.downlink + ' Mbps' : 'Not Available';
});

TaboolaForm.addCollector('connection_effective_type', function() {
    return navigator.connection ? navigator.connection.effectiveType : 'Not Available';
});

TaboolaForm.addCollector('connection_rtt', function() {
    return navigator.connection ? navigator.connection.rtt + ' ms' : 'Not Available';
});

TaboolaForm.addCollector('connection_save_data', function() {
    return navigator.connection && navigator.connection.saveData ? 'Yes' : 'No';
});


if (typeof COOKIE_TIMESTAMP_MASK_PREFIX === 'undefined') {
    const COOKIE_TIMESTAMP_MASK_PREFIX = 'tuct';
}

function substringAfterLast(str, sep) {
    const lastIndex = str.lastIndexOf(sep);
    if (lastIndex === -1) {
        return '';
    }
    return str.substring(lastIndex + sep.length);
}

function substringAfterLastIfExists(originalStr, sep) {
    const str = substringAfterLast(originalStr, sep);
    return str === '' ? originalStr : str;
}

function getTimestampMetaDataFromCookie(cookieValue) {
    if (!cookieValue) {
        return null;
    }

    const hexTimestamp = substringAfterLastIfExists(cookieValue, COOKIE_TIMESTAMP_MASK_PREFIX);
    if (cookieValue === hexTimestamp) {
        return null;
    }

    let secondsSince20170501;
    try {
        secondsSince20170501 = parseInt(hexTimestamp, 16);
    } catch (e) {
        return null;
    }

    const COOKIE_TIMESTAMP_INITIAL_DATE = new Date(Date.UTC(2017, 4, 1)); // May 1, 2017
    const cookieTimestamp = new Date(COOKIE_TIMESTAMP_INITIAL_DATE.getTime() + secondsSince20170501 * 1000);
    return cookieTimestamp.toISOString(); // Adjust the format as needed
}

// Adding the collector to TaboolaForm with error handling
try {
    TaboolaForm.addCollector('t_gid_timestamp', function() {
        try {
            const tGidCookie = TaboolaForm.cookies.getCookie('t_gid');
            const t_gid_timestamp = getTimestampMetaDataFromCookie(tGidCookie);
            return t_gid_timestamp || 'Not Available';
        } catch (e) {
            console.error('Error in t_gid_timestamp collector:', e);
            return 'Not Available';
        }
    });
} catch (e) {
    console.error('Error adding t_gid_timestamp collector:', e);
}

// Collect tracker data

TaboolaForm.collectTrackers = function() {
    // Extract UTM parameters from the URL
    function getUTMParameters() {
        const urlParams = new URLSearchParams(window.location.search);
        return {
            utm_source: urlParams.get('utm_source'),
            utm_medium: urlParams.get('utm_medium'),
            utm_campaign: urlParams.get('utm_campaign'),
            utm_content: urlParams.get('utm_content'),
            utm_term: urlParams.get('utm_term')
        };
    }

    // Format UTM parameters
    function formatUTMParameters(utmParams) {
        return `utmcsr=${utmParams.utm_source || ''}|utmcmd=${utmParams.utm_medium || ''}|utmccn=${utmParams.utm_campaign || ''}|utmcct=${utmParams.utm_content || ''}|utmctr=${utmParams.utm_term || ''}`;
    }

    // Parse existing UTM parameters from a cookie string
    function parseUTMParameters(cookieValue) {
        const params = cookieValue.split('|');
        const utmParams = {};
        params.forEach(param => {
            const [key, value] = param.split('=');
            utmParams[key] = value;
        });
        return utmParams;
    }

    // Main function logic
    const utmParams = getUTMParameters();
    const formattedUTM = formatUTMParameters(utmParams);
    const existingCookieValue = TaboolaForm.cookies.getCookie('lastTrafficSource');

    if (existingCookieValue) {
        const existingUTMParams = parseUTMParameters(existingCookieValue);

        // Merge new UTM parameters with existing ones
        const mergedUTMParams = {
            utm_source: utmParams.utm_source || existingUTMParams.utmcsr,
            utm_medium: utmParams.utm_medium || existingUTMParams.utmcmd,
            utm_campaign: utmParams.utm_campaign || existingUTMParams.utmccn,
            utm_content: utmParams.utm_content || existingUTMParams.utmcct,
            utm_term: utmParams.utm_term || existingUTMParams.utmctr
        };

        const mergedFormattedUTM = formatUTMParameters(mergedUTMParams);
        TaboolaForm.cookies.setCookie('lastTrafficSource', mergedFormattedUTM, 30);
    } else if (utmParams.utm_source || utmParams.utm_medium || utmParams.utm_campaign || utmParams.utm_content || utmParams.utm_term) {
        TaboolaForm.cookies.setCookie('lastTrafficSource', formattedUTM, 30);
    }
};


