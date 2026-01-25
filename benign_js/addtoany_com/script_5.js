/* 元のURL: https://addtoany.com */

(function(doc){
	function show(plat) {
		doc.addEventListener('DOMContentLoaded', function(e) {
			doc.getElementById('addons-main').style.display = 'block';
				doc.getElementById(plat + '-addon').style.display = 'block';
		});
	}
	var ua = navigator.userAgent;
	if (/Chrome/.test(ua) && ! /Edge/.test(ua) ) {
		show('chrome');
	} else if (/Firefox/.test(ua)) {
		show('firefox');
	} else if (/iPhone|iPad|iPod/.test(ua) && ! window.MSStream) {
		show('ios');
	}
})(document)


