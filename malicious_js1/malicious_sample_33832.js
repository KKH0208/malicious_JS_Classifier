var cbvis = false;
var cbload = false;
var cbcookie = "cboxvis=";

function togglecbox () {
	var cbdiv = document.getElementById("cboxdiv");
	var cbbut = document.getElementById("cboxbutton");

	if (!cbvis) {
		if (!cbload) {
			cbdiv.innerHTML = '<iframe frameborder="0" width="200" height="305" src="http://www7.cbox.ws/box/?boxid=468105&amp;boxtag=xrpfva&amp;sec=main" marginheight="2" marginwidth="2" scrolling="auto" allowtransparency="yes" name="cboxmain7-468105" style="border:#000000 1px solid;border-bottom:0px" id="cboxmain7-468105"></iframe><iframe frameborder="0" width="200" height="75" src="http://www7.cbox.ws/box/?boxid=468105&amp;boxtag=xrpfva&amp;sec=form" marginheight="2" marginwidth="2" scrolling="no" allowtransparency="yes" name="cboxform7-468105" style="border:#000000 1px solid;border-top:0px" id="cboxform7-468105"></iframe>';
			cbload = true;
		}
		cbdiv.style.display = "block";
		cbbut.innerHTML = "tutup chatbox";
	}
	else {
		cbdiv.style.display = "none";
		cbbut.innerHTML = "klik untuk chat";
	}
	cbvis = !cbvis;
	document.cookie = cbcookie+((cbvis)?1:0);
}
// Toggle Cbox open if it was previously
var cbcookiei = document.cookie.indexOf(cbcookie);
if (cbcookiei >= 0) {
	if (document.cookie.substring(cbcookiei+cbcookie.length, cbcookiei+cbcookie.length+1) === "1") {
		togglecbox();
	}
}