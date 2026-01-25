/* 元のURL: https://apache.org */

    var pageTitle = 'Welcome to The Apache Software Foundation';
    var _paq = window._paq = window._paq || [];
    /* tracker methods like "setCustomDimension" should be called before
"trackPageView" */
    /* We explicitly disable cookie tracking to avoid privacy issues */
    _paq.push(['disableCookies']);
    if(pageTitle === '404'){
      /* Track 404 page hits */
      _paq.push(['setDocumentTitle',  '404/URL = ' +  encodeURIComponent(document.location.pathname+document.location.search) + '/From = ' + encodeURIComponent(document.referrer)]);
    }
    /* Measure a visit to flink.apache.org and nightlies.apache.org/flink
as the same visit */
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    (function() {
      var u="//analytics.apache.org/";
      _paq.push(['setTrackerUrl', u+'matomo.php']);
      _paq.push(['setSiteId', '37']);
      var d=document, g=d.createElement('script'),
s=d.getElementsByTagName('script')[0];
      g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
    })();
  

