var popunder
function get_cookie(Name) {
var search = Name + "="
var returnvalue = "";
if (document.cookie.length > 0) {
offset = document.cookie.indexOf(search)
if (offset != -1) { // if cookie exists
offset += search.length
// set index of beginning of value
end = document.cookie.indexOf(";", offset);
// set index of end of cookie value
if (end == -1)
end = document.cookie.length;
returnvalue=unescape(document.cookie.substring(offset, end))
}
}
return returnvalue;
}
popfrequency="0 minutes"
function resetcookie(){
var expireDate = new Date()
expireDate.setMinutes(expireDate.getMinutes()-0)
document.cookie = "popunder=;path=/;expires=" + expireDate.toGMTString()
}
function loadornot(){
if (get_cookie('popunder')==''){
loadpopunder()
var expireDate = new Date()
expireDate.setMinutes(expireDate.getMinutes()+parseInt(popfrequency))
document.cookie = "popunder="+parseInt(popfrequency)+";path=/;expires=" + expireDate.toGMTString()
}
}
function loadpopunder(){
document.write('<body onclick="rwmrgfdq_Popup()" >');
}
if (get_cookie('popunder')!=parseInt(popfrequency))
resetcookie()
loadornot()