/* 元のURL: https://g.page */
function o2a(a){return CO(a).map(function(b){return b.getParameters()&&b.getParameters().getString("p")&&b.getParameters().getString("p").url||b.ma})}
function SX(a){var b=window.sc_scope;this.ua=a;this.va=b||document;this.ya=this.o=this.oa=null;this.Ca=!1;this.ma=null;this.qa=new FI;p2a(this)}
function p2a(a){a.oa=a.va.querySelector("#gbqf, .gaiabar form, .non-one-bar form, .promoted-search__form");a.o=a.va.querySelector('#gbqfq, .gaiabar form input[name="q"], .non-one-bar input[name="q"], .promoted-search__input');a.oa&&a.o&&(a.oa.id="search-form",a.ma=new BO,a.ma.install(a.o,a.ua.eid,z().lang,new TM(a.ua.pageStrings),a.Fa.bind(a),a.Ha.bind(a),"HELP_ARTICLE SUPPORT_THREAD AUTHORABLE_WORKFLOW HC_ROOT HC_COMMUNITY NEO_SYMPTOM".split(" "),void 0,void 0,"search-form",a.ua.clientName),a.ya=
a.va.querySelector('#gbqfb, .gaiabar form button[role="button"], .promoted-search__search-button'),a.ya&&a.ya.addEventListener("click",function(b){b.preventDefault();this.Fa()}.bind(a)))}
SX.prototype.Fa=function(){var a;if(a=!this.Ca&&this.o.value.trim()!=""){a=this.o.value.trim();var b=om("q");a=!(a!=""&&a==b)}a&&(this.ma.o&&(q2a(this),this.qa.cG(this.o.value,"support-content")),a=this.ma.o?23:22,a===22?window.sc_trackStatsEvent(10,a,this.o.value):window.sc_trackStatsEvent(10,a,this.o.value+"|"+o2a(this.ma).join("|"),r2a(this,this.o.value)),EI(this.o.value),this.oa.submit(),this.Ca=!0)};
SX.prototype.Ha=function(a,b,c){var e=b.url,f=!1,h=!1;q2a(this);this.qa.Mv(c,e,"support-content",function(){h=!0;f&&h&&Km(e)});
window.sc_trackStatsEvent(10,12,this.o.value+"|"+o2a(this.ma).join("|"),r2a(this,c),function(){(f=!0,h)&&Km(e)})};
function q2a(a){a.qa.Nv(DO(a.ma),"support-content")}
function r2a(a,b){var c=CO(a.ma).find(function(e){return e.ma===b});
a=CO(a.ma).length;return c?c.getIndex()+","+a:"-1,"+a}
window.sc_initSearchAutocomplete=function(a){function b(){new SX(a)}
b();window.sc_reinitSearchAutocomplete=b};


