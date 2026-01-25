/* 元のURL: https://cookiedatabase.org */

		if ('undefined' != typeof window.jQuery) {
			jQuery(document).ready(function ($) {
				$(document).on('elementor/popup/show', () => {
					let rev_cats = cmplz_categories.reverse();
					for (let key in rev_cats) {
						if (rev_cats.hasOwnProperty(key)) {
							let category = cmplz_categories[key];
							if (cmplz_has_consent(category)) {
								document.querySelectorAll('[data-category="' + category + '"]').forEach(obj => {
									cmplz_remove_placeholder(obj);
								});
							}
						}
					}

					let services = cmplz_get_services_on_page();
					for (let key in services) {
						if (services.hasOwnProperty(key)) {
							let service = services[key].service;
							let category = services[key].category;
							if (cmplz_has_service_consent(service, category)) {
								document.querySelectorAll('[data-service="' + service + '"]').forEach(obj => {
									cmplz_remove_placeholder(obj);
								});
							}
						}
					}
				});
			});
		}


