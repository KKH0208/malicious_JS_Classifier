/* 元のURL: https://forbes.com */
// deferredStyles.js - Append link tag that loads deferred styles after page load
// Script is inlined into pug file on server side, and is automatically es6'ed
/* eslint-disable no-var, func-names */

(() => {
	const raf = window.requestAnimationFrame;
	const loadDeferredStyles = () => {
		const noScriptTag = document.getElementById('deferred-styles');
		const styleTagContainer = document.createElement('div');
		styleTagContainer.innerHTML = noScriptTag.textContent;
		document.body.appendChild(styleTagContainer);
		noScriptTag.parentElement.removeChild(noScriptTag);
	};

	if (raf) {
		raf(loadDeferredStyles);
	} else {
		setTimeout(loadDeferredStyles);
	}
})();


