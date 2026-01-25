/* 元のURL: https://indiatimes.com */

    window._dfpObj = window._dfpObj || {};
    window._dfpObj.taboolaPublisherID = "timesinternetlimited-indiatimes";
    window._dfpObj.currentPageUrl  = "";
    window._dfpObj.loadJS = function(FILE_URL, async, callback){
        let scriptEle = document.createElement("script");
        scriptEle.setAttribute("src", FILE_URL);
        scriptEle.setAttribute("type", "text/javascript");
        scriptEle.setAttribute("async", async);
        document.body.appendChild(scriptEle);
        scriptEle.addEventListener('load', callback);
    }

    window._dfpObj.exeTaboolaContainer = function(){
        window._taboola = window._taboola || [];
        if(typeof TRC === 'undefined') return;
        var isTrue = true;
        if(window._dfpObj.currentPageUrl == window.location.href){
            isTrue = false;
        }else{
            window._dfpObj.currentPageUrl = window.location.href;
        }
        var platform = 'web';
        let article_id = extractArticleIdFromUrl(window.location.href);
        if(typeof window.isMobile !='undefined' && window.isMobile == 1){
            platform = 'mobile';
        }
        
        Array.from(document.getElementsByClassName("wdt-taboola")).forEach(
            function(e) {
            var _mode = e.getAttribute('data-mode');
            var _container = e.getAttribute('id');
            var _target_type = e.getAttribute('data-target_type');
            var _placement = e.getAttribute('data-placement');
            if(isTrue) {
                _taboola.push({article:'auto', url:window.location.href});
            }
            isTrue = false;
            console.log("called for taboola_container=> ",_container);
            _taboola.push({
                mode: _mode,
                container: _container,
                placement: _placement,
                target_type: _target_type
            });
            e.classList.remove("wdt-taboola");
            }
        );
    }

    window._dfpObj.exeTaboola = function(){
        var articleId = extractArticleIdFromUrl(window.location.href);
        if(articleId){
            if(typeof TRC !== 'undefined') window._dfpObj.exeTaboolaContainer();
            if(document.getElementsByClassName("wdt-taboola").length === 0) return;
            if(window._dfpObj && !window._dfpObj.hasOwnProperty('taboolaPublisherID')) return;
            window._dfpObj.loadJS('//cdn.taboola.com/libtrc/'+window._dfpObj.taboolaPublisherID+'/loader.js', true, window._dfpObj.exeTaboolaContainer)
        }
    }


