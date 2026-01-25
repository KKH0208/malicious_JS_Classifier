/* 元のURL: https://g.page */
function lJa(a){switch(a){case 5:case 14:case 193:case 236:case 243:case 247:return"Suspicious payment activity";case 10:case 11:case 12:return"Chargeback request on a legitimate Google Ads balance";case 32:return"Account is operating from a sanctioned country";case 43:case 46:case 219:case 220:case 237:return"Unpaid balance";case 44:case 202:return"Payment cancellation on a legitimate Google Ads balance";case 49:return"Promotion of unauthorized pharmacies";case 51:return"Counterfeit goods";case 61:case 62:case 162:case 194:case 210:case 238:case 239:return"Circumventing systems";
case 152:case 249:case 250:case 251:return"Suspected unauthorized activity in your account";case 198:case 248:case 252:return"Unacceptable business practices";case 213:return"Unfair advantage";case 217:case 244:case 245:case 246:return"Not complying with the Google Ad Grants policy";default:return""}}
;function mJ(a){A.call(this,"sc.ads_account.Status");this.model=a;var b=mJa(a);this.actionUrl="https://ads.google.com/nav/login?dst="+encodeURIComponent("/aw/overview?ocid="+b+"&supportResource=suspension_help");this.watch(a)}
u(mJ,A);function nJa(a){return nJ(a.model)!==0?new bu({message:function(){a.element("div","class","title","To run ads, fix suspended account");var b=lJa(nJ(a.model));a.element("div","class","content",b===""?"Your account is suspended.":"Suspended for: "+b)},
type:Zt,position:"component",qh:{vd:"link",text:"Fix in Google Ads",trigger:a.yd.bind(a)}}):new bu({message:function(){a.element("div","class","content","This account is in good standing")},
type:doa,position:"component"})}
mJ.prototype.content=function(){var a=this;this.element("div","class","root",function(){nJa(a).render()})};
mJ.prototype.yd=function(){es(this.actionUrl,{Cd:!0});kp(35,"account_suspension_notification_click",148)};function oJ(a){var b=a.Os;a=a.model;A.call(this,"sc.ads_account.AdsAccount");this.Os=!1;this.Os=b||!1;pJ(a);this.status=new mJ(a)}
u(oJ,A);oJ.prototype.content=function(){var a=this;this.element("div","class","root",function(){a.Os&&a.element("h2","class","heading","Recommended for you");a.status.render()})};var oJa=[0,bi,hi];function qJ(a){this.Aa=se(a)}
u(qJ,eh);qJ.prototype.getSortOrder=function(){return Ef(this,7)};qJ.prototype.Ba=wi([0,Qh,hi,ei,-2,oJa,si,-1]);function rJ(a){this.Aa=se(a)}
u(rJ,eh);rJ.prototype.getType=function(){return Ef(this,4)};
rJ.prototype.setType=function(a){return dg(this,4,a)};var pJa=[0,Qh,-1,hi,si,Yk,-1,ei,hi];rJ.prototype.Ba=wi(pJa);function sJ(a){this.Aa=se(a)}
u(sJ,eh);sJ.prototype.Ba=wi([0,ji,pJa]);function qJa(){var a=a===void 0?"":a;var b=b===void 0?dq():b;var c;return Ra(function(e){try{return c=new qJ,a!==""&&Xe(c,1,Hd(a),"0"),e.return(b.post({endpoint:"adsaccountlist",queryParams:{v:"1"},request:c,response:sJ}))}catch(f){return e.return(new sJ)}})}
;function tJ(a){var b=a.jq;a=a.Yn;xo.call(this);this.jq=b;this.Yn=a}
u(tJ,xo);tJ.prototype.update=function(a){var b=a.jq;a=a.Yn;this.jq=b;this.Yn=a;this.Da(0)};
function nJ(a){var b;return(b=a.jq)!=null?b:0}
function mJa(a){pJ(a)===0?a="":(a=lf(a.Yn,rJ,1,Oe())[0],a=Ff(a,1));return a}
function pJ(a){return a.Yn?lf(a.Yn,rJ,1,Oe()).length:0}
;function rJa(a,b,c,e){this.model=a;this.Os=b;this.ma=c;this.o=e;this.startTime=Date.now()}
function sJa(a){var b;return Ra(function(c){switch(c.o){case 1:return Ja(c,2),c.yield(qJa(),4);case 4:b=c.ma;Ka(c,3);break;case 2:return La(c),c.return(!1);case 3:var e=a.model;e.Yn=b;e.Da(0);return c.return(pJ(a.model)===1)}})}
rJa.prototype.render=function(a){var b=this,c,e;return Ra(function(f){if(f.o==1)return(c=!(b.ma&&nJ(b.model)!==0))?f.Qa(2):f.yield(sJa(b),3);f.o!=2&&(c=!f.ma);if(c)return a.remove(),f.return();b.o?(e=new oJ({model:b.model,Os:b.Os}),ho(a,function(){e.render()}),tJa(b)):a.remove();
uJa(b);vJa(b);Ia(f)})};
function uJa(a){a=nJ(a.model)+":"+mJa(a.model)+"="+(a.o?"TREATMENT":"CONTROL");kp(12,a,148)}
function tJa(a){a=Date.now()-a.startTime;kp(4,String(a),148)}
function vJa(a){var b={};Ut(new Tt,{triggerId:a.o?"j62ozqRtq0mgoFgKhno0S9VguGbj":"ecnbpKGNj0mgoFgKhno0SZHBh1Cq",enableTestingMode:!1,productData:{experimentIds:Ym(),customData:(b.cid=pJ(a.model)>1?"multi":"single",b)}})}
function wJa(a,b,c,e){var f,h,k;return Ra(function(l){f=document.querySelector(".ads-account-container");if(!f)return l.return();h=new tJ({jq:b});k=new rJa(h,!!a,c,e);return l.yield(k.render(f),0)})}
;function xJa(a){a=a.collapsed;xo.call(this);this.collapsed=a}
u(xJa,xo);function uJ(a){var b=a.wq;var c=a.location;var e=a.sveType===void 0?165:a.sveType;a=a.Io===void 0?!0:a.Io;A.call(this,"sc.ads_notifications.NotificationList");var f=this;this.model=new xJa({collapsed:!0});this.wq=b.map(function(h){var k=h.message,l=h.type,p=h.icon;h=(h=h.qh)?Array.isArray(h)?h.reverse():[h]:[];return new bu({message:k,type:l,icon:p,position:"card",qh:h,color:!1,compact:!0})});
this.location=c;this.id=so();this.o=new Ao({OB:this.id,ariaExpanded:!1,text:this.model.collapsed?"View all "+this.wq.length.toString()+" notifications":"View less",compact:!0,trigger:function(){var h=f.model;h.collapsed=!f.model.collapsed;h.Da(0);f.o.setText(f.model.collapsed?"View all "+f.wq.length.toString()+" notifications":"View less");f.o.jn(!f.model.collapsed);f.o.Bj(f.model.collapsed?"":"View less notifications");kp(f.model.collapsed?3:2,"",f.sveType)}});
this.oa=new Go(this.o);a&&(this.ma=new ou({triggerId:"oqCqxgqer0mgoFgKhno0VJtEAuex",enableTestingMode:z().env!=="PROD"}));this.sveType=e;this.watch(this.model)}
u(uJ,A);uJ.prototype.content=function(){var a=this,b=this.location==="article"&&this.wq.length>1,c={};this.element("ol","class",(c.root=!0,c[this.location]=!0,c.collapsible=b,c.collapsed=b&&this.model.collapsed,c["has-buttons"]=b||this.ma,c),"id",this.id,function(){for(var e=w(a.wq),f=e.next();!f.done;f=e.next())a.element("li",f.value)});
this.element("div","class",{buttons:!0,"article-page-buttons":this.location==="article"},function(){b?a.element("span","class","view-all",a.oa):a.element("span");a.ma&&a.element("span","class","feedback",a.ma)})};function vJ(a){this.Aa=se(a)}
u(vJ,eh);n=vJ.prototype;n.getText=function(){return Df(this,1)};
n.setText=function(a){return bg(this,1,a)};
n.getUrl=function(){return Df(this,2)};
n.setUrl=function(a){return bg(this,2,a)};
n.Jd=function(){return Df(this,3)};
n.Bj=function(a){bg(this,3,a)};
n.getType=function(){return Ef(this,4)};
n.setType=function(a){return dg(this,4,a)};var yJa=[0,hi,-2,si];vJ.prototype.Ba=wi(yJa);function wJ(a){this.Aa=se(a)}
u(wJ,eh);n=wJ.prototype;n.getId=function(){return Df(this,1)};
n.setId=function(a){return bg(this,1,a)};
n.getType=function(){return Ef(this,3)};
n.setType=function(a){return dg(this,3,a)};
n.Ac=function(){return Ef(this,4)};
n.getPriority=function(){return Af(this,5)};
n.setPriority=function(a){return Xe(this,5,zd(a),0)};
n.getTitle=function(){return Df(this,6)};
n.setTitle=function(a){return bg(this,6,a)};var zJa=[0,hi,Uh,si,-1,bi,hi,ji,yJa];wJ.prototype.Ba=wi(zJa);function xJ(a){var b=a.notifications;var c=a.location;var e=a.sveType===void 0?165:a.sveType;a=a.Io===void 0?!0:a.Io;A.call(this,"sc.ads_notifications.AdsNotifications");var f=this;this.location=c;this.sveType=e;b=b.map(function(h){return{message:h.getTitle(),type:AJa(h.Ac()),icon:BJa(h.Ac()),qh:lf(h,vJ,7,Oe()).map(function(k){return{text:k.getText(),ariaLabel:k.Jd(),href:k.getUrl(),target:1,trigger:function(){var l=k.getText();kp(35,'"'+l+'":'+h.getType()+"="+h.Ac(),f.sveType)}}})}});
b.length>0&&(this.o=new uJ({wq:b,location:this.location,sveType:this.sveType,Io:a}))}
u(xJ,A);xJ.prototype.content=function(){var a=this;this.element("div","class","root",function(){a.o&&(a.location==="home"&&a.element("h2","class","heading","Alerts for you"),a.o.render())})};
function AJa(a){switch(a){case 1:return Zt;case 2:return $t;case 3:return au;default:return au}}
function BJa(a){switch(a){case 1:return"gm/error";case 2:return"gm/warning_filled";case 3:return"gm/flag_filled"}}
;function yJ(a){this.Aa=se(a)}
u(yJ,eh);yJ.prototype.Ba=wi([0,ji,zJa]);function CJa(a){a=a===void 0?0:a;var b=b===void 0?dq():b;return Ra(function(c){try{return c.return(b.get({endpoint:"adsnotificationslist",queryParams:{v:"1",max_notifications:a.toString()},response:yJ}))}catch(e){return c.return(new yJ)}})}
;function zJ(a,b,c,e,f,h,k,l){var p=p===void 0?z().ge:p;this.oa=a;this.ua=b;this.location=c;this.sveType=e===void 0?165:e;this.qa=f===void 0?3:f;this.o=h===void 0?"o2x4mBCog0mgoFgKhno0WzuBnvUB":h;this.ma=k===void 0?"PBWSiXCiY0mgoFgKhno0QcgFeQbk":k;this.Io=l===void 0?!0:l;this.gaiaEmail=p;this.startTime=Date.now();this.notifications=[]}
function DJa(a){var b;return Ra(function(c){if(c.o==1)return a.oa?c.yield(CJa(a.qa),2):c.return(!1);b=c.ma;var e=lf(b,wJ,1,Oe(Sc));a.notifications=e;if(!a.notifications.length)return c.return(!1);EJa(a);if(!a.ua)return a.o&&FJa(a.o),c.return(!1);e=Date.now()-a.startTime;kp(4,String(e),a.sveType);a.ma&&FJa(a.ma);GJa();return c.return(!0)})}
zJ.prototype.render=function(a){var b=this,c;return Ra(function(e){if(e.o==1)return e.yield(DJa(b),2);if(!e.ma)return a.remove(),e.return();b.notifications=b.notifications.map(function(f){f.getType()===9&&(f.setTitle("Access to your business profile for "+b.gaiaEmail+" has been suspended because it doesn't follow the guidelines. Edit your business info, and learn how to regain access."),lf(f,vJ,7,Oe())[0].setText("Take action").Bj("Request reinstatement"));return f});
c=new xJ({notifications:b.notifications,location:b.location,sveType:b.sveType,Io:b.Io});ho(a,function(){c.render()});
Ia(e)})};
function EJa(a){var b=a.notifications.map(function(c){return c.getType()+"="+c.Ac()}).join(",");
kp(12,b,a.sveType)}
function FJa(a){Ut(new Tt,{triggerId:a,enableTestingMode:!1,productData:{experimentIds:Ym()}})}
function GJa(){var a;(a=document.querySelectorAll(".warning-bar, .info-bar-container>.notification"))==null||a.forEach(function(b){b.remove()})}
function HJa(a,b,c){var e,f,h;return Ra(function(k){e=document.querySelector(".ads-notifications-container");if(!e)return k.return();f=Vm("AdsNotificationsFeature__enable_feedback")==="true";h=new zJ(a,b,c?"home":"article",165,3,"o2x4mBCog0mgoFgKhno0WzuBnvUB","PBWSiXCiY0mgoFgKhno0QcgFeQbk",f);return k.yield(h.render(e),0)})}
;function IJa(a,b,c){var e,f;return Ra(function(h){e=document.querySelector(".gbp-notifications-container");if(!e)return h.return();f=new zJ(a,b,c?"home":"article",173,1,"","",!1);return h.yield(f.render(e),0)})}
;var JJa=new Set([0,14,1,9]);hb("sc.notifications.initialize",function(a,b,c,e,f,h,k,l,p,r){l=l===void 0?!1:l;p=p===void 0?!1:p;r=r===void 0?"adwords3":r;var t;return Ra(function(v){if(v.o==1)return"bizbuilder"!==r&&"support_content_dev"!==r?v.Qa(2):v.yield(IJa(l,p,k),3);if(v.o!=2)return v.return();t=new tJ({jq:f});return JJa.has(h)?a&&nJ(t)!==0?v.yield(wJa(k,f,a,b),0):c&&h!==9?v.yield(HJa(c,e,k),0):v.Qa(0):v.return()})});


