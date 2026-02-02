/* 元のURL: https://g.page */
qz.prototype.Xl=ma(19,function(){return Df(this,33)});
lE.prototype.Xl=ma(18,function(){return Df(this,5)});
function wIa(a,b){for(var c=0;a&&c<=5;){if(b(a))return a;a=a.parentNode;c++}return null}
function AI(a){this.Aa=se(a)}
u(AI,eh);AI.prototype.getQuery=function(){return Df(this,2)};
AI.prototype.setQuery=function(a){return ag(this,2,a)};
AI.prototype.Ba=wi(Qqa);function BI(a){this.Aa=se(a)}
u(BI,eh);BI.prototype.Ba=wi(vua);function xIa(){var a=new ez;var b=new BI;b=cg(b,1,1);return of(a,8,fz,b)}
function CI(a,b){window.sc_pageModel=window.sc_pageModel||{};window.sc_pageModel.psd=window.sc_pageModel.psd||[];window.sc_pageModel.psd.push({name:a,value:b})}
function DI(a,b){return b?wIa(a,function(c){return!b||typeof c.className==="string"&&Sb(c.className.split(/\s+/),b)}):null}
function EI(a){var b=b===void 0?dq():b;if(Lw()){a=(new AI).setQuery(a);var c=Mw();a=of(c,3,Iw,a);Nw(a,b)}}
;function FI(a,b){this.o=a===void 0?null:a;window.sc_nullFunction=function(){};
(this.oa=b===void 0?!1:b)&&(window.sc_trackSearchResultEnabledRceTracking=!0);var c,e;this.experimentIds=(e=(c=z())==null?void 0:c.mendel_ids)!=null?e:[];this.transport=yIa(this);this.ma=[]}
function yIa(a){var b,c=((b=z())==null?0:b.au)?z().au:"0",e;(e=a.transport)==null||e.flush();b=Oy(Py(new My(865,c)));c=new Uw;a=Ye(c,1,yd,a.experimentIds,Ad);return Ny(b,a).build()}
n=FI.prototype;n.Mw=function(a){a=new Set([].concat(ya(a),ya(this.experimentIds)));this.experimentIds=[].concat(ya(a));this.transport=yIa(this)};
n.QM=function(){var a=this;if(!this.oa)for(var b=Sm().querySelectorAll("a[data-search-session-id]"),c={},e=0;e<b.length;c={gG:void 0},e++)c.gG=b[e],c.gG.addEventListener("click",function(f){return function(h){return zIa(a,f.gG,h)}}(c))};
n.RM=function(){for(var a=this,b=Sm().querySelectorAll(".search-results-header a"),c={},e=0;e<b.length;c={zE:void 0},e++)c.zE=b[e],c.zE.addEventListener("click",function(f){return function(h){return zIa(a,f.zE,h,"spelling")}}(c))};
function zIa(a,b,c,e){e=e===void 0?"":e;c=AIa(b,c);if(c!==null){var f=om("query")||om("q"),h=b.getAttribute("data-search-session-id");e==="spelling"?(h=b.getAttribute("data-spelling-session-id"),b=b.getAttribute("href"),e=document.querySelector(".results > .heading").getAttribute("data-search-dym-tracking-id"),a.eM(f,b,h,e,c)):(e=om("symptom")!=="",a.Wm(f,h,b.getAttribute("data-search-rank"),b.getAttribute("data-search-result-id"),b.getAttribute("data-search-request-id"),b.getAttribute("data-search-url"),
b.getAttribute("data-search-flow"),b.getAttribute("data-search-ctx"),e,c))}}
function AIa(a,b){function c(){h&&k&&((window.sc_delayLocationHandler=e)?e(f):Km(f))}
if(a.target=="_blank"||b.shiftKey||b.ctrlKey||b.metaKey)return null;var e=window.sc_delayLocationHandler,f,h=!1,k=!1;window.sc_delayLocationHandler=function(){h=!0;c()};
return function(l){k=!0;f=l;c()}}
n.Wm=function(a,b,c,e,f,h,k,l,p,r){GI(this,h,function(){var t=HI(p?15:6,b,k,l);var v=t.setQuery(a);v=Yf(v,11,Number(c));var y=mz(kz(lz(new jz,e),f),3);v=nf(v,jz,43,y);ag(v,8,h);return t},r)};
n.eM=function(a,b,c,e,f){GI(this,b,function(){return null},f)};
n.cG=function(a,b,c){GI(this,"",function(){var e=HI(24,z().visit_id,b);e.setQuery(a);return e},c)};
n.Mv=function(a,b,c,e){GI(this,b,function(){var f=HI(31,z().visit_id,c),h=f.setQuery(a);ag(h,8,b);return f},e)};
n.Nv=function(a,b){II(this,function(){var c=HI(47,z().visit_id,b),e=a.join("|");ag(c,8,e);return c},"sc_nullFunction")};
function GI(a,b,c,e){e&&e instanceof Function?(window.sc_searchMetricsLinkCallback=function(){e(b)},II(a,c,"sc_searchMetricsLinkCallback")):II(a,c,"sc_nullFunction")}
function II(a,b,c){b=b();var e,f=(e=b)==null?void 0:e.Xl();f!=="help"&&f!=="help.mobile"&&f!=="help.ios"&&(b=null);e=b;e=e===void 0?null:e;var h,k;b=((h=z())==null?void 0:h.ge)=="asxvmprobertest@gmail.com"||((k=z())==null?void 0:k.ge)=="smart.journey.prober@gmail.com";var l,p,r;h=((l=z())==null?void 0:l.rs)===8||((p=z())==null?void 0:p.rs)===3||((r=z())==null?void 0:r.rs)===93;if((a.oa||Vm("initializeMojoMetrics")==="true")&&!b||h){if(e)if(a.o&&a.o.qa)a.o.gK(jc(e.Ba(),4),a.experimentIds);else if(h)a.ma.push(e);
else{var t;(t=a.transport)==null||t.dispatch(e)}if(c)window[c]()}}
n.aA=function(a){II(this,function(){var b=HI(28,z().visit_id,z().flow);b.setUrl(a);return b},"sc_nullFunction")};
n.cA=function(a){II(this,function(){var b=HI(23,z().visit_id,z().flow);ag(b,8,a);return b},"sc_nullFunction")};
n.Ov=function(a,b,c,e,f,h,k){e=e||om("query")||om("q");h=h||om("symptom")!=="";II(this,function(){var l=HI(h?13:14,a,f,k),p=l.setQuery(e),r=c.join("|");ag(p,8,r);p=xIa();p=nz(mz(kz(new jz,b).setTimestamp(kj()),1),p);nf(l,jz,43,p);return l},"sc_nullFunction")};
n.bA=function(){II(this,function(){return HI(218,z().visit_id,z().flow)},"sc_nullFunction")};
function JI(a,b,c){c=c===void 0?0:c;II(a,function(){var e=HI(b,z().visit_id,z().flow);c&&cg(e,27,c);return e},"sc_nullFunction")}
n.ws=function(){JI(this,201)};
n.vs=function(){JI(this,45,8)};
n.us=function(){JI(this,46,8)};
n.ys=function(){JI(this,45,9)};
n.xs=function(){JI(this,46,9)};
n.ns=function(){JI(this,45,10)};
n.ls=function(){JI(this,46,10)};
n.dA=function(a,b,c,e,f,h){h=h===void 0?15:h;II(this,function(){var k=HI(h,a),l=mz(lz(kz(new jz,b),c),3);nf(k,jz,43,l);e!==void 0&&Yf(k,11,Number(e));f!==void 0&&ag(k,8,f);return k},"sc_nullFunction")};
function HI(a,b,c,e){var f,h,k,l,p,r,t,v,y,E,oa=new qz,ra=(f=z())==null?void 0:f.client_type;f=cg(oa,39,ra);oa=(h=z())==null?void 0:h.mobile_client_version;h=Yf(f,23,oa);f=((k=z())==null?void 0:k.rs)===8||((l=z())==null?void 0:l.rs)===3||((p=z())==null?void 0:p.rs)===93?(r=z())==null?void 0:r.mobile_device_locale:(t=z())==null?void 0:t.lang;k=ag(h,42,f);c=ag(k,33,c||"support-content");k=(v=z())==null?void 0:v.hc;v=ag(c,44,k);c=(y=z())==null?void 0:y.mobile_network_type_enum;y=cg(v,28,c);b=ag(y,5,
b);a=cg(b,25,a).setUrl(void 0).Yc((E=z())==null?void 0:E.vid);var Aa,Ba;if(((Aa=z())==null?void 0:(Ba=Aa.mobile_app_package_name)==null?void 0:Ba.length)>0){var Ha;E=(Ha=z())==null?void 0:Ha.mobile_app_package_name;ag(a,2,E)}var Na,Va;if(((Na=z())==null?void 0:(Va=Na.mobile_app_version)==null?void 0:Va.length)>0){var cb;Ha=(cb=z())==null?void 0:cb.mobile_app_version;ag(a,32,Ha)}(e=e||BIa())&&ag(a,4,e);(e=Number(Vm("productEscalationsId")))&&Yf(a,45,e);return a}
function BIa(){var a,b=(a=z())==null?void 0:a.query_params.find(function(c){return c.key=="ec"});
return b?b.value:""}
n.flush=function(){var a;(a=this.transport)==null||a.flush()};
FI.prototype.reportSearchResultsFeatureClick=FI.prototype.dA;FI.prototype.reportNewDealChatClicked=FI.prototype.ls;FI.prototype.reportNewDealChatDisplayed=FI.prototype.ns;FI.prototype.reportNewDealTfnClicked=FI.prototype.xs;FI.prototype.reportNewDealTfnDisplayed=FI.prototype.ys;FI.prototype.reportNewDealEmailClicked=FI.prototype.us;FI.prototype.reportNewDealEmailDisplayed=FI.prototype.vs;FI.prototype.reportNewDealRequested=FI.prototype.ws;FI.prototype.reportBackendExperimentIds=FI.prototype.bA;
FI.prototype.reportImpressions=FI.prototype.Ov;FI.prototype.reportOpenedToArticle=FI.prototype.cA;FI.prototype.reportArticleHelpLinkClicked=FI.prototype.aA;FI.prototype.reportAutocompleteImpressions=FI.prototype.Nv;FI.prototype.reportAutocompleteClick=FI.prototype.Mv;FI.prototype.reportAutocompleteSearch=FI.prototype.cG;FI.prototype.reportSpellingClick=FI.prototype.eM;FI.prototype.reportClick=FI.prototype.Wm;FI.prototype.setUpMojoReportingForSpelling=FI.prototype.RM;
FI.prototype.setUpMojoReportingForSearchResults=FI.prototype.QM;FI.prototype.addClearExperimentIds=FI.prototype.Mw;var KI;hb("hcfe.MojoMetrics",FI);window.sc_initMojoMetrics=function(){KI||(KI=new FI,KI.QM(),KI.RM(),window.sc_trackSearchResultImpressions=window.sc_trackSearchResultEnabledRceTracking?window.sc_nullFunction:KI.Ov.bind(KI))};


