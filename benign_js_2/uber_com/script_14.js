/* 元のURL: https://uber.com */
(function (){(function () {
        if (typeof window === 'undefined' || typeof window.fetch !== 'function' || typeof window.__preload_cache_invoker__ !== 'function') {
            return;
        }

        window.__preload_cache_invoker__(
          'getCurrentUser',
          '{}',
          '__preload_cache__',
          '["getCurrentUser",{},{"chainWithBootstrap":true,"skipBootstrapOnNonEdgeCachedPages":true,"skipOnBootstrapCondition":"bootstrapData?.is_logged_in === false"}]',
          '__uber_edge_cache_enabled__',
          '__uber_sites_bootstrap__',
          undefined,
          true,
          true,
          function (bootstrapData) { return bootstrapData?.is_logged_in === false; }
          );
    })()})();

