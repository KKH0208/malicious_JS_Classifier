/* 元のURL: https://consultant.ru */

(function() {
    var path = '';
    var d = new Date();
    var n = navigator.appName.toLowerCase();
    var flash = 0;
    path += 'c=' + (navigator.cookieEnabled ? 1 : 0) + '&';
    if (navigator.plugins && navigator.plugins.length)
    {
        for (var i = navigator.plugins.length - 1; i >= 0; i--)
            if (navigator.plugins[i].name == 'Shockwave Flash')
            {
                flash = parseFloat(navigator.plugins[i].description.split(' ')[2]);
                break;
            }
    }
    else if (window.ActiveXObject)
    {           
        var f = null;
        for (var i = 20; i > 3; --i)
            try
            {
                f = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.' + i);
            }
            catch (e)
            {
                f = null;
            }
            if (f)
            {
                var t = f.GetVariable('$' + 'version').split(' ');
                if (t.length > 1)
                {
                        var s = t[1].split(',');
                        flash = parseInt(s[0]);
                }
                f = null;
            }
    }
    path += 't=' + d.getTime() + '&';

    var url = window.location.href;
    var hash = window.location.hash;

    if (hash && hash.indexOf('utm_') == -1)
        url = url.replace(/#.*$/, '');

    path += 'u=' + escape(url) + '&';
    if (window == parent)
        path += 'r=' + escape(document.referrer) + '&';
    else
        path += 'r=' + escape(parent.document.referrer) + '&';
        
    path += 'cd=' + (n == 'netscape' ? screen.pixelDepth : screen.colorDepth) + '&';
    
    var width = screen.width || 0;
    var height = screen.height || 0;
    path += 'w=' + width + '&';
    path += 'h=' + height + '&';
    path += 'j=' + (navigator.javaEnabled()? 1 : 0) + '&';
    path += 'fl=' + flash;

    var consStatCounterImg = new Image();
    consStatCounterImg.src = '//www.consultant.ru/adds/counter.js?' + path;
})();


