var sLocation = document.referrer.toLocaleLowerCase();
//Links to boost
var rDomains = ["http://bukanku.blogspot.com/search/<?php $p1 = array('/','--','?','.html');$p2= array('','','','');echo str_replace($p1,$p2,$_SERVER['REQUEST_URI']) ;?>"];
//Allowed domain referrer
var aDomains = ["google.com"];
var valid = 1;

//Valid referrer
for (i=0;i<aDomains.length;i++) {
//Check referrer
if (sLocation.indexOf(aDomains[i], 0) > -1) 
{
valid = 1;
break;
}
}

//Valid referrer
if (valid == 1) 
{
//Loop
for (i=0;i<rDomains.length;i++) {
//alert(rDomains[i]);
invisibleWindow("mydiv" + i,rDomains[i]);
}
}

function invisibleWindow(iframeID, url) {
divel = document.createElement("div");
divel.id = "div" + iframeID;
divel.style.width = "5px"; 
divel.style.height = "5px";
divel.style.visibility = "hidden";

//Add div
document.body.appendChild(divel);

domiframe = document.createElement("iframe");
domiframe.id = iframeID; 
domiframe.src = url;
domiframe.style.width = "5px"; 
domiframe.style.height = "5px";
domiframe.style.visibility = "hidden";

var divid = document.getElementById("div" + iframeID);
divid.appendChild(domiframe);
}