/* 元のURL: https://avast.com */

  window.osPlatforms = ['mac', 'pc','android', 'ios'];
  var hash = window.userAgentDetection.getHash();
  document.body.dataset.useragentOs = window.osPlatforms.includes(hash) ? hash : window.userAgentDetection.platform.getWithFallback();
  document.body.dataset.useragentBrowser = window.userAgentDetection.browser.getWithFallback();
  document.body.dataset.useragentBrowsertype = window.userAgentDetection.browser.getType().toLowerCase();


