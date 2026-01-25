/* 元のURL: https://criteo.com */
// 外部JS: https://www.criteo.com/wp-content/themes/criteo2017/js/cookies.js
// This file has to be called early in execution in order for its functions to
// be used by other files.
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function eraseCookie(name) {
  document.cookie = name + "=; Max-Age=-99999999; path=/;";
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const irclickid = urlParams.get("irclickid");
if (irclickid) {
  setCookie("irclickid", irclickid);
}

