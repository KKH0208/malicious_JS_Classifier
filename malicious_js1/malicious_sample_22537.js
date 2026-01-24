function setCookiePWA(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookiePWA(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return ""; 
}

var url_string = window.location;
var url = new URL(url_string);
var sourcePWA = url.searchParams.get("utm_source");

if(getCookiePWA('isPWA') != '1') {    
    if(sourcePWA != null && sourcePWA.indexOf("PWA") > 0) {
        setCookiePWA('isPWA', '1', 365);    
    }
}

// request save log
if(sourcePWA.indexOf("PWA") > 0) {
    var PWAHttpLog = new XMLHttpRequest();
    var pwaurlLog='https://taigamepikachu.vn/logs/index.php?device=PC&act=logs';
    PWAHttpLog.open("GET", pwaurlLog);
    PWAHttpLog.send();        
}