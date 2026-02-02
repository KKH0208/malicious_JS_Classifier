/* 元のURL: https://forbes.com */
const urlParams = new URLSearchParams(window.location.search);
// _vis_test_id is set from preview link
let shouldLoadVwo = !!urlParams.get('_vis_test_id');
if(window.name) {
	try {
		const vwoJson = JSON.parse(window.name);
		const previewObj = Object.keys(vwoJson)[0];
		// _vis_preview is set when you click preview button on VWO platform
		if (previewObj.startsWith('_vis_preview')) {
			shouldLoadVwo = true;
		}
	} catch (e) {
		console.warn("invalid vwo preview");
	}
}
if(shouldLoadVwo){
	// set vwo cookie so it loads quicker on next page load (with server check above)
	// 9999 is used to signify very long time, browser will set this to something like 400 days
	document.cookie = "VWO=0.1; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";

	setupVwo();
}

