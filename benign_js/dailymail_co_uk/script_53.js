/* 元のURL: https://dailymail.co.uk */

(function () {
	if (PageCriteria && PageCriteria.geo && ['US', 'AU'].includes(PageCriteria.geo)) {
	  const royalsPromoImages = Array.from(document.querySelectorAll('[data-royals-promo] img'));
	  const geoSuffix = '_' + PageCriteria.geo.toLowerCase();
	  for (const royalPromoImg of royalsPromoImages) {
	  	if (!royalPromoImg.src.match(/_\w+\./i)) {
			royalPromoImg.src = royalPromoImg.src.replace(/\.(\w+)$/, geoSuffix + '.$1')
		}
	  }
	}
})();


