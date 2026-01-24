<!--

function getCookie(name) {
	var search = name + "=";
	if (document.cookie.length > 0) {
		var offset = document.cookie.indexOf(search);
		if (offset != -1) {
			offset += search.length;
			var end = document.cookie.indexOf(";", offset);
			if (end == -1) {
				end = document.cookie.length;
			}
			return unescape(document.cookie.substring(offset, end));
		}
	}
	return null;
}


function setFocus() {
	document.translate.word.focus();
}


function checkSubmit() {
	if (document.translate.word.value == "") {
		alert("You must enter a word to translate!");
		setFocus();
		return false;
	}
	else {
		document.translate.word.select();
		setFocus();
		return true;
	}
}


function setDefaults() {
	var sin = getCookie("InputEncoding");
	var sout = getCookie("OutputEncoding");
	if ((sin != null) && (sout != null)) {
		document.translate.encin.value = sin;
		document.translate.encout.value = sout;
	}
	setFocus();
}

//-->