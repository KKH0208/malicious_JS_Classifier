/* 元のURL: https://g.page */
function DEa(){this.o=window.sc_scope||document;var a=z();this.ma=a.fbid;this.oa=a.fbidu;this.ua=new Hv;if(a.ir)a=this.o.querySelector(".user-feedback-link"),UG(this,"#onebar-feedback",this.ma,a,!1),UG(this,".user-feedback-link",this.ma,a,!1);else{a=this.o.querySelector(".feedback-menu");var b=this.o.querySelector(".user-feedback-link");a&&b&&(new rv(a,b),UG(this,".feedback-menu__content-feedback",this.ma,b,!0,".feedback-menu__prompt"),UG(this,".feedback-menu__helpcenter-feedback",this.oa,b,!0,".feedback-menu__prompt"));
EEa(this)}}
function EEa(a){var b=a.o.querySelector("#onebar-feedback"),c=a.o.querySelector(".feedback-dialog");b&&c&&["click","keypress"].forEach(function(e){return b.addEventListener(e,function(f){f.preventDefault();a.ua.open(c).Lp(function(h){h=="next"&&(h=c.querySelector("input[name=feedback-choice]:checked"))&&(h.value=="CONTENT"?Dv({productId:a.ma,onClose:function(){b.focus()},
payload:Fv()}):h.value=="HELPCENTER"&&Dv({productId:a.oa,onClose:function(){b.focus()},
payload:Fv()}))})})})}
function UG(a,b,c,e,f,h){h=h===void 0?"":h;if(c!=0){b=w(a.o.querySelectorAll(b));for(var k=b.next();!k.done;k=b.next()){k=k.value;if(f){var l=void 0,p=void 0;k.setAttribute("aria-label",h?((p=(l=a.o.querySelector(h))==null?void 0:l.textContent)!=null?p:"")+" "+k.textContent:k.textContent)}k.addEventListener("click",function(r){r.preventDefault();Dv({productId:c,onClose:function(){e.focus()},
payload:Fv()})})}}}
window.sc_initFeedback=function(){new DEa};


