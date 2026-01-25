/* 元のURL: https://kaspersky.com */

  (function(w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
      event:'init',
      flags: {
        shouldFireOnGtmJs: false
      }
    });
    w[l].push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });
    var f = d.getElementsByTagName(s)[0];
    var j = d.createElement(s);
    var dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src = 'https://sgtm.kaspersky.de/gtm.js?id=' + i + dl;
    j.onerror = function() {
      var f2 = d.getElementsByTagName(s)[0];
      var j2 = d.createElement(s);
      var dl2 = l != 'dataLayer' ? '&l=' + l : '';
      j2.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f2.parentNode.insertBefore(j2, f2);
    };
    f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', 'GTM-WZ7LJ3');


