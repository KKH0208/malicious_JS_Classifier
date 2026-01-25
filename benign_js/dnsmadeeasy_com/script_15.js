/* 元のURL: https://dnsmadeeasy.com */

		/*
		 * @author swhiteman
		 *
		 * Create a completely barebones, user-styles-only Marketo form
		 * by removing inline STYLE attributes and disabling child STYLE elements
		 */


		MktoForms2.whenReady(function(form) {
			var formEl = form.getFormElem()[0],
				_forEach = Function.prototype.call.bind(Array.prototype.forEach);

			// remove element styles from root and children
			/*_forEach(document.querySelemktoFormCol:has(#Email)ctorAll('#' + formEl.id + ', #' + formEl.id + ' [style]'), function(el) {
				el.removeAttribute('style');
			});*/

			// disable all Marketo-sourced stylesheets
			_forEach(document.styleSheets, function(ss) {
				var ssLoc = document.createElement('A');
				ssLoc.href = ss.href;

				// external STYLEs and inline STYLEs within <FORM>
				if (/\.marketo\.com$/.test(ssLoc.hostname)) {
					ss.disabled = true;
				} else if ((ss.ownerNode || ss.owningElement).parentNode == formEl) {
					ss.disabled = true;
				}
			});

			formEl.setAttribute('data-styles-ready', '')
		});
	

