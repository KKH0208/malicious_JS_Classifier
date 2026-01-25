/* 元のURL: https://scorecardresearch.com */

    loadPopCheck();

    function removeURLParameter(url, parameter) {
        //prefer to use l.search if you have a location/link object
        var urlparts = url.split('?');
        if (urlparts.length >= 2) {

            var prefix = encodeURIComponent(parameter) + '=';
            var pars = urlparts[1].split(/[&;]/g);

            //reverse iteration as may be destructive
            for (var i = pars.length; i-- > 0;) {
                //idiom for string.startsWith
                if (pars[i].lastIndexOf(prefix, 0) !== -1) {
                    pars.splice(i, 1);
                }
            }

            url = urlparts[0] + '?' + pars.join('&');
            return url;
        } else {
            return url;
        }
    }


    var querystring = "newlanguage=" + "1";

	var links = document.getElementsByTagName('a');

	for (var l in links) {
	    var currentHref = links[l].href;

	    if (currentHref !== undefined && currentHref.indexOf('javascript') == -1 && currentHref.toLowerCase().indexOf('scorecardresearch') > -1 && currentHref.indexOf('#') == -1) {
	        currentHref = removeURLParameter(currentHref, 'newlanguage');
	        var newHref = currentHref + (currentHref.match(/\?/) ? '&' : '?') + querystring; //+ "#section1";

	        links[l].href = newHref;
	    }
	}


