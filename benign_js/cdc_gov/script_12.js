/* 元のURL: https://cdc.gov */
// 外部JS: https://cdc.gov/homepage/hp2024.js
/* Raw JS */
// Search fix
const searchForms = [document.querySelector('#cdc-desktop-search-form'), document.querySelector('#cdc-mobile-search-form')];
searchForms.forEach(form => {
	if (!form) { return }
	form.action = 'https://search.cdc.gov/search/';
	if (form.querySelector('[type="search"]')) {
		form.querySelector('[type="search"]').name = 'query';
	}
})

// // @TODO: Remove at www launch 2024/04

// A-Z Temp overrides
document.querySelector('.nav-item.healthtopics .dropdown-menu-list-title a').href = '/health-topics.html';
try {
	document.querySelectorAll('section.health-topics .a2z a').forEach(link => { link.href= `/health-topics.html#${link.innerText.trim()}`; })
} catch {}

// nav bar
document.querySelectorAll('.navbar-collapse .nav-item > a.nav-link').forEach(a => a.href='#');

// hero carousel links
document.querySelectorAll('#hero-carousel .carousel-item').forEach(slide => {
    const link = slide.querySelector('a');
    if (link?.href) {
        slide.addEventListener('click', () => window.location = link.href);
    }
})
/* End Raw JS */


