/* 元のURL: https://kaspersky.com */

    (function(){
		var crisisBlock = document.getElementById('crisis-block');
		var decisionsBlock = document.getElementById('crisis-block-decisions');
		var rowsBlock = document.getElementById('crisis-block-rows');
        var isHome = null;
		var collapseY = -10;
		var isExpanded = true;

		if (crisisBlock) {
			var scrollHandler = function() {
				if (decisionsBlock && rowsBlock && isExpanded && isHome === false) {
					var crisisBlockRect = crisisBlock.getBoundingClientRect();
					var crisisBlockBottomY = crisisBlockRect.top + crisisBlockRect.height - collapseY;

					if (crisisBlockBottomY <= 0) {
						isExpanded = false;
						rowsBlock.style.maxHeight = 0;
						decisionsBlock.style.margin = 0;

						window.removeEventListener('scroll', scrollHandler);
					}
				}
			};
			var intervalId = setInterval(function() {
				if (window.__KASPERSKY__ST__REDUX__STORE__READY__) {
					clearInterval(intervalId);

					window.__KASPERSKY__ST__REDUX__STORE__.subscribe(function(){
						var newIsHome = !!__KASPERSKY__ST__REDUX__STORE__.getState().switcher.display.Home;

						if (newIsHome !== isHome) {
							isHome = newIsHome;

							crisisBlock.setAttribute('data-show', (!isHome).toString());
						}
					});
				}
			}, 10);
			var contentBlock = crisisBlock.parentElement.parentElement.parentElement.parentElement;

			contentBlock.style.maxWidth = '100%';

			window.addEventListener('scroll', scrollHandler);
		}
    })();


