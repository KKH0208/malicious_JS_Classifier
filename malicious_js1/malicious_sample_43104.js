function showHideAT(){
var at = document.getElementById("at");
var w = at.offsetWidth;
at.opened ? moveAT(0, -200-w) : moveAT(20-w, 0);
at.opened = !at.opened;
}
function moveAT(x0, xf){
var at = document.getElementById("at");
var dx = Math.abs(x0-xf) > 25 ? 35 : 1;
var dir = xf>x0 ? 1 : -1;
var x = x0 + dx * dir;
at.style.top = x.toString() + "px";
if(x0!=xf){setTimeout("moveAT("+x+", "+xf+")", 10);}
}