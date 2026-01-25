/* 元のURL: https://dailymail.co.uk */
// 外部JS: https://open.spotify.com/embed/iframe-api/v1

    (function () {
        var scriptUrl = 'https://embed-cdn.spotifycdn.com/_next/static/iframe_api.e1a47859fa0dbe256905.js';
        var host = 'https://open.spotify.com';
        try {
          var ttPolicy = window.trustedTypes.createPolicy('spotify-embed-api', {
            createScriptURL: function (x) {
              return x;
            },
          });
          scriptUrl = ttPolicy.createScriptURL(scriptUrl);
        } catch (e) {}
      
        if (!window.SpotifyIframeConfig) {
          window.SpotifyIframeConfig = {};
        }
        SpotifyIframeConfig.host = host;
            
    
        if (SpotifyIframeConfig.loading) {
          console.warn('The Spotify Iframe API has already been initialized.');
          return;
        }
        SpotifyIframeConfig.loading = 1;
      
        var a = document.createElement('script');
        a.type = 'text/javascript';
        a.id = 'spotify-iframeapi-script';
        a.src = scriptUrl;
        a.async = true;
        var c = document.currentScript;
        if (c) {
          var n = c.nonce || c.getAttribute('nonce');
          if (n) a.setAttribute('nonce', n);
        }
        var b = document.getElementsByTagName('script')[0];
        b.parentNode.insertBefore(a, b);
        
      })();      
    

