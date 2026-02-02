/* 元のURL: https://g.page */
function O$(a){this.o=a}
u(O$,J5);O$.prototype.getId=function(){return this.o.ia()};
O$.prototype.getElement=function(){return this.o.ib()};
O$.prototype.Gb=function(){return null};
function P$(a){this.o=a;this.ma={}}
u(P$,O$);P$.prototype.getChild=function(a){var b=this.ma[a];if(b)return b;if(b=this.o.ja(a)){var c=b.__wc;if(!c)throw Error("No wrapper registered for delegate type.");b=new c(b);return this.ma[a]=b}return null};
function tpb(a){P$.call(this,a)}
u(tpb,P$);n=tpb.prototype;n.getContent=function(){return this.o.ca()};
n.open=function(a){this.o.cf(a)};
n.close=function(a){this.o.cg(a)};
n.getStyle=function(){return this.o.ch()};
n.Eb=function(){return this.o.ck()};
n.jn=function(a){this.o.cl(a)};
function upb(a,b){var c=window.sc_scope,e=this;this.ua=a;this.ya=c||document;this.oa=b;this.o=this.ya.querySelector(".navigation-drawer");this.va=this.ya.querySelector(".hcfe");this.Fa=document.querySelector("#hcfe-content");this.Ca=[].concat(ya(document.querySelectorAll("#hcfe-header > *"))).filter(function(f){return!f.matches(".gaiabar")&&!f.matches(".navigation-drawer")}).concat(this.Fa);
this.ma=null;this.qa=this.Fa.offsetWidth-this.o.clientWidth<771;this.o&&(this.oa&&!this.qa&&vpb(this),wpb(this),xpb(this),ypb(this));this.Ha=function(){e.o.style.visibility="hidden";e.o.removeEventListener("transitionend",e.Ha)}}
function vpb(a){var b=document.querySelector(".gaiabar");b&&["mouseenter","focusin"].forEach(function(c){return b.addEventListener(c,function(){a.o.style.top=b.offsetHeight+"px";a.o.style.height=window.innerHeight-b.clientHeight+"px"})})}
function wpb(a){a.ma=(new nv({className:"navigation-drawer-backdrop",Lw:"navigation-drawer-backdrop--active"})).onClose(function(){return zpb(a)}).setContent(a.o)}
function xpb(a){a.ua.listen("mbc",function(){Apb(a);a.ma.open()})}
function ypb(a){a.o.querySelector(".navigation-drawer__close-button-container button").addEventListener("click",function(){return a.ma.close()})}
function Apb(a){a.o.style.visibility="visible";a.o.classList.add("opened");a.ua.jn(!0);a.oa&&(a.qa?a.o.classList.add("narrow"):(a.va.style.overflowX="hidden",a.Ca.forEach(function(b){b.style.transform="translateX("+a.o.clientWidth/2+"px)"})))}
function zpb(a){a.o.addEventListener("transitionend",a.Ha);a.o.classList.remove("opened");a.ua.jn(!1);a.oa&&(a.qa?a.o.classList.remove("narrow"):(a.Ca.forEach(function(b){b.style.transform="translateX(0)"}),a.va.style.overflowX=""))}
;function Q$(a){this.o=a}
u(Q$,J5);Q$.prototype.getHeight=function(){return this.o.pa()};
Q$.prototype.setBackgroundColor=function(a){this.o.pd(a);return this};function Bpb(a){this.o=a}
u(Bpb,O$);function Cpb(a){this.o=a}
u(Cpb,O$);function Dpb(a){P$.call(this,a);gbar.K.prototype.__wc=Bpb;gbar.L.prototype.__wc=Cpb}
u(Dpb,P$);function R$(a,b){this.o=a;this.ma=b||null}
u(R$,H5);R$.prototype.then=function(a,b,c){var e;a&&(e=Epb(this,a));this.o.aa(e,b,c)};
function Epb(a,b){var c=a.ma;return c?function(e){b.call(this,new c(e))}:b}
;function S$(a){this.o=a;this.ma=null}
u(S$,J5);S$.prototype.PJ=function(){return this.o.ga()};
S$.prototype.Tk=function(a){this.o.gl(a)};
function Fpb(a){a.ma||(a.ma=new Bpb(a.o.gg()));return a.ma}
;function T$(a){this.o=a||gbar.a;this.qa=this.ua=this.oa=this.ma=null}
u(T$,H5);function Gpb(a){a.qa||(a.qa=new R$(a.o.bb(),S$));return a.qa}
T$.Wo=function(){var a="yp";T$.yp&&T$.hasOwnProperty(a)?a=T$.yp:(a=new T$,T$.yp=a);return a};
function U$(){return new Promise(function(a){window.gbar||(window.gbar={});if(window.gbar.a)return a(T$.Wo());(new Promise(function(b){window.gbar.ap=b})).then(function(){return a(T$.Wo())})})}
;function Hpb(a,b,c,e){a=a===void 0?!1:a;b=b===void 0?!1:b;c=c===void 0?!1:c;e=e===void 0?!1:e;this.o=this.ua=null;this.ma=Vm("onebar_redesign")==="true";this.ya=a;this.va=b;this.qa=c;this.oa=e}
function Ipb(a){U$().then(function(c){c.ma||(c.ma=new R$(c.o.bf(),Q$));return c.ma}).then(function(c){a.ua=c;
(c=document.querySelector("#gbwa"))&&c.parentElement&&lm(c.parentElement,"one-bar-widgets-container")});
U$().then(function(c){return Gpb(c)}).then(function(c){c=Fpb(c).getElement();
c.setAttribute("aria-label",Vm("search_help_center"));lm(c,"search-trigger")});
U$().then(function(c){c.oa||(c.oa=new R$(c.o.ba(),tpb));return c.oa}).then(function(c){new upb(c,a.ma)});
if(a.ma){var b=!1;U$().then(function(c){c.ua||(c.ua=new R$(c.o.bd(),Dpb));return c.ua}).then(function(c){a.o=c.getElement();
c=a.o.parentElement;if(a.o&&c){lm(a.o,"one-bar-right-product-controls-container");lm(c,"one-bar-product-controls-parent-container");c=c.parentElement;c.style.minWidth="min-content";b=window.innerWidth<c.clientWidth;a.ya?lm(a.o.querySelector("#material-bar-helpcenter-link"),"active"):a.va?lm(a.o.querySelector("#material-bar-community-link"),"active"):a.qa&&lm(a.o.querySelector("#material-bar-announcements-link"),"active");var e;(c=(e=a.o.querySelector("#notification-overflow-panel-container"))==null?
void 0:e.parentElement)&&lm(c,"material-bar-notifications-container");if(a.oa||b){e=document.querySelector(".gaiabar");var f=e.querySelector(".gaiabar header"),h=a.o.querySelector("#material-bar-nav-links"),k=document.createElement("div");k.appendChild(h);c&&k.appendChild(c);lm(k,"mobile-links");f.appendChild(k);e.style.height=f.clientHeight+"px"}}});
U$().then(function(c){return Gpb(c)}).then(function(c){var e=Fpb(c).getElement(),f=document.querySelector("#material-bar-search-icon"),h=document.createElementNS("http://www.w3.org/2000/svg","svg");
h.setAttribute("viewbox","0 0 18 18");h.setAttribute("aria-hidden","true");var k=document.createElementNS("http://www.w3.org/2000/svg","path");k.setAttribute("d","M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14167 12.375 1.875 11.125C0.625 9.85833 0 8.31667 0 6.5C0 4.68333 0.625 3.15 1.875 1.9C3.14167 0.633332 4.68333 -1.43051e-06 6.5 -1.43051e-06C8.31667 -1.43051e-06 9.85 0.633332 11.1 1.9C12.3667 3.15 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.80833 10.5667 9.675 9.7C10.5583 8.81667 11 7.75 11 6.5C11 5.25 10.5583 4.19167 9.675 3.325C8.80833 2.44167 7.75 2 6.5 2C5.25 2 4.18333 2.44167 3.3 3.325C2.43333 4.19167 2 5.25 2 6.5C2 7.75 2.43333 8.81667 3.3 9.7C4.18333 10.5667 5.25 11 6.5 11Z");
k.setAttribute("fill",Em()?"#CCCDCF":"#4C4D50");h.appendChild(k);f.appendChild(h);var l=c.PJ();f.addEventListener("click",function(){c.Tk(!0);a.o.style.display="none";(a.oa||b)&&e.click();l.focus()});
l.addEventListener("blur",function(){c.Tk(!1);a.o.style.removeProperty("display")})})}}
window.sc_initOneBar=function(a,b,c,e){Ipb(new Hpb(a,b,c,e))};


