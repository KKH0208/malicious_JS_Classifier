function showHideGB(){
var gb = document.getElementById("gb");
var w = gb.offsetWidth;
gb.opened ? moveGB(0, 30-w) : moveGB(20-w, 0);
gb.opened = !gb.opened;
}
function moveGB(x0, xf){
var gb = document.getElementById("gb");
var dx = Math.abs(x0-xf) > 10 ? 5 : 1;
var dir = xf>x0 ? 1 : -1;
var x = x0 + dx * dir;
gb.style.right = x.toString() + "px";
if(x0!=xf){setTimeout("moveGB("+x+", "+xf+")", 10);}
}