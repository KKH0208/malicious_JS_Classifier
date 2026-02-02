/* 元のURL: https://g.page */
var hI={},hHa=(hI[0]="Play GIF",hI[1]="Stop GIF",hI[3]="Stop GIF",hI[2]="Play GIF",hI);function iI(a){A.call(this,"sc.gif_player.PlaybackButton");this.o=a;this.oa=new np;this.ma=new vt({icon:11});this.qa=new vt({icon:12})}
u(iI,A);function iHa(a){a.element("div","class","spinner-container",function(){a.oa.render()})}
iI.prototype.Mb=function(a){return a===0||a===1};
iI.prototype.content=function(a){var b=this;var c=a.Vf;this.element("button","class",Object.assign({},a.zQ,{"playback-button":!0,"playback-button--play":c===3}),"role","button","aria-pressed",c===3||c===0,"aria-label",hHa[c],"onkeydown",this.o,function(){b.element("span","class",b.Mb(c)?"playback-button__span--loading":"playback-button__span",hHa[c]);switch(c){case 3:b.qa.render();break;case 2:b.ma.render();break;default:iHa(b)}})};var jHa=oo("sc.gif_player.GifPlayer"),kHa=["float-right","float-left","shadow"],lHa={},mHa=(lHa["^"+jHa+"playback-button"]=!0,lHa);
function jI(a){var b=a.src;var c=a.cH;var e=a.alt;var f=a.className;var h=a.height;var k=a.width;var l=a.top;var p=a.left;var r=a.bottom;a=a.right;A.call(this,"sc.gif_player.GifPlayer");var t=this;this.Vf=0;this.o=!1;this.src=b;this.cH=c?c:"";this.alt=e?e:"";this.class=f?nHa(f):{};this.height=h;this.width=k;this.top=l?l:"";this.left=p?p:"";this.bottom=r?r:"";this.right=a?a:"";this.ma=new iI(function(v){t.Mb()||t.o||v.code!=="Enter"||(oHa(t),t.Ja())})}
u(jI,A);function nHa(a){return a.split(/\s+/).filter(function(b){return kHa.includes(b)}).reduce(function(b,c){b[c]=!0;
return b},{})}
jI.prototype.getUrl=function(){switch(this.Vf){case 0:case 3:return this.src;case 1:case 2:return this.cH;default:return this.src}};
function oHa(a){switch(a.Vf){case 2:kp(25,"gif_player_playback_button",137);a.Vf=0;break;case 3:kp(43,"gif_player_playback_button",137),a.Vf=1}}
jI.prototype.Mb=function(){return this.Vf===0||this.Vf===1};
jI.prototype.content=function(){var a=this;this.class.container=!0;this.element("div","class",this.class,"style",{height:this.height,width:this.width},"onclick",function(){a.Mb()||a.o||(oHa(a),a.Ja())},function(){a.element("img","src",a.getUrl(),"alt",a.alt,"style",{height:a.height,
width:a.width},"data-top",a.top,"data-left",a.left,"data-bottom",a.bottom,"data-right",a.right,"onload",function(){a.Vf===0?a.Vf=3:a.Vf===1&&(kp(20,"load_shoebox_resource",137),a.Vf=2);a.Ja()},"onerror",function(){switch(a.Vf){case 1:kp(21,"load_shoebox_resource",137);
a.Vf=0;a.o=!0;a.Ja();break;case 0:a.o=!0,a.Ja()}});
a.o||a.ma.render({Vf:a.Vf,zQ:mHa})})};function kI(){}
kI.prototype.Ta=function(){lI=!1};
kI.prototype.initialize=function(){var a,b,c,e,f,h;return Ra(function(k){if(k.o==1){if(lI)return k.return();lI=!0;a=document.querySelector("article");if(!a)return k.return();b=a.querySelectorAll("img");e=Array.from(b).filter(pHa);return k.yield(Promise.all(e.map(function(l){return qHa(l)})),2)}f=k.ma;
for(h=0;h<e.length;h++)c=e[h],f[h]&&rHa(c);Ia(k)})};
var lI=!1;function qHa(a){return Ra(function(b){return b.return(new Promise(function(c){var e=new Image;e.onload=function(){c(!0)};
e.onerror=function(){c(!1)};
e.src=""+a.dataset.altSrc}))})}
function rHa(a){var b=a.parentNode;if(b){var c=a.getAttribute("height"),e=a.getAttribute("width");c===null||isNaN(Number(c))||(c+="px");e===null||isNaN(Number(e))||(e+="px");var f=document.createElement("div"),h;f.style.height=(h=c)!=null?h:a.height+"px";var k;f.style.width=(k=e)!=null?k:a.width+"px";b.replaceChild(f,a);ho(f,function(){(new jI({src:a.src,height:c,width:e,cH:a.dataset.altSrc+"=k",alt:a.alt,className:a.className,top:a.dataset.top,left:a.dataset.left,bottom:a.dataset.bottom,right:a.dataset.right})).render()})}}
function pHa(a){return a.dataset.mimeType==="image/gif"&&a.className.split(/\s+/).includes("gif-player")}
;window.sc_initArticleGifProcessor=function(){(new kI).initialize()};


