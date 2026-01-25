/* 元のURL: https://booking.com */
 function b_cors_check(supported) { var value = supported ? 1 : 0; if (!/(^|;)\s*cors_js=/.test(document.cookie)) { var d = new Date(); d.setTime(d.getTime() + 60 * 60 * 24 * 365 * 1000); var cookieDomain = '.booking.com' || '.booking.com'; document.cookie = 'cors_js=' + value +'; domain=' + cookieDomain + '; path=/; expires=' + d.toGMTString(); } if (!value) { location.reload(); } } 

