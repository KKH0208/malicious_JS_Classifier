/* 元のURL: https://pinterest.com */
(function placeholderResourceSuspenseSSRhandler() {
    if (!window) {
      return;
    }
    window.__PWS_RESOURCE_DATA_BEFORE_INIT__ = [];
    window.__PWS_RESOURCE_PENDING_BEFORE_INIT__ = {};
    function dataHandler(serverResourceResponse) {
      window.__PWS_RESOURCE_DATA_BEFORE_INIT__.push(serverResourceResponse);
    }
    function pendingHandler(resourceName, encodedOptionsKey) {
      if (!window.__PWS_RESOURCE_PENDING_BEFORE_INIT__[resourceName]) {
        window.__PWS_RESOURCE_PENDING_BEFORE_INIT__[resourceName] = new Set();
      }
      window.__PWS_RESOURCE_PENDING_BEFORE_INIT__[resourceName].add(encodedOptionsKey);
    }
    window.__PWS_RESOURCE_SSR_HANDLER__ = dataHandler;
    window.__PWS_RESOURCE_PENDING_FETCH_HANDLER__ = pendingHandler;
  }())

