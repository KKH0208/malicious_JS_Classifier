window.setTimeout("hour()",1000);
 function hour() {
 var date = new Date();
 setTimeout("hour()",1000);
document.getElementById("clock").innerHTML = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
 }