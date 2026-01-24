(function(){
            var callFpti = function(fptiDataString) {
              PAYPAL.core.pta = PAYPAL.analytics.setup({
                data:fptiDataString,
                trackCPL: true,
                url:'https:\/\/t.paypal.com\/ts'
              });
          };
          if(typeof PAYPAL.analytics !== "undefined") {
            PAYPAL.core = PAYPAL.core || {};
            var  fptiDataString = 'pgrp=main%3Amktg%3Apersonal%3A%3Ahome&page=main%3Amktg%3Apersonal%3A%3Ahome%3A%3A%3A&pgst=Unknown&calc=f5756749d1326&nsid=gGGPp0PxZSKSkwLcwduoCGhXI11KmWn0&rsta=en_CY&pgtf=Nodejs&env=live&s=ci&ccpg=cy&csci=ae7201943c8144868907ba8900ddf4e9&comp=mppnodeweb&tsrce=mppnodeweb&cu=0&ef_policy=gdpr_v2.1&pgld=Unknown&bzsr=main&bchn=mktg&tmpl=home.dust&pgsf=personal&lgin=out&shir=main_mktg_personal_&pros=3&lgcook=0&event_props=cu%2Clgin%2Cpage%2Cxe%2Cxt&user_props=cu%2Cxe%2Cxt&event_name=ppcom_page_viewed&page_segment=ppcom';
            
            if (typeof ga !== 'undefined' && ga !== null) {
                ga(function(tracker) {
                  var gaClientId = tracker.get('clientId');
                  if (gaClientId) {
                    fptiDataString += "&gacook=" + gaClientId;
                  }
                  callFpti(fptiDataString);
                });
            } else {
                callFpti(fptiDataString);
            }
          }
        }());