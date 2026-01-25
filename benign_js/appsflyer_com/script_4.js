/* 元のURL: https://appsflyer.com */
// 外部JS: https://www.appsflyer.com/wp-content/plugins/sitepress-multilingual-cms/res/js/cookies/language-cookie.js?ver=4.6.9
document.addEventListener('DOMContentLoaded', function() {
	for(var cookieName in wpml_cookies) {
		var cookieData = wpml_cookies[cookieName];
		document.cookie = cookieName + '=' + cookieData.value + ';expires=' + cookieData.expires + '; path=' + cookieData.path;
	}
});

