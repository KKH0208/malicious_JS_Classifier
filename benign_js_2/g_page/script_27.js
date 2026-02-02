/* 元のURL: https://g.page */
function VU(a){this.Aa=se(a)}
u(VU,eh);function qXa(a,b){return $f(a,1,b)}
VU.prototype.Bg=function(){return Tf(this,2)};
VU.prototype.Yc=function(a){return $f(this,2,a)};
function rXa(a,b){return ag(a,3,b)}
;VU.prototype.Ba=wi([0,Rh,-1,x]);function WU(a){this.ma=a;this.o=[];this.ua="hidden";this.qa=this.Af=this.oa=0;sXa(this)}
function sXa(a){if(a.ma.delays!=-1){for(var b=a.ma.delays.split(","),c=0;c<b.length;c++)a.o.push(parseInt(b[c],10));b="";c=["moz","ms","webkit"];for(var e=0;e<c.length;e++){b=c[e];var f=b+"Hidden";typeof document[f]!="undefined"&&(a.ua=f)}document.addEventListener(b+"visibilitychange",a.Ca.bind(a));XU(a,a.o[0]);document.addEventListener("pjaxunload",function(){tXa(this);this.o=[]}.bind(a));
z().enable_footprints_set_time_on_page_logging&&window.addEventListener("beforeunload",a.va.bind(a))}}
function uXa(a){var b=z().vid,c=z().title||z().html_title||"",e=rXa(qXa(new VU,a).Yc(b),c);new Promise(function(f,h){zm({endpoint:"settimeonpage",httpMethod:"POST",params:{v:1},requestBody:e.serialize(),qd:function(){h()},
Zm:!0})})}
WU.prototype.va=function(){uXa(this.o[0]||0)};
WU.prototype.Ca=function(){document[this.ua]?this.Af&&(z().enable_footprints_set_time_on_page_logging&&this.va(),tXa(this)):!this.Af&&this.o.length>0&&XU(this,this.qa)};
function XU(a,b){a.oa=Date.now()+b;a.Af=window.setTimeout(a.ya.bind(a),b)}
function tXa(a){a.qa=a.oa-Date.now();window.clearTimeout(a.Af);a.Af=0}
WU.prototype.ya=function(){window.sc_trackStatsTimeOnPage({top:this.o[0]||0,page_view_id:z().pvid});var a=this.o.shift();this.o.length>0?XU(this,this.o[0]-a):this.Af=0};
window.sc_initTopTimer=function(a){new WU(a)};


