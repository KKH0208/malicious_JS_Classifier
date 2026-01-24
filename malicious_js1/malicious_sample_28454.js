function cssLoaded(href) {
            var cssFound = false;
            for (var i = 0; i < document.styleSheets.length; i++) {
                var sheet = document.styleSheets[i];
                if (sheet['href'] == href) {
                    cssFound = true;
                }
            }
            return cssFound;
        }
        function cssAppend(link) {
            var l = document.createElement('link');
            l.rel = 'stylesheet';
            l.href = link;
            document.getElementsByTagName('head')[0].appendChild(l);
        }
        if (!cssLoaded('http://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.css') &&
            !cssLoaded('https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.css')) {
            cssAppend('//ilimitado.jetmobile.com.br/clubeciencias/resources/vendors/bower_components/jquery-mobile-bower/css/jquery.mobile-1.4.5.min.css');
        }