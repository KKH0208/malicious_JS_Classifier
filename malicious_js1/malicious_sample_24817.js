//<![CDATA[
            (function() {
                var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;ga.src = 'https://ssl.google-analytics.com/ga.js';
                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
            })();
            var _gaq = _gaq || [];

            _gaq.push(["_setAccount", "UA-137831244-1"], ["_trackPageview","/sendfriend/product/send/id/1446/cat_id/107"]);


            if(Ajax.Responders){
                Ajax.Responders.register({
                  onComplete: function(response){
                    if(!response.url.include("progress") && !response.url.include("getAdditional")){
                        if(response.url.include("saveOrder")){
                            _gaq.push(["_trackPageview", "/sendfriend/product/send/id/1446/cat_id/107"+ "/opc-review-placeOrderClicked"]);
                        }else if(accordion.currentSection){
                            _gaq.push(["_trackPageview", "/sendfriend/product/send/id/1446/cat_id/107/"+ accordion.currentSection]);
                        }
                    }
                  }
                });
            }

//]]>