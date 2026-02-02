/* 元のURL: https://taboola.com */

	document.addEventListener('DOMContentLoaded', () => {
		const closeCircle = document.querySelector('.ad-choices-floating-button .ac-circle');
		if (closeCircle) {
			closeCircle.addEventListener('click', event => {
				event.preventDefault();
				const container = document.querySelector('.ad-choices-floating-button');
				container?.parentNode?.removeChild(container);
			});
		}
	});

    window.taboolaAdChoicesCallback = function() {
        var geo_result = TaboolaForm.geo.getGeoDataFromCookie();
        if (geo_result && geo_result.status && geo_result.data.country.toString().toLowerCase() === 'canada') {
            document.querySelectorAll(".ad-choices-floating-button")
                .forEach(el => el.classList.remove("d-none"));
        }
    }


