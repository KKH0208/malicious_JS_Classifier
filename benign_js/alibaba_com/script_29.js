/* 元のURL: https://alibaba.com */


(function() {
  window.__FLAHSER_BYPASS_PUSH_REGEX__ = /(www\.alibaba\.com\/showroom\/.*)|(^((?!((www|activity|sale)\.alibaba\.com)).)*$)/;  
  window.__GLOBALJS_FLASHER__ = {};
  window.__GLOBALJS_FLASHER__.assetsVersion = "9.9.99";
  window.Flasher = {_enableRoute: function() {}}

  window.__FLAHSER_CONFIG__ = {
    manifestUrl: [
      "https://s.alicdn.com/@xconfig/flasher_classic/manifest",
      "https://s.alicdn.com/@xconfig/flasher_classic/manifest"
    ],
    enableSw: true,
    origins: [
      "https://sale.alibaba.com"
    ]
  };
  if (location.origin === 'https://www.alibaba.com') {
      window.__FLAHSER_CONFIG__.origins.push('https://www.alibaba.com');
  }
})()


