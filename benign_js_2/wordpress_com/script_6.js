/* 元のURL: https://wordpress.com */

if ( window.top !== window.self ) {
	if ( 'blob:' !== window.self.location.protocol ) {
		if ( window.top.location.hostname !== window.self.location.hostname || window.top.location.protocol !== window.top.location.protocol ) {
			window.top.location.href = window.self.location.href;
		}
	}
}


