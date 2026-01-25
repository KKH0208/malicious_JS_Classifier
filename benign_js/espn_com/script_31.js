/* 元のURL: https://espn.com */

           var espn = espn || {};
           espn.ads = espn.ads || {};
           espn.shellParams = espn.shellParams || {};
           espn.shellParams.excludeTVEProviders = false
            
                $.subscribe("espn.defer.ready", function() {
                    espn_ui.Helpers.watchProviders.initWatchAuth();
                });
            
					
        

