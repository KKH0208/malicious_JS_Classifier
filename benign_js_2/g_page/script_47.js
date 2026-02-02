/* 元のURL: https://g.page */
function FEa(a){a.o=!0;a.Ja()}
function GEa(a,b){a.filled=b;a.Ja()}
function HEa(a){if(!a.description)throw Error("Description is required for making a headless API submission.");return new Promise(function(b){Ev(Object.assign({},a,{flow:"submit",BC:!1,onClose:b}))})}
function IEa(a){return new Promise(function(b){Ev(Object.assign({},a,{flow:"submit",BC:!0,YU:b}))})}
;var VG=new Ul,JEa="By continuing, you agree Google uses your answers, "+Vl(VG,"a",{"class":"info-link",tabindex:"0"})+"account & system info"+Xl(VG,"a")+" to improve services, per our "+Vl(VG,"a",{"class":"privacy-link",tabindex:"0"})+"Privacy"+Xl(VG,"a")+" & "+Vl(VG,"a",{"class":"tos-link",tabindex:"0"})+"Terms"+Xl(VG,"a")+".",KEa=VG.format(JEa);var WG=[{id:"inaccurate",value:"Inaccurate - doesn't match what I see in the product"},{id:"hard_to_understand",value:"Hard to understand - unclear or translation is wrong"},{id:"information_gaps",value:"Missing info - relevant but not comprehensive"},{id:"irrelevant",value:"Irrelevant - doesn\u2019t match the title and / or my expectations"},{id:"minor_errors",value:"Minor errors - formatting issues, typos, and / or broken links"},{id:"other_suggestions",value:"Other suggestions - ideas to improve the content",
hM:!0}];function XG(a,b,c){var e=a.getBoundingClientRect(),f=e.left,h=e.width;c=LEa(c).map(function(k){return Math.round(f+h*k)}).map(function(k){return document.elementFromPoint(k,b)}).filter(function(k){return k!==null&&k!==a}).filter(function(k){return YG(k)});
return MEa(new Set(c))}
function LEa(a){a<5&&(a=5);for(var b=(.95-.05)/(a-1),c=[.05];c.length<a-1;)c.push(Math.round((c[c.length-1]+b)*100)/100);c.push(.95);return c}
function YG(a){var b=a.getBoundingClientRect(),c=b.height;if(!b.width||!c)return!1;if(a.tagName==="IMG")return!0;a=w(Array.from(a.childNodes));for(b=a.next();!b.done;b=a.next()){b=b.value;if(c=b.nodeType===Node.TEXT_NODE){var e=void 0;c=((e=b.textContent)==null?void 0:e.trim())!==""}if(c)return!0}return!1}
function MEa(a){for(var b=new Set,c=w(a),e=c.next();!e.done;e=c.next()){e=e.value;a:{var f=w(a);for(var h=f.next();!h.done;h=f.next())if(h=h.value,e!==h&&e.compareDocumentPosition(h)&Node.DOCUMENT_POSITION_CONTAINS){f=!0;break a}f=!1}f||b.add(e)}return b}
function NEa(a){return[].concat(ya(a)).map(function(b){if(b.tagName==="IMG")return b.src;var c,e;return(e=(c=b.textContent)==null?void 0:c.replace("||","\\|\\|"))!=null?e:""}).join("||")}
function OEa(a){if(a.dataset.outlined!==void 0)return a.dataset.outlined==="true";var b=a.tagName==="IMG"||gha(window.getComputedStyle(a).backgroundColor).getAlpha()>0;a.dataset.outlined=String(b);return b}
function PEa(a,b){if(!a||a.type==="None")return!1;a=a.rangeCount?a.getRangeAt(0).toString().trim():"";if(!a)return!1;var c=(b.textContent||"").replace(/ +/g," ").replace(/\n+/g,"\n");return a.replace(/ +/g," ").replace(/\n+/g,"\n").split("\n").every(function(e){return c.includes(e)})?!0:!1}
function QEa(a){var b=a.yg;var c=a.jf;var e=a.ah;a=a.ai;return b&&a?"track_with_scroll_stop":b?"track_only":c?e?"selection_fab":"selection_only":"unknown"}
function REa(a){switch(a){case "annotations":return"Annotations";case "pageInformation":return"Page Information";case "browserInformation":return"Browser Information";case "pageStructure":return"Page Structure";case "productInformation":return"Product Information";default:return""}}
function SEa(a){var b=64;b=b===void 0?0:b;var c=a.getBoundingClientRect(),e=c.bottom,f=c.left,h=c.right;c.top>=b&&f>=0&&e<=window.innerHeight&&h<=window.innerWidth||a.scrollIntoView(!1)}
;function ZG(a){var b=a.model;var c=a.PB;var e=a.Xm;var f=a.fq;var h=a.Bi;var k=a.jF;var l=a.kF;a=a.track;A.call(this,"sc.client.feedback.inline.a11y_navigator.HiddenMenu");this.menuItems=[];this.ma=new Map;this.o=0;this.model=b;this.PB=c;this.Xm=e;this.fq=f;this.Bi=h;this.jF=k;this.kF=l;this.track=a}
u(ZG,A);function $G(a){a.o=0;var b;(b=a.menuItems[a.o])==null||b.button.focus()}
function TEa(a){a.o=a.menuItems.length-1;var b;(b=a.menuItems[a.o])==null||b.button.focus()}
ZG.prototype.Rv=function(){var a=this.menuItems[this.o];a&&a.button.focus()};
ZG.prototype.content=function(){var a=this;this.element.apply(this,["div","role","menu","aria-labelledby",this.PB,"class","hidden-menu"].concat(ya(aH(this.model)?[]:["onkeydown",function(b){a:{switch(b.key){case "ArrowUp":if(a.o===0)TEa(a);else{a.o--;var c;(c=a.menuItems[a.o])==null||c.button.focus()}if(a.model.We.o){var e;(e=a.track)==null||bH(e)}break;case "ArrowDown":if(a.o===a.menuItems.length-1)$G(a);else{a.o++;var f;(f=a.menuItems[a.o])==null||f.button.focus()}if(a.model.We.o){var h;(h=a.track)==
null||bH(h)}break;case "End":TEa(a);break;case "Home":$G(a);break;default:break a}b.preventDefault();b.stopPropagation()}}]),[function(){var b=a.Bi.getBoundingClientRect();
a.menuItems.length=0;for(var c=w(a.Xm.elements),e=c.next();!e.done;e=c.next())if(e=e.value,e instanceof HTMLElement){var f=a.fq.get(e);f&&UEa(a,b,e,f)}}]))};
function UEa(a,b,c,e){var f=VEa(b,c);b=f.offsetTop;f=f.offsetLeft;var h=c.getBoundingClientRect();b=a.element("button","class","feedback-button","role","menu-item","tabIndex","-1","aria-description","Give feedback on the selected section.","style",{top:b+"px",left:f+"px",width:h.width+"px",height:h.height+"px"},"onclick",function(k){a.jF(c,k.target)},"onfocus",function(k){var l;
(l=a.kF)==null||l.call(a,c,k.target)});
e.tagName==="IMG"?b.appendChild(e):b.textContent=e.textContent;a.menuItems.push({button:b,oqa:c});a.ma.set(c,b)}
function VEa(a,b){var c=a.top;a=a.left;b=b.getBoundingClientRect();return{offsetTop:b.top-c,offsetLeft:b.left-a}}
;function cH(a){this.Ya=a;this.elements=new Set;this.rows=[]}
cH.prototype.add=function(a){this.elements.add(a)};
function WEa(a){for(var b=a.Ya.getBoundingClientRect().top,c=w(a.elements),e=c.next();!e.done;e=c.next()){e=e.value;var f=e.getBoundingClientRect().top-b;f=Math.floor(f/4);a.rows[f]=a.rows[f]||new Set;a.rows[f].add(e)}a.clear();b=w(a.rows);for(c=b.next();!c.done;c=b.next())if(c=c.value)for(c=w(MEa(c)),e=c.next();!e.done;e=c.next())a.elements.add(e.value)}
cH.prototype.clear=function(){this.elements.clear()};var XEa={yz:function(a){return a}};var YEa=new Map([[1,"inline_feedback_event_submitted"],[2,"inline_feedback_event_failed_submit"]]);function dH(a){a=a===void 0?{}:a;a=a.categories===void 0?WG:a.categories;xo.call(this);this.oa=[];this.text="";this.o=this.ma=!1;this.categories=a}
u(dH,xo);n=dH.prototype;n.getCategories=function(){return this.categories};
function ZEa(a){return{category:a.Ac(),text:a.getText().trim()}}
n.getText=function(){return this.text};
n.setText=function(a){a!==this.text&&(this.text=a,this.Da(0))};
n.Ac=function(){return this.category};
function $Ea(a,b){a.oa=b;a.Da(2)}
function eH(a,b){b!==a.ma&&(a.ma=b,a.Da(3))}
function fH(a,b){b!==a.o&&(a.o=b,a.Da(4))}
n.submit=function(){this.Da(5)};
n.cancel=function(){this.Da(6)};function gH(){xo.call(this);this.visibility=!1;this.cornerPosition={x:0,y:0}}
u(gH,xo);gH.prototype.getVisibility=function(){return this.visibility};
gH.prototype.setVisibility=function(a){this.visibility!==a&&(this.visibility=a,this.Da(0))};function aFa(a){var b=a.jg;var c=a.Ii;a=a.Hi;xo.call(this);this.ma=!1;this.oa=0;this.o=!1;this.jg=b;this.Ii=c;this.Hi=a}
u(aFa,xo);function hH(a,b){a.ma!==b&&(a.ma=b,a.Da(0))}
function iH(a,b){a.oa!==b&&(a.oa=b,a.Da(1))}
;function jH(a,b){switch(a){case "ABANDON_DEFAULT_FLOW":var c=84;var e=9;break;case "ABANDON_CATEGORY_SELECTOR":c=83;e=9;break;case "ABANDON_KEYBOARD_MODE":c=92;e=9;break;case "COMPLETE_FLOW":c=84;e=15;break;case "FAB_IMPRESSION":c=85;e=4;break;case "OPEN_CATEGORY_SELECTOR":c=83;e=18;break;case "OPEN_CATEGORY_SELECTOR_KEYBOARD_MODE":c=91;e=18;break;case "OPEN_DEFAULT_FLOW":c=84;e=18;break;case "OPEN_KEYBOARD_MODE":c=92;e=18;break;case "SELECT_CATEGORY":c=83;e=8;break;case "MOBILE_FAB_IMPRESSION":c=
120;e=4;break;case "MOBILE_ELEMENT_SELECTION":c=121;e=18;break;case "MOBILE_ELEMENT_SELECTED":c=121;e=6;break;case "MOBILE_CATEGORY_SELECTION_BACK":c=122;e=7;break;case "MOBILE_CATEGORY_SELECTION_EXIT":c=122;e=9;break;case "MOBILE_CATEGORY_SELECTION":c=122;e=8;break;case "MOBILE_TEXT_INPUT":c=123;e=18;break;case "MOBILE_FORM_SUBMIT":c=122;e=15;break;case "TEXT_SELECTION_FAB_ABANDON_CATEGORY_SELECTOR":c=125;e=9;break;case "TEXT_SELECTION_FAB_COMPLETE_FLOW":c=126;e=15;break;case "TEXT_SELECTION_FAB_IMPRESSION":c=
127;e=4;break;case "TEXT_SELECTION_FAB_OPEN_CATEGORY_SELECTOR":c=125;e=18;break;case "TEXT_SELECTION_FAB_SELECT_CATEGORY":c=125,e=8}if(c&&e){var f,h;(h=(f=window).sc_trackStatsEvent)==null||h.call(f,c,e,b!=null?b:a)}}
;function kH(a){var b=a.productId;var c=a.bucket;var e=a.zq;var f=a.dg;var h=a.yg;var k=a.jf;var l=a.ah;var p=a.Zg;var r=a.di;var t=a.Sl;var v=a.ai;var y=a.vg;var E=a.ci;var oa=a.Ti;var ra=a.Lq;var Aa=a.wg;var Ba=a.Vi;var Ha=a.Ek;var Na=a.kp;var Va=a.qz===void 0?3E3:a.qz;var cb=a.zv;var sb=a.Xg===void 0?!1:a.Xg;var Cb=a.categories;var $b=a.vr===void 0?{}:a.vr;var Mb=a.jg;var rb=a.Ii;var vb=a.Hi;var fc=a.Pc===void 0?!1:a.Pc;var Fc=a.Oo===void 0?"Give feedback about this article":a.Oo;a=a.Lo===void 0?
"":a.Lo;xo.call(this);var nc=this;this.ma=new Set;this.ua="";this.va=null;this.ya=!1;this.oa=this.qa=this.o=0;this.productId=b;this.bucket=c;this.zq=e;this.dg=f;this.yg=h;this.jf=k;this.ah=l;this.Zg=p;this.di=r;this.Sl=t;this.ai=v;this.vg=y;this.ci=E;this.Ti=oa;this.Lq=ra;this.wg=Aa;this.Vi=Ba;this.Ek=Ha;this.kp=Na;this.qz=Va;this.zv=cb;this.Xg=sb;this.Lo=a;this.experimentArm=QEa({yg:h,jf:k,ah:l,ai:v});this.Pc=fc;this.Oo=Fc;this.Ae=aH(this)&&ut();this.formModel=new dH({categories:Cb});this.Og=new gH;
this.We=new aFa({jg:Mb,Ii:rb,Hi:vb});this.vr=Object.assign({},XEa,$b);this.Ca=an(function(){lH(nc)},300);
this.onChange(2,function(){switch(nc.o){case 2:lH(nc)}});
this.formModel.onChange(5,function(){var gd={category:nc.formModel.Ac(),text:nc.formModel.getText()};gd.category&&bFa(nc,gd)});
this.formModel.onChange(6,function(){mH(nc,0);if(nc.jf){var gd;(gd=window.getSelection())==null||gd.removeAllRanges()}});
this.formModel.onChange(0,this.Ca);this.formModel.onChange(1,function(){if(aH(nc))jH("MOBILE_CATEGORY_SELECTION");else switch(nc.oa){case 1:case 2:jH("SELECT_CATEGORY");break;case 3:jH("TEXT_SELECTION_FAB_SELECT_CATEGORY")}lH(nc)})}
u(kH,xo);kH.prototype.xd=function(){return this.productId};
function nH(a){return a.jf&&a.ah}
function oH(a){return nH(a)||!a.Ek&&a.Zg||z().is_render_api&&a.Sl}
function cFa(a){return!a.Ek&&a.Zg&&a.di}
function aH(a){return a.wg||a.Vi}
kH.prototype.Hh=function(){return this.formModel};
kH.prototype.isDarkMode=function(){return this.Pc};
function pH(a,b,c){var e=a.ma;if(!(c=c===void 0?!1:c)){a:{c=w(e.values());for(var f=c.next();!f.done;f=c.next())if(!b.has(f.value)){e=!1;break a}e=e.size===b.size}c=!e}c&&(a.Da(0),a.ma=b,a.Da(1))}
function qH(a){a.Da(0);a.ma.clear();a.Da(1)}
function mH(a,b){b!==a.o&&(a.qa=a.o,a.o=b,a.Da(2))}
function rH(a,b,c){c=c===void 0?!1:c;var e=new Map(Object.entries(a.zq||{}));Fv().forEach(function(f,h){e.set(h,f)});
return{productId:a.xd(),bucket:a.bucket,payload:dFa(a,e,c,b),description:b.text.trim()||"EMPTY"}}
function dFa(a,b,c,e){b.set("inline_selected_text",eFa(a));b.set("inline_experiment_arm",a.experimentArm);if(e){var f,h;b.set("inline_category",(h=(f=e.category)==null?void 0:f.id)!=null?h:"[Your selection]")}return a.vr.yz(b,c)}
function eFa(a){return a.jf||oH(a)?a.ua:NEa(a.ma)}
function lH(a){a.ya?fFa(a):(a.ya=!0,gFa(a))}
function bFa(a,b){var c;Ra(function(e){if(e.o==1)return mH(a,3),Ja(e,2),e.yield(HEa(rH(a,b,!0)),4);if(e.o!=2)return c=e.ma,e.return(hFa(a,c));La(e);return e.return(hFa(a,!1))})}
function hFa(a,b){return Ra(function(c){b?(mH(a,4),iFa(1),Wm("inline_feedback_submitted_"+Gv())):(mH(a,0),iFa(2),Wm("inline_feedback_failed_submit_"+Gv()));Ia(c)})}
function iFa(a){a=YEa.get(a);a=new CustomEvent(a,{bubbles:!0,cancelable:!0});window.document.body.dispatchEvent(a)}
function fFa(a){if(a.va){var b=a.va.find(function(k){return k.title==="Product Information"});
if(b&&typeof b.data!=="string"){for(var c=new Map([].concat(ya(b.data.entries()))),e=rH(a,ZEa(a.formModel)).payload,f=w(e),h=f.next();!h.done;h=f.next())h=w(h.value).next().value,c.set(h,e.get(h));b.data=c;$Ea(a.formModel,a.va)}}}
function gFa(a){var b;Ra(function(c){if(c.o==1)return c.yield(IEa(rH(a,ZEa(a.formModel))),2);b=c.ma;for(var e=[],f=w(Object.entries(b)),h=f.next();!h.done;h=f.next()){var k=w(h.value);h=k.next().value;k=k.next().value;e.push({title:REa(h),data:k})}a.va=e;$Ea(a.formModel,a.va);Ia(c)})}
;function sH(a){var b=this;var c=a.Ya;var e=a.rd;var f=a.Ec;var h=a.oe;var k=a.onFocus;var l=a.Bz===void 0?function(){}:a.Bz;
var p=a.sF;a=a.track;this.ya="keyboard-navigator-hidden-title-"+no();this.va=new Map;this.fq=new Map;this.qa=function(r){switch(r.key){case "Esc":case "Escape":jFa(b);break;case "Tab":jFa(b)}};
this.ua=function(){for(var r=w(b.model.ma),t=r.next();!t.done;t=r.next()){t=t.value;var v;(v=b.ma)==null?t=0:(t=v.ma.get(t))?(t.focus(),t=!0):t=!1;if(t)break}};
this.oa=!1;this.Bi=c;this.rd=e;this.model=f;this.oe=h;this.onFocus=k;this.Bz=l;this.sF=p;this.track=a;this.Xm=new cH(c);kFa(this)}
n=sH.prototype;
n.init=function(){this.o=this.Bi.cloneNode(!0);this.o.style.position="absolute";this.o.classList.add("keyboard-navigator__navigable-element");var a=this.Bi.getBoundingClientRect(),b=a.height;this.o.style.width=a.width+"px";this.o.style.height=b+"px";aH(this.model)&&(this.o.style.padding="");lFa(this);mFa(this);ut()||(a=document.createElement("h1"),a.classList.add("keyboard-navigator__hidden-title"),a.setAttribute("id",this.ya),a.textContent="Choose a section to give feedback on. Use Up/Down arrow key to select the section in this article you\u2019d like to give feedback on. Press the ESC key to exit feedback mode.",this.o.prepend(a));
if(aH(this.model))this.model.onChange(1,this.ua);else{window.addEventListener("keydown",this.qa);var c;(c=this.o)==null||c.addEventListener("focusout",this.Bz)}this.oa=!0};
n.Ta=function(){tH(this);var a;(a=this.sF)==null||a.call(this)};
n.isActive=function(){return this.oa};
n.Rv=function(){this.isActive&&this.ma&&this.ma.Rv()};
n.render=function(){this.oa||this.init();this.Bi.setAttribute("aria-hidden","true");return this.o};
function tH(a){if(a.oa){if(aH(a.model))zo(a.model,1,a.ua);else{window.removeEventListener("keydown",a.qa);var b;(b=a.o)==null||b.removeEventListener("focusout",a.Bz)}a.o.remove();a.o=void 0;a.ma=void 0;a.va.clear();a.fq.clear();a.Xm.clear();a.Bi.removeAttribute("aria-hidden");a.oa=!1}}
function jFa(a){jH("ABANDON_KEYBOARD_MODE");a.Ta()}
function kFa(a){a.model.onChange(2,function(){switch(a.model.o){case 2:if(a.rd)for(var b=w(Array.from(document.body.children)),c=b.next();!c.done;c=b.next())c=c.value,c!==a.rd&&el(c)&&(c.dataset.originallyHidden=String(c.getAttribute("aria-hidden")==="true"),c.setAttribute("aria-hidden","true"));a.o&&(a.o.style.display="none");break;case 0:if(a.rd)for(b=w(Array.from(document.body.children)),c=b.next();!c.done;c=b.next())if(c=c.value,el(c)){var e=c.dataset.originallyHidden==="true";c.removeAttribute("data-originally-hidden");
e||c.removeAttribute("aria-hidden")}a.o&&(a.o.style.display="block")}})}
function mFa(a){a.ma=new ZG({model:a.model,PB:a.ya,Xm:a.Xm,fq:a.fq,Bi:a.Bi,jF:a.oe,kF:a.onFocus,track:a.track});ho(a.o,function(){var b;(b=a.ma)==null||b.render()})}
function lFa(a){a.o&&(nFa(a.o,a.Bi,function(b,c){a.va.set(b,c);a.fq.set(c,b);if(b instanceof HTMLElement||b instanceof SVGElement)b.tabIndex=-1;if(b=YG(c)){b=c.getBoundingClientRect();var e=b.height;b=b.width>0&&e>0}b&&a.Xm.add(c)}),WEa(a.Xm))}
function nFa(a,b,c){c(a,b);for(var e=0;e<a.children.length;e++)nFa(a.children[e],b.children[e],c)}
;function uH(a){a=a.Ya;this.container=document.createElement("div");this.Ya=a}
uH.prototype.initialize=function(a){var b=this.Ya.parentElement;if(b){var c=this.Ya.nextSibling;this.container.classList.add("inline-feedback__container");this.container.appendChild(this.Ya);a();c?b.insertBefore(this.container,c):b.appendChild(this.container)}return this};
uH.prototype.Ta=function(){var a;(a=this.container.parentElement)==null||a.replaceChild(this.Ya,this.container)};
uH.prototype.getContainer=function(){return this.container};function oFa(a){var b=a.Ya;a=a.dg===void 0?10:a.dg;this.Ya=b;this.dg=a}
function pFa(a,b,c){function e(r){return c?r>=c.Ej&&r<=c.jR:!1}
var f=new Set;e(b)||(f=XG(a.Ya,b,a.dg));if(f.size)return f;var h=a.Ya.getBoundingClientRect(),k=h.top;h=h.bottom;for(var l=b,p=b;b-l<50&&l>k||p<h;){l-=8;p+=8;if(l>k&&!e(l)&&(f=XG(a.Ya,l,a.dg),f.size))break;if(p<h&&!e(p)&&(f=XG(a.Ya,p,a.dg),f.size))break}return f}
;function vH(a){var b=a.Ob;a=a.linkText;A.call(this,"sc.client.feedback.inline.FeedbackLink");this.o=new Co({icon:"gm/announcement"});this.Ob=b;this.linkText=a}
u(vH,A);vH.prototype.getHeight=function(){return this.button?this.button.clientHeight:0};
vH.prototype.focus=function(){var a;(a=this.button)==null||a.focus()};
vH.prototype.content=function(){var a=this;this.element("div","class","root",function(){a.button=a.element("button","class",{"container-button":!0,mobile:ut()},"onclick",a.Ob,function(){a.element("div","class","icon",function(){a.o.render()});
a.element("div","class","text",a.linkText)})})};function wH(a){var b=a.formModel;a=a.Ae;A.call(this,"sc.feedback.inline.form.FormActions");var c=this;this.model=b;a||(this.cancelButton=new Go({text:"Cancel",trigger:function(){c.model.cancel()},
ariaLabel:"Cancel feedback"}));this.submitButton=new Go({text:"Submit",style:4,disabled:!0,trigger:function(){c.model.submit()},
ariaLabel:"Submit feedback"});this.model.onChange(1,function(){return void qFa(c)});
this.model.onChange(0,function(){return void qFa(c)})}
u(wH,A);wH.prototype.content=function(){var a=this;this.element("div","class","root",function(){var b;(b=a.cancelButton)==null||b.render();a.element("div","class","submit-button",function(){a.submitButton.render()})})};
function qFa(a){var b=a.model.Ac();b?(b=!!b.hM&&!a.model.getText().trim(),a.submitButton.setDisabled(b)):a.submitButton.setDisabled(!0)}
;function xH(a){var b=a.formModel;a=a.Ae;A.call(this,"sc.client.feedback.inline.CategorySelector");this.o=[];this.labelId=so();this.model=b;this.Ae=a;this.watch(this.model,1)}
u(xH,A);function yH(a){if(a.o.length){var b;(b=a.o[0].o)==null||b.focus()}}
function rFa(a){a.element("span","id",a.labelId,"class","visually-hidden","What is the issue with this selection?");a.element("div","class","categories","role","radiogroup","aria-labelledby",a.labelId,function(){a.o.length=0;a.model.getCategories().forEach(function(b){return void sFa(a,b)})})}
function sFa(a,b){var c=new Jv,e;c.render({ariaLabel:b.value,text:b.value,selected:b.id===((e=a.model.Ac())==null?void 0:e.id),Pk:function(f){f&&(f=a.model,b!==f.category&&(f.category=b,f.Da(1)))}});
a.o.push(c)}
xH.prototype.content=function(){var a=this;this.element("div","class",{root:!0,mobile:this.Ae},function(){rFa(a)})};function zH(a){var b=a.formModel;a=a.Ae;A.call(this,"sc.feedback.inline.form.FormInputs");var c=this;this.componentId=so();this.oa=so();this.model=b;this.Ae=a;this.ma=new xH({formModel:b,Ae:a});this.o=new lu({De:!0,qr:"Do not share any personal info",Bc:function(){c.model.setText(c.o.getText())},
Kr:5,Uc:[this.oa]});this.model.onChange(1,function(){if(c.model.Ac()){var e=c.model.Ac();e&&c.o.setPlaceholder(e.hM?"Required":"Optional")}else c.o.setPlaceholder("")});
this.model.onChange(0,function(){return void c.o.setText(c.model.getText())})}
u(zH,A);zH.prototype.content=function(){var a=this;this.element("div","class",{root:!0,mobile:this.Ae},function(){a.element("h2","id","inline-feedback-form-heading-"+a.componentId,"class","header-text","What is the issue with this selection?");a.ma.render();a.element("h2","id",a.oa,"class","additional-info","Share additional info or suggestions");a.o.render()})};function AH(a){a=a.Ec;A.call(this,"sc.feedback.inline.form.SelectionPreview");this.model=a}
u(AH,A);AH.prototype.content=function(){var a=this.element("div","class","root");var b=eFa(this.model);b="Give feedback on "+Vl(VG,"em")+'"'+b+'"'+Xl(VG,"em");b=VG.format(b);Ml(a,b)};function BH(a){var b=a.formModel;var c=a.height;var e=a.dF;A.call(this,"hcfe.feedback.inline.ReportData");this.scrolled=!1;this.root=null;this.model=b;this.o=new Go({icon:"gm/arrow_back",style:6,trigger:function(){e()},
ariaLabel:"Go back"});this.height=c;this.watch(this.model,2)}
u(BH,A);BH.prototype.setHeight=function(a){this.height=a;this.Ja()};
function tFa(a){a.element("div","class",{heading:!0,scrolled:a.scrolled},function(){a.o.render();a.element("h2","class","heading__text","Account and system info")})}
function uFa(a,b){a.element("div","class","section",function(){a.element("h3","class","section__title",b.title);if(typeof b.data==="string")vFa(a,null,b.data);else for(var c=w(b.data.entries()),e=c.next();!e.done;e=c.next()){var f=w(e.value);e=f.next().value;f=f.next().value;vFa(a,e,f)}})}
function vFa(a,b,c){a.element("div","class","section__data",function(){b&&a.element("p","class","section__data-key",b);Array.isArray(c)?a.element("ul","class","section__data-value",function(){for(var e=w(c),f=e.next();!f.done;f=e.next())a.element("li",String(f.value))}):a.element("p","class","section__data-value",String(c))})}
BH.prototype.content=function(){var a=this;this.root=this.element("div","class","root","style",{height:(this.height/16).toFixed(2)+"rem"},"onscroll",function(){a.root&&(a.root.scrollTop>0&&!a.scrolled?(a.scrolled=!0,a.Ja()):a.root.scrollTop===0&&a.scrolled&&(a.scrolled=!1,a.Ja()))},function(){tFa(a);
for(var b=w(a.model.oa),c=b.next();!c.done;c=b.next())uFa(a,c.value)})};function CH(a){var b=a.GC;a=a.language===void 0?"en":a.language;A.call(this,"hcfe.feedback.inline.LegalText");this.GC=b;b=a.split("-");this.languageCode=b.length!==2?a:b[0]+"-"+b[1].toUpperCase()}
u(CH,A);function wFa(a,b){b=b.querySelector(".info-link");b instanceof HTMLAnchorElement&&(yl(b,"#"),b.addEventListener("click",function(c){c.preventDefault();a.GC()}))}
CH.prototype.content=function(){var a=this.element("div","class","root");Ml(a,KEa);wFa(this,a);var b=a.querySelector(".privacy-link");b instanceof HTMLAnchorElement&&(yl(b,"https://myaccount.google.com/privacypolicy?hl="+this.languageCode),b.setAttribute("target","_blank"));a=a.querySelector(".tos-link");a instanceof HTMLAnchorElement&&(yl(a,"https://policies.google.com/terms?hl="+this.languageCode),a.setAttribute("target","_blank"))};function DH(a){a=a.Ec;A.call(this,"hcfe.feedback.inline.Form");var b=this;this.formElement=null;this.formModel=a.Hh();this.o=new BH({formModel:this.formModel,dF:function(){eH(b.formModel,!1);yH(b.formInputs.ma)},
height:0});this.Ae=a.Ae;this.formInputs=new zH({formModel:this.formModel,Ae:this.Ae});this.ma=new wH({formModel:this.formModel,Ae:this.Ae});this.oa=new CH({GC:function(){b.formElement&&(b.o.setHeight(b.formElement.offsetHeight),eH(b.formModel,!0),b.o.o.focus())},
language:z().lang});this.Ae&&(this.va=new AH({Ec:a}));this.qa=new np;this.watch(this.formModel,3).watch(this.formModel,4)}
u(DH,A);function xFa(a){a.Ae&&(a.formElement=a.element("form",function(){a.element("div","class","form-top",function(){a.element("div","class","selection-preview",function(){var b;(b=a.va)==null||b.render()});
a.formInputs.render()});
a.element("div","class","form-bottom",function(){a.element("div","class","form-actions",function(){a.ma.render()});
a.oa.render()})}))}
function yFa(a){a.Ae?xFa(a):a.formElement=a.element("form",function(){a.element("div","class","wrapper",function(){a.formInputs.render();a.ma.render()});
a.oa.render()})}
DH.prototype.content=function(){var a=this;this.element("div","class",{root:!0,mobile:this.Ae,desktop:!this.Ae},function(){a.formModel.ma?a.o.render():yFa(a);a.formModel.o&&a.element("div","class","spinner-container",function(){a.qa.render()})})};function zFa(a){var b=a.surveyId;var c=a.enableTestingMode;a=a.lN;this.surveyId=b;this.enableTestingMode=c;this.lN=a!=null?a:new Tt}
zFa.prototype.initialize=function(a,b,c){c=c===void 0?{}:c;var e=c.surveyClosed===void 0?function(){}:c.surveyClosed;
Ut(this.lN,{triggerId:this.surveyId,enableTestingMode:this.enableTestingMode,vA:{surveyPositioning:function(){return{anchor:4,horizontalMargin:a,verticalMargin:b}},
surveyClosed:function(){e()}},
productData:{customData:Object.fromEntries(c.productSpecificData===void 0?new Map:c.productSpecificData)}})};function EH(a){var b=a.Ec;var c=a.xp===void 0?zFa:a.xp;var e=a.track;var f=a.kb===void 0?!1:a.kb;a=a.nF;this.model=b;this.xp=c;this.kb=f;this.track=e;this.nF=a;this.model.Ti||(this.popup=AFa(this),this.form=new DH({Ec:this.model}));BFa(this)}
function CFa(a){if(!a.model.Ti){if(!a.rd){a.rd=document.createElement("div");a.rd.classList.add("inline-feedback__popup-container");a.rd.setAttribute("role","dialog");var b,c;a.rd.setAttribute("aria-labelledby",(c=(b=a.form)==null?void 0:"inline-feedback-form-heading-"+b.formInputs.componentId)!=null?c:"");ho(a.rd,function(){var e;return void((e=a.popup)==null?void 0:e.render())})}return a.rd}}
EH.prototype.open=function(){if(this.model.Ti)DFa(this);else{var a;if((a=this.popup)!=null){var b=this.track?this.track.Yk.root:void 0;a.open({anchor:b,xe:Math.max(Math.floor(window.innerHeight/2)-288,64)})}var c;(c=this.form)!=null&&yH(c.formInputs.ma)}};
EH.prototype.close=function(){var a;(a=this.popup)==null||a.close();var b;(b=this.nF)==null||b.call(this)};
function BFa(a){a.model.onChange(2,function(){switch(a.model.o){case 0:var b;(b=a.form)!=null&&eH(b.formModel,!1);a.close();break;case 2:a.open();break;case 3:fH(a.model.Hh(),!0);break;case 4:if((b=a.form)!=null){var c=b.formModel;void 0!==c.category&&(c.category=void 0,c.Da(1));fH(b.formModel,!1);eH(b.formModel,!1);b.formModel.setText("")}fH(a.model.Hh(),!1);a.close()}})}
function DFa(a){var b,c=(b=a.track.Yk.root)==null?void 0:b.getBoundingClientRect().x;a.o=new a.xp({surveyId:a.model.kp,enableTestingMode:a.model.Lq});b=dFa(a.model,new Map,!0);var e;(e=a.o)==null||e.initialize(c,Math.max(Math.floor(window.innerHeight/2)-288,64),{surveyClosed:function(){mH(a.model,0)},
productSpecificData:b})}
function AFa(a){return new Ys({content:function(){var b;(b=a.form)==null||b.render()},
onClose:function(){a.model.o!==4&&mH(a.model,0)},
rc:nH(a.model)?7:a.kb?3:1,tc:5})}
;function FH(a){var b=a.vc;var c=a.Og;var e=a.Ob===void 0?null:a.Ob;a=a.kb===void 0?!1:a.kb;A.call(this,"sc.feedback.inline.TextSelectionFab");this.vc=b;this.Og=c;this.Ob=e;this.kb=a;this.button=new Yr({icon:"gm/announcement",Jf:20,qv:!0,tabIndex:-1,size:28,By:!0});this.watch(this.Og,[1,0])}
u(FH,A);FH.prototype.getTop=function(){var a=this.Og.cornerPosition.y-28+4,b=-this.vc.getContainer().getBoundingClientRect().y;return Math.floor(Math.max(b,a))+"px"};
FH.prototype.getLeft=function(){var a=this.Og.cornerPosition.x;if(this.kb){a-=28;var b=-this.vc.getContainer().getBoundingClientRect().x;return Math.floor(Math.max(b,a))+"px"}b=this.vc.getContainer().getBoundingClientRect().right-28;return Math.floor(Math.min(b,a))+"px"};
FH.prototype.content=function(){var a=this,b=this.Og.getVisibility()?"root":"root hidden";b=this.element("div","class",b,"aria-hidden","true","style",{position:"absolute",left:this.getLeft(),top:this.getTop()},"onclick",this.Ob,function(){a.button.render()});
(new at({text:"Give feedback",trigger:b})).render()};function GH(a){var b=this;var c=a.vc;var e=a.Ec;a=a.kb;this.vc=c;this.model=e;this.kb=a;this.o=function(f){return void EFa(b,f)};
oH(this.model)&&(this.ma=new FH({vc:c,Og:this.model.Og,Ob:function(){b.model.oa=3;mH(b.model,2)},
kb:a}))}
GH.prototype.initialize=function(){window.addEventListener("mouseup",this.o);return this};
GH.prototype.Ta=function(){window.removeEventListener("mouseup",this.o)};
function FFa(a){var b=document.createElement("div");b.classList.add("inline-feedback__text-selection-fab");ho(b,function(){a.ma&&a.ma.render()});
return b}
function EFa(a,b){if(a.model.o===0){var c=b.clientY;requestAnimationFrame(function(){if(a.model.o===0)if(oH(a.model)){var e=window.getSelection(),f=PEa(e,a.vc.Ya),h;if(h=e)if(e.rangeCount&&e.getRangeAt(0).getClientRects().length){h=!1;var k=Infinity,l=-Infinity,p=-Infinity,r=Infinity;var t=e.getRangeAt(0);var v=t.startContainer,y=t.endContainer;if(v.nodeType===Node.TEXT_NODE&&v===y)t=[].concat(ya(t.getClientRects()));else{var E=[];if(v.nodeType===Node.TEXT_NODE){v=E.push;var oa=v.apply,ra=t.startContainer,
Aa=new Range;Aa.setStart(ra,t.startOffset);Aa.setEndAfter(ra);oa.call(v,E,ya(Aa.getClientRects()))}y.nodeType===Node.TEXT_NODE&&(y=E.push,v=y.apply,oa=t.endContainer,ra=new Range,ra.setStartBefore(oa),ra.setEnd(oa,t.endOffset),v.call(y,E,ya(ra.getClientRects())));for(y=[t.commonAncestorContainer];y.length;)if(v=y.pop()){oa=new Range;oa.selectNode(v);if(ra=v.nodeType===Node.TEXT_NODE)c:{Aa=t;try{if(Aa.compareBoundaryPoints(Range.START_TO_START,oa)>0||Aa.compareBoundaryPoints(Range.END_TO_END,oa)<0){ra=
!1;break c}}catch(Ba){ra=!1;break c}ra=!0}ra&&E.push.apply(E,ya(oa.getClientRects()));if(v.childNodes)for(v=w(v.childNodes),oa=v.next();!oa.done;oa=v.next())oa=oa.value,t.intersectsNode(oa)&&y.push(oa)}t=E}t=w(t);for(E=t.next();!E.done;E=t.next())E=E.value,E.right-E.left<1||(h=!0,Math.abs(E.top-k)<=6?(k=Math.min(E.top,k),l=Math.max(E.right,l),p=Math.max(E.bottom,p),r=Math.min(E.left,r)):E.top<k&&(k=E.top,l=E.right,p=E.bottom,r=E.left));h=h?{top:k,right:l,bottom:p,left:r}:null}else h=null;e&&f&&h&&
(GFa(a,h),k=a.model,e=e.toString().trim(),e!==k.ua&&(k.ua=e));a.model.Og.setVisibility(f&&!!h)}else h=window.getSelection(),f=PEa(h,a.vc.Ya),h&&f&&(iH(a.model.We,c),e=a.model,h=h.toString().trim(),h!==e.ua&&(e.ua=h)),hH(a.model.We,f)})}}
function HFa(a,b){var c=b.getBoundingClientRect(),e=(b.textContent||"").trim().length>0;if(c&&e){GFa(a,c);var f=a.model;b=(b.textContent||"").trim();b!==f.ua&&(f.ua=b)}a.model.Og.setVisibility(e&&!!c)}
function GFa(a,b){var c=a.vc.getContainer(),e=(a.kb?b.left:b.right)-c.getBoundingClientRect().x;b=b.top-c.getBoundingClientRect().y;a=a.model.Og;if(a.cornerPosition.x!==e||a.cornerPosition.y!==b)a.cornerPosition={x:e,y:b},a.Da(1)}
;function HH(a){var b=a.We;var c=a.jg;var e=a.Ob===void 0?null:a.Ob;var f=a.kb===void 0?!1:a.kb;a=a.Opa;A.call(this,"hcfe.feedback.inline.TrackButton");this.offset=0;this.root=null;this.model=b;this.jg=c;this.kb=f;this.Ob=e;this.button=a!=null?a:new Yr({icon:"gm/announcement",oz:!0,qv:!0,tabIndex:-1});this.watch(this.model,0)}
u(HH,A);HH.prototype.getTranslateY=function(){return"translateY("+Math.floor(this.offset-20)+"px)"};
HH.prototype.getTranslateX=function(){return"translateX("+Math.floor(this.jg-20)*(this.kb?-1:1)+"px)"};
HH.prototype.content=function(){var a=this;this.root=this.element("div","class","root","aria-hidden","true","style",{transform:this.getTranslateX()+" "+this.getTranslateY(),visibility:this.model.ma?"visible":"hidden"},"onclick",this.Ob,function(){a.button.render()})};function IFa(a){var b=this;var c=a.We;var e=a.kb;var f=a.Zs===void 0?!0:a.Zs;var h=a.xz;var k=a.mF;var l=a.Fv;var p=a.Hm;var r=a.Yk;a=a.zV;this.model=c;this.kb=e;this.Zs=f;this.mF=k;this.Fv=l;this.Hm=p;this.o=JFa(this);this.Yk=r!=null?r:new HH({jg:this.model.jg,Ob:h,kb:this.kb,We:c});this.ma=new Kv({content:function(){KFa()},
Th:!1,Gl:"placement-start",xq:"alignment-center",style:"style-accented"});this.oa=function(){bH(b)};
this.qa=a;LFa(this)}
function MFa(a){a.qa&&(Ko("sc-if-tooltip-seen-storage-key")?a.model.o&&(a.ma.open(),GEa(a.Yk.button,!0),a.o.addEventListener("mousemove",a.oa)):(a.ma.open(),a.ua||(a.ua=function(){a.ma.close();Jo("sc-if-tooltip-seen-storage-key",!0)},setTimeout(a.ua,1E4))))}
function bH(a){var b=a.model;b.o!==!1&&(b.o=!1,b.Da(2));GEa(a.Yk.button,!1);a.ma.close();a.o.removeEventListener("mousemove",a.oa)}
function JFa(a){var b=document.createElement("div");b.classList.add("inline-feedback__track");b.style.position="absolute";b.style.top="0";b.style.bottom="0";b.style.width=a.model.jg+"px";var c,e=(c=a.model.Ii)!=null?c:a.model.jg*-1;b.style[a.kb?"left":"right"]=e+"px";b.style.zIndex="1";return b}
function LFa(a){a.o.addEventListener("mouseenter",function(){a.mF&&a.mF()});
a.o.addEventListener("mousemove",function(b){a.Zs&&(iH(a.model,b.clientY),a.Hm&&a.Hm(b))});
a.o.addEventListener("mouseleave",function(){a.Fv&&a.Fv()});
a.model.onChange(0,function(){a.model.ma?MFa(a):a.ma.close()});
a.model.onChange(1,function(){a:{var b=a.model.oa,c=b,e=a.o.getBoundingClientRect(),f=Math.round(e.top);e=Math.round(e.bottom);if(b<f||b>e){if(a.Zs){hH(a.model,!1);break a}c=Math.abs(Math.round(f-b))<Math.abs(Math.round(e-b))?f:e}b=c-f;c=a.Yk;c.offset=b;c.Ja();Lv(a.ma,{xe:b})}})}
IFa.prototype.render=function(){var a=this;ho(this.o,function(){a.Yk.render();ko("div","style",{top:"-35px",left:a.model.jg+10+"px",position:"absolute",pointerEvents:"none"},function(){a.ma.render()})});
return this.o};
function KFa(){ko("div","style",{width:"160px"},function(){$n("Choose a section to give feedback on")})}
;function IH(a){var b=this;var c=a.Ya;var e=a.Ec;var f=a.scope===void 0?document.body:a.scope;var h=a.kb===void 0?!1:a.kb;var k=a.track;var l=a.Yj;var p=a.Kw;a=a.xp;this.ua={x:0,y:0};this.va=!0;this.qa=!1;this.scope=f;this.kb=h;this.model=e;this.vc=new uH({Ya:c});if(!e.Ek&&e.Zg||z().is_render_api&&e.Sl?0:e.yg||e.jf&&!nH(e)||e.ai||e.vg||e.Ti)this.track=k!=null?k:NFa(this);this.ya=new EH({Ec:this.model,track:this.track,kb:h,xp:a,nF:function(){b.qa||b.Yj.focus();b.qa=!1}});
this.Yj=l!==void 0?l:OFa(this,this.model.Oo);this.Kw=p!=null?p:sH;this.o=PFa(this);this.Ha=new oFa({dg:this.model.dg,Ya:c});if(this.model.jf||oH(this.model))this.ma=new GH({vc:this.vc,Ec:this.model,kb:h});this.Ia=an(function(r){r&&jH("FAB_IMPRESSION")},300);
this.oa=an(function(){if(b.model.ai){var r;if(r=!b.o.isActive()){var t=b.ua.x;r=b.ua.y;var v=b.vc.Ya.getBoundingClientRect(),y=v.bottom,E=v.right;t=v.left<t&&t<E;r=v.top<r&&r<y&&t}r&&QFa(b,b.ua.y)}},5E3);
this.Fa=function(r){b.ua={x:r.clientX,y:r.clientY};b.oa()};
this.Ca=function(r){b.va&&(b.La=r.target)};
RFa(this)}
IH.prototype.initialize=function(){var a=this,b;(b=this.ma)==null||b.initialize();this.model.ai&&(window.addEventListener("mousemove",this.Fa),window.addEventListener("scroll",this.oa),this.vc.Ya.addEventListener("mouseenter",this.oa));window.addEventListener("focusout",this.Ca);this.vc.initialize(function(){var c=a.model;(c.Ek&&c.vg||cFa(a.model)||z().is_render_api&&a.model.Sl)&&a.vc.getContainer().appendChild(SFa(a));a.track&&a.vc.getContainer().appendChild(a.track.render());oH(a.model)&&a.ma&&
a.vc.getContainer().appendChild(FFa(a.ma));(c=CFa(a.ya))&&document.body.appendChild(c)});
TFa(this);return this};
IH.prototype.Ta=function(){var a;(a=this.ma)==null||a.Ta();tH(this.o);this.model.ai&&(window.removeEventListener("mousemove",this.Fa),window.removeEventListener("scroll",this.oa),this.vc.Ya.removeEventListener("mouseenter",this.oa));window.removeEventListener("focusout",this.Ca);this.vc.Ta()};
function UFa(a){return Ra(function(b){return b.return(new Promise(function(c){JH(a.model.ma,2);setTimeout(function(){c()},4E3)}))})}
function RFa(a){a.model.onChange(0,function(){var b=a.model.ma;b!=null&&b.size&&JH(b,0)});
a.model.onChange(1,function(){var b=a.model.ma;(b==null?0:b.size)?(hH(a.model.We,!0),JH(b,1)):hH(a.model.We,!1)});
a.model.onChange(2,function(){return void VFa(a)});
a.model.We.onChange(0,function(){a.Ia(a.model.We.ma)});
a.model.Og.onChange(0,function(){a.model.Og.getVisibility()&&jH("TEXT_SELECTION_FAB_IMPRESSION")})}
function TFa(a){var b=a.Yj.getHeight(),c;var e=(c=a.model.We.Hi)!=null?c:0;if(a.model.vg){var f;(f=a.track)!=null&&f.o.style.setProperty("margin-bottom",b+e+"px")}else{var h;(h=a.track)!=null&&h.o.style.setProperty("margin-bottom",e+"px")}}
function SFa(a){var b=document.createElement("div");ho(b,function(){a.Yj.render()});
return b}
function WFa(a,b,c){SEa(b);pH(a.model,new Set([b]));if(a.track){var e=b.getBoundingClientRect();QFa(a,Math.floor((e.top+e.bottom)/2));var f;(f=a.track)!=null&&FEa(f.Yk.button);var h=function(){var k;(k=a.track)!=null&&FEa(k.Yk.button);c.removeEventListener("blur",h)};
c.addEventListener("blur",h)}a.ma&&cFa(a.model)&&HFa(a.ma,b)}
function QFa(a,b){iH(a.model.We,b);hH(a.model.We,!0)}
function VFa(a){var b;return Ra(function(c){if(c.o==1){switch(a.model.o){case 0:qH(a.model);(b=a.La)==null||b.focus();a.va=!0;if(a.model.qa===2)switch(a.model.oa){case 1:case 2:jH("ABANDON_CATEGORY_SELECTOR");break;case 3:jH("TEXT_SELECTION_FAB_ABANDON_CATEGORY_SELECTOR")}break;case 2:a.va=!1;switch(a.model.oa){case 1:jH("OPEN_CATEGORY_SELECTOR_KEYBOARD_MODE");break;case 2:jH("OPEN_CATEGORY_SELECTOR");break;case 3:jH("TEXT_SELECTION_FAB_OPEN_CATEGORY_SELECTOR")}hH(a.model.We,!1);a.model.Og.setVisibility(!1);
a.o.Ta();break;case 4:return c.Qa(2)}return c.Qa(0)}if(c.o!=4){switch(a.model.oa){case 1:case 2:jH("COMPLETE_FLOW");break;case 3:jH("TEXT_SELECTION_FAB_COMPLETE_FLOW")}return c.yield(XFa(a),4)}mH(a.model,0);return c.Qa(0)})}
function XFa(a){return Ra(function(b){if(b.o==1){switch(a.model.oa){case 1:case 2:return b.Qa(2)}return b.Qa(0)}return b.o!=4?(setTimeout(function(){iu().open({message:"Thank you for your feedback",Hq:4E3})},100),b.yield(UFa(a),4)):b.Qa(0)})}
function NFa(a){var b={zV:a.model.ci,Zs:!1,xz:function(){a.model.oa=2;mH(a.model,2);a.qa=!0},
kb:a.kb,We:a.model.We,Fv:function(){},
Hm:function(){}};
a.model.yg&&(b.Zs=!0,b.Fv=function(){a.model.o===0&&qH(a.model)},b.Hm=function(c){if(a.model.o===0){var e=void 0,f;
if(f=(f=a.model.Lo)?document.querySelector(f):null)e=f.getBoundingClientRect(),e={Ej:Math.round(e.top),jR:Math.round(e.bottom)};a.o.isActive()&&tH(a.o);c=pFa(a.Ha,c.clientY,e);pH(a.model,c)}});
return new IFa(b)}
function OFa(a,b){return new vH({linkText:b,Ob:function(){var c=a.model.We;c.o!==!0&&(c.o=!0,c.Da(2));a.vc.getContainer().appendChild(a.o.render());c=a.o;if(!aH(c.model)){var e=c.Bi.firstElementChild,f=c.o.children[1];e&&f&&(e=e.getBoundingClientRect().top-f.getBoundingClientRect().top,e===0||Number.isNaN(e)||(c.o.style.top=e+"px"))}c=a.o;if(c.o){var h;(h=c.ma)==null||$G(h)}}})}
function PFa(a){return new a.Kw({Ya:a.vc.Ya,oe:function(){a.model.oa=1;mH(a.model,2)},
Ec:a.model,onFocus:function(b,c){WFa(a,b,c)},
sF:function(){a.model.o!==2&&(qH(a.model),a.Yj.focus())},
rd:CFa(a.ya),track:a.track})}
function JH(a,b){a=w(a);for(var c=a.next();!c.done;c=a.next()){c=c.value;var e="";switch(b){case 1:e=OEa(c)?"inline-feedback__blue-outline":"inline-feedback__highlight";break;case 2:e=OEa(c)?"inline-feedback__blue-outline--blink":"inline-feedback__highlight--blink"}c.classList.remove("inline-feedback__highlight","inline-feedback__blue-outline","inline-feedback__highlight--blink","inline-feedback__blue-outline--blink");e&&c.classList.add(e)}}
;function YFa(a){return[].concat(ya(a)).map(function(b){return b.getBoundingClientRect()})}
;var ZFa={width:0,height:0,top:0,bottom:0,left:0,right:0};function KH(a){var b=a.Ec;a=a.Ya;A.call(this,"sc.feedback.inline.mobile_dom.ElementHighlight");var c=this;this.o=ZFa;$Fa(a);this.model=b;this.Ya=a;this.ma=function(){return void aGa(c)};
this.model.onChange(1,this.ma);this.model.ma.size&&aGa(this)}
u(KH,A);KH.prototype.content=function(){var a=this;this.model.ma.size&&this.element("div","class","root","style",{transform:["translateX(-50%)","translateY("+(this.o.top-this.Ya.getBoundingClientRect().top)+"px)"].join(" ")},function(){a.element("div","class","box",function(){a.element("div","class","top");a.element("div","class","middle","style",{transform:"scaleY("+(a.o.height-8)+")"});a.element("div","class","bottom","style",{transform:"translateY("+(a.o.height-4-2)+"px)"})})})};
KH.prototype.onDetach=function(){zo(this.model,1,this.ma)};
function aGa(a){if(a.model.ma.size){var b=YFa(a.model.ma);var c=Infinity;var e=-Infinity,f=-Infinity,h=Infinity;b=w(b);for(var k=b.next();!k.done;k=b.next())k=k.value,c=Math.min(c,k.top),e=Math.max(e,k.right),f=Math.max(f,k.bottom),h=Math.min(h,k.left);c={width:e-h+12,height:f-c+12,top:c-6,bottom:f+6,right:e+6,left:h-6}}else c=ZFa;a.o=c;a.Ja()}
function $Fa(a){var b=window.getComputedStyle(a).position;b!=="relative"&&console.error("Expected contentElement "+a+" to be relatively positioned. Instead received "+b)}
;function bGa(a){this.Ya=a.Ya}
function cGa(a){var b=null,c=Infinity,e=null,f=-Infinity;dGa(a.Ya,function(h){if(h!==a.Ya&&YG(h)){var k=h.getBoundingClientRect(),l=k.top;k=k.bottom;l<=c&&(c=l,b=h);k>=f&&(f=k,e=h)}});
return{eW:b,rQ:e}}
function dGa(a,b){b(a);a=w(a.children);for(var c=a.next();!c.done;c=a.next())dGa(c.value,b)}
;function LH(a){var b=a.Ya;a=a.Ec;this.o={paddingTop:"",paddingBottom:"",paddingLeft:"",paddingRight:"",marginTop:"",marginBottom:"",background:""};this.ma=!1;this.Ya=b;this.model=a;this.oa=new bGa({Ya:b})}
LH.prototype.initialize=function(a){a=a===void 0?{}:a;a=a.pK===void 0?0:a.pK;if(!this.ma){this.o={paddingTop:this.Ya.style.paddingTop,paddingBottom:this.Ya.style.paddingBottom,paddingLeft:this.Ya.style.paddingLeft,paddingRight:this.Ya.style.paddingRight,marginTop:this.Ya.style.marginTop,marginBottom:this.Ya.style.marginBottom,background:this.Ya.style.background};var b=cGa(this.oa),c=b.eW;b=b.rQ;var e=c?Number(window.getComputedStyle(c).marginTop.replace("px","")):0,f=b?Number(window.getComputedStyle(b).marginBottom.replace("px",
"")):0;c=eGa({target:c})-e;b=eGa({target:b})-f;this.model.Vi?this.Ya.style.paddingTop=a+16+"px":(this.Ya.style.paddingTop=c+"px",this.Ya.style.paddingBottom=b+"px");this.Ya.style.paddingLeft="16px";this.Ya.style.paddingRight="16px";this.Ya.style.marginTop="0px";this.Ya.style.marginBottom="0px";this.model.Vi||this.model.isDarkMode()||(a=Math.floor(Math.floor(window.innerHeight/2)/this.Ya.getBoundingClientRect().height*100),this.o.background=this.Ya.style.background,this.Ya.style.background="linear-gradient(0deg, rgba(232,240,254,1) 0%, rgba(255,255,255,1) "+
(a+"%, rgba(255,255,255,1) ")+(100-a+"%, rgba(232,240,254,1) 100%)"));this.ma=!0}};
LH.prototype.Ta=function(){this.ma&&(this.Ya.style.paddingTop=this.o.paddingTop,this.Ya.style.paddingBottom=this.o.paddingBottom,this.Ya.style.paddingLeft=this.o.paddingLeft,this.Ya.style.paddingRight=this.o.paddingRight,this.Ya.style.marginTop=this.o.marginTop,this.Ya.style.marginBottom=this.o.marginBottom,this.Ya.style.background=this.o.background,this.ma=!1)};
function eGa(a){var b=a.target;a=a.frameHeight===void 0?window.innerHeight:a.frameHeight;var c=Math.floor(a/2);if(!b||b.getBoundingClientRect().height===0)return c;b=b.getBoundingClientRect().height;return b>a?c:c-Math.floor(b/2)}
;function MH(a){var b=a.Ec;a=a.Nr;A.call(this,"sc.feedback.inline.mobile_dom.MobileFab");var c=this;this.ma=new Set;this.o=!1;this.model=b;this.Xg=this.model.Xg;this.stats=a;this.watch(this.model,2);this.qa=function(){c.model.o===0&&fGa()&&gGa(c)};
this.ya=function(){c.model.o===0&&(c.o&&gGa(c),c.oa())};
this.va=function(){c.model.o===0?c.oa():c.o=!1};
this.oa=Vr(function(){jH("MOBILE_FAB_IMPRESSION","INACTIVITY_"+c.model.qz);fGa()||!0===c.o||(c.o=!0,c.Ja())},this.model.qz);
this.Xg||this.oa()}
u(MH,A);MH.prototype.content=function(){var a=this;if(this.Xg?this.model.o===1:this.model.o===0||this.model.o===1)this.root=this.element("div","class","root","aria-hidden","true","ontransitionend",function(){!a.Xg&&a.model.o===1&&hGa(a)},"style",{transform:this.getTranslateY()},function(){a:switch(a.model.o){case 1:var b="gm/arrow_forward";
break a;case 0:b="gm/announcement";break a;default:b=""}b&&(new Yr({icon:b,trigger:function(){switch(a.model.o){case 0:mH(a.model,1);break;case 1:mH(a.model,2)}}})).render()}),this.Xg?hGa(this):(window.addEventListener("scroll",this.qa),window.addEventListener("touchmove",this.ya),this.model.onChange(2,this.va))};
MH.prototype.onDetach=function(){this.Xg||(window.removeEventListener("scroll",this.qa),window.removeEventListener("touchmove",this.ya),zo(this.model,2,this.va))};
function hGa(a){a=w(a.ma);for(var b=a.next();!b.done;b=a.next())b=b.value,b()}
MH.prototype.getTranslateY=function(){switch(this.model.o){case 1:return this.model.wg?"translateY(-"+Math.floor(window.innerHeight/2)+"px) translateY(50%)":"translateY(100%) translateY(1rem)";case 0:if(this.o){var a=this.model.zv;return a!==void 0?"translateY(-"+a+"px)":"translateY(-1rem)"}return"translateY(100%) translateY(1rem)";default:return""}};
function fGa(){return document.body.scrollHeight>window.innerHeight?window.scrollY+window.innerHeight>=document.body.scrollHeight:!1}
function gGa(a){!1!==a.o&&(a.o=!1,a.Ja())}
;function NH(a){a=a.Ec;A.call(this,"sc.feedback.inline.mobile_dom.MobileHeader");this.model=a;this.watch(this.model,2)}
u(NH,A);NH.prototype.content=function(){var a=this;this.root=this.element("div","class",{root:!0,"with-description":this.model.o!==2},function(){iGa(a);jGa(a);kGa(a)})};
function iGa(a){a.model.o===2&&a.element("button","class","back-button","type","button","aria-label","Go back to select an element","onclick",function(){mH(a.model,1)},function(){(new Co({icon:"gm/arrow_back",
Bb:!0})).render();(new Do).render()})}
function jGa(a){a.element("div","class","text",function(){a.element("h1",a.model.o===1&&a.model.Vi?"Choose what your feedback is about":"Give Feedback");a.model.wg&&a.model.o!==2&&a.element("p","Scroll to highlight the part your feedback is about, then tap the arrow to continue.")})}
function kGa(a){a.element("button","class","close-button","type","button","aria-label","Exit feedback mode","onclick",function(){mH(a.model,0)},function(){(new Co({icon:"gm/close",
Bb:!0})).render();(new Do).render()})}
;function OH(){this.Aj=0}
OH.prototype.save=function(){this.Aj=window.scrollY};
OH.prototype.clear=function(){this.Aj=0};
OH.prototype.restore=function(){window.scrollTo(0,this.Aj)};
OH.prototype.top=function(){window.scrollTo(0,0)};function PH(a){var b=this;var c=a.Ec;var e=a.Ya;a=a.Mh;this.model=c;this.Mh=a;this.Ya=e;this.ua=new oFa({Ya:e,dg:c.dg});this.o=function(){lGa(b)};
this.ma=function(){return void lGa(b)};
this.oa=function(f){f.stopPropagation();f.preventDefault()}}
PH.prototype.initialize=function(){window.addEventListener("scroll",this.o);this.Mh.ma.add(this.ma);this.Ya.addEventListener("click",this.oa,{capture:!0})};
PH.prototype.Ta=function(){window.removeEventListener("scroll",this.o);this.Mh.ma.delete(this.ma);this.Ya.removeEventListener("click",this.oa,{capture:!0})};
function lGa(a){var b=a.Mh;b.root?(b=b.root.getBoundingClientRect(),b=Math.floor((b.top+b.bottom)/2)):b=void 0;b!==void 0&&(b=pFa(a.ua,b),pH(a.model,b))}
;function QH(){A.call(this,"sc.feedback.inline.mobile_dom.tap_to_select.TapOverlay");this.ma=new Co({icon:"gm/mode_edit",size:20});this.o=new Do}
u(QH,A);QH.prototype.content=function(a){var b=this;var c=(a===void 0?{}:a).Ob;this.element("button","class","root","onclick",function(e){return void(c==null?void 0:c(e))},function(){b.element("div","class","wrapper",function(){b.o.render()})});
this.element("div","class","icon",function(){b.ma.render()})};function RH(a){var b=a.element;a=a.Ec;this.o={display:"",margin:"",position:"",paddingTop:"",paddingBottom:""};b.tagName==="IMG"?(this.image=b,this.element=document.createElement("div")):this.element=b;this.model=a}
RH.prototype.initialize=function(){if(this.image){var a;(a=this.image.parentElement)==null||a.replaceChild(this.element,this.image);this.element.appendChild(this.image)}this.o={display:this.element.style.display,margin:this.element.style.margin,position:this.element.style.position,paddingTop:this.element.style.paddingTop,paddingBottom:this.element.style.paddingBottom};this.element.style.position="relative";a=window.getComputedStyle(this.element);a.display==="inline"&&(this.element.style.display="inline-block");
a.margin==="0px"&&(this.element.style.margin="8px 0px");this.element.style.paddingTop="0";this.element.style.paddingBottom="0";a=this.element.getBoundingClientRect().height;a=Math.max(4,Math.floor((48-a)/2));this.element.style.paddingTop=a+"px";this.element.style.paddingBottom=a+"px";mGa(this);return this};
RH.prototype.Ta=function(){if(this.image){var a;(a=this.element.parentElement)==null||a.replaceChild(this.image,this.element)}this.element.style.margin=this.o.margin;this.element.style.display=this.o.display;this.element.style.position=this.o.position;this.element.style.paddingTop=this.o.paddingTop;this.element.style.paddingBottom=this.o.paddingBottom;this.ma&&(this.ma.remove(),this.ma=void 0)};
function mGa(a){a.ma||(a.ma=document.createElement("div"),ho(a.ma,function(){(new QH).render({Ob:function(b){return void a.yd(b)}})}),a.element.appendChild(a.ma))}
RH.prototype.yd=function(a){a.preventDefault();a.stopPropagation();pH(this.model,new Set([this.element]));mH(this.model,2)};function SH(a){var b=a.Ya;a=a.Ec;this.o=new Map;this.Ya=b;this.model=a}
SH.prototype.initialize=function(){if(this.o.size>0)return this;nGa(this,this.Ya);return this};
SH.prototype.Ta=function(){if(this.o.size>0)for(var a=w(this.o),b=a.next();!b.done;b=a.next())b=w(b.value).next().value,oGa(this,b,!1)};
function nGa(a,b){if(!a.o.has(b))if(b!==a.Ya&&YG(b))oGa(a,b,!0);else{b=w(b.children);for(var c=b.next();!c.done;c=b.next())nGa(a,c.value)}}
function oGa(a,b,c){if(c)a.o.set(b,(new RH({element:b,Ec:a.model})).initialize());else{var e;(e=a.o.get(b))==null||e.Ta();a.o.delete(b)}}
;function TH(a){a=a.dT;this.o=new Map;this.ma=new Map;this.container=a}
TH.prototype.initialize=function(){if(this.o.size)return this;for(var a=this.container;a;){var b=a;this.ma.set(b,{padding:b.style.padding,margin:b.style.margin,width:b.style.width});b.style.padding="0px";b.style.margin="0px";b.style.width="100%";b=a;if(b.parentElement)for(var c=w(b.parentElement.children),e=c.next();!e.done;e=c.next())e=e.value,e!==b&&(this.o.set(e,e.style.display),e.style.display="none");a=a.parentElement}return this};
TH.prototype.Ta=function(){if(this.o.size){for(var a=w(this.ma),b=a.next();!b.done;b=a.next()){b=w(b.value).next().value;var c=this.ma.get(b);c&&(b.style.padding=c.padding,b.style.margin=c.margin,b.style.width=c.width)}a=w(this.o);for(b=a.next();!b.done;b=a.next())c=w(b.value),b=c.next().value,c=c.next().value,b.style.display=c;this.o.clear()}};function UH(a){var b=this;this.model=a=a.Ec;this.formModel=a.Hh();this.ma=function(){b.model.o!==2&&(b.o=void 0);switch(b.model.o){case 0:b.model.qa===2&&jH("MOBILE_CATEGORY_SELECTION_EXIT");break;case 1:switch(b.model.qa){case 0:jH("MOBILE_ELEMENT_SELECTION");break;case 2:jH("MOBILE_CATEGORY_SELECTION_BACK")}break;case 2:b.model.qa===1&&jH("MOBILE_ELEMENT_SELECTED");break;case 4:jH("MOBILE_FORM_SUBMIT")}};
this.oa=function(){return void pGa(b)}}
UH.prototype.initialize=function(){this.model.onChange(2,this.ma);this.formModel.onChange(0,this.oa);return this};
UH.prototype.Ta=function(){zo(this.model,2,this.ma)};
function pGa(a){if(a.formModel.getText().trim()){var b;a.o=(b=a.o)!=null?b:Wr(function(){jH("MOBILE_TEXT_INPUT")});
a.o()}}
;function VH(a){var b=this;var c=a.Ec;var e=a.Ya;var f=a.Pi===void 0?void 0:a.Pi;var h=a.vj;var k=a.Nr;a=a.Aj;this.model=c;this.vc=new uH({Ya:f!=null?f:e});this.Ha=new LH({Ya:f!=null?f:e,Ec:c});this.Nr=k!=null?k:new UH({Ec:c});this.Ia=new TH({dT:this.vc.getContainer()});this.Ca=new sH({Ya:f!=null?f:e,Ec:c,oe:function(){mH(b.model,2)}});
this.vj=h;this.Yj=new vH({Ob:function(){mH(b.model,1)},
linkText:this.model.Oo});this.Aj=a!=null?a:new OH;this.Fa=function(){return void qGa(b)}}
VH.prototype.initialize=function(){var a=this;this.vc.initialize(function(){a.model.vg&&(a.vj?a.vj.appendChild(rGa(a)):a.vc.getContainer().appendChild(rGa(a)));Vm("GseFromFab__enable_gse_fab")!=="true"&&Vm("GseFeature__enable_gse_fab")!=="true"&&sGa(a)});
this.model.onChange(2,this.Fa);this.Nr.initialize();return this};
VH.prototype.Ta=function(){zo(this.model,2,this.Fa);var a;(a=this.ma)==null||a.remove();this.ma=void 0;tGa(this);this.Nr.Ta()};
function rGa(a){a.ma=document.createElement("div");ho(a.ma,function(){a.Yj.render()});
return a.ma}
function qGa(a){return Ra(function(b){if(b.o==1){switch(a.model.o){case 1:uGa(a);vGa(a);var c=a.Ha,e=c.initialize,f,h;var k=(h=(f=a.La.root)==null?void 0:f.getBoundingClientRect().height)!=null?h:0;e.call(c,{pK:k});WH(a,!0);wGa(a);a.model.Vi&&!a.ya&&(a.ya=new SH({Ya:a.vc.Ya,Ec:a.model}),a.ya.initialize());a.vc.getContainer().appendChild(a.Ca.render());a.Aj.top();a.model.qa===2&&(a.Aj.restore(),pH(a.model,a.model.ma,!0));break;case 2:a.Aj.save();xGa(a);break;case 3:fH(a.model.Hh(),!0);break;case 4:return b.Qa(2);
default:a.Aj.clear(),yGa(a)}return b.Qa(0)}if(b.o!=4)return fH(a.model.Hh(),!1),a.Aj.clear(),yGa(a),b.yield(zGa(),4);mH(a.model,0);return b.Qa(0)})}
function xGa(a){uGa(a);WH(a,!1);AGa(a);BGa(a);a.Ca.Ta();requestAnimationFrame(function(){CGa(a)})}
function uGa(a){Vm("GseFromFab__enable_gse_fab")!=="true"&&Vm("GseFeature__enable_gse_fab")!=="true"||sGa(a);a.ma&&(a.ma.style.display="none");a.Ia.initialize();a.vc.getContainer().classList.add("inline-feedback__mobile-container");DGa(a)}
function yGa(a){a.ma&&(a.ma.style.display="block");a.Ia.Ta();a.vc.getContainer().classList.remove("inline-feedback__mobile-container");a.model.o!==2&&a.o&&(a.o.remove(),a.o=void 0);vGa(a);a.Ha.Ta();AGa(a);BGa(a);Vm("GseFromFab__enable_gse_fab")!=="true"&&Vm("GseFeature__enable_gse_fab")!=="true"||tGa(a);a.Ca.Ta();WH(a,!0)}
function WH(a,b){a.vc.Ya.classList.toggle("inline-feedback__content-element-hidden",!b)}
function DGa(a){a.o||(a.o=document.createElement("div"),a.o.classList.add("inline-feedback__mobile-fixed-header"),a.vc.getContainer().insertBefore(a.o,a.vc.getContainer().firstElementChild),ho(a.o,function(){a.La=new NH({Ec:a.model});a.La.render()}))}
function CGa(a){if(!a.oa){a.oa=document.createElement("div");var b=a.o?a.o.getBoundingClientRect().height:0;a.oa.style.height="calc(100vh - "+b+"px)";a.oa.style.marginTop=b+"px";a.vc.getContainer().appendChild(a.oa);a.form=new DH({Ec:a.model});ho(a.oa,function(){a.form.render()});
yH(a.form.formInputs.ma)}}
function vGa(a){a.oa&&(a.oa.remove(),a.oa=void 0)}
function sGa(a){a.Mh&&a.qa||(a.qa=document.createElement("div"),a.vc.getContainer().appendChild(a.qa),ho(a.qa,function(){a.Mh=new MH({Ec:a.model,Nr:a.Nr});a.Mh.render()}))}
function tGa(a){if(a.Mh&&a.qa){var b;(b=a.qa)==null||b.remove();a.qa=void 0;a.Mh=void 0}}
function wGa(a){a.model.wg&&!a.ua&&(a.ua=document.createElement("div"),a.vc.Ya.classList.add("inline-feedback__mobile-content-element"),a.vc.Ya.appendChild(a.ua),ho(a.ua,function(){(new KH({Ec:a.model,Ya:a.vc.Ya})).render()}),EGa(a))}
function AGa(a){a.ua&&(a.vc.Ya.classList.remove("inline-feedback__mobile-content-element"),a.ua.remove(),a.ua=void 0,a.va&&(a.va.Ta(),a.va=void 0))}
function BGa(a){a.ya&&(a.ya.Ta(),a.ya=void 0)}
function EGa(a){!a.va&&a.Mh&&(a.va=new PH({Ec:a.model,Ya:a.vc.Ya,Mh:a.Mh}),a.va.initialize())}
function zGa(){return Ra(function(a){return a.return(new Promise(function(b){iu().open({message:"Thank you for your feedback",Hq:5E3});setTimeout(b,5E3)}))})}
;function XH(a){var b=a.Ya;var c=a.Pi===void 0?void 0:a.Pi;var e=a.vj;var f=a.productId;var h=a.bucket;var k=a.zq;var l=a.jg;var p=a.Ii;var r=a.Hi;var t=a.Zg===void 0?!1:a.Zg;var v=a.di===void 0?!1:a.di;var y=a.Sl===void 0?!1:a.Sl;var E=a.yg===void 0?!0:a.yg;var oa=a.jf===void 0?!1:a.jf;var ra=a.ah===void 0?!1:a.ah;var Aa=a.ai===void 0?!1:a.ai;var Ba=a.vg===void 0?!1:a.vg;var Ha=a.ci===void 0?!1:a.ci;var Na=a.Ti===void 0?!1:a.Ti;var Va=a.Lq===void 0?!1:a.Lq;var cb=a.wg===void 0?!1:a.wg;var sb=a.Vi===
void 0?!1:a.Vi;var Cb=a.kp;var $b=a.zv;var Mb=a.Xg===void 0?!1:a.Xg;var rb=a.dg===void 0?10:a.dg;var vb=a.vr;var fc=a.kb===void 0?!1:a.kb;var Fc=a.Ec;var nc=a.vC;var gd=a.track;var he=a.categories;var mf=a.Oo;var Zf=a.Yj;var ie=a.Lo===void 0?"":a.Lo;var je=a.Kw;a=a.xp;var zf=this.Ek(),ke;this.model=Fc!=null?Fc:new kH({jg:l,Ii:p,Hi:r,productId:f,bucket:h,zq:k,dg:rb,Zg:t,di:v,Sl:y,yg:E,jf:oa,ah:ra,ai:Aa,vg:Ba,ci:Ha,Ti:Na,Lq:Va,wg:cb,Vi:sb,zv:$b,Ek:zf,Xg:Mb,kp:Cb,categories:he,vr:vb,Pc:(ke=z().dark)!=
null?ke:!1,Oo:mf,Lo:ie});this.model.Ae?this.o=new VH({Ec:this.model,Ya:b,Pi:c,vj:e}):z().dt===1&&(this.Ek()||oH(this.model))&&(this.vC=nc!=null?nc:new IH({Ya:b,Ec:this.model,kb:fc,track:gd,Yj:Zf,Kw:je,xp:a}));this.validate()}
XH.prototype.initialize=function(){var a;(a=this.o)==null||a.initialize();var b;(b=this.vC)==null||b.initialize();return this};
XH.prototype.Ta=function(){var a;(a=this.o)==null||a.Ta();var b;(b=this.vC)==null||b.Ta()};
XH.prototype.Ek=function(){return window.matchMedia("(min-width: 978px)").matches};
XH.prototype.validate=function(){if(this.model.Ti&&!this.model.kp)throw Error("Expected a hats survey ID. Instead received "+this.model.kp);};function YH(a){var b=this;var c=c===void 0?XH:c;this.ua=a;this.Ty=c;this.xi={};this.o=null;this.oa=function(){var e;(e=b.o)==null||e.Ta()};
this.ma=function(){b.o=FGa(b)}}
YH.prototype.initialize=function(){this.o=FGa(this);this.o!==null&&(window.addEventListener("before-article-refreshed",this.oa),window.addEventListener("article-refreshed",this.ma))};
YH.prototype.setInlineFeedbackClientParams=function(a){if(this.o)throw Error("Cannot call setInlineFeedbackClientParams() after initialize()");this.xi=a};
function FGa(a){var b=a.xi.productId;b=b?Number(b):z().fbid;var c=a.Ty,e=Object,f=e.assign,h=document.querySelector(".article-content-container");var k=(k=document.querySelector("article.article"))?Number(window.getComputedStyle(k).paddingRight.replace("px","")):0;return(new c(f.call(e,{},{Ya:h,jg:k,productId:b,bucket:a.xi.bucket,zq:a.xi.productSpecificData,kb:z().rtl,Lo:".article-nav"},a.ua))).initialize()}
;window.sc_initArticleInlineFeedback=function(a,b,c,e,f,h,k,l,p,r,t,v,y,E){return new YH({yg:a,Zg:b,jf:c,ah:e,ai:f,vg:h,di:k,Sl:l,ci:p,Ti:v,Lq:y,wg:r,Vi:t,kp:E})};


