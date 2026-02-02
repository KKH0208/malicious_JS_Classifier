/* 元のURL: https://ebay.com */

      window.tempLazyLoadQueue = [];
      window.addtoLazyLoad = function (config) {
        if (typeof lazyLoad !== "undefined") {
          lazyLoad.addToQueue(config.el, config.fit);
        } else {
          tempLazyLoadQueue.push(config);
        }
      };
    

