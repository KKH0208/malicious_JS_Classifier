/* 元のURL: https://g.page */
function QF(a){this.Aa=se(a)}
u(QF,eh);QF.prototype.Ba=wi([0,bi,hi]);function RF(a){this.Aa=se(a)}
u(RF,eh);RF.prototype.getCaseId=function(){return Df(this,1)};var FCa=[0,hi,si,-1,hi,mj,si,hi,-1];RF.prototype.Ba=wi(FCa);function SF(a){this.Aa=se(a)}
u(SF,eh);SF.prototype.Ba=wi([0,ji,FCa]);function GCa(){var a=a===void 0?dq():a;var b;return Ra(function(c){try{return b=new QF,c.return(a.post({endpoint:"caseslist",queryParams:{v:"1"},request:b,response:SF}))}catch(e){return c.return(new SF)}})}
;var HCa=new Map([[1,"gm/chat"],[2,"gm/email"],[3,"gm/account_circle"],[4,"gm/phone"],[5,"gm/play_arrow"]]);function TF(a){var b=a.cases;var c=a.caseHistoryTextSnippets;a=a.enableFeedbackButton;A.call(this,"sc.case_history.CaseHistory");this.isCollapsed=!0;this.cases=b.filter(function(e){return Ef(e,6)===2});
this.caseHistoryTextSnippets=c;this.enableFeedbackButton=a}
u(TF,A);TF.prototype.content=function(){var a=this;this.cases.length&&(this.element("div","class","root",function(){a.element("div","class","title-container",function(){a.element("div","class","title","role","heading",(new fp("{NUM_CASES, plural, =1 {Recent case}other {Recent cases}}")).format({NUM_CASES:a.cases.length}));a.cases.some(function(b){return Ef(b,6)===2})&&a.element("div","class","subtitle",(new fp("{NUM_CASES, plural, =1 {We're working on this support case for you}other {We're working on these support cases for you}}")).format({NUM_CASES:a.cases.length}))});
ICa(a);JCa(a)}),kp(4,this.cases.map(function(b){return b.getCaseId()}).join(","),150))};
function ICa(a){a.ma=a.element("div","tabindex","0","class","card",function(){var b=a.cases.slice(0,a.isCollapsed?1:5);b=w(b);for(var c=b.next(),e={};!c.done;e={Bv:void 0},c=b.next())e.Bv=c.value,a.element("div","class","container",function(f){return function(){KCa(a,{channel:Ef(f.Bv,3),FU:Df(f.Bv,8),productName:Df(f.Bv,7)});LCa(a,f.Bv)}}(e))})}
function KCa(a,b){var c=b.channel;var e=b.FU;var f;b=(f=HCa.get(c))!=null?f:"gm/announcement";var h=new Co({icon:b});a.element("div","class","icon-container",function(){a.element("div","class","icon-background",function(){a.element("div","class","icon",h)});
a.element("div","class","product-icon-container",function(){a.element("img","class","product-icon","aria-hidden","true","src",e)})})}
function LCa(a,b){var c=So(jf(b,ij,5).getSeconds())*1E3,e=a.caseHistoryTextSnippets.lastUpdated+" "+it({jH:c});a.element("div","class","info",function(){a.element("div","class","details",function(){a.element("span","class","product",Df(b,7));Df(b,4)&&a.element("span","class","aria-hidden","true","separator"," \u22c5 ");a.element("span","class","symptom",Df(b,4));a.element("div","class","case-id",a.caseHistoryTextSnippets.caseId+" "+b.getCaseId());a.element("div","class","update-time-mobile",e)});
var f=Ef(b,6)===2?a.caseHistoryTextSnippets.inProgress:a.caseHistoryTextSnippets.finished;a.element("div","class","status",function(){a.element("div","class","state",f);a.element("div","class","update-time",e)});
a.element("div","class","state-mobile",f)})}
function JCa(a){a.element("div","class","button-container",function(){a.cases.length>1&&MCa(a);a.enableFeedbackButton&&NCa(a)})}
function MCa(a){var b=new Go({text:a.isCollapsed?a.caseHistoryTextSnippets.viewMore:a.caseHistoryTextSnippets.showLess,style:1,wc:!0,trigger:function(){kp(35,"case_history_view_more_button_click",150);a.isCollapsed=!a.isCollapsed;a.Ja();a.ma.focus()},
ariaLabel:a.isCollapsed?"View more recent cases":"Show less recent cases",ariaExpanded:!a.isCollapsed});a.element("div","class","expansion-toggle-button",b)}
function NCa(a){if(z().lang==="en"){var b={surveyPositioning:function(f,h){return{anchor:4,verticalMargin:a.o.getBoundingClientRect().top+a.o.getBoundingClientRect().height,horizontalMargin:a.o.getBoundingClientRect().left-h.width+a.o.getBoundingClientRect().width}}},c={surveyPositioning:function(){return{anchor:5}}},e=new Go({text:"Give feedback",
style:1,Ib:"color-label",icon:"gm/announcement",trigger:function(){Ut(new Tt,{triggerId:"bRbSQMyPF0mgoFgKhno0NUKWpCY4",vA:ut()?c:b})},
ariaLabel:"Give feedback for recent cases section"});a.o=a.element("div","class","survey-trigger-button",e)}}
;function OCa(a){var b=a.container;var c=a.isAnswerPage;var e=a.caseHistoryTextSnippets;var f=a.enableCaseHistory;var h=a.caseHistoryStudyActive;var k=a.enableFeedbackButton;var l,p,r;return Ra(function(t){if(t.o==1)return Ja(t,2),t.yield(GCa(),4);if(t.o!=2){l=t.ma;if(l===null||!lf(l,RF,1,Oe()).length)return UF(),t.return();c&&PCa();p=lf(l,RF,1,Oe(Sc));r=new TF({cases:p,caseHistoryTextSnippets:e,enableFeedbackButton:k});f?ho(b,function(){r.render()}):h&&(UF(),kp(12,p.map(function(v){return v.getCaseId()}).join(","),
150));
return Ka(t,0)}La(t);UF();Ia(t)})}
function UF(){var a;(a=document.querySelector(".case-history-container"))==null||a.remove()}
function PCa(){var a=document.querySelector(".need-more-help-subtitle");a&&a.remove()}
window.sc_initCaseHistory=function(a){var b=a.isAnswerPage;var c=a.caseHistoryTextSnippets;var e=a.enableCaseHistory;var f=a.caseHistoryStudyActive;var h=a.enableFeedbackButton;var k;return Ra(function(l){k=document.querySelector(".case-history-container");return k===null?l.return():l.yield(OCa({container:k,isAnswerPage:b,caseHistoryTextSnippets:c,enableCaseHistory:e,caseHistoryStudyActive:f,enableFeedbackButton:h}),0)})};


