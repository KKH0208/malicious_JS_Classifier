/* 元のURL: https://g.page */
function MV(a,b,c){var e=this;this.qa=a;this.o=b;this.ya=c||771;this.oa=0;this.Ca=function(){window.innerWidth>=e.ya&&nYa(e);NV(e)};
var f=window.pageYOffset;this.Fa=function(){var h=window.pageYOffset;(f<e.ma&&h>=e.ma||f>=e.ma&&h<e.ma)&&NV(e);f=h};
oYa(this);nYa(this);NV(this);window.addEventListener("resize",this.Ca);window.addEventListener("scroll",this.Fa)}
function nYa(a){var b=a.qa.getBoundingClientRect();a.ua=window.pageYOffset+b.top;a.va=document.body.scrollHeight-(a.ua+a.qa.offsetHeight);a.ma=Math.max(a.ua-a.oa,a.ua+a.o.offsetHeight+a.va-window.innerHeight);a.o.style.left=b.left+"px"}
function NV(a){var b=window.innerHeight-a.oa-a.va,c=a.o.offsetHeight>=b;c=window.pageYOffset>=a.ma&&window.innerWidth>=a.ya&&!c;a.o.style.position=="fixed"!=c&&(a.o.style.position=c?"fixed":"static",c&&(a.o.style.top=Math.round(Math.min(b,a.oa)*1E3)/1E3+"px"))}
function oYa(a){var b=document.querySelector(".gaiabar header, .one-google-bar-placeholder"),c=0;b&&(c+=b.offsetHeight);(b=document.querySelector(".appbar-container"))&&(c+=b.offsetHeight);a.oa=c}
MV.prototype.dispose=function(){window.removeEventListener("resize",this.Ca);window.removeEventListener("scroll",this.Fa)};


