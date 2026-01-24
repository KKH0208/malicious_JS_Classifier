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
// -------------- Cau hinh chung cho cua so popup  --------------------
var params = 'height='+screen.height+',width=' + screen.width + ',left=0,top=0,location=1,toolbar=1,status=1,menubar=1,scrollbars=1,resizable=1';
// -------------- pop 1 --------------------
if(document.cookie.indexOf("pop1") == -1)
{
document.cookie = "popunder=pop1";    
var w = window.open("http://dienhoa24gio.net/dien-hoa/",'bikeishop.com', params);
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
var w = window.open("http://shophoatuoidep.net/",'cothebanchuabiet', params);
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