/* 元のURL: https://theguardian.com */

                    // record the number of times the browser goes offline during a pageview
                    window.guardian.offlineCount = 0;
                    window.addEventListener('offline', function incrementOfflineCount () { window.guardian.offlineCount++ });
                

