/* 元のURL: https://ok.ru */
var supported = typeof performance.setResourceTimingBufferSize == "function";
if (supported) {
  performance.setResourceTimingBufferSize(500);
}

require(['OK/CurrentUserCfg'], function(userCfg) {
    var userId = userCfg.getInstance().getUserId();
    if (userId) {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookName = cookies[i].trim().split('=')[0];
            if (cookName.startsWith('web_prmbnr_') && cookName !== 'web_prmbnr_' + userId) {
                document.cookie = cookName + "=;domain=.ok.ru;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
            }
        }
    }
});

