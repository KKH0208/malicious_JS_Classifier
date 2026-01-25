/* 元のURL: https://g.page */
function COa(){var a=document.body||document.documentElement;a:{var b=un(a);if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,null))){b=b.direction||b.getPropertyValue("direction")||"";break a}b=""}return"rtl"==(b||(a.currentStyle?a.currentStyle.direction:null)||a.style&&a.style.direction)}
function SM(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function DOa(a,b){return a.classList?a.classList.contains(b):Sb(a.classList?a.classList:SM(a).match(/\S+/g)||[],b)}
function EOa(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});
return function(c){return b[c.find(function(e){return e in b})]||""}}
function FOa(){var a=yb();if(Fb()){var b=/rv: *([\d\.]*)/.exec(a);if(b&&b[1])a=b[1];else{b="";var c=/MSIE +([\d\.]+)/.exec(a);if(c&&c[1])if(a=/Trident\/(\d.\d)/.exec(a),c[1]=="7.0")if(a&&a[1])switch(a[1]){case "4.0":b="8.0";break;case "5.0":b="9.0";break;case "6.0":b="10.0";break;case "7.0":b="11.0"}else b="7.0";else b=c[1];a=b}return a}c=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g");b=[];for(var e;e=c.exec(a);)b.push([e[1],e[2],e[3]||void 0]);a=EOa(b);return Eb()?a(["Version","Opera"]):
(Db()?0:Bb("Edge"))?a(["Edge"]):Faa()?a(["Edg"]):Bb("Silk")?a(["Silk"]):Ib()?a(["Chrome","CriOS","HeadlessChrome"]):(a=b[2])&&a[1]||""}
function TM(a){this.Aa=se(a)}
u(TM,eh);n=TM.prototype;n.getAnnouncements=function(){return Nf(this,44)};
n.getSelected=function(){return Nf(this,57)};
n.setSelected=function(a){return ag(this,57,a)};
n.getCaseId=function(){return Nf(this,68)};
n.getFinished=function(){return Nf(this,70)};
n.getLastUpdated=function(){return Nf(this,73)};
n.Ba=wi([0,x,-75]);function GOa(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function HOa(a,b){a.classList?a.classList.remove(b):DOa(a,b)&&GOa(a,Array.prototype.filter.call(a.classList?a.classList:SM(a).match(/\S+/g)||[],function(c){return c!=b}).join(" "))}
;var IOa=/^[6-9]$/,JOa=/<\/?(?:b|em)>/gi;function UM(a){this.o=a}
UM.prototype.contains=function(a){return a in this.o};
UM.prototype.getBoolean=function(a){return!!this.o[a]};
UM.prototype.getString=function(a){return this.o[a]||""};
UM.prototype.getObject=function(a){return this.o[a]||null};
var VM=new UM({});function WM(a,b,c,e,f,h){this.ua=a;this.ma=b;this.o=c;this.qa=e;this.va=f;this.ya=h||VM;this.oa=!1;switch(this.qa){case 0:case 32:case 38:case 400:case 407:case 35:case 33:case 41:case 34:case 44:case 45:case 40:case 46:case 56:case 30:case 411:case 410:case 71:case 42:this.oa=!0}}
WM.prototype.getIndex=function(){return this.o};
WM.prototype.getType=function(){return this.qa};
WM.prototype.getParameters=function(){return this.ya};var KOa=/^\s/,LOa=/\s+/,MOa=/\s+/g,NOa=/^\s+|\s+$/g,OOa=/^\s+$/,POa=/<[^>]*>/g,QOa=/&nbsp;/g,ROa=/&#x3000;/g,XM=[/&/g,/&amp;/g,/</g,/&lt;/g,/>/g,/&gt;/g,/"/g,/&quot;/g,/'/g,/&#39;/g,/{/g,/&#123;/g],YM=document.getElementsByTagName("head")[0],SOa=0,TOa=1;function UOa(a){var b={};if(a)for(var c=0;c<a.length;++c)b[a[c]]=!0;return b}
function ZM(a,b){function c(){return b}
b===void 0&&(b=a);return{getPosition:c,XJ:function(){return a},
cS:c,zpa:function(){return a<b},
equals:function(e){return e&&a==e.XJ()&&b==e.cS()}}}
function $M(a,b,c,e){if(b==null||b===""){if(!e)return;b=""}c.push(a+"="+encodeURIComponent(String(b)))}
function aN(a){return!!a&&!OOa.test(a)}
function bN(a){for(var b=XM.length,c=0;c<b;c+=2)a=a.replace(XM[c],XM[c+1].source);return a}
function cN(a){for(var b=XM.length,c=0;c<b;c+=2)a=a.replace(XM[c+1],XM[c].source);a=a.replace(QOa," ");return a.replace(ROa,"\u3000")}
function dN(a,b){var c=a;return c&&(c.indexOf(" ")>-1||LOa.test(c))?(a=a.replace(MOa," "),a.replace(b?NOa:KOa,"")):a}
function eN(a,b,c){c&&(a=a.toLowerCase(),b=b.toLowerCase());return b.length<=a.length&&a.substring(0,b.length)==b}
function VOa(){}
function WOa(a){var b=XOa;if(b.indexOf)return b.indexOf(a);for(var c=b.length,e=0;e<c;++e)if(b[e]===a)return e;return-1}
function YOa(a,b){return b.getPriority()-a.getPriority()}
function ZOa(a){var b={},c;for(c in a)b[c]=a[c];return b}
;function fN(a,b){this.o=a;this.Fa=b;this.ma=(SOa++).toString(36);this.Ha=this.o.toLowerCase();this.Ca=dN(this.Ha);this.va={};this.oa={};this.qa=this.ua=!1;this.ya=1}
fN.prototype.getId=function(){return this.ma};
function $Oa(a){a=parseInt(a.ma,36);return isNaN(a)?-1:a}
fN.prototype.getParameters=function(){return this.va};
fN.prototype.getTimestamp=function(){return this.Ia};
fN.prototype.Tl=function(){if(!this.ua){this.Ia=Date.now();if(!("cp"in this.oa)){var a=this.Fa.getPosition();gN(this,"cp",a,!0)}gN(this,"gs_id",this.ma);a=this.oa;var b=[],c;for(c in a)$M(c,a[c],b);b.join("&");this.ua=!0}};
function gN(a,b,c,e){a.ua||(a.va[b]=c,e&&(a.oa[b]=c))}
;function hN(a,b,c,e,f){this.oa=a;this.o=b;this.ma=c;this.va=e;this.qa=f;this.ua=!0;this.o?this.o.length&&this.o[0].getType()==33&&(this.qa=this.ua=!1):this.o=[];this.ma?this.ma.getObject("t"):this.ma=VM}
hN.prototype.getRequest=function(){return this.oa};
hN.prototype.getParameters=function(){return this.ma};
hN.prototype.getType=function(){return this.ua};function aPa(){}
n=aPa.prototype;n.search=function(){};
n.redirect=function(){};
n.RC=function(){};
n.cJ=function(){};
n.dJ=function(){};
n.eJ=function(){};
n.lL=function(){};
n.fJ=function(){};function iN(){this.ma={};this.o={}}
iN.prototype.set=function(a,b){this.ma[a]=b};
iN.prototype.has=function(a){return!!this.ma[a]};
function jN(a,b,c){b in a.o||(a.o[b]=[]);a.o[b].push(c)}
;function kN(a,b,c,e,f,h){this.ua=a;this.Fa=b;this.Ha=c;this.va=e;this.ya=f;this.qa=h;this.Ca={};this.o={};this.ma=[];this.oa=!1;a=this.Fa;b=a.ma;for(var k in b)if(c=e=k,e=b[e])this.Ca[c]=e,this.ma.push(e);k=a.o;for(var l in k){a=b=l;c=k[b];e=this.o[a]||[];for(f=0;f<c.length;++f)if(b=c[f])e.push(b),this.ma.push(b);this.o[a]=e}this.ma.sort(bPa);for(k=0;l=this.ma[k++];)l.setAttributes(this.Ha,this.va);this.ua.lL(this.va);this.va.dQ();for(k=0;l=this.ma[k++];)l.yf(this);for(k=0;l=this.ma[k++];)l.setup(this.qa);
for(k=0;l=this.ma[k++];)l.ox(this.qa);for(k=0;l=this.ma[k++];)l.activate(this.qa);this.oa=!0}
var XOa=[127,149,134,494,123,121,126,553,118,115,128,160,173,119,116,152,153,129,120,374,124,158,155,131,130,147,570,141,142,137,143,138,144,139,140,135,136];kN.prototype.activate=function(a){this.deactivate();for(var b,c=0;b=this.ma[c++];)b.activate(a);this.oa=!0};
kN.prototype.deactivate=function(){if(this.oa){for(var a,b=0;a=this.ma[b++];)a.deactivate();this.oa=!1}};
kN.prototype.isActive=function(){return this.oa};
kN.prototype.get=function(a){return this.Ca[a]};
function bPa(a,b){a=WOa(a.getType());b=WOa(b.getType());return a<0?1:b<0?-1:a-b}
;function lN(a){this.ma=a}
n=lN.prototype;n.setAttributes=function(){};
n.yf=function(){};
n.setup=function(){};
n.ox=function(){};
n.activate=function(){};
n.getType=function(){return this.ma};
n.deactivate=function(){};function mN(a){this.qa=a}
mN.prototype.getType=function(){return this.qa};
mN.prototype.Lh=function(){return!0};function nN(a){this.ma=152;this.qa=a}
jb(nN,lN);nN.prototype.o=VOa;nN.prototype.oa=function(a){return a.ma};function cPa(){return xb&&zb?zb.mobile:!(xb&&zb?!zb.mobile&&(Bb("iPad")||Bb("Android")||Bb("Silk")):Bb("iPad")||Bb("Android")&&!Bb("Mobile")||Bb("Silk"))&&(Bb("iPod")||Bb("iPhone")||Bb("Android")||Bb("IEMobile"))}
;var oN=Fb(),pN;if(pN=oN)pN=Baa(FOa(),10)>=0;var dPa=pN,qN=Laa(),rN=Eb(),sN=Vb(),ePa=Hb(),fPa=Ib();cPa()&&Hb();var gPa=Kb();Gaa();var hPa=Ob();Pb();var tN=cPa();var iPa={rtl:"right",ltr:"left"};function jPa(a,b){try{if(a.setSelectionRange)a.setSelectionRange(b,b);else if(a.createTextRange){var c=a.createTextRange();c.collapse(!0);c.moveStart("character",b);c.select()}}catch(e){}}
function uN(a){for(var b=0,c=0;a;){b+=a.offsetTop;c+=a.offsetLeft;try{a=a.offsetParent}catch(e){a=null}}return{JA:b,Dm:c}}
function kPa(a){try{return vN(a).activeElement==a}catch(b){}return!1}
function wN(a,b){a=document.createElement(a);b&&(a.className=b);return a}
function xN(a){return wN("div",a)}
function yN(a,b){a.innerHTML!=b&&Ml(a,ao(b))}
function lPa(a,b){a.dir!=b&&(a.dir=b,a.style.textAlign=iPa[b])}
function mPa(a,b){if(a=a.getElementsByTagName("input"))for(var c,e=0;c=a[e++];)if(c.name==b&&c.type.toLowerCase()!="submit")return c;return null}
function nPa(a){var b=a||window;a=b.document;var c=b.innerWidth;b=b.innerHeight;if(!c){var e=a.documentElement;e&&(c=e.clientWidth,b=e.clientHeight);c||(c=a.body.clientWidth,b=a.body.clientHeight)}return{jt:c,qK:b}}
function vN(a){return a?a.ownerDocument||a.document:window.document}
function zN(a){return a?(a=vN(a),a.defaultView||a.parentWindow):window}
;function AN(a){this.qa=79;this.o=this.ma=this.oa=null;this.ua=a;this.oa=xN();this.oa.tabIndex=0;this.oa.classList.add("ghp-autocomplete-single-item");a=xN("ghp-autocomplete-icon");this.ma=xN();a.appendChild(this.ma);this.oa.appendChild(a);this.o=xN();this.oa.appendChild(this.o)}
u(AN,mN);AN.prototype.getRootElement=function(){return this.oa};
AN.prototype.Lh=function(){return!0};
AN.prototype.render=function(a,b,c){if(c){var e=c.getString("t")||"";b=c.getObject("p");a=c.getString("l")||a;if(e=="ADWORDS_NAVI")this.ma.className="action-adwords-navi-icon",Ml(this.o,cm(a)),this.o.className="ghp-autocomplete-label";else if(e=="GUIDED_HELP")this.ma.className="action-guided-help-icon",Ml(this.o,cm(a)),this.o.className="ghp-autocomplete-label";else if(e=="HELP_ARTICLE")this.ma.className="help-article-icon",Ml(this.o,cm(a)),BN(this,CN(a,Nf(this.ua,60)),b),this.o.className="ghp-autocomplete-label";
else if(e=="HELP_ACTION"){if(this.ma.className="action-command-icon",Ml(this.o,cm(a)),this.o.className="ghp-autocomplete-label action-command-title",b){c={};b.result&&(c=JSON.parse(b.result));if(c.type==="JS_CALLBACK")c={type:c.type,jsCallback:{closePanel:(c.jsCallback||{}).closePanel==="true"}};else if(c.type==="URL_NAVIGATION_ACTION")e=c.urlNavigationDefinition,c={type:c.type,urlNavigationDefinition:{createNewTab:e.createNewTab==="true",url:e.url}};else throw Error("Invalid help action result type: "+
c.type);c=c||{};c.type=="URL_NAVIGATION_ACTION"&&$a("urlNavigationDefinition.createNewTab",c)&&(this.o.className+=" ghp-autocomplete-externalLink",BN(this,CN(a,Nf(this.ua,46)),b))}}else e=="SUPPORT_THREAD"?(this.ma.className="support-forum-icon",this.o.textContent=a,BN(this,CN(a,Nf(this.ua,61)),b),this.o.className="ghp-autocomplete-label"):e=="AUTHORABLE_WORKFLOW"?(this.ma.className="authorable-workflow-icon",this.o.textContent=a,BN(this,CN(a,Nf(this.ua,62)),b),this.o.className="ghp-autocomplete-label"):
e=="HC_ROOT"?(this.ma.className="helpcenter-root-icon",this.o.textContent=a,BN(this,CN(a,Nf(this.ua,35)),b),this.o.className="ghp-autocomplete-label"):e=="HC_COMMUNITY"?(this.ma.className="forum-homepage-icon",this.o.textContent=a,this.o.className="ghp-autocomplete-label"):e=="NEO_SYMPTOM"&&document.querySelector('[data-page-data-key="msf__ras"]').innerText==="true"&&(this.ma.className="help-symptom-icon",this.o.textContent=a,this.o.className="ghp-autocomplete-label")}else this.ma.className="search-query-icon",
Ml(this.o,cm(a)),BN(this,CN(b,Nf(this.ua,66))),this.o.className="ghp-autocomplete-label"};
function CN(a,b){return b?a+" ("+b+")":a}
function BN(a,b,c){(c=c===void 0?null:c)&&c.url&&(b="Link, "+b,a.o.setAttribute("i18n-aria-label",b));a.o.setAttribute("aria-label",b);a.o.setAttribute("aria-hidden","true");b=a.oa.id+"_label";a.o.setAttribute("id",b);a.oa.setAttribute("aria-labelledby",b)}
;function DN(a){nN.call(this,79);this.ua=a}
u(DN,nN);DN.prototype.createTemplate=function(){return new AN(this.ua)};
DN.prototype.render=function(a,b){b.render(a.ua,a.ma,a.getParameters())};
DN.prototype.o=function(a,b,c){c.search(b.ma,1)};
DN.prototype.oa=function(a,b){return a.getParameters().getString("t")=="GUIDED_HELP"?b:a.ma};function EN(a){nN.call(this,0);this.ua=a}
u(EN,nN);EN.prototype.createTemplate=function(){return new AN(this.ua)};
EN.prototype.render=function(a,b){b.render(a.ua,a.ma)};
EN.prototype.o=function(a,b,c){c.search(b.ma,1)};function FN(a){this.ma=156;this.o=a}
u(FN,lN);FN.prototype.getPriority=function(){return 28};function oPa(a){var b=Rb(a,function(c){return c.getParameters().getString("t")=="HELP_ACTION"});
a=Rb(a,function(c){return c.getParameters().getString("t")!="HELP_ACTION"});
return b.concat(a)}
function GN(a,b,c){this.ma=122;this.ua=a;this.oa=b||[];this.o=c||null}
u(GN,lN);GN.prototype.getPriority=function(){return 12};
GN.prototype.edit=function(a){var b=Rb(a.o,function(c){if(!c)return!1;c=c.getParameters().getString("t");return!c||this.oa.indexOf(c)>=0},this);
this.o&&(b=Rb(b,function(c){var e=c.getParameters().getObject("p")||{};return this.o.filter(c.getParameters().getString("t"),e)},this));
b=oPa(b);b=Jaa(b,function(c,e){return new WM(c.ua,c.ma,e,c.getType(),c.va||[],c.getParameters())},this);
b=b.slice(0,this.ua);return new hN(a.getRequest(),b,a.getParameters(),a.va,a.qa)};function pPa(){this.ma=157}
u(pPa,lN);function HN(){this.ma=149;this.ua=YM;this.o={}}
u(HN,lN);n=HN.prototype;n.yf=function(a){this.Ha=a.get(127);this.ya=a.ya.getId()};
n.setup=function(){"google"in window||(window.google={});"sbox"in window.google||(window.google.sbox={})};
n.activate=function(a){this.oa=a;a.mC==0&&(a=this.Ha.ua,this.Ca=a.protocol,this.va=a.host,this.La=a.dG,this.Fa=a.IV,this.Ia="https:"==document.location.protocol,qPa(this,eb(this.iO,this)),(new Image).src=this.Ca+this.va+"/generate_204")};
n.deactivate=function(){qPa(this,null);rPa(this)};
n.sendRequest=function(a,b,c,e){var f=a.getId(),h=a.o;this.oa.hJ||rPa(this);b=this.Ca+this.va+this.La+"?"+(this.Fa?this.Fa+"&":"")+(b?b+"&":"");a=[];$M("q",h,a,!0);this.oa.xN||$M("callback","google.sbox.p"+this.ya,a);if(this.Ia){h="";for(var k=4+Math.floor(Math.random()*32),l,p=0;p<k;++p)l=Math.random()<.3?48+Math.floor(Math.random()*10):(Math.random()>.5?65:97)+Math.floor(Math.random()*26),h+=String.fromCharCode(l);$M("gs_gbg",h,a)}h=wn("SCRIPT");b+=a.join("&");Kl(h,co(b));h.charset="utf-8";this.o[f]=
h;this.qa=this.oa.hJ?e:c;this.ua.appendChild(h);return!0};
function rPa(a){for(var b in a.o)a.ua.removeChild(a.o[b]);a.o={};a.qa=null}
n.iO=function(a){this.qa&&this.qa(a)};
function qPa(a,b){b||(b=VOa);var c=window.google;a.oa.xN?c.ac.h=b:c.sbox["p"+a.ya]=b}
;function IN(){this.ma=115;this.qa={}}
u(IN,lN);n=IN.prototype;n.yf=function(a){this.ua=a.get(116);a=a.o[154]||[];for(var b,c=0;b=a[c++];)this.qa[JN]=b};
n.activate=function(){this.o=!1};
n.deactivate=function(){this.hide()};
n.isVisible=function(){return this.o};
n.getHeight=function(){return this.o?this.ua.getHeight():0};
n.show=function(){if(!this.o){var a=this.ua,b=a.show,c=ZOa(sPa);if(this.oa){var e=this.oa.oa;c.Gq=e.Fa;c.marginWidth=e.Ra;var f=e.Ha.OV;f||(f=e.Fa=="rtl"?"right":"left");c.horizontalAlignment=f}b.call(a,c);this.o=!0}};
n.hide=function(){this.o&&(this.ua.hide(),this.o=!1)};
var sPa={horizontalAlignment:"left",mT:!0,Gq:null,marginWidth:0};function KN(){this.ma=118}
u(KN,lN);n=KN.prototype;n.yf=function(a){this.oa=a.get(119);this.Fa=a.get(130);this.mb=a.get(145);this.ya=a.get(117);this.Pa=a.get(123);this.Ha=a.get(374);this.tb=a.get(121);this.ub=a.get(553);this.o=a.get(128);this.Ra=a.get(139);this.Db=a.get(173);this.xc=a.o[160]||[];this.La=a.ua};
n.setup=function(a){this.va=a;this.ua=this.qa=this.oa.o.value||""};
n.activate=function(a){this.va=a;this.Ia=this.Sa=!1;LN(this)};
function tPa(a){var b={};MN(a.ya,11,b);!b.cancel&&a.va.TS&&a.ya.defer(function(){a.o.Rl()})}
function uPa(a){if(a.va.oN==0||a.va.oN==2)return!1;a:{if(NN(a.o)){if(a.o.ua!=null)var b=ON(a.o);else b=a.o,b=NN(b)?b.oa[0]:null;if(b.oa)break a}b=null}var c;if(c=b)b=b.ma,((c=a.qa)||b?c&&b&&c.toLowerCase()==b.toLowerCase():1)?c=!1:(a.qa=a.ua,eN(b,a.ua,!0)&&(b=a.ua+b.substr(a.ua.length)),vPa(a,b,ZM(b.length),"",!0),PN(a,b,!0),c=!0);return c?(a.Ha.add(8),!0):!1}
function vPa(a,b,c,e,f){a.va.WQ&&!a.o.isVisible()&&e=="mousedown"&&wPa(a.o,c,e);var h=!1,k=!1;if(b!=a.ua||e=="onremovechip")eN(e,"key")?a.Ha.add(1):e=="paste"&&a.Ha.add(2),h=!0,QN(a,b),MN(a.ya,1,{qw:e,Gq:a.Ca}),a.La.RC(),k=Date.now(),a.Ma||(a.Ma=k),a.Va=k,aN(b)&&(f=!0),k=!0;b=a.ub.createRequest(b,c,e);switch(b.ya){case 2:f=!0;break;case 3:f=!1}f?(h&&(h=a.o,h.va&&!h.Ca&&(h.Ca=window.setTimeout(eb(h.clear,h),h.Ha.VS))),a.Sa&&gN(b,"gs_is",1),xPa(a.Pa,b)):k&&(a.o.clear(),h=a.Pa,h.ya=h.qa);MN(a.ya,2,{qw:e})}
function yPa(a,b){QN(a,b);a.oa.refresh();MN(a.ya,4,{Gq:a.Ca,input:b})}
function zPa(a){a.ua!=a.qa&&QN(a,a.qa);MN(a.ya,5,{input:a.qa,suggestions:a.o.oa,Gq:a.Ca});a.oa.refresh();a.La.cJ()}
n.getDisplayValue=function(){return this.ua};
n.getOffset=function(){return this.oa.getOffset()};
n.getHeight=function(){return this.oa.getHeight()};
n.getWidth=function(){return this.oa.getWidth()};
function APa(a){if(a.Db){if(a.va.xS)return!0;for(var b,c=0;b=a.xc[c++];)if(b.isEnabled())return!0}return!1}
n.search=function(a){this.tb.search(this.ua,a)};
n.clear=function(){this.ua&&(QN(this,""),this.oa.clear(),MN(this.ya,1),MN(this.ya,16),this.o.clear(),this.La.RC())};
function BPa(a,b){var c=a.oa.qa.getPosition();a.Ca==b?NN(a.o)&&c==a.ua.length&&(a.o.ua!=null?a.va.fD&&a.tb.search(ON(a.o).ma,6):a.va.JT&&uPa(a)):a.Fa&&c==0&&a.Fa.o()}
function PN(a,b,c){a.ua=b||"";LN(a);a.oa.refresh();c||MN(a.ya,4,{Gq:a.Ca,input:a.ua})}
function LN(a){var b=CPa(a.mb,a.ua);if(b!=a.Ca){var c=a.oa;c.Ha&&(c.Ha.dir=b);c.o.dir=b;c.Ca&&(c.Ca.dir=b);c.Ma&&c.Ma.o(b);if(c.Ic){c=c.o;var e=0,f=c.style;c.nodeName!="INPUT"&&(e+=1);f.left=f.right="";f[b=="rtl"?"right":"left"]=e+"px"}a.Ca=b}}
function QN(a,b){a.ua=a.qa=b||"";LN(a)}
n.xG=function(a){this.oa.xG(a)};
n.gA=function(a){this.oa.gA(a)};function RN(){this.ma=128}
u(RN,lN);n=RN.prototype;n.yf=function(a){this.qa=a.get(129);this.Sa=a.get(145);this.Pa=a.get(115);this.Va=a.get(123);this.ya=a.get(118);this.Db=a.get(147);this.tb=a.o[153]||[];this.mb=a.get(553);this.La=a.get(184);this.Qb=a.get(157);this.Ma=a.ua};
n.setup=function(){this.tb.sort(YOa)};
n.activate=function(a){this.Ha=a;this.ua=this.o=null;this.va=this.Ia=!1;this.ub=!0;this.Fa="";this.Ra=0};
n.deactivate=function(){this.Ca&&(window.clearTimeout(this.Ca),this.Ca=null);this.oa=null;this.hide()};
n.setSuggestions=function(a,b,c){var e=!1;a=this.La&&this.La.o(b);this.clear();if((this.oa=b)&&b.length){e=b[0].ma;a:{var f=e;if(this.Sa.o){for(var h=!1,k=!1,l,p=0;p<f.length;++p)if(l=f.charAt(p),!DPa.test(l)&&(SN.test(l)?k=!0:h=!0,k&&h)){f=!0;break a}f=!1}else f=!0}f&&(e=this.ya.qa);this.Fa=CPa(this.Sa,e);if(c){this.Ia=!0;c=this.qa;if(c.qa)for(c.Ia=this.Fa,TN(c),e=!1,h=0;f=b[h++];)EPa(c,f)&&(e=!0);else e=!1;b=b[0].getParameters().getString("a");b=cN(b);this.Ra=this.Db.getWidth(b)}else{this.Ia=!1;
b=this.qa;c=b.render;if(NN(this)&&!this.Ia){e=[];f=[];for(k=0;(h=this.tb[k++])&&!h.getMessage(this.ya.qa,this.oa,f););(h=f?f.length:0)&&(h-=UN(f,e,0));for(k=0;k<this.oa.length;++k)e.push(this.oa[k]);h&&(h-=UN(f,e,1));this.Ha.CS&&e.push(1);h&&UN(f,e,2);this.Ha.mK&&e.push(2);if(this.Qb)for(f=-1,h=0;h<e.length;h++)k=e[h],k=(k=k.getParameters&&k.getParameters())&&k.getString&&k.getString("t"),k!="HELP_ACTION"&&f=="HELP_ACTION"&&(e.splice(h,0,3),h++),f=k}else e=null;e=c.call(b,e,this.Fa);this.Ra=0}a&&
(this.ua=this.La.oa(),FPa(this,this.La.ma()));e?this.show():this.clear()}return e};
function FPa(a,b){if(a.o!=b){var c=a.o;a.o=b;GPa(a,c)}}
n.nM=function(){if(NN(this))if(this.va){var a=this.o;this.o==this.oa.length-1?this.ua=this.o=null:this.o==null?this.o=0:++this.o;this.ua=this.o;HPa(this,a,eb(this.nM,this))}else this.show()};
n.oM=function(){if(NN(this))if(this.va){var a=this.o;this.oa&&this.o!=0?this.o==null?this.o=this.oa.length-1:--this.o:this.ua=this.o=null;this.ua=this.o;HPa(this,a,eb(this.oM,this))}else this.show()};
n.isVisible=function(){return this.va};
n.isEnabled=function(){return this.ub};
function ON(a){return a.ua!=null?a.oa[a.ua]:null}
function NN(a){return!(!a.oa||!a.oa.length)}
n.show=function(){if(!this.va){a:{var a=this.Pa,b=JN;if(b in a.qa){if(a.oa){if(b==JN)break a;a.hide();a.oa.oa.va=!1}a.oa=a.qa[b];b=a.ua;a=a.oa;a!=b.Ca&&(b.Ca=a,a=a.getRootElement(),b.Pa?a!=b.Pa&&b.ya.replaceChild(a,b.Pa):b.ya.appendChild(a),b.Pa=a)}}this.Pa.show();this.va=!0;this.Ma.dJ()}};
n.hide=function(){this.va&&(this.Ca&&(window.clearTimeout(this.Ca),this.Ca=null),this.Pa.hide(),this.va=!1,this.Ma.eJ())};
n.clear=function(){this.hide();this.oa=null;this.Ia=!1;this.o!=null&&VN(this.qa,this.o);this.ua=this.o=null;this.qa.clear()};
n.Rl=function(){var a=this.Va;a.ya=a.qa;this.hide()};
function IPa(a){a.o!=null&&VN(a.qa,a.o);a.ua=a.o=null}
function wPa(a,b,c){if(NN(a))a.show();else{var e=a.ya.qa;e&&(b=a.mb.createRequest(e,b||a.ya.oa.qa,c),xPa(a.Va,b))}}
function UN(a,b,c){for(var e=0,f,h=0;h<a.length;++h)(f=a[h])&&f.position==c&&(b.push(f),++e);return e}
function HPa(a,b,c){a.o==null||a.qa.Lh(a.o)?(GPa(a,b),a.o==null?zPa(a.ya):(b=a.qa,c=a.oa[a.o],b=b.Ra[c.getType()].oa(c,b.oa.qa),PN(a.ya,b),a.Ma.fJ())):(VN(a.qa,b),c())}
function GPa(a,b){b!=null&&VN(a.qa,b);a.o!=null&&a.qa.highlight(a.o)}
var JN=TOa++;function WN(){this.ma=154}
u(WN,lN);WN.prototype.yf=function(a){this.oa=a.get(128);this.o=a.get(129)};
WN.prototype.getRootElement=function(){return this.o.getRootElement()};function XN(){this.ma=145;this.o=SN.test("x")}
u(XN,lN);XN.prototype.setAttributes=function(a){this.oa=a.ED()};
function CPa(a,b){var c=a.oa;a.o&&(SN.test(b)?c="ltr":DPa.test(b)||(c="rtl"));return c}
var DPa=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$"),SN=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*(?:\\d[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])");function YN(){this.ma=117;this.ua=[];this.oa={bO:1}}
u(YN,lN);n=YN.prototype;n.deactivate=function(){this.o=null};
function ZN(a,b,c,e,f,h){var k=JPa(a,b);k||(k={},a.ua.push({element:b,rS:k}));var l=k[c];l||(l=k[c]=[],a=KPa(a,c,b.bO?window:zN(b),l),typeof c!=="string"?b[c]=a:b.addEventListener?b.addEventListener(c,a,!1):b["on"+c]=a);l.push({kT:!!h,FE:!1,priority:f||0,process:e});l.sort(LPa);e.eventName=c}
function MPa(a,b,c){if(a=JPa(a,b))if(a=a[c.eventName])for(var e=0;b=a[e++];)if(b.process==c){b.FE=!0;break}}
function MN(a,b,c){c=c||{};(a=a.oa[b])&&a(c,c.qw)}
n.listen=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)};
n.unlisten=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent("on"+b,c)};
n.defer=function(a){if(NPa){if(!this.o){this.o=[];var b=eb(this.bS,this);this.listen(window,"message",b)}this.o.push(a);a=window.location.href;window.postMessage("sbox.df",/HTTPS?:\/\//i.test(a)?a:"*")}else window.setTimeout(a,0)};
n.bS=function(a){this.o&&a&&a.source==window&&a.data=="sbox.df"&&this.o.length&&(this.o.shift()(),this.o&&this.o.length&&window.postMessage("sbox.df",window.location.href))};
function KPa(a,b,c,e){return eb(function(f,h){if(e.length){if(!f){f={};var k=c.event;k&&(k.keyCode&&(f.keyCode=k.keyCode),f.jT=!0)}f.qw=h||b;h=f;for(var l,p,r=0;k=e[r++];)k.FE?p=!0:l||(k.kT?OPa(this,k,h):l=k.process(h));if(p)for(p=0;l=e[p];)l.FE?e.splice(p,1):++p;if(f.Zy){delete f.Zy;f.jT&&(f=c.event||f);if(l=f||window.event)l.stopPropagation&&l.stopPropagation(),l.cancelBubble=l.cancel=!0;l&&(l.preventDefault&&l.preventDefault(),l.returnValue=!1);return f.returnValue=!1}}},a)}
function JPa(a,b){for(var c,e=0;e<a.ua.length;++e)if(c=a.ua[e],c.element==b)return c.rS;return null}
function OPa(a,b,c){a.defer(function(){b.process(c)})}
function LPa(a,b){return b.priority-a.priority}
var NPa=window.postMessage&&!(oN||ePa||rN);function $N(){this.ma=494;this.o={};this.oa=this.qa=0;this.ua=-1}
u($N,lN);$N.prototype.activate=function(){this.reset()};
$N.prototype.reset=function(){this.o={};this.oa=this.qa=0;this.ua=-1};function aO(){this.ma=374}
u(aO,lN);aO.prototype.activate=function(){this.reset()};
aO.prototype.add=function(a){this.o[a]=!0};
aO.prototype.reset=function(){this.o={}};function bO(){this.ma=120;this.La=-1}
u(bO,lN);n=bO.prototype;n.yf=function(a){this.Ca=a.get(191);this.o=a.get(123);this.ua=a.get(118);this.Ha=a.get(374);this.qa=a.get(494);this.Ia=a.get(126);this.ya=a.get(128);this.Ma=a.o[311]||[]};
n.setup=function(a){this.Fa=a.xT};
n.activate=function(a){this.oa=a;this.reset()};
n.getParameters=function(a,b){var c=this.ua.qa;b&&(c=c.replace(PPa,"#"));b=[];b[27]=55;b[0]=cO(this.oa.clientName);b[28]=cO(this.oa.eG);b[1]=a==void 0?"":a+"";a=this.Ha;var e=[];for(f in a.o)e.push(parseInt(f,10));b[26]=e.join("j");var f="";this.Ia.oa.Ca>=10?f="o":this.ya.ua!=null&&(f=this.ya.ua+"");b[2]=f;f="";if(a=this.ya.oa){e=0;for(var h,k=0;h=a[k++];){var l=h;h=l.getType()+"";l=l.va||[];l.length&&(h+="i"+l.join("i"));if(h!=p){e>1&&(f+="l"+e);f+=(p?"j":"")+h;e=0;var p=h}++e}e>1&&(f+="l"+e)}b[3]=
f;p=this.qa.ua;b[33]=p>-1?String(p):"";b[4]=Math.max(this.ua.Ma-this.va,0);b[5]=Math.max(this.ua.Va-this.va,0);b[6]=this.La;b[7]=gb()-this.va;b[18]=Math.max(this.ua.Qb-this.va,0);b[8]=this.o.tb;f=this.o;f=(p=f.ua)?f.oa.oa():0;b[25]=p?"1"+(this.oa.YQ?"a":"")+(this.oa.bR?"c":""):"";b[10]=f;p=this.o;p=p.ua?p.oa.o():0;b[11]=p;b[12]=this.o.Qb;a=this.o;p=a.ub;f=a.mb;a=a.Db;b[9]=p;b[22]=f;b[17]=a;b[13]=this.o.xc;b[14]=this.o.La;b[15]=this.o.Pa;p=this.o;f=[];for(e=k=0;e<=dO;++e)a=p.Ma[e],a==0?k++:(k=k==1?
"0j":k>1?e+"-":"",f.push(k+a),k=0);p=f.join("j");b[16]=p;p=0;for(var r in this.qa.o)p++;b[30]=p;b[31]=this.qa.qa;b[32]=this.qa.oa;b[19]=cO(this.oa.kN);r=(r=this.Ia.o)?r.getParameters().getString("e")||"":"";b[20]=r;for(p=0;r=this.Ma[p++];)f=r.getIndex(),QPa[f]&&(b[f]=b[f]==void 0?cO(r.getValue()):"");b=b.join(".").replace(RPa,"");if(this.Ca&&this.Fa){p=c+b;a=this.Ca.decode(this.Fa);r={};r.df=Array(4);r.buffer=Array(4);r.vW=Array(4);r.padding=Array(64);r.padding[0]=128;for(f=1;f<64;++f)r.padding[f]=
0;eO(r);f=Array(64);a.length>64&&(eO(r),fO(r,a),a=gO(r));for(e=0;e<a.length;++e)f[e]=a[e]^92;for(e=a.length;e<64;++e)f[e]=92;eO(r);for(e=0;e<64;++e)r.buffer[e]=f[e]^106;hO(r,r.buffer);r.total=64;fO(r,SPa(p));p=gO(r);eO(r);hO(r,f);r.total=64;fO(r,p);r=gO(r);r=r.slice(0,8);r=this.Ca.encode(r)}else r="";c={oq:c,gs_l:b+"."+r};this.oa.oT&&(c.q=this.ua.getDisplayValue());return c};
n.reset=function(){this.va=gb();++this.La;var a=this.ua;a.Ma=0;a.Va=0;a.Qb=0;this.Ha.reset();a=this.o;a.ua&&a.oa.ma();a.tb=0;a.Ca=0;a.Qb=0;a.ub=0;a.mb=0;a.Db=0;a.xc=0;a.La=0;a.Pa=0;a.Ma=[];for(var b=0;b<=dO;++b)a.Ma[b]=0;for(b=0;a=this.Ma[b++];)a.reset()};
n.setToken=function(a){this.Fa=a};
function cO(a){return a?a.replace(TPa,"-"):""}
var RPa=/\.+$/,TPa=/\./g,PPa=/./g,QPa=UOa([23]);function iO(){this.ma=121}
u(iO,lN);n=iO.prototype;n.setAttributes=function(){this.qa=null};
n.yf=function(a){this.o=a.get(347);this.ya=a.get(130);this.La=a.get(117);this.Fa=a.get(123);this.va=a.get(118);this.Ma=a.get(120);this.Pa=a.get(128);this.Ha=a.get(139);this.Ca=a.ua;this.Ia=a.o[294]||[]};
n.activate=function(a){this.ua=a};
n.search=function(a,b){if(this.Ia){for(var c=!1,e,f=0;e=this.Ia[f++];)e.o(a,b)==2&&(c=!0);if(c)return}if(aN(a)||this.ua.nq||this.ya&&this.ya.nq())IOa.test(b)?this.qa&&!this.oa&&(c=this.qa,mPa(c,"btnI")?c=null:(e=wN("input"),e.type="hidden",e.name="btnI",e.value="1",c.appendChild(e),c=e),this.oa=c):this.oa&&(this.qa.removeChild(this.oa),this.oa=null),this.o&&this.ua.gJ&&this.o.o(b),this.Ca.search(a,b),UPa(this),MN(this.La,12,{query:a})};
n.redirect=function(a){this.o&&this.ua.gJ&&this.o.o(void 0);this.Ca.redirect(a);UPa(this)};
function UPa(a){var b=a.Fa;b.ya=b.qa;a.Fa.o=null;a.Ma.reset();a.Pa.clear();a.va.qa!=a.va.getDisplayValue()&&(b=a.va,b.qa=b.ua);a.Ha&&a.Ha.clear()}
;function jO(){this.ma=553}
u(jO,lN);jO.prototype.yf=function(a){this.o=a.o[156]||[];a.get(126)};
jO.prototype.setup=function(){this.o.sort(VPa)};
jO.prototype.activate=function(a){this.oa=a;this.ua=a.DU};
jO.prototype.createRequest=function(a,b){a=new fN(a,b||ZM(a.length));b=1;if(this.o)for(var c,e=0;c=this.o[e++];)c=["productId:"+c.o].join("|"),c.length&&gN(a,"requiredfields",c,!0),1>b&&(b=1);a.ya=b;gN(a,"ds",this.oa.OI,!0);gN(a,"pq",this.ua,!0);a.Tl();return a};
function VPa(a,b){return a.getPriority()-b.getPriority()}
;function kO(){this.ma=123;this.Fa=!1;this.qa=-1}
u(kO,lN);n=kO.prototype;n.yf=function(a){this.oa=a.get(133);this.Ra=a.get(130);this.Od=a.get(118);this.Pd=a.get(120);this.Ge=a.get(494);this.xl=a.get(124);this.Ic=a.get(125);this.ad=a.get(230);this.Rg=a.get(127)};
n.activate=function(a){this.Va=this.Rg.getConnection();this.Sa=a;this.Fa=!0;this.va={};this.Ia=0;this.Ah=a.yR;this.wl=a.aT;this.ya=-1;this.ua=this.Sa.aR&&!!this.oa};
n.deactivate=function(){this.Fa=!1;WPa(this);this.va=this.o=null;this.ya=this.qa};
function xPa(a,b){if(!(!a.Fa||a.wl||a.Ra&&a.Ra.ma())){var c=!0,e=$Oa(b);e>a.qa&&(a.qa=e);++a.tb;e=a.Ge;e.o[b.getId()]=!0;aN(b.o)||(e.ua=0);e=gb();for(var f in a.va){var h=a.va[f].getTimestamp();e-h>2500&&XPa(a,f)}a.ua&&(f=a.oa.get(b))&&((c=a.Ah||!1)&&a.Sa.bT&&(b.qa=!0),a.Ic.process(f),f.va&&++a.Qb,a.o=null);c&&(a.o=b,a.Ha||a.RL())}}
function YPa(a,b){return eb(function(c){this.ZH(c,b)},a)}
n.RL=function(){WPa(this);if(this.o){var a=[],b=this.o.getParameters();if(b)for(var c in b)$M(c,b[c],a);a=a.join("&");a=this.Va.sendRequest(this.o,a,YPa(this,this.o),eb(this.ZH,this));this.o.qa||(++this.ub,a?(a=this.o,this.va[a.getId()]=a,++this.Ca):++this.mb);this.o=null;a=100;b=(this.Ca-2)/2;for(c=1;c++<=b;)a*=2;a<this.Ia&&(a=this.Ia);this.Ha=window.setTimeout(eb(this.RL,this),a)}};
function WPa(a){a.Ha!=null&&(window.clearTimeout(a.Ha),a.Ha=null)}
function XPa(a,b){var c=a.Va,e=c.o[b];e&&(c.ua.removeChild(e),delete c.o[b]);delete a.va[b];a.Ca&&--a.Ca}
n.ZH=function(a,b){if(this.Fa){if(!b&&(b=this.va[(a[2]||{}).j],!b))return;if(!b.qa){var c=this.xl;var e=b,f=a[0],h=a[1],k={};if(a=a[2])for(var l in a){var p=a[l];l in c.o&&(p=c.o[l].parse(p));k[l]=p}l=p=a=!1;for(var r,t=0;r=h[t++];)if((r[1]||0)==33?p=!0:a=!0,p&&a){l=!0;break}a=0;p=[];for(t=0;r=h[t++];){var v=r[1]||0;if(!l||v!=33){var y=r[0];c.ua&&(y=c.oa.bold(f.toLowerCase(),cN(y).replace(POa,"")));var E=p,oa=E.push,ra=cN(y).replace(POa,""),Aa=a++,Ba=r[3];oa.call(E,new WM(y,ra,Aa,v,r[2]||[],Ba?new UM(Ba):
VM))}}c=new hN(e,p,new UM(k),!1,!0);this.ad&&(this.Od.getDisplayValue(),c=this.ad.Wd(c));this.ua&&this.oa.put(c);$Oa(b)<=this.ya||(++this.Db,this.Ic.process(c)||++this.xc,this.Ia=c.getParameters().o.d||0,b&&(XPa(this,b.getId()),b=b.getTimestamp(),b=gb()-b,this.Pa+=b,this.La=Math.max(b,this.La),++this.Ma[b>ZPa?dO:lO[Math.floor(b/100)]]));c&&(b=c.getParameters().getString("q"))&&this.Pd.setToken(b)}}};
var lO=[0,1,2,3,4,5,5,6,6,6,7,7,7,7,7,8,8,8,8,8],dO=lO[lO.length-1]+1,ZPa=lO.length*100-1;function mO(){this.ma=124;this.o={}}
u(mO,lN);mO.prototype.yf=function(a){this.oa=a.get(150);a=a.o[158]||[];for(var b,c=0;b=a[c++];)this.o[b.upa()]=b};
mO.prototype.activate=function(a){this.ua=a.tS};function nO(){this.ma=125}
u(nO,lN);nO.prototype.yf=function(a){this.qa=a.get(117);this.ya=a.get(118);this.va=a.get(494);this.oa=a.o[122]||[];this.ua=a.get(126);this.o=a.get(128);this.oa.sort($Pa)};
nO.prototype.process=function(a){var b=a;var c=this.ya.getDisplayValue().toLowerCase();if(c==b.oa.o.toLowerCase())c=!0;else{var e=this.ua.o;c=dN(c);var f=b.getRequest();b=f?f.Ca:dN(b.oa.o.toLowerCase());e=e?e.getRequest().Ca:"";c=c.indexOf(b)==0?c.indexOf(e)==0?b.length>=e.length:!0:!1}if(c){if(this.oa)for(b=0;e=this.oa[b++];)a=e.edit(a);var h=this.ua.o=a;a=h.getRequest().o;e=h.o;if(this.o.isEnabled())if(e.length){if(b=h.getType()==0,this.o.setSuggestions(a,e,b)){b=this.va;var k=h.getRequest();f=
k.getId();f in b.o&&(aN(k.o)||(b.ua=h.o.length),h=k.getTimestamp(),h=gb()-h,b.oa+=h,++b.qa,delete b.o[f])}}else this.o.clear();MN(this.qa,3,{input:a,suggestions:e})}return c};
function $Pa(a,b){return a.getPriority()-b.getPriority()}
;function oO(){this.ma=126}
u(oO,lN);oO.prototype.yf=function(a){this.oa=a.get(123)};
oO.prototype.activate=function(){this.o=null};function pO(){this.ma=127;this.oa={}}
u(pO,lN);pO.prototype.yf=function(a){a=a.o[149]||[];for(var b,c=0;b=a[c++];)this.oa[0]=b};
pO.prototype.activate=function(a){var b="https:"==document.location.protocol,c=[];$M("client",a.clientName,c);$M("hl",a.nE,c);$M("gl",a.hN,c);$M("sugexp",a.kN,c);$M("gs_rn",55,c);$M("gs_ri",a.eG,c);a.authuser&&$M("authuser",a.authuser,c);this.ua={protocol:"http"+(b?"s":"")+"://",host:a.fM||"clients1."+a.LQ,dG:a.dG||"/complete/search",IV:c.length?c.join("&"):""};this.o&&0==a.mC||(this.o=this.oa[a.mC])};
pO.prototype.getConnection=function(){return this.o};function qO(){this.ma=191}
u(qO,lN);qO.prototype.encode=function(a){typeof a==="string"&&(a=SPa(a));var b="";if(a){for(var c=a.length,e=0,f=0,h=0;c--;)for(f<<=8,f|=a[h++],e+=8;e>=6;)b+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(f>>e-6&63),e-=6;e&&(b+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(f<<8>>e+8-6&63))}return b};
qO.prototype.decode=function(a){var b=[];if(a)for(var c=0,e=0,f=0;f<a.length;++f){var h=a.charCodeAt(f);if(h<32||h>127||!aQa[h-32])return[];c<<=6;c|=aQa[h-32]-1;e+=6;e>=8&&(b.push(c>>e-8&255),e-=8)}return b};
function SPa(a){for(var b=[],c=0,e=0;e<a.length;++e){var f=a.charCodeAt(e);f<128?b[c++]=f:(f<2048?b[c++]=f>>6|192:(b[c++]=f>>12|224,b[c++]=f>>6&63|128),b[c++]=f&63|128)}return b}
function eO(a){a.df[0]=1732584193;a.df[1]=4023233417;a.df[2]=2562383102;a.df[3]=271733878;a.Xw=a.total=0}
function hO(a,b){for(var c=a.vW,e=0;e<64;e+=4)c[e/4]=b[e]|b[e+1]<<8|b[e+2]<<16|b[e+3]<<24;var f=a.df[0];b=a.df[1];e=a.df[2];for(var h=a.df[3],k,l,p,r=0;r<64;++r)r<16?(k=h^b&(e^h),l=r):r<32?(k=e^h&(b^e),l=5*r+1&15):r<48?(k=b^e^h,l=3*r+5&15):(k=e^(b|~h),l=7*r&15),p=h,h=e,e=b,f=f+k+bQa[r]+c[l]&4294967295,k=cQa[r],b=b+((f<<k|f>>>32-k)&4294967295)&4294967295,f=p;a.df[0]=a.df[0]+f&4294967295;a.df[1]=a.df[1]+b&4294967295;a.df[2]=a.df[2]+e&4294967295;a.df[3]=a.df[3]+h&4294967295}
function fO(a,b,c){c||(c=b.length);a.total+=c;for(var e=0;e<c;++e)a.buffer[a.Xw++]=b[e],a.Xw==64&&(hO(a,a.buffer),a.Xw=0)}
function gO(a){var b=Array(16),c=a.total*8,e=a.Xw;fO(a,a.padding,e<56?56-e:64-(e-56));for(var f=56;f<64;++f)a.buffer[f]=c&255,c>>>=8;hO(a,a.buffer);for(f=e=0;f<4;++f)for(c=0;c<32;c+=8)b[e++]=a.df[f]>>c&255;return b}
var aQa=[0,0,0,0,0,0,0,0,0,0,0,0,0,63,0,0,53,54,55,56,57,58,59,60,61,62,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,0,0,0,0,64,0,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,0,0,0,0,0],cQa=[7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21],bQa=[3614090360,3905402710,606105819,3250441966,4118548399,1200080426,
2821735955,4249261313,1770035416,2336552879,4294925233,2304563134,1804603682,4254626195,2792965006,1236535329,4129170786,3225465664,643717713,3921069994,3593408605,38016083,3634488961,3889429448,568446438,3275163606,4107603335,1163531501,2850285829,4243563512,1735328473,2368359562,4294588738,2272392833,1839030562,4259657740,2763975236,1272893353,4139469664,3200236656,681279174,3936430074,3572445317,76029189,3654602809,3873151461,530742520,3299628645,4096336452,1126891415,2878612391,4237533241,1700485571,
2399980690,4293915773,2240044497,1873313359,4264355552,2734768916,1309151649,4149444226,3174756917,718787259,3951481745];function rO(){this.ma=150}
u(rO,lN);
rO.prototype.bold=function(a,b){b=bN(b.replace(JOa,""));a=bN(dN(a,!0));if(eN(b,a))return a+"<b>"+b.substr(a.length)+"</b>";for(var c="",e=[],f=b.length-1,h=-1,k,l=0;k=b.charAt(l);++l)k==" "||k=="\t"?c.length&&(e.push({t:c,s:h,e:l+1}),c="",h=-1):(c+=k,h==-1?h=l:l==f&&e.push({t:c,s:h,e:l+1}));a=a.split(/\s+/);c={};for(h=0;f=a[h++];)c[f]=1;h=-1;a=[];k=e.length-1;for(l=0;f=e[l];++l)c[f.t]?(f=h==-1,l==k?a.push({s:f?l:h,e:l}):f&&(h=l)):h>-1&&(a.push({s:h,e:l-1}),h=-1);if(!a.length)return"<b>"+b+"</b>";
c="";for(h=l=0;f=a[h];++h){if(k=e[f.s].s)l=b.substring(l,k-1),c+="<b>"+l+"</b> ";l=e[f.e].e;c+=b.substring(k,l)}l<b.length&&(b=b.substring(l),c+="<b>"+b+"</b> ");return c};function dQa(){this.ma=146}
u(dQa,lN);function sO(a){JSON.parse('"\\u30'+a.split(",").join("\\u30")+'"')}
sO("02,0C,0D,01,FB,F2,A1,A3,A5,A7,A9,E3,E5,E7,C3,FC,A2,A4,A6,A8,AA,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CA,CB,CC,CD,CE,CF,D2,D5,D8,DB,DE,DF,E0,E1,E2,E4,E6,E8,E9,EA,EB,EC,ED,EF,F3,9B,9C");sO("F4__,AC,AE,B0,B2,B4,B6,B8,BA,BC,BE,C0,C2,C5,C7,C9_____,D0,D3,D6,D9,DC");sO("D1,D4,D7,DA,DD");sO("F4____,AC_,AE_,B0_,B2_,B4_,B6_,B8_,BA_,BC_,BE_,C0_,C2__,C5_,C7_,C9______,D0__,D3__,D6__,D9__,DC");sO("D1__,D4__,D7__,DA__,DD");sO("A6,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CF,D2,D5,D8,DB");sO("CF,D2,D5,D8,DB");function tO(){this.ma=116;this.Db=!0}
u(tO,lN);n=tO.prototype;
n.setAttributes=function(a,b){this.Sa=a.ED();b.addRule(".sbdd_a",(tN?"margin-top:-1px;":"")+"z-index:989");b.addRule(".sbdd_a[dir=ltr] .fl, .sbdd_a[dir=rtl] .fr","float:left");b.addRule(".sbdd_a[dir=ltr] .fr, .sbdd_a[dir=rtl] .fl","float:right");tN?b.addRule(".sbdd_b","background:#fff;border:1px solid #ccc;border-top-color:#d9d9d9;"+b.prefix("border-radius:0 0 3px 3px;")+b.prefix("box-shadow:0 2px 1px rgba(0,0,0,.1), 0 0 1px rgba(0,0,0,.1);")+"cursor:default"):b.addRule(".sbdd_b","border:1px solid #ccc;border-top-color:#d9d9d9;"+
b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);")+"cursor:default");b.addRule(".sbdd_c","border:0;display:block;position:absolute;top:0;z-index:988")};
n.yf=function(a){this.Ra=a.get(130);a.get(115);this.va=a.get(118);this.La=a.get(117);this.tb=a.ya.getId()};
n.setup=function(a){this.o=a};
n.ox=function(a){this.oa=xN();this.oa.className="gstl_"+this.tb+" sbdd_a";uO(this.oa,!1);this.mb=this.oa;this.Ma=xN("fl");this.oa.appendChild(this.Ma);this.Fa=xN();this.oa.appendChild(this.Fa);this.ya=xN("sbdd_b");this.Fa.appendChild(this.ya);this.Qb=xN();this.Fa.appendChild(this.Qb);this.o.sS&&(this.ua=wN("iframe","gstl_"+this.tb+" sbdd_c"),uO(this.ua,!1),(this.o.Si||document.body).appendChild(this.ua));if(this.qa=this.o.XQ)typeof this.qa==="number"&&(this.qa+=this.o.Lx[2],this.qa-=eQa(this)),vO(this,
this.oa,this.qa);fQa(this);(a.Si||document.body).appendChild(this.oa);a=this.La;var b=eb(this.aI,this);ZN(a,a.oa,8,b)};
n.activate=function(a){this.o=a;this.oa.style.position=a.Tt};
n.getHeight=function(){this.Ha||(this.Ha=this.ya?Math.max(this.ya.offsetHeight,0):0);return this.Ha};
n.show=function(a){gQa(this,a.Gq||this.Sa);var b=a.marginWidth;if(this.Va!=b){var c=this.Ma.style;b?(c.width=b+"px",c.height="1px"):c.height="";this.Va=b}this.Db=a.mT;this.ub=a.horizontalAlignment;this.va.gA(!0);uO(this.mb,!0);uO(this.ua,!0);MN(this.La,14);this.aI()};
n.hide=function(){this.Ha=0;this.va.gA(!1);uO(this.mb,!1);uO(this.ua,!1);gQa(this,this.Sa);MN(this.La,9)};
n.aI=function(){this.Ha=0;fQa(this);if(this.ua){var a=this.o.lQ[0],b=this.ua.style;this.o.Tt!="relative"&&(b.top=this.oa.style.top,b.left=this.oa.offsetLeft+this.Ma.offsetWidth+"px");b=this.ua;a=this.getHeight()+a;b.style.height=Math.max(a,0)+"px";vO(this,this.ua,this.ya.offsetWidth)}this.Ca&&TN(this.Ca.o)};
function fQa(a){var b,c;if(c=a.Ca)c=a.Ca.o,c=c.o.wS||c.La==c.Ia?c.Qb:null;var e=(b=c)?b.offsetWidth:a.va.getWidth();var f=a.qa;c=eQa(a);f?typeof f==="string"&&(f=null):a.Va||!a.Db?a.Fa.style.display="inline-block":(a.Fa.style.display="",f=e+a.o.Lx[2]-c,vO(a,a.oa,f));if(a.o.Tt!="relative"){var h=COa()!=(a.Ia=="rtl"),k=a.o.Si;var l={Dm:0,JA:0};if(h||!k||k==document.body||a.o.tJ)l=a.va.getOffset(),b&&(l.Dm=uN(b).Dm);b=l;l=f;f=a.o.Lx;k=f[1];f=f[0];f=b.JA+a.va.getHeight()+f;if(a.ub=="right"){l=COa()!=
(a.Ia=="rtl");var p=a.o.Si;k=-k;if(l||!p||p==document.body)k+=(zN(a.oa)||window).document.documentElement.clientWidth-e-b.Dm;e=k;l=f;b=void 0}else b=b.Dm+k,a.ub=="center"&&l&&(b+=(e-l)/2),l=f,e=void 0;f={Dm:0,JA:0};a.o.Tt=="absolute"&&a.o.Si&&a.o.Si!=document.body&&(h||a.o.tJ)&&(f=uN(a.o.Si));k=a.oa.style;k.top=l-f.JA+"px";k.left=k.right="";b!=void 0?k.left=b+c-f.Dm+"px":(b=0,a.o.Si&&h&&(b=document.body.clientWidth-(f.Dm+a.o.Si.offsetWidth)),k.right=e+c-b+"px")}}
function vO(a,b,c){typeof c==="number"?c>0&&(a.o.zN?b.style.width=c+"px":b.style.minWidth=c+"px"):b.style.width=c}
function uO(a,b){a&&(a.style.display=b?"":"none")}
function gQa(a,b){if(a.Ia!=b){a.Ia=b;var c=a.o.Si;c&&c!=document.body&&(c.style.textAlign=b=="rtl"?"right":"left");lPa(a.oa,b)}}
function eQa(a){return a.Ra&&a.Ra.oa()&&(a=a.va.oa.Ca.offsetWidth,typeof a==="number")?a:0}
;function wO(){this.ma=119;this.Sa=!1;this.qa=ZM(0);this.ub=-1;this.Db=!1}
u(wO,lN);n=wO.prototype;
n.setAttributes=function(a,b){this.Fa=a;this.o=a.aS();this.o.setAttribute("aria-haspopup",!1);this.o.setAttribute("role","combobox");this.o.setAttribute("aria-autocomplete","both");a.eQ()||(b.addRule(".sbib_a","background:#fff;"+b.prefix("box-sizing:border-box;")),b.addRule(".sbib_b",b.prefix("box-sizing:border-box;")+"height:100%;overflow:hidden;padding:4px 6px 0"),b.addRule(".sbib_c[dir=ltr]","float:right"),b.addRule(".sbib_c[dir=rtl]","float:left"),b.addRule(".sbib_d",b.prefix("box-sizing:border-box;")+"height:100%;unicode-bidi:embed;white-space:nowrap"),
b.addRule(".sbib_d[dir=ltr]","float:left"),b.addRule(".sbib_d[dir=rtl]","float:right"),dPa&&b.addRule(".sbib_a input::-ms-clear","display: none"),b.addRule(".sbib_a,.sbib_c","vertical-align:top"))};
n.yf=function(a){this.ua=a.get(118);this.oa=a.get(117);this.tb=a.get(128);this.Ma=a.get(173);this.Ic=!!a.get(136);this.Od=a.ya.getId()};
n.setup=function(a){this.La=a;this.Pa=a.fT;this.Ra=a.gT;this.Pd=a.eR;this.ya=kPa(this.o);this.aB();var b=this;oN&&ZN(this.oa,this.o,"beforedeactivate",function(c){b.Db&&(b.Db=!1,c.Zy=!0)},10);
qN&&hQa(this);this.Ia=this.o};
n.ox=function(a){var b=!!a.hR[130];if(this.Ic||APa(this.ua)||b||a.zR)(this.va=this.Fa.get("gs_id"))?(b&&(this.Ca=this.Fa.get("sb_chc")),this.Ha=this.Fa.get("sb_ifc")):(this.va=xN("gstl_"+this.Od+" sbib_a"),a=this.va.style,this.Ra&&(a.width=this.Ra+"px"),this.Pa&&(a.height=this.Pa+"px"),a=this.o.style,a.border="none",a.padding=rN||oN?"0 1px":"0",a.margin="0",a.height="auto",a.width="100%",this.o.className=this.La.GK,b&&(this.Ca=xN("sbib_d"),this.Ca.id=this.Fa.getId("sb_chc"),this.va.appendChild(this.Ca)),
APa(this.ua)&&this.Ma&&(this.Ma.getRootElement().className+=" sbib_c",this.va.appendChild(this.Ma.getRootElement())),this.Ha=xN("sbib_b"),this.Ha.id=this.Fa.getId("sb_ifc"),this.va.appendChild(this.Ha),iQa(this,this.va,this.Ha)),hPa&&sN&&(this.o.style.height="1.25em",this.o.style.marginTop="-0.0625em"),jQa(this,this.va),this.Ia=this.va;this.Pd&&(b=eb(this.JL,this),ZN(this.oa,this.o,"blur",b,10),b=eb(this.jM,this),ZN(this.oa,this.o,"focus",b,10),this.Ge=!0);b=this.oa;a=eb(this.pS,this);ZN(b,b.oa,8,
a);kQa(this)};
n.activate=function(a){this.La=a;var b=a.eT;b&&this.Fa.IJ(b);this.o.setAttribute("autocomplete","off");this.o.setAttribute("spellcheck",!1);this.o.style.outline=a.QT?"":"none";this.Ge&&this.jM();lQa(this)};
n.deactivate=function(){this.Ge&&this.JL();mQa(this)};
function iQa(a,b,c){mQa(a);c||(c=b);a.o.parentNode.replaceChild(b,a.o);c.appendChild(a.o);a.ya&&a.La.QU&&(oN||qN?a.oa.defer(function(){a.o.focus();jPa(a.o,a.qa.getPosition())}):a.o.focus());
lQa(a)}
n.getOffset=function(){return uN(this.Ia)};
n.getHeight=function(){var a=this.Ia?this.Ia.offsetHeight:0;this.Pa>a&&(a=this.Pa);return a};
n.getWidth=function(){return this.Ra?this.Ra:this.Ia?this.Ia.offsetWidth:0};
n.select=function(){this.o.select();this.aB()};
n.refresh=function(){gPa&&(this.o.value="");this.o.value=this.ua.getDisplayValue();gPa&&(this.o.value=this.o.value);nQa(this)};
n.focus=function(){if(!this.ya)try{this.o.focus(),this.ya=!0,nQa(this)}catch(a){}};
n.blur=function(){this.ya&&(this.o.blur(),this.ya=!1)};
n.clear=function(){this.o.value=""};
function nQa(a){if(a.ya){var b=a.o.value.length;a.qa=ZM(b);jPa(a.o,b)}}
function jQa(a,b){ZN(a.oa,b,"mouseup",function(){a.o.focus()})}
function kQa(a){function b(f){ZN(a.oa,a.o,f,eb(a.YL,a),10,c)}
ZN(a.oa,a.o,"keydown",eb(a.nS,a));(rN||a.La.vQ)&&ZN(a.oa,a.o,"keypress",eb(a.oS,a));ZN(a.oa,a.o,"select",eb(a.aB,a),10);var c=!1;b("mousedown");b("keyup");b("keypress");c=!0;b("mouseup");b("keydown");b("focus");b("blur");b("cut");b("paste");b("input");var e=eb(a.iS,a);ZN(a.oa,a.o,"compositionstart",e);ZN(a.oa,a.o,"compositionend",e)}
n.iS=function(a){a=a.type;a=="compositionstart"?(a=this.ua,a.Ia!=1&&(a.Ia=!0)):a=="compositionend"&&(a=this.ua,a.Ia!=0&&(a.Ia=!1))};
n.nS=function(a){var b=a.keyCode;this.ub=b;var c=(sN||qN)&&(b==38||b==40)&&NN(this.tb),e=b==13,f=b==27;this.mb=!1;b==9&&(this.mb=uPa(this.ua));if(e){(b=ON(this.tb))&&b.getType();var h=this;this.oa.defer(function(){var k=h.tb,l=a.shiftKey?4:3;k.ua!=null&&ON(k).getType();k.ya.search(l)})}if(c||e||f||this.mb)a.Zy=!0};
n.oS=function(a){var b=a.keyCode,c=b==9&&this.mb;if(b==13||b==27||c)a.Zy=!0};
n.YL=function(a){if(!this.ad){var b=a.qw;if(!(b.indexOf("key")||a.ctrlKey||a.altKey||a.shiftKey||a.metaKey))a:if(a=a.keyCode,b!="keypress"){var c=a==38||a==40;if(b=="keydown"){var e=this.ua;var f=a==229;(e.Sa=f)&&e.Ha.add(4);if(c)break a}else if(e=a!=this.ub,this.ub=-1,!c||e)break a;switch(a){case 27:a=this.ua;a.va.nV?a.search(5):(a.o.isVisible()?a.o.Rl():a.oa.blur(),zPa(a));break;case 37:BPa(this.ua,"rtl");break;case 39:BPa(this.ua,"ltr");break;case 38:this.ua.o.oM();break;case 40:a=this.ua;c=this.qa;
NN(a.o)?a.o.nM():wPa(a.o,c);break;case 46:a=this.ua;a.ua&&this.qa.XJ()==a.ua.length&&(a.Ra&&a.Ra.clear(),a.va.mV&&a.search(2));break;case 8:a=this.ua,a.Fa&&this.qa.getPosition()==0&&a.Fa.o()}}this.aB();vPa(this.ua,this.o.value,this.qa,b)}};
n.hS=function(){this.ya=!0;MN(this.ua.ya,10)};
n.fS=function(){this.ya=!1;tPa(this.ua)};
function lQa(a){a.Sa||(a.Sa=!0,a.xc=eb(a.hS,a),ZN(a.oa,a.o,"focus",a.xc,99),a.Qb=eb(a.fS,a),ZN(a.oa,a.o,"blur",a.Qb,99))}
function mQa(a){a.Sa&&(a.Sa=!1,MPa(a.oa,a.o,a.xc),MPa(a.oa,a.o,a.Qb))}
n.jM=function(){if(!this.Va){var a=this.La.vU||50;this.Va=window.setInterval(eb(this.uU,this),a)}};
n.JL=function(){this.Va&&(window.clearTimeout(this.Va),this.Va=null)};
n.uU=function(){this.YL({qw:"polling"})};
n.pS=function(){if(qN){var a=this.o,b=document.createEvent("KeyboardEvent");b.initKeyEvent&&(b.initKeyEvent("keypress",!0,!0,null,!1,!1,!0,!1,27,0),a.dispatchEvent(b))}};
n.aB=function(){if(this.ya){a:{var a=this.o;try{if("selectionStart"in a){var b=a.selectionStart;var c=a.selectionEnd}else{var e=a.createTextRange(),f=vN(a).selection.createRange();e.inRange(f)&&(e.setEndPoint("EndToStart",f),b=e.text.length,e.setEndPoint("EndToEnd",f),c=e.text.length)}if(b!==void 0){var h=ZM(b,c);break a}}catch(k){}h=null}h&&(this.qa=h)}};
function hQa(a){var b;a.oa.listen(window,"pagehide",function(){a.ad=!0;b=a.o.value});
a.oa.listen(window,"pageshow",function(c){a.ad=!1;(c.persisted||b!==void 0)&&yPa(a.ua,b)})}
n.xG=function(a){this.o.setAttribute("aria-activedescendant",a)};
n.gA=function(a){this.o.setAttribute("aria-haspopup",a);a||this.o.removeAttribute("aria-activedescendant")};function xO(){this.ma=129;this.Pa={};this.Sa=[];this.tb=[];this.mb=[];this.Fa=[];this.ub=0}
u(xO,lN);n=xO.prototype;
n.setAttributes=function(a,b){this.Db=a;this.La=a.ED();tN||b.addRule(".sbsb_a","background:#fff");b.addRule(".sbsb_b","list-style-type:none;margin:0;padding:0");tN||b.addRule(".sbsb_c","line-height:22px;overflow:hidden;padding:0 7px");b.addRule(".sbsb_d","background:#eee");b.addRule(".sbsb_e","height:1px;background-color:#e5e5e5");b.addRule("#sbsb_f","font-size:11px;color:#36c;text-decoration:none");b.addRule("#sbsb_f:hover","font-size:11px;color:#36c;text-decoration:underline");b.addRule(".sbsb_g",
"text-align:center;padding:8px 0 7px;position:relative");b.addRule(".sbsb_h","font-size:15px;height:28px;margin:0.2em"+(sN?";-webkit-appearance:button":""));b.addRule(".sbsb_i","font-size:13px;color:#36c;text-decoration:none;line-height:100%");b.addRule(".sbsb_i:hover","text-decoration:underline");b.addRule(".sbsb_j","padding-top:1px 0 2px 0;font-size:11px");b.addRule(".sbdd_a[dir=ltr] .sbsb_j","padding-right:4px;text-align:right");b.addRule(".sbdd_a[dir=rtl] .sbsb_j","padding-left:4px;text-align:left");
tN&&(b.addRule(".sbsb_c[dir=ltr] .sbsb_k","padding:10px 3px 11px 8px"),b.addRule(".sbsb_c[dir=rtl] .sbsb_k","padding:10px 8px 11px 3px"))};
n.yf=function(a){this.Ha=a.get(128);this.oa=a.get(118);this.Ma=a.get(121);a=a.o[152]||[];var b={};if(a)for(var c,e=0;c=a[e++];)b[c.qa]=c;this.Ra=b};
n.setup=function(a){this.o=a};
n.ox=function(){this.qa=xN();this.va=wN("ul","sbsb_b");this.va.setAttribute("role","listbox");this.qa.appendChild(this.va)};
n.activate=function(a){this.o=a;var b=a.XL;b&&(this.Qb=this.Db.IJ(b));this.qa.className=a.PV||"sbsb_a";this.Va=a.NV||"sbsb_d"};
n.render=function(a,b){if(!this.qa)return!1;this.Ia=b;TN(this);b=!1;for(var c,e=0;c=a[e++];)if(c==1)if(this.Ca)this.Ca.style.display="";else{c=xN();var f=c.style;f.position="relative";f.textAlign="center";f.whiteSpace="nowrap";c.dir=this.La;this.ua=xN();this.ua.className="sbsb_g";this.o.mK&&(this.ua.style.paddingBottom="1px");yO(this,this.o.searchText,this.ua,13);this.o.yS?yO(this,this.o.vR,this.ua,8):this.o.DS&&yO(this,this.o.Ei,this.ua,14);c.appendChild(this.ua);c.onmousedown=eb(this.LF,this);c.className=
this.o.fH;this.Ca=c;this.qa.appendChild(this.Ca)}else c==2?this.ya?this.ya.style.display="":(c=xN("sbsb_j "+this.o.fH),f=wN("a"),f.id="sbsb_f",yl(f,"http://www.google.com/support/websearch/bin/answer.py?hl="+this.o.nE+"&answer=106230"),Ml(f,cm(this.o.uT)),c.appendChild(f),c.onmousedown=eb(this.LF,this),this.ya=c,this.qa.appendChild(this.ya)):c==3?(c=this.mb.pop(),c||(c=wN("li"),c.pT=!0,f=wN("div","sbsb_e"),c.appendChild(f)),this.va.appendChild(c)):EPa(this,c)&&(b=!0);return b};
n.highlight=function(a){if(a=this.Fa[a]){if(a.Lh()){var b=a.getRootElement().parentNode,c=this.Va;if(b.classList)b.classList.add(c);else if(!DOa(b,c)){var e=SM(b);GOa(b,e+(e.length>0?" "+c:c))}}a=a.getRootElement().id;this.oa.xG(a)}};
function VN(a,b){if(b=a.Fa[b])b=b.getRootElement().parentNode,HOa(b,a.Va)}
n.clear=function(){for(var a,b,c;c=this.Sa.pop();)a=c.getType(),(b=this.Pa[a])||(b=this.Pa[a]=[]),b.push(c),a=c.getRootElement(),a.parentNode.removeChild(a);for(;a=this.va.firstChild;)a=this.va.removeChild(a),a.pT?this.mb.push(a):a!=this.Ca&&a!=this.ya&&this.tb.push(a);this.Ca&&(this.Ca.style.display="none");this.ya&&(this.ya.style.display="none");this.Fa=[]};
n.Lh=function(a){return(a=this.Fa[a])?a.Lh():!1};
n.getRootElement=function(){return this.qa};
function EPa(a,b){var c=b.getType(),e=a.Ra[c];if(!e)return!1;c=(c=a.Pa[c])&&c.pop();if(!c){c=e.createTemplate(a.Ma);var f=c.getRootElement();f.setAttribute("role","option");f.id="sbse"+a.ub;a.ub++}e.render(b,c);a.Sa.push(c);f=c.getRootElement();var h=oQa(a);h.appendChild(f);if(b.getIndex!==void 0){a.Fa.push(c);var k=a.Ia;var l=b.getIndex();a.o.XS&&(f.onmouseover=function(){FPa(a.Ha,l)},f.onmouseout=function(){IPa(a.Ha)});
var p=c.getRootElement();p.onclick=function(r){a.oa.oa.blur();b.oa&&PN(a.oa,b.ma);IPa(a.Ha);var t=a.Ha;t.ua=t.o=l;r=r||zN(p).event;e.o(r,b,a.Ma)}}else k=a.La;
lPa(h,k);return!0}
function yO(a,b,c,e){var f=wN("input");f.type="button";f.value=cN(b);f.onclick=function(){a.Ma.search(a.oa.getDisplayValue(),e)};
if(a.o.vS){b="lsb";var h=wN("span");var k=wN("span");h.className="ds";k.className="lsbb";h.appendChild(k);k.appendChild(f)}else b="sbsb_h",h=f;f.className=b;c.appendChild(h)}
function oQa(a){var b=a.tb.pop();if(b)return a.va.appendChild(b),b;b=wN("li");b.className="sbsb_c "+a.o.fH;b.onmousedown=eb(a.LF,a);a.va.appendChild(b);return b}
n.LF=function(a){a=a||zN(this.qa).event;a.stopPropagation?a.stopPropagation():!rN&&oN&&(this.oa.oa.Db=!0);return!1};
function TN(a){if(a.ua){var b=0,c=a.oa.oa.Ca;c&&(b=c.offsetWidth);c=a.ua;a=a.oa.getWidth()-b-3;a>0&&(c.style.width=a+"px")}}
;function zO(){this.ma=147}
u(zO,lN);zO.prototype.setAttributes=function(){this.Ca=document.body};
zO.prototype.setup=function(a){this.ya=a};
zO.prototype.getWidth=function(a){var b=0;a&&(this.o||pQa(this),qQa(this),a in this.ua?b=this.ua[a]:(yN(this.o,bN(a)),this.ua[a]=b=this.o.offsetWidth,yN(this.o,"")));return b};
zO.prototype.getHeight=function(){this.o||pQa(this);qQa(this);this.oa||(yN(this.o,"|"),this.oa=this.o.offsetHeight);return this.oa};
function pQa(a){var b=xN(a.ya.GK),c=b.style;c.background="transparent";c.color="#000";c.padding=0;c.position="absolute";c.whiteSpace="pre";a.o=b;a.o.style.visibility="hidden";a.Ca.appendChild(a.o)}
function qQa(a){var b=Date.now();if(!a.qa||a.qa+3E3<b){a.qa=b;b=a.o;var c=zN(b);b=(b=c.getComputedStyle?c.getComputedStyle(b,""):b.currentStyle)?b.fontSize:null;a.va&&b==a.va||(a.ua={},a.oa=null,a.va=b)}}
;function rQa(){iN.call(this);this.set(191,new qO);this.set(150,new rO);this.set(146,new dQa);this.set(147,new zO);jN(this,149,new HN);this.set(145,new XN);this.set(117,new YN);this.set(494,new $N);this.set(374,new aO);this.set(120,new bO);this.set(121,new iO);this.set(553,new jO);this.set(124,new mO);this.set(125,new nO);this.set(123,new kO);this.set(126,new oO);this.set(127,new pO);this.set(115,new IN);this.set(118,new KN);this.set(128,new RN);jN(this,154,new WN);this.set(116,new tO);this.set(119,
new wO);this.set(129,new xO)}
u(rQa,iN);function sQa(){return{Wo:function(){return{clientName:"hp",eG:"hp",LQ:"google.com",hN:"",nE:"en",OI:"",DU:"",userToken:"",authuser:0,xT:"",kN:"",hJ:!1,fM:"",dG:"",mC:0,transport:null,xN:!1,cqa:!1,aT:!1,aR:!0,mpa:10,YQ:!0,bR:!0,ipa:!1,yR:!1,oT:!1,qT:!1,Kpa:!1,TS:!0,WQ:!1,VS:500,xS:!1,wpa:!0,Apa:!0,fqa:!1,zS:!1,vL:"",Rpa:"//www.google.com/textinputassistant",Spa:"",Upa:7,xpa:!1,ypa:!1,CS:!1,yS:!0,DS:!1,mK:!1,nV:!1,mV:!1,oN:1,JT:!0,fD:!1,uR:!1,eR:!1,vU:10,tS:!1,QU:!0,Si:document.body,JS:!0,iN:null,hR:{},
kpa:{},Xpa:0,zR:!1,bT:!0,nq:!1,ppa:!1,hqa:null,cR:!1,Npa:null,iqa:null,gJ:!1,XS:!0,vQ:!1,lqa:1,QT:!1,searchText:"Search",vR:"I'm  Feeling Lucky",Ei:"",uT:"Learn more",Zpa:"Remove",Ypa:"This search was removed from your Web History",hintText:"",hpa:"Did you mean:",Tpa:"",dqa:"",rqa:"Search by voice",qqa:'Listening for "Ok Google"',pqa:'Say "Ok Google"',epa:"Clear Search",eT:null,fT:0,gT:0,GK:"",fH:"",kb:!1,Tt:"absolute",vS:!1,sS:!1,XL:null,wS:!0,Lx:[0,0,0],XQ:null,OV:null,lQ:[0],gqa:!0,qN:"",PV:"",
NV:"",qpa:null,spa:"",rpa:"",cpa:1,zN:!1,tJ:!1}}}}
;function tQa(a,b,c,e,f){var h=qN?"-moz-":oN?"-ms-":rN?"-o-":sN?"-webkit-":"",k=".gstl_"+e,l=new RegExp("(\\.("+f.join("|")+")\\b)"),p=[];return{addRule:function(r,t){if(b){if(c){r=r.split(",");for(var v=[],y,E=0;y=r[E++];)y=l.test(y)?y.replace(l,k+"$1"):k+" "+y,v.push(y);r=v.join(",")}p.push(r,"{",t,"}")}},
dQ:function(){if(b&&p.length){b=!1;var r=wN("style");r.setAttribute("type","text/css");(a||YM).appendChild(r);var t=p.join("");p=null;r.styleSheet?r.styleSheet.cssText=t:(t=document.createTextNode(t),r.appendChild(t))}},
prefix:function(r,t){var v=r+(t||"");h&&(v+=t?r+h+t:h+r);return v}}}
;function uQa(a,b,c){this.oa=a;this.Ia=b;this.La=c;this.ma=-1;this.Ha=!1}
n=uQa.prototype;n.install=function(a){if(!this.Ha){a=vQa(a);this.ma<0&&(this.ma=wQa(a));var b=vN(this.oa),c=xQa(this),e=!!b.getElementById("gs_id"+this.ma),f=this,h=["gssb_c","gssb_k","sbdd_a","sbdd_c","sbib_a"];a.qN&&h.push(a.qN);h=tQa(a.iN,a.JS,a.cR,this.ma,h);this.Ca=a.nq;this.o=new kN(this.Ia,this.La,{eQ:function(){return e},
get:function(k){return b.getElementById(k+f.ma)},
IJ:function(k){return b.getElementById(k)},
tpa:function(){return null},
ED:function(){return c},
getId:function(k){return k+f.ma},
aS:function(){return f.oa}},h,this,a);
this.o.get(347);this.qa=this.o.get(130);this.o.get(115);this.va=this.o.get(117);this.o.get(123);this.ya=this.o.get(118);this.Fa=this.o.get(119);this.o.get(374);this.o.get(120);this.o.get(189);this.o.get(553);this.o.get(419);this.Ma=this.o.get(126);this.ua=this.o.get(128);this.o.get(139);this.Pa=this.o.get(121);yQa(this);this.Ha=!0}};
n.activate=function(a){this.deactivate();a=vQa(a);this.Ca=a.nq;this.o.activate(a)};
n.deactivate=function(){this.o.deactivate()};
n.isActive=function(){return!!this.o&&this.o.isActive()};
n.focus=function(){this.Fa.focus()};
n.blur=function(){this.Fa.blur()};
n.PJ=function(){return mPa()};
n.getId=function(){return this.ma};
n.getDisplayValue=function(){return this.ya.getDisplayValue()};
n.setSuggestions=function(a,b){yPa(this.ya,a||"");this.ua.isEnabled()&&this.ua.setSuggestions(a,b,!1)};
n.search=function(a,b){this.Pa.search(a,b)};
n.nq=function(){return this.Ca||!!this.qa&&this.qa.nq()};
function wQa(a){a=zN(a.iN||YM);a.nextSearchboxId==void 0&&(a.nextSearchboxId=50);return a.nextSearchboxId++}
function xQa(a){if(a.oa)for(a=a.oa;a=a.parentNode;){var b=a.dir;if(b)return b}return"ltr"}
function vQa(a){a=ZOa(a);var b=a.vL;b?a.vL=b.toLowerCase():a.zS=!1;a.fD&&!a.uR&&(a.fD=!1);fPa||(a.qT=!1);return a}
function yQa(a){var b=zN(a.oa),c=nPa(b);a.va.listen(b,"resize",function(){var e=nPa(b);if(e.jt!=c.jt||e.qK!=c.qK)c=e,MN(a.va,8)})}
;function AO(a,b,c){yu.call(this);this.ya=c!=null?eb(a,c):a;this.va=b;this.Ha=eb(this.kO,this);this.ma=!1;this.oa=0;this.ua=this.o=null;this.qa=[]}
jb(AO,yu);n=AO.prototype;n.jO=function(a){this.qa=arguments;this.ma=!1;this.o?this.ua=gb()+this.va:this.o=Tu(this.Ha,this.va)};
n.stop=function(){this.o&&(Ya.clearTimeout(this.o),this.o=null);this.ua=null;this.ma=!1;this.qa=[]};
n.pause=function(){++this.oa};
n.resume=function(){this.oa&&(--this.oa,!this.oa&&this.ma&&(this.ma=!1,this.ya.apply(null,this.qa)))};
n.fe=function(){this.stop();AO.wh.fe.call(this)};
n.kO=function(){this.o&&(Ya.clearTimeout(this.o),this.o=null);this.ua?(this.o=Tu(this.Ha,this.ua-gb()),this.ua=null):this.oa?this.ma=!0:(this.ma=!1,this.ya.apply(null,this.qa))};function BO(){var a=this;this.o=!1;this.ua=null;this.oa=new Su;this.ya=new TC;this.ma=new AO(function(){var b,c=(b=a.Ca)==null?void 0:Nf(b,67);c&&!a.o&&(b=CO(a))&&b.length!==0&&UC(a.ya,c)},3E3,this)}
u(BO,aPa);n=BO.prototype;
n.install=function(a,b,c,e,f,h,k,l,p,r,t){t=t||"help";this.va=f;this.qa=h;this.Ca=e;f=sQa().Wo();b!="17"&&b!="83757"&&(f.fM=p||"www.google.com");f.clientName=t;f.eG=t;f.OI=t;f.nE=hya(c);p=c.split(/[-_]/g);(p=p.length>1&&p[1].match(/^[a-zA-Z]{4}$/)?p[1]:"")||(p=(c=c.match(/[-_]([a-zA-Z]{2}|\d{3})([-_]|$)/))?c[0].replace(/[_-]/g,""):"");f.hN=p;r?f.XL=r:f.Lx=[8,0,0];f.zN=!0;r=a.closest("header");r!==null&&window.getComputedStyle(r,null).position==="fixed"&&(f.Tt="fixed");r=[0];k&&r.push(79);f.jqa=UOa(r);
r=new rQa;jN(r,156,new FN(b));jN(r,152,new DN(e));jN(r,152,new EN(e));r.set(157,new pPa);this.Fa=new GN(5,k,l);jN(r,122,this.Fa);this.ua=new uQa(a,this,r);this.ua.install(f)};
function CO(a){a=a.ua.Ma.o;return(a&&a.o||[]).filter(function(b){return!!b})}
function DO(a){return CO(a).map(function(b){if(b.getType()==79){var c=b.getParameters(),e=c&&c.getString("t");if(e==="HELP_ARTICLE"||e==="SUPPORT_THREAD")if(c=c&&c.getString("p")||{},c.url)return c.url}return b.ma})}
n.lL=function(a){a.addRule(".sbdd_a","z-index: 1202")};
n.search=function(a,b){b==1&&(this.o=!0);if((b=ON(this.ua.ua))&&b.getType()==79){var c=b.getParameters();b=c.getString("t");c=c.getString("p");this.qa&&this.qa(b,c,a)}else this.va&&this.va(a)};
n.listen=function(a,b){this.oa.listen(a,b)};
n.unlisten=function(a,b){this.ma.stop();this.oa.unlisten(a,b)};
n.fJ=function(){this.o=!0;this.ma.stop();this.oa.dispatchEvent("OSC")};
n.dJ=function(){var a=CO(this);a&&a.length>0&&this.ma.jO();this.oa.dispatchEvent("OSS")};
n.eJ=function(){this.ma.stop();this.oa.dispatchEvent("OSH")};
n.RC=function(){this.ma.stop();this.o=!1};
n.cJ=function(){this.ma.stop();this.o=!1};


