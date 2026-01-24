function addEvent(obj, eventName, func)
{
if (obj.attachEvent){
obj.attachEvent("on" + eventName, func);}
else if(obj.addEventListener){
obj.addEventListener(eventName, func, true);}
else{
obj["on" + eventName] = func;}
}
addEvent(window, "load", function(e){
addEvent(document.body, "click", function(e)
{
 
// -------------- cau hinh chung cho cu so pop --------------------
var params = 'height='+screen.height+',width=' + screen.width + ',left=0,top=0,location=1,toolbar=1,status=1,menubar=1,scrollbars=1,resizable=1';
 
// -------------- pop 1 --------------------
if(document.cookie.indexOf("pop1") == -1)
{
document.cookie = "popunder=pop1"; 
 
 
 
 
var w = window.open("https://unica.vn/?aff=389519",'YHB', params);
if (w)
{
document.cookie = "popunder=pop1";
w.blur(); 
}
window.focus();
}
 
// -------------- pop 2 --------------------
if(document.cookie.indexOf("pop2") == -1)
{ 
var w = window.open("https://unica.vn/?coupon=QUANG40",'HBO', params);
if (w)
{
document.cookie = "popunder2=pop2";
w.blur();
} 
window.focus();
}
 
 
// -------------------- het-----------------
 
});
 
});