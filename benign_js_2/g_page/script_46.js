/* 元のURL: https://g.page */
function zI(){uIa(this)}
zI.prototype.open=function(a,b,c){var e=this;vIa(this,a,c);this.ma.textContent=b||"";lm(this.o,"material-snackbar--active",!0);this.Af&&window.clearTimeout(this.Af);this.Af=window.setTimeout(function(){return e.Rl()},c||2750);
return this};
function vIa(a,b,c){a.oa.textContent=b;Sy(b,1,c===void 0?2750:c)}
function uIa(a){a.o=document.createElement("div");a.o.className="material-snackbar";a.oa=document.createElement("div");a.oa.className="material-snackbar__message";a.o.appendChild(a.oa);a.ma=document.createElement("button");a.ma.className="material-snackbar__action";a.ma.addEventListener("click",function(){a.ua&&a.ua();a.Rl()});
a.o.appendChild(a.ma);document.body.appendChild(a.o)}
zI.prototype.Rl=function(){lm(this.o,"material-snackbar--active",!1)};
zI.prototype.Lp=function(a){this.ua=a;return this};
zI.prototype.onAction=zI.prototype.Lp;zI.prototype.dismiss=zI.prototype.Rl;zI.prototype.open=zI.prototype.open;


