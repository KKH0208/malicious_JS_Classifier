<!-- 
//initiates the XMLHttpRequest object
//as found here: http://www.webpasties.com/xmlHttpRequest
function getOLUpdHTTPObject()
{
  var xmlhttp;
  /*@cc_on
  @if (@_jscript_version >= 5)
    try {
      xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (E) {
        xmlhttp = false;
      }
    }
  @else
  xmlhttp = false;
  @end @*/
  if (!xmlhttp && typeof XMLHttpRequest != 'undefined')
	{
    try
		{
      xmlhttp = new XMLHttpRequest();
    }
		catch (e)
		{
      xmlhttp = false;
    }
  }
  return xmlhttp;
}
var objHttpOLUpd = getOLUpdHTTPObject();
function doAjaxOLUpd() {
  url="";
  rnd = Math.random().toString().substring(2);
  url = 'ajax_online_update.php?mypage=6';
  objHttpOLUpd.open("POST",url, true);
  objHttpOLUpd.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
  objHttpOLUpd.onreadystatechange = handleHttpOLUpd; 
  objHttpOLUpd.send('rnd='+rnd);
}
function handleHttpOLUpd()
{
  if (objHttpOLUpd.readyState == 4)
	{
	 setTimeout('doAjaxOLUpd();', 61000); //executes the next data query in 61 seconds
	}
}
setTimeout("doAjaxOLUpd()",61000); 
//-->