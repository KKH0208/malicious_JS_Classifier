/* 元のURL: https://businessinsider.com */

    LUX=function(){var e="undefined"!=typeof LUX&&void 0!==LUX.gaMarks?LUX.gaMarks:[],n="undefined"!=typeof LUX&&void 0!==LUX.gaMeasures?LUX.gaMeasures:[],t="LUX_start",r=window.performance,a="undefined"!=typeof LUX&&LUX.ns?LUX.ns:Date.now?Date.now():+new Date;function u(){if(r){if(r.now)return r.now();if(r.webkitNow)return r.now();if(r.msNow)return r.now();if(r.mozNow)return r.now()}return(Date.now?Date.now():+new Date)-a}function o(n){return function(e,n){for(i=n.length-1;i>=0;i--){var t=n[i];if(e===t.name)return t}return}(n,function(){if(r){if(r.getEntriesByType)return r.getEntriesByType("mark");if(r.webkitGetEntriesByType)return r.webkitGetEntriesByType("mark")}return e}())}return r&&r.timing&&r.timing.navigationStart&&(a=r.timing.navigationStart),{mark:function(n){if(r){if(r.mark)return r.mark(n);if(r.webkitMark)return r.webkitMark(n)}e.push({name:n,entryType:"mark",startTime:u(),duration:0})},measure:function(e,i,a){if(void 0===i&&o(t)&&(i=t),r){if(r.measure)return i?a?r.measure(e,i,a):r.measure(e,i):r.measure(e);if(r.webkitMeasure)return r.webkitMeasure(e,i,a)}var f=0,s=u();if(i){var m=o(i);if(m)f=m.startTime;else{if(!(r&&r.timing&&r.timing[i]))return;f=r.timing[i]-r.timing.navigationStart}}if(a){var w=o(a);if(w)s=w.startTime;else{if(!(r&&r.timing&&r.timing[a]))return;s=r.timing[a]-r.timing.navigationStart}}n.push({name:e,entryType:"measure",startTime:f,duration:s-f})},gaMarks:e,gaMeasures:n}}(),LUX.ns=Date.now?Date.now():+new Date,LUX.ac=[],LUX.cmd=function(e){LUX.ac.push(e)},LUX.init=function(){LUX.cmd(["init"])},LUX.send=function(){LUX.cmd(["send"])},LUX.addData=function(e,n){LUX.cmd(["addData",e,n])};
    LUX.label="homepage"; // PageType: homepage, story, slideshow, video, hubpage, etc.
    LUX.minMeasureTime = 7000;
    LUX.maxMeasureTime = 30000;LUX.sendBeaconOnPageHidden = true; // Set this to true when not in auto fire mode
    LUX.auto = false; // We will manually fire once GDPR scripts have loaded (consent-handler.js)
    // Custom Dimensions
    LUX.addData('siteName', 'Business Insider');
    
    // We can't call LUX.forceSample until the API is on the page
    window.Fenrir = window.Fenrir || { config: {} };
    window.Fenrir.sampleSpeedcurve = function sampleSpeedcurve() {
      if (window.LUX?.forceSample && window.Fenrir?.config?.featureFlags?.forceSpeedcurveSample) {
        window.LUX.forceSample();
      }
    }
    
    document.addEventListener('onGeoDataCaptured', (event) => {
      LUX.addData('continentCode', event.detail?.geoData?.continentCode || 'NA')
    });
    

