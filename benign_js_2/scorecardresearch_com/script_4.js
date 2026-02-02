/* 元のURL: https://scorecardresearch.com */

    function slideDown(element, duration, height, finalTop, callback) {
        var s = element.style;
        s.top = '-' + height + 'px';

        var y = height * -1;
        var framerate = 10;
        var one_second = 1000;
        var interval = one_second * duration / framerate;
        var totalframes = one_second * duration / interval;
        var heightincrement = height / totalframes;
        
        var tween = function () {
            y += heightincrement;
            s.top = y + 'px';
            if (y < finalTop) {
                setTimeout(tween, interval);
            }
        }
        tween();
    }

    function slideUp(element, duration, height, finalTop, callback) {
        var s = element.style;
        s.top = '0px';

        var y = 0;
        var framerate = 10;
        var one_second = 1000;
        var interval = one_second * duration / framerate;
        var totalframes = one_second * duration / interval;
        var heightincrement = (height / totalframes) * -1;

        var tween = function () {
            y += heightincrement;
            s.top = y + 'px';
            if (y < finalTop) {
                setTimeout(tween, interval);
            }
        }
        tween();
    }

    function closePop() {
        // HIDE THE INFOR BANNER AND UPDATE COOKIE VALUE TO 99 TO NOT SHOW ON NEXT EVENT
        slideUp(document.getElementById('info_banner'), 1, 120, 0);
        createCookie(100);

    }

    function loadPopCheck() {
        
    }
    function createCookie(value) {
        var date = new Date();
        date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
        document.cookie = "cookie_consent_js=" + value + expires + "; path=/";
    }

    function showed_count() {
        var nameEQ = "cookie_consent_js=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }


