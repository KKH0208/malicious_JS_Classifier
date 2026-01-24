//<![CDATA[
function CustomAlert(){
 this.render = function(dialog){
  var winW = window.innerWidth;
     var winH = window.innerHeight;
  var dialogoverlay = document.getElementById('dialogoverlay');
     var dialogbox = document.getElementById('dialogbox');
  dialogoverlay.style.display = "block";
     dialogoverlay.style.height = winH+"px";
  dialogbox.style.left = (winW/2) - (350 * .5)+"px";
     dialogbox.style.top = "150px";
     dialogbox.style.display = "block";
  document.getElementById('dialogboxhead').innerHTML = "Pemberitahuan";
     document.getElementById('dialogboxbody').innerHTML = dialog;
  document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()" title="Close this">&#215;</button>';
 }
 this.ok = function(){
  document.getElementById('dialogbox').style.top = "-300px";
  document.getElementById('dialogoverlay').style.display = "none";
 }
}
var Alert = new CustomAlert();
//]]>