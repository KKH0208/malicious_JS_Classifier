/* 元のURL: https://drom.ru */
<!--
    (function(){
        var li = document.createElement('img');
        li.width = '1';
        li.height = '1';
        li.alt = '';
        li.src = (window.location.protocol == 'https:' ? 'https:' : 'http:')+'//counter.drom.ru/hit/?r='+ escape(document.referrer)+((typeof(screen)=='undefined')?'': '&s='+screen.width+'*'+screen.height+'*'+(screen.colorDepth? screen.colorDepth:screen.pixelDepth))+'&u='+escape(document.URL)+'&b='+window.navigator.userAgent+'&p='+window.devicePixelRatio+'&'+Math.random();
        document.getElementById('drom-counter-li').appendChild(li);
    })();
//-->

