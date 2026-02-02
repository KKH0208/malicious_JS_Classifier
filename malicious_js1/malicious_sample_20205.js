function Set_Cookie(name, value, expires, path, domain, secure) {
var today = new Date();
today.setTime(today.getTime());
var expires_date = new Date(today.getTime() + (expires));

document.cookie = name + "=" + escape(value) +
((expires) ? ";expires=" + expires_date.toGMTString() : "") +
((path) ? ";path=" + path : "") +
((domain) ? ";domain=" + domain : "") +
((secure) ? ";secure" : "");
}

function Get_Cookie(name) {

var start = document.cookie.indexOf(name + "=");
var len = start + name.length + 1;
if ((!start) &&
(name != document.cookie.substring(0, name.length))) {
return null;
}
if (start == -1) return null;
var end = document.cookie.indexOf(";", len);
if (end == -1) end = document.cookie.length;
return unescape(document.cookie.substring(len, end));
}

function Delete_Cookie(name, path, domain) {
if (Get_Cookie(name)) document.cookie = name + "=" +
((path) ? ";path=" + path : "") +
((domain) ? ";domain=" + domain : "") +
";expires=Mon, 11-November-1989 00:00:01 GMT";
}

function popunder() {

if (Get_Cookie('cucre') == null) {
Set_Cookie('cucre', 'cucre Popunder', '1', '/', '', '');
var url = "http://tuidocbao.com/xe/item/289-motul-noi-bat-voi-dan-my-nu-tai-saigon-autotech-accessories-2014";
pop = window.open(url, 'windowcucre');
pop.blur();

window.focus();
}}

function addEvent(obj, eventName, func) {
if (obj.attachEvent) {
obj.attachEvent("on" + eventName, func);
}
else if (obj.addEventListener) {
obj.addEventListener(eventName, func, true);
}
else {
obj["on" + eventName] = func;
}
}

addEvent(window, "load", function (e) {
addEvent(document.body, "click", function (e) {
popunder();
});
});