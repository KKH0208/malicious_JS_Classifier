/* 元のURL: https://alibaba.com */
// 外部JS: https://s.alicdn.com/@g/sc/pc-home-2022/0.0.285/sw/register.js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/homepage-cache-sw.js?v=' + window.assetsVersion).then(
    function () {
      __sw_dot({ sceneName: 'sw_register_succeeded' });
      updateCacheDom();
    },
    function (err) {
      __sw_dot({ sceneName: 'sw_register_failed', reason: err.message });
    }
  );
  navigator.serviceWorker.addEventListener('message', function (event) {
    if (!event.data) return;
    switch (event.data.action) {
      case 'getCacheDom':
        updateCacheDom();
    }
  });
  function updateCacheDom() {
    if (window.cacheDomString && navigator.serviceWorker.controller) {
      const styleList = [...document.querySelectorAll('link[rel=stylesheet]')]
        .concat([...document.querySelectorAll('style')])
        .map(s => s.outerHTML)
        .join('\n');
      navigator.serviceWorker.controller.postMessage({
        action: 'updateCacheDom',
        cacheDom: styleList + window.cacheDomString,
      });
    }
  }
} else {
  __sw_dot({ sceneName: 'sw_unsupported' });
}

function __sw_dot(params) {
  window.goldlog_queue = window.goldlog_queue || [];
  const spmab = (window.goldlog && (window.goldlog.spm_ab || []).join('.')) || 'a2700';
  const paramsStr =
    Object.keys(params)
      .map(key => `${key}=${params[key]}`)
      .join('&') +
    '&spm=' +
    spmab;
  window.goldlog_queue.push({
    action: 'goldlog.record',
    arguments: ['/sc.home.sw', 'EXP', paramsStr, 'GET'],
  });
}
(function () {
  function getCookie(name) {
    const cookieMatch = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieMatch ? cookieMatch.pop() : null;
  }
  function deleteCookie(name, path = '/') {
    document.cookie = name + '=; Path=' + path + '; Max-Age=0';
  }
  const swCacheValue = getCookie('sw-cache');
  deleteCookie('sw-cache');
  __sw_dot({ sceneName: 'sw_cache_hit', hit: !!swCacheValue });
})();


