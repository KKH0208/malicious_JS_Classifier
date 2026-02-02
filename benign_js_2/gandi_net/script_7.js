/* 元のURL: https://gandi.net */

    var blockedMsg = "You appear to be blocking our AT Internet analytics tracker with ad blocking or similar software. We understand privacy is important to you (and it's important to us too!). We also support DNT (Do Not Track) and will never serve our analytics script tags when your user-agent requests DNT. In fact, we encourage you to activate it in your browser. Read more about DNT at https://allaboutdnt.com/. In any case, were you to allow us to track your usage of our websites, please note that we store all statistical data anonymously and privately on the french infrastructure of our partner and regulated by french data-protection laws.";

    function callback() {
        if (typeof(ATInternet) != "undefined") {
            window.tag = new ATInternet.Tracker.Tag({"urlPropertyAuto": true, "urlPropertyQueryString": true});

            if (window.tag.privacy.getVisitorMode() == null) {
                window.tag.privacy.setVisitorMode("cnil", "exempt");
            }

            window.tag.setProps({"locale": "en", "lang": "en", "country": "FR", "currency": "EUR", "taxes": false, "grid": "A"}, true);
            window.tag.setProp("release", "2.40.1", false);
            window.tag.dispatch();
            window.tag.page.send({"name": "Home", "chapter1": "WWW", "chapter2": null, "chapter3": null});
        } else {
            console.info(blockedMsg);
        }
    }

    if (window.navigator.doNotTrack !== '1') {
        var u="https://tag.aticdn.net/616708/smarttag.js";
        var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
        g.type='text/javascript'; g.defer=true; g.src=u; s.parentNode.insertBefore(g,s);

        g.onload=callback;
        g.onreadystatechange = function() { // IE
            if (this.readyState == 'complete') {
                callback();
            }
        }
    } else {
        console.info(blockedMsg);
    }


