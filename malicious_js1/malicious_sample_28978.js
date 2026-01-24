var wordnikChorus = {};

      (function() {

        window.wpChorusConfig = {"version":"0.6.11","wpVersion":"5.3.9","wpTheme":"independent-publisher","wpSiteUrl":"http:\/\/jackthescribbler.com","wpHomeUrl":"https:\/\/jackthescribbler.com","apiHost":"chorus.nik.io","apiUrl":"http:\/\/chorus.nik.io","apiKey":"03c28503146b8a491796a4abd362bbcf3d9576481cdcc68","manifestKey":"","assetUrl":"http:\/\/choruswp.nik.io\/v1","siteUrl":"https:\/\/jackthescribbler.com","isWordPressStaff":false,"isWordPressAdmin":false,"wpLang":""};

        wordnikChorus.getRecsEndpoint = "http://chorus.nik.io/api/recommendation.json/byUrl";
        wordnikChorus.apiKey ="03c28503146b8a491796a4abd362bbcf3d9576481cdcc68";
        wordnikChorus.permalink = "https://jackthescribbler.com/2017/06/is-grab-philippines-brian-cu-related-to-globe-telecoms-ernest-cu/";
        wordnikChorus.baseApiUrl = "http://chorus.nik.io";
        window.chorusGenesisTime = new Date();

        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = 'async';        
        script.src = 'http://choruswp.nik.io/v1/related_content.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(script, s);
      })();