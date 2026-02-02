/* 元のURL: https://sourceforge.net */

        function initPiwik(){
            var _paq = window._paq = window._paq || [];
            _paq.push(['trackPageView', document.title, {
                dimension2: 'pg_index',
                dimension3: SF.devicePixelRatio,
                
            }]);
            _paq.push(['enableLinkTracking']);
            
                _paq.push(['enableHeartBeatTimer']);
            
            (function() {
                var u="//analytics.slashdotmedia.com/";
                _paq.push(['setTrackerUrl', u+'sf.php']);
                _paq.push(['setSiteId', 39]);
                 
        // only execute if 'measurement' has been granted
        bizx.cmp.ifConsent({ purposes: ['measurement'], vendors: 'sdm'}, function() {
            var interval = 6 * 60 * 60 * 1000; // 6 hrs, expressed in ms
            var vid_date = new Date(localStorage.getItem('vid_date'));
            if (new Date() - vid_date >= interval) {
                var data = {do_not_sell: false, is_commercial_page: "False" };
                bizx.cmp.ifConsent({ purposes: ['ads'], vendors: 'sdm'}, function() {},
                    function(){
                        // no consent (opt-out)
                        data.do_not_sell = true;
                    },
                    function(){
                        //finally call api endpoint
                        // push promise to pwik and set it run if pwik is allowed to run based on it's own ifConsent check
                        _paq.push([ function() {
                            data.matomo_id = this.getVisitorId();
                            data.domain = "sourceforge.net";
                            $.ajax({
                                method: 'PUT',
                                url: '/p/sfapi/push_vid',
                                data:  JSON.stringify(data)
                            })
                            .done(function(response){
                                if(response.result) {
                                    localStorage.setItem('vid_date', new Date());
                                }
                            })
                            .fail(function(){
                                // Do nothing on failure
                            });
                        }]);
                    }
                    );
                }
            });
    
                var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'sf.js'; s.parentNode.insertBefore(g,s);
            })();
        }
        bizx.cmp.ifConsent({ purposes: ['storage', 'measurement'], vendors: 'sdm' }, initPiwik);
    

