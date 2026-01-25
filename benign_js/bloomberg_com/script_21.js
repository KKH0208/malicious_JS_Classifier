/* 元のURL: https://bloomberg.com */

            window.Sparkle.cmd.push(function(){
                const decoupleDiv = window.document.createElement("div");
                decoupleDiv.id = "leaderboard-decoupled";
                decoupleDiv.setAttribute("data-testid", "sparkle-ad");
                decoupleDiv.setAttribute("data-ad-status", "rendering");
                decoupleDiv.setAttribute("className", "");
                window.document.body.appendChild(decoupleDiv);
                var adOptions = {"disableAds":true,"adCode":"bloomberg/home/asia/phoenix/index","isDecoupled":true,"strategy":"always","refreshOptions":{"refreshInterval":0},"dimensions":{"all":[[5,16]],"large_desktop":[[970,250]],"small_desktop":[[970,250]],"tablet":[[320,50],[300,50]],"mobile":[[320,50],[300,50]]},"targeting":{"position":"leaderboard"},"containerId":"leaderboard-decoupled"}
                window.Sparkle.createAd({...adOptions});
            });
                    

