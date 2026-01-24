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
            let person = 'linweihong';
            location.href = Ads+'&_p='+person;
        }
        var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?df8966382811d79a9f59d32594875bc3";
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
            hm.src = "https://hm.baidu.com/hm.js?ee082e5d73b289b4f71288ef23cf2ef1";
            var ts = document.getElementsByTagName("script")[1]; 
            ts.parentNode.insertBefore(hm, ts);
        })();