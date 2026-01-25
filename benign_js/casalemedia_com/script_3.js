/* 元のURL: https://casalemedia.com */
// 外部JS: https://s46182.pcdn.co/wp-content/plugins/sitepress-multilingual-cms/res/js/cookies/language-cookie.js?ver=484900
document.addEventListener('DOMContentLoaded', function() {
	for(var cookieName in wpml_cookies) {
		var cookieData = wpml_cookies[cookieName];
		document.cookie = cookieName + '=' + cookieData.value + ';expires=' + cookieData.expires + '; path=' + cookieData.path + '; SameSite=Lax';
	}
});

