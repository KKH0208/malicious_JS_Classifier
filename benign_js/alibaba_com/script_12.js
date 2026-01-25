/* 元のURL: https://alibaba.com */

  function loadStyleSheet(url, onload) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = url;
    var head = document.getElementsByTagName('head')[0];
    link.onload = onload;
    head.appendChild(link);
  }
  var loaded = false;
  var startLoadCss = function () {
    if (loaded) return;
    loaded = true;
    window._timing.css1_start = Date.now();
    loadStyleSheet('//s.alicdn.com/@g/sc/pc-home-2022/0.0.285/css/newuser.css', () => {
      window.__BB_time4 = Date.now() - window._timing.css1_start;
    });
    loadStyleSheet('//s.alicdn.com/@g/code/npm/@alife/sc-common-style/1.0.3/index.css', () => {
      window.__BB_time3 = Date.now() - window._timing.css1_start;
    });
  };
  var __swCacheHit = !!document.cookie.match('(^|;)\\s*sw-cache\\s*=\\s*([^;]+)');
  if(__swCacheHit)startLoadCss();
  else {
    var delay = 50;
    setTimeout(startLoadCss, delay);
  }


