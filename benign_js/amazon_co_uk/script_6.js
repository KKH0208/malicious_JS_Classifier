/* 元のURL: https://amazon.co.uk */

////////////////////////////////////////////
// BEGIN PACKAGE 
/////////////////////////
// BEGIN FILE GWI/event-manager.js
/////////////////////////
/*


Full source (including license, if applicable) included below.
*/
/**
 * This contains GWI event manager utility
 */
// FIXME: Good javascript code should work in strict mode
// "use strict";
var GWI = (function(window) {
  var self = {},
      latencyRegistry= {},
      NOOP = function() {};

  var eventManager = (function() {
    var manager = this,
        eventRegistry = {},
        globalHandlers = [];

    function Subscriber(eventIds, handler) {
      var subscriber = this;
      var eventObjs = [];
      for (var i = 0; i < eventIds.length; i++) {
        eventObjs.push({
          id : eventIds[i],
          occured : false
        });
      }

      function invokeHandler() {
        var occured = true;
        for (var i = 0; i < eventObjs.length; i++) {
          occured = occured && eventObjs[i].occured;
        }
        return occured;
      }

      subscriber.notify = function(eventId) {
        for (var i = 0; i < eventObjs.length; i++) {
          var eObj = eventObjs[i];
          if (eObj.id === eventId) {
            eObj.occured = true;
          }
        }
        if (invokeHandler()) {
          handler();
        }
      };
    }

    function Event(eventId, occured) {
      var event = this;
      var subscribers = [];
      event.time = 0;
      event.occured = occured;
      setEventTime();
      function setEventTime() {
        if(event.occured) {
          // see uet function in 
          // https://code.amazon.com/packages/ClickstreamBrowserDataJavaScript/blobs/mainline/--/javascript/head-open.js
          event.time = new Date().getTime();
        }
      }
      event.notifySubscribers = function() {
        event.occured = true;
        setEventTime();
        // notify all the subscribers
        for (var i = 0; i < subscribers.length; i++) {
          subscribers[i].notify(eventId);
        }
      };
      event.registerSubscriber = function(subscriber) {
        if (subscriber !== null && subscriber !== undefined) {
          subscribers.push(subscriber);
        }
        if (event.occured) {
          subscriber.notify(eventId);
        }
      };
    }
    manager.registerEvent = function(eventId, occured) {
      if (eventRegistry[eventId] === undefined) {
        eventRegistry[eventId] = new Event(eventId, occured);
        for (var i = 0; i < globalHandlers.length; i++) {
          var subscriber = new Subscriber([eventId], globalHandlers[i]);
          eventRegistry[eventId].registerSubscriber(subscriber);
        };
      }
    };
    manager.registerSubscriber = function(eventIds, handler) {
      var subscriber = new Subscriber(eventIds, handler);
      for (var i = 0; i < eventIds.length; i++) {
        var eventId = eventIds[i];
        manager.registerEvent(eventId, false);
        eventRegistry[eventId].registerSubscriber(subscriber);
      }
      return subscriber;
    };
    manager.notifySubscribers = function(eventId) {
      eventRegistry[eventId].notifySubscribers();
    };
    manager.getUnoccuredEvents = function(eventIds) {
      var unOccuredEvents = [],
          i;
      for (i = 0; i < eventIds.length; i++) {
        var eventId = eventIds[i];
        if (eventRegistry[eventId] === undefined || (eventRegistry[eventId] && !eventRegistry[eventId].occured)) {
          unOccuredEvents.push(eventId);
        }
      }
      return unOccuredEvents;
    };
    manager.getMaxTime = function(eventIds) {
      var time = 0,
          i;
      for (i = 0; i < eventIds.length; i++) {
        var eventId = eventIds[i];
        if(eventRegistry[eventId] && eventRegistry[eventId].time > time) {
          time = eventRegistry[eventId].time;
        }
      }
      return time;
    };
    manager.addGlobalHanlder = function(handler) {
      if (typeof handler === "function") {
        globalHandlers.push(handler);
      }
    };
    return manager;
  })();

  self.whenAll = function(eventIds, handler) {
    return eventManager.registerSubscriber(eventIds, handler);
  };

  self.whenAny = function(eventIds, handler) {
    var subscribers = [];
    for (var i = 0; i < eventIds.length; i++) {
      var eventId = eventIds[i];
      subscribers.push(self.whenAll([ eventId ], handler));
    }
    return subscribers;
  };
  
  // Global Event handler registered using this function
  self.onEvent = eventManager.addGlobalHanlder; 

  self.register = function(eventId) {
   // register eventId and invoke subscribers
    eventManager.registerEvent(eventId, true);
    eventManager.notifySubscribers(eventId);
  };

  self.recordLatency = function(scope) {
    if(!latencyRegistry[scope]){
      var message = scope + ' fired at ';
      window.GWI && GWI.util && GWI.util.debugLog(message, true);
      latencyRegistry[scope] = true;
      window.uet && uet('cf', scope, {
        wb : 1
      });
      window.uex && uex('ld', scope, {
        wb : 1
      });
    }
  };
  self.registerX1Once = function(P) {
    P && P.register('x1');
    self.registerX1Once = NOOP; 
  };
  self.fireX2Once = function(P, time) {
    if (window.uet) {
      // No documentation, https://tt.amazon.com/0143495131 
      uet('x2', undefined, undefined, time);
    }
    self.registerX2Once(P);
    self.fireX2Once = NOOP;
  };
  self.registerX2Once = function(P) {
    self.registerX2Once = NOOP; 
    // global event can cause this being called recursively
    // so set the function to empty first before register any event
    P && P.register('x2');
    self.register('x2');
  };
  self.regGwAtfReadyOnce = function(P) {
    P && P.register('gwAtfReady');
    self.register('gwAtfReady');
    self.regGwAtfReadyOnce = NOOP; 
  };
  self.getUnoccuredEvents = eventManager.getUnoccuredEvents; 
  self.getMaxTime = eventManager.getMaxTime; 
  return self;
})(window);
/////////////////////////
// END FILE GWI/event-manager.js
/////////////////////////
/////////////////////////
// BEGIN FILE GWI/gw-event-manager.js
/////////////////////////
/*


Full source (including license, if applicable) included below.
*/
"use strict";

P.register("gw-event-manager", function(){
    return {
        whenAll: window.GWI.whenAll
    };
});
/////////////////////////
// END FILE GWI/gw-event-manager.js
/////////////////////////
/////////////////////////
// BEGIN FILE GWI/preload.js
/////////////////////////
/*


Full source (including license, if applicable) included below.
*/
"use strict";
GWI.preload = function(src, onload) {
  if (!src) {
    return;
  }
  var img = new Image();
  img.onload = function() {
    onload && onload();
  };
  img.src = src;
  return img.complete;
};
/////////////////////////
// END FILE GWI/preload.js
/////////////////////////
/////////////////////////
// BEGIN FILE GWI/images.js
/////////////////////////
/*


Full source (including license, if applicable) included below.
*/
"use strict";
GWI.instrumentImages = function(scope, imgStr){
         var instrument = {};
         if (scope && imgStr) {
             instrument.imgArray = imgStr.split(" ");
             instrument.totalImgs = instrument.imgArray.length;
             instrument.scope = scope + '-visible';
             instrument.imgReady = function() {
                 instrument.totalImgs--;
                 if(instrument.totalImgs === 0){
                     GWI.recordLatency(instrument.scope);
                     GWI.register(instrument.scope);
                 }
             }
             for (var i = 0; i < instrument.imgArray.length; i++) {
                 var src = instrument.imgArray[i];
                 GWI.preload(src, instrument.imgReady);
             }
         }
         return instrument;
     };
/////////////////////////
// END FILE GWI/images.js
/////////////////////////
/////////////////////////
// BEGIN FILE GWI/util.js
/////////////////////////
/*


Full source (including license, if applicable) included below.
*/
/**
 * Billboard img instrumentation
 */
"use strict";
GWI.util = (function () {
  var GWI_DATA = 'data-gwi';
  var debugEnabled = undefined;

  function jsonData(data) {
    return window.JSON && JSON.parse && JSON.parse(data);
  }

  return {
    logCounter: function(counter){
      if(typeof ue == 'object' && typeof(ue.count) == 'function') {
        ue.count(counter, (ue.count(counter) || 0) + 1);
      }
    },

    logScope : function(scope) {
      var gwi = window.GWI;
      if (scope && gwi) {
        gwi.recordLatency(scope);
        gwi.register(scope);
      }
    },

    getParent : function(id) {
      var obj = document.getElementById(id);
      return obj && obj.parentElement;
    },

    gwiData : function(el) {
      return el && jsonData(el.getAttribute(GWI_DATA)) || {};
    },

    debugLog : function(message, recordTime) {
      if (!debugEnabled) {
        window.P && P.when('isDebug').execute(function(isDebug) {
          debugEnabled = isDebug ? isDebug : false;
        });
      }
      if (debugEnabled === true) {
        var elapsedTime = recordTime ? Date.now() - window.performance.timing.navigationStart : '';
        console.log('MetricsDebug: ', message + elapsedTime);
      }
    }
  }
}());
/////////////////////////
// END FILE GWI/util.js
/////////////////////////
/////////////////////////
// BEGIN FILE GWI/billboard.js
/////////////////////////
/*


Full source (including license, if applicable) included below.
*/
/**
 * Billboard img instrumentation
 */
"use strict";
GWI.BillboardWidget = function BillboardWidget(id, images) {
  if(window.GWI && window.GWI.util){
    images = images || [];
    var gwiUtil = window.GWI.util,
        i,
        root = gwiUtil.getParent(id),
        gwiData = gwiUtil.gwiData(root),
        loaded = [];

    function verifyLoaded() {
      for(var j = 0; j < loaded.length; ++j) {
        if(!loaded[j].complete) {
          return;
        }
      }
      gwiUtil.logScope(gwiData['visible']);
      gwiUtil.logScope(gwiData['active']);
    }

    for(i = 0; i < images.length; ++i) {
      (function(i) {
        var img = new Image();
        img.onload = verifyLoaded;
        img.src = images[i];
        loaded[i] = img;
      }(i));
    }
    verifyLoaded();
  }
};
/////////////////////////
// END FILE GWI/billboard.js
/////////////////////////
/////////////////////////
// BEGIN FILE GWI/asset-util.js
/////////////////////////
/*


Full source (including license, if applicable) included below.
*/
"use strict";
GWI.AssetUtil = (function() {
  var assetPreloadRegistry = {
    'image' : function(src) {
      if (src) {
        window.GwInstrumentation && window.GwInstrumentation.CF(src);
        var WU = window.ue;
        if (typeof WU === 'object' && typeof WU.count === 'function') {
          var counter = 'gw-preload-img';
          WU.count(counter, (WU.count(counter) || 0) + 1);
        }
      }
    }
  };
  function assetLoadMapper(asset) {
    if (asset && asset.src && asset.type
        && typeof assetPreloadRegistry[asset.type] === 'function') {
      assetPreloadRegistry[asset.type](asset.src);
    }
  }
  function load(assets) {
    assets = assets || [];
    for (var i = 0; i < assets.length; i++) {
      assetLoadMapper(assets[i]);
    }
  }
  return {
    load : load
  };
})();
/////////////////////////
// END FILE GWI/asset-util.js
/////////////////////////
/////////////////////////
// BEGIN FILE GWI/card-instrumentation.js
/////////////////////////
/*


Full source (including license, if applicable) included below.
*/
/**
 * Card instrumentation
 */
"use strict";
GWI.Card = (function (window, document) {
  var visibleSlots = [];

  // https://w.amazon.com/bin/view/ClientSideMetrics/UserDocs/JavascriptErrors#ueLogError
  function logJsError(exception, additionalInfo) {
    if (window.ueLogError) {
      window.ueLogError(exception, additionalInfo);
    }
  }

  function isVisible(element) {
    return (typeof(element.checkVisibility) == 'function') && element.checkVisibility();
  }

  // Auto called by Card rendering platform for individual widget
  function autoInstVisible(uniqueId) {
    if(window.GWI && GWI.util){
      // find all visible images under uniqueId
      var gwiUtil = GWI.util, 
          root = gwiUtil.getParent(uniqueId),
          widget = document.getElementById(uniqueId),
          imgs = widget && widget.getElementsByTagName("img") || [],
          i, j,
          scope = root && root.id,
          loaded = [];

      // if we failed to get id, log a counter and return
      if(!scope || 0 === scope.length || scope === uniqueId) {
        gwiUtil.logCounter('gatewayCardInstrumentationFail');
        return;
      }
      
      for (i = 0; i < imgs.length; i++) {
        gwiUtil.logCounter('gatewayCardImage');
        var img = imgs[i];
        img.onload = verifyLoaded;
        loaded[i] = img;
        img.onerror = logImageError;
      }

      function verifyLoaded() {
        for(j = 0; j < loaded.length; ++j) {
          if(!loaded[j].complete) {
            return;
          }
        }
        gwiUtil.logScope(scope + '-visible');
        if (!visibleSlots.includes(scope)) {
          visibleSlots.push(scope);
        }
      }

      function logImageError() {
        var cardName = root.getAttribute('data-csa-c-painter');
        var additionalInfo = {
          logLevel: 'ERROR',
          attribution: 'gatewayCardImageError',
          message: cardName + ': ', // prefix of error message
        }
        logJsError(new Error('Image failed to load ' + img.src), additionalInfo);
        gwiUtil.logCounter('gatewayCardImageError');
      }

      verifyLoaded();
    }
  }

  // Auto called by Card rendering platform for individual widget
  function autoInstActive(uniqueId) {
    if(window.GWI && GWI.util){
      // find all visible images under uniqueId
      var gwiUtil = GWI.util, 
          root = gwiUtil.getParent(uniqueId),
          scope = root && root.id;
          
      // if we failed to get id, log a counter and return
      if(!scope || 0 === scope.length || scope === uniqueId) {
        gwiUtil.logCounter('gatewayCardInstrumentationFail');
        return;
      }

      gwiUtil.logScope(scope + '-active');
    }
  }

  function logLoadedNotVisibleImages() {
    if (window.GWI && GWI.util) {
      visibleSlots.forEach(function(slot) {
        var gwiUtils = GWI.util,
            card = document.getElementById(slot),
            images = card && Array.prototype.slice.call(card.getElementsByTagName('img')) || [],
            notVisibleImages = [];

        // Do not check image visibility for slots that are not visible
        if (!isVisible(card)) {
          return;
        }

        gwiUtils.logCounter('gatewayCardImageLoaded'); // Count total Cards with loaded images as baseline
        images.forEach(function(img) {
          if (!isVisible(img)) {
            notVisibleImages.push(img.src);
          }
        })

        if (notVisibleImages.length) {
          var cardName = card.getAttribute('data-csa-c-painter'),
              placementId = card.getAttribute('data-pf_rd_p');
          gwiUtils.logCounter('gatewayCardImageLoadedNotVisible');
          var additionalInfo = {
            logLevel: 'WARN',
            attribution: 'gatewayCardImageLoadedNotVisible',
            message: cardName + ': ', // prefix of error message
          }
          logJsError(new Error("Image(s) loaded, but not visible in slot " + slot + ". PlacementId: " + placementId +
              ". Images: " + notVisibleImages), additionalInfo);
        }
      })
    }
  }

  return {
    autoInstVisible: autoInstVisible,
    autoInstActive: autoInstActive,
    logLoadedNotVisibleImages: logLoadedNotVisibleImages,
  }
}(window, document));
/////////////////////////
// END FILE GWI/card-instrumentation.js
/////////////////////////
/////////////////////////
// BEGIN FILE derived/atf-widget.js
/////////////////////////
/*


Full source (including license, if applicable) included below.
*/
"use strict";

P.register('atfWidgetComponent', function() {
  var NEVER_EVENT = "gw-never-event",
      ATF_ROW_COUNT = 2;

  function getAtfWidgets(atfRowCount) {
    // NodeList to Array for easier processing
    var gridCols = Array.prototype.slice.call(getWidgetsFromSelector('#gw-card-layout .gw-col')),
        i,
        atfWidgets = [],
        cardLayout = document.getElementById('gw-card-layout'),
        // Assume it is a wide layout if breakpoint undefined
        gridBreakpoint = (cardLayout && cardLayout.dataset && cardLayout.dataset.gridBreakpoint ) ? cardLayout.dataset.gridBreakpoint : 'ws',
        gridWidth = gridBreakpoint === 'xs'? 2: gridBreakpoint === 'sm' ? 3 : 4,
        gridOrder = 'data-order-' + gridBreakpoint,
        atfColCount = 0,
        additionalRow = 0,
        gridTotalSize = 0;

    for (i = 0; i < gridCols.length; i++) {
      gridTotalSize += getGridColSize(gridCols[i], gridBreakpoint);
    }

    for (i = atfRowCount; i >= 0; i--) {
      if (gridTotalSize >= i * gridWidth) {
        atfColCount = i * gridWidth;
        additionalRow = atfRowCount - i;
        break;
      }
    }

    // Make sure first N cards are the ones we care
    //TODO filter out gridCols based on gridOrder attribute presense before sorting
    gridCols.sort(function(a, b){return parseInt(a.getAttribute(gridOrder)) - parseInt(b.getAttribute(gridOrder))});

    var currColSize = 0;
    i = 0;
    while (currColSize < atfColCount) {
      currColSize += getGridColSize(gridCols[i], gridBreakpoint);
      Array.prototype.push.apply(atfWidgets, getWidgetsFromCol(gridCols[i]));
      i++;
    }

    // If too many grids punt, we will need to consider desktop rows
    // as part of the ATF
    if (additionalRow > 0) {
      var rowWidgets = getRowWidgets(gridWidth, gridBreakpoint);
      if (rowWidgets && rowWidgets.length >= additionalRow) {
        for (i = 0; i < additionalRow; i++ ) {
          Array.prototype.push.apply(atfWidgets, rowWidgets[i]);
        }
      } else {
        // If row widget not flushed, we should not fire af
        // af/gwAtfReady will be registed when page load in this case in AmazonGatewayHackAssets
        atfWidgets.push(NEVER_EVENT);
      }
    }

    return atfWidgets;
  }

  function getWidgetsFromCol(gridCol){
    // If there are multipule rows in a Column
    var rowWidgets = gridCol.querySelectorAll(".gw-row"),
        widgets = [];
    for (var j = 0; j < rowWidgets.length; j++) {
      if (!containsAd(rowWidgets[j])) {
        widgets.push(rowWidgets[j].id);
      }
    }

    // If this is the only widget current col contains
    // Also filter out Ads slots because they do not report latency
    /* Importing derived/_checkCsmDecoration.js */
if (hasClass(gridCol, 'celwidget') && !containsAd(gridCol)) {
    widgets.push(gridCol.id);
}
/* Done importing derived/_checkCsmDecoration.js */


    return widgets;
  }

  function containsAd(element) {
    // Using detection logic suggested by Ads team https://issues.amazon.com/GW-5824
    return element.getElementsByClassName('text/x-dacx-safeframe').length > 0 || element.getElementsByClassName('text/x-APE-lightAds').length > 0 || element.getElementsByTagName('iframe').length > 0;
  }

  function getGridColSize(gridCol, gridBreakpoint) {
    var sizeAttr = parseInt(gridCol.getAttribute('data-col-span-' + gridBreakpoint));
    return sizeAttr > 1 ? sizeAttr : 1;
  }

  /* Importing derived/_getBtfRowWidgets.js */
var DESKTOP_ROW = "#gw-content-grid .gwi-row";

function getRowWidgets(gridWidth, gridBreakpoint) {
    var layoutRows = [],
        rows = getWidgetsFromSelector(DESKTOP_ROW),
        i;
    for (i = 0; i < rows.length; i++ ) {
      var rowWidgets = [],
          row = rows[i];
      // shoveler case
      if(hasClass(row, "desktop-row")) {
        rowWidgets.push(row.id);
      }
      // billboard case
      if(hasClass(row, "billboardRowWrapper")) {
        var billboards = row.querySelectorAll(".billboard"),
            j;
        for (j = 0; j < billboards.length; j++ ) {
          rowWidgets.push(billboards[j].id);
        }
      }
      layoutRows.push(rowWidgets);
    }
    return layoutRows;
  }
/* Done importing derived/_getBtfRowWidgets.js */


  function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
  }

  function getWidgetsFromSelector(selector) {
    if (typeof document.querySelectorAll !== 'function' && typeof document.querySelectorAll !== 'object') {
      var result = [];
      if (document.createStyleSheet && document.all) {
        var style = document.createStyleSheet(''), all = document.all, len = all.length, i;
        if (style && style.addRule && style.removeRule) {
          style.addRule(selector, 'gwTemp:forQS');
          for (i = 0; i < len; i += 1) {
            if (all[i].currentStyle.gwTemp === 'forQS') {
              result.push(all[i]);
            }
          }
          style.removeRule(0);
        }
      }
      return result;
    }
    return document.querySelectorAll(selector);
  }

  return {
    getWidgets: function() {
      return getAtfWidgets(ATF_ROW_COUNT);
    }
  };
});
/////////////////////////
// END FILE derived/atf-widget.js
/////////////////////////
/////////////////////////
// BEGIN FILE derived/duff.js
/////////////////////////
/*


Full source (including license, if applicable) included below.
*/
/**
 * This contains JS used to instrument the AF, gwAtfReady etc layout metrics based on the widget
 * level latency events for the desktop duff gateway.
 */

"use strict";
/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice#Streamlining_cross-browser_behavior
 * Shim for "fixing" IE's lack of support (IE < 9) for applying slice
 * on host objects like NamedNodeMap, NodeList, and HTMLCollection
 */
(function () {
  var _slice = Array.prototype.slice;

  try {
    // Can't be used with DOM elements in IE < 9
    _slice.call(document.documentElement);
  } catch (e) { // Fails in IE < 9
    Array.prototype.slice = function(begin, end) {
      // IE < 9 gets unhappy with an undefined end argument
      end = (typeof end !== 'undefined') ? end : this.length;

      // For native Array objects, we use the native slice function
      if (Object.prototype.toString.call(this) === '[object Array]'){
        return _slice.call(this, begin, end);
      }

      // For array like object we handle it ourselves.
      var i, cloned = [],
        size, len = this.length;

      // Handle negative value for "begin"
      var start = begin || 0;
      start = (start >= 0) ? start : Math.max(0, len + start);

      // Handle negative value for "end"
      var upTo = (typeof end == 'number') ? Math.min(end, len) : len;
      if (end < 0) {
        upTo = len + end;
      }

      // Actual expected size of the slice
      size = upTo - start;

      if (size > 0) {
        cloned = new Array(size);
        if (this.charAt) {
          for (i = 0; i < size; i++) {
            cloned[i] = this.charAt(start + i);
          }
        } else {
          for (i = 0; i < size; i++) {
            cloned[i] = this[start + i];
          }
        }
      }

      return cloned;
    };
  }
}());

GWI.duff = (function addSubscription(window, document) {
  var NOOP = function() {};

  function getConfig() {
    return {
      mustEvents : [ 'cf' ],
    };
  }

  function getEventIds(widgets, suffix) {
    var eventIds = [],
        i;
    for (i = 0; i < widgets.length; i++) {
      eventIds.push(widgets[i] + suffix);
    }
    return eventIds;
  }

  // Return true if af is fired, otherwise return false
  function tryToFireAtf(afEventIds) {
    var unOccuredAfEventIds = GWI.getUnoccuredEvents(afEventIds),
        latestTime = GWI.getMaxTime(afEventIds);
    if (!unOccuredAfEventIds.length) {
      fireAtfOnce(latestTime);
      return true;
    }
    return false;
  }

  function fireAtfOnce(time) {
    fireAtfOnce = NOOP;

    if (window.uet) {
      // No documentation, https://tt.amazon.com/0143495131
      uet('af', undefined, undefined, time);
      var message = 'AF fired at ';
      window.GWI && GWI.util && GWI.util.debugLog(message, true);
      fireFn(time);
    }
    registerAtfOnce();
  };

  function fireFn(time){
    uet('fn', undefined, undefined, time);  //currently only for logging purposes
    var message = 'FN fired at ';
    window.GWI && GWI.util && GWI.util.debugLog(message, true);
    window.P && P.register('fn');
  }

  function registerAtfOnce() {
    // global event can cause this being called recursively
    // so set the function to empty first before register any event
    registerAtfOnce = NOOP;
    try {
      window.P && P.register('af');
      window.P && P.register('gwAtfReady');
      GWI.register('af');
      GWI.register('gwAtfReady');
      fireSPLoad();
    } catch(err) {
      // Double register can happen if somehow window load fires before
      // some latency event if eveything is cached
    }
  };

  function fireSPLoad() {
    window.P && P.register('sp.load.js');
    // To be used for instrumentation and for latency analysis
    window.uet && uet('cf', 'spLoadJs', {wb: 1});
    window.uex && uex('ld', 'spLoadJs', {wb: 1});
    window.GWI && GWI.util && GWI.util.logCounter('spLoadJs');
    var message = 'sp.load.js fired at ';
    window.GWI && GWI.util && GWI.util.debugLog(message, true);
  }

  var atfCalled = false;
  // FIXME: Update to use AH_5_COL_LAYOUT_335198, only need to listen to gw-grid-update
  // https://code.amazon.com/packages/AmazonGatewayCardGridAssets/blobs/37c0411ea2ef3f76b9340b72427fb8ce2154cf4b/--/src/grid-layout/_grid.js#L298,L308
  GWI.onEvent(function() {
    P.when('atfWidgetComponent').execute('fire-atf', function(atfWidgetComponent) {
      if (!atfCalled) {
        var config = getConfig(),
            atfWidgets = atfWidgetComponent.getWidgets();
            atfEvents = getEventIds(atfWidgets, '-visible');

        atfEvents = atfEvents.concat(config.mustEvents);
        atfCalled = tryToFireAtf(atfEvents);
      }
    });
  });
}(window, document));
/////////////////////////
// END FILE derived/duff.js
/////////////////////////
/////////////////////////
// BEGIN FILE critical/gw-instrumentation.js
/////////////////////////
/*


Full source (including license, if applicable) included below.
*/
/**
 * This contains some JS used to instrument the CF and AF metrics on the
 * desktop gateway.
 */

'use strict';

var GwInstrumentation = (function(window) {
  var self = {},
      cfCount = 0,
      h1Af = false,
      cfImgCached = 1,
      imageCFs = {};

  self.markAF = function() {
      // To prvent accidental gurupa hit that triggers JS error
  };

  self.markH1Af = function(ajaxParams) {
      h1Af = true;
      window.uet && uet('cf', 'h1Af', {wb: 1});
      window.uex && uex('ld', 'h1Af', {wb: 1});
      var message = 'H1Af fired at ';
      window.GWI && GWI.util && GWI.util.debugLog(message, true);
      window.P && P.register('h1Af');

      var firstSlide = document.getElementsByClassName('gw-critical-content')[0];
      if (firstSlide) {
          var cfImages = firstSlide.getElementsByTagName('img');
          for (var i = 0; i < cfImages.length; i++) {
              var imageSrc = cfImages[i].src;
              if (!imageCFs[imageSrc]) {
                  self.CF(imageSrc);
              }
          }
      }
      tryToFireCF();
      ajaxParams && fireAjaxAtf(ajaxParams);
  };

  // (CF) Image preload, typically hero-1 or takeover
  self.preload = function(src, onload) {
      if(!src) { return; }
      var img = new Image();
      img.onload = function() {
          onload && onload();
      };
      img.src = src;
      return img.complete;
  };

  self.CF = function() {
      var cf;
      var isReady = false;
      if(typeof arguments[0] === 'string') {
          var src = arguments[0];
          if(!imageCFs[src]) {
            cf = new self.CF();
            imageCFs[src] = cf;
            var isCached = self.preload(src, function(){
              // polyglot code for easy debugging and minification
              /*<&| '.debugStatement' &>
                  console.log("CF in-memory Image loaded and ready: " + src);
                </&>*/
              cf.ready();
            });
            // there can be more than 1 image in CF; mark cached if all are
            cfImgCached &= isCached;
          }
      }
      else if(this.constructor === self.CF) { // invoked with the new keyword
          cf = {};
          cfCount++;
          cf.ready = function() {
              if(!isReady) {
                isReady = true;
                cfCount--;
                tryToFireCF();
              }
          };
          return cf;
      }
      else {
          throw new Error("Incorrect invocation of GwInstrumentation.CF(...)");
      }
  };

  return self;

  function tagCFImageCache() {
    if(window.ue && ue.tag) {
      window.ue.tag(cfImgCached ? "gwCFImgCache" : "gwCFImgNoCache");
    }
  }

  function tryToFireCF() {
    if(h1Af && cfCount === 0) {
        window.uet && uet('cf');
        var message = 'CF fired at ';
        window.GWI && GWI.util && GWI.util.debugLog(message, true);
        window.P && P.register('cf');
        window.GWI && GWI.register('cf');
        tagCFImageCache();
    }
  }

  function fireAjaxAtf(ajaxParams) {
    P.when('gwAjax').execute(function(gwAjax) {
      gwAjax(ajaxParams.uri, {cache:false, type:'post', data:ajaxParams.data, id:'ajaxATF'});
    });
  }
}(window));
/////////////////////////
// END FILE critical/gw-instrumentation.js
/////////////////////////
/////////////////////////
// BEGIN FILE derived/linkdecorator.js
/////////////////////////
/*


Full source (including license, if applicable) included below.
*/
"use strict";
P.register("LinkDecorator", function () {
    var CEL_ATTRIBUTES = ['pf_rd_p', 'pd_rd_r', 'pd_rd_w', 'pd_rd_wg'];
    // Ref tag is  a special case that the one exist in links takes priority
    // https://w.amazon.com/bin/view/RefMarker we only support recommended ref_ in query parameter
    var NO_OVERRIDE_ATTRIBUTES = ['ref_'];
    var RID_KEY = "pf_rd_r";
    var PSEUDO_URL_PREFIX = 'javascript:';
    /*
        Check whether event has anchor element or not:
            a. if it has anchor element, apply decorate link logic
            b. if it doesn't, try to find it in parent nodes
    */
    var addMultiEventHandlers = function (s, eleId) {
        var pageContent = document.getElementById(eleId);
        s && s.split(" ").forEach(function (event) {
            if (pageContent && pageContent.addEventListener) {
                pageContent.addEventListener(event, eventHandler);
            }
            else if (pageContent && pageContent.attachEvent) {
                pageContent.attachEvent("on" + event, eventHandler);
            }
        });
    };
    var eventHandler = function (e) {
        e = e || window.event;
        if (notEligibleKeyboardEvent(e)) {
            return;
        }
        var element = e.target || e.srcElement;
        while (element && !!element.parentNode) {
            if (eligibleElement(element)) {
                decorateLink(element);
                break;
            }
            else if (element.id && element.id == 'gw-quick-look-btn') {
                applyUglyQuickLookLogic(element.parentNode);
                break;
            }
            element = element.parentNode;
        }
    };
    var notEligibleKeyboardEvent = function (event) {
        var eventType = event.type;
        var keyCode = event.which || event.keyCode;
        return eventType == "keydown" && keyCode !== 13;
    };
    var eligibleElement = function (element) {
        var tagName = element.tagName && element.tagName.toLowerCase();
        return tagName == 'a' || tagName == 'area';
    };
    var applyUglyQuickLookLogic = function (element) {
        var anchorList = element.getElementsByTagName && element.getElementsByTagName('a');
        for (var i = 0; i < anchorList.length; i++) {
            var anchor = anchorList && anchorList[i];
            anchor && decorateLink(anchor);
        }
    };
    /*
        1. Check whether queryParams contains correct requestID param or not
            a. if it does, skip whole logic
            b. If it does not, then there are two possibilities:
                i. RequestID param is present, but RequestID is incorrect (Most likely AX mode)
                    - get query params
                    - replace only requestID param. Keep other query params as is
                    - update element with new query params
                ii. RequestID param is missing. In this case we will assume links aren't decorated
                    - get query params
                    - find an parent element containing cel decoration
                    - fetch data attributes for whitelisted query params
                    - add whitelisted query params
                    - update element with new query params
    */
    var decorateLink = function (anchorElement) {
        var href = anchorElement.href;
        // TODO: remove CSM dependancy: https://issues-pdx.amazon.com/issues/GW-4222
        var rid = window.ue && window.ue.rid;
        /*
            Only execute decoration logic when all below conditions are fulfilled:
            1. href present
            2. ue.rid present
            3. href is not for shoveler/hero arrows or herf is javascript pseudo url
            4. rid amabot param is not present
        */
        href && (href.indexOf(PSEUDO_URL_PREFIX) !== 0) && rid && anchorElement.baseURI && isNonNavigatingHref(href, anchorElement.baseURI) &&
            (href.indexOf(RID_KEY + "=" + rid) < 0) && executeDecorator(rid, anchorElement);
    };
    /*
        ugly way to detect non-Navigating links like shoveler arrows! Shoveler arrows on our side uses
        href="#", which at JS Object level would result in "{page-uri}#". There might be <a> tags without
        href assigned which would be non navigating link, so we would exclude it as well.
    */
    var isNonNavigatingHref = function (href, baseUri) {
        return (href.substring(0, baseUri.length + 1) !== baseUri + "#") && href !== baseUri;
    };
    var executeDecorator = function (rid, anchorElement) {
        var urlMap = getUrlMap(anchorElement.href);
        var queryParams = urlMap.queryParams;
        if (!queryParams[RID_KEY]) {
            rid && (queryParams[RID_KEY] = rid);
            var celElement_1 = findCelElement(anchorElement);
            celElement_1 && forEach(CEL_ATTRIBUTES, function (attr) {
                var val = celElement_1.getAttribute("data-" + attr);
                val && (queryParams[attr] = val);
            });
            // for NO_OVERRIDE_ATTRIBUTES, if the parameters already exist, do not override it
            celElement_1 && forEach(NO_OVERRIDE_ATTRIBUTES, function (attr) {
                var val = celElement_1.getAttribute("data-" + attr);
                val && !queryParams[attr] && (queryParams[attr] = val);
            });
        }
        else if (rid && rid !== queryParams[RID_KEY]) {
            queryParams[RID_KEY] = rid;
        }
        anchorElement.href = urlMap.urlPath + "?" + queryParamsToString(queryParams);
    };
    // Well Element.search does not have great browser support. So using Element.href instead
    var getUrlMap = function (href) {
        var indexOfQueryParamStart = href.indexOf("?");
        if (indexOfQueryParamStart < 0) {
            return {
                "urlPath": href,
                "queryParams": {}
            };
        }
        var queryParams = {};
        // indexOfQueryParamStart + 1 to exclude "?"
        var array = href.substring(indexOfQueryParamStart + 1).split("&");
        forEach(array, function (val) {
            var param = val.split("=", 2);
            if (param.length == 2) {
                !queryParams[param[0]] && (queryParams[param[0]] = param[1]);
            }
        });
        return {
            "urlPath": href.substring(0, indexOfQueryParamStart),
            "queryParams": queryParams
        };
    };
    // Well Object.keys and Array.map does not have great browser coverage. so...
    var queryParamsToString = function (queryParams) {
        var tempArray = [];
        for (var key in queryParams) {
            tempArray.push(key + "=" + queryParams[key]);
        }
        return tempArray.join("&");
    };
    var findCelElement = function (element) {
        while (element && !!element.parentNode) {
            if (element.className && element.className.indexOf("celwidget") >= 0 && element.className.indexOf("csm-placement-id") >= 0)
                return element;
            element = element.parentNode;
        }
    };
    // Well Array.prototype.forEach does not have great browser converage. So...
    var forEach = function (array, callbackFunction) {
        for (var i = 0; i < array.length; i++) {
            callbackFunction(array[i]);
        }
    };
    return function (elementId) {
        addMultiEventHandlers("mousedown touchstart keydown", elementId);
    };
});

/////////////////////////
// END FILE derived/linkdecorator.js
/////////////////////////

// END PACKAGE 
////////////////////////////////////////////

(function(b){var a=window.AmazonUIPageJS||window.P,d=a._namespace||a.attributeErrors,c=d?d("AmazonGatewayHackAssets",""):a;c.guardFatal?c.guardFatal(b)(c,window):c.execute(function(){b(c,window)})})(function(b,a,d){a.P&&b.when("A","ready").execute(function(c){c.on("packard:glow:destinationChangeAll",function(){a.location.reload()})});b.when("A","jQuery","af","gw-desktop-herotator/dom-ready").execute("gwForceHires",function(a,b){a.loadHiResImage(b("#gw-desktop-herotator img"))});a.P&&b.when("p-detect").execute(function(){var a=
document;!/(^|\s+)a-touch(\s+|$)/.test(a.documentElement.className)&&("ontouchend"in a||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints)&&(a.documentElement.className+=" a-touch")});(function(a){a.P&&b.when("A").execute(function(b){a.GWI&&a.GWI.recordLatency("gwAUIReady")})})(a);a.P&&b.when("jQuery").execute(function(c){a.GWI&&a.GWI.recordLatency("jQueryReady");c(document).ready(function(){a.GWI&&a.GWI.recordLatency("jQueryDomReady")});c(a).load(function(){a.GWI&&a.GWI.recordLatency("jQueryWindowLoad");
try{b.register("af"),b.register("sp.load.js"),a.GWI&&GWI.util&&GWI.util.logCounter("spLoadJs"),b.register("gwAtfReady"),a.GWI&&GWI.util&&GWI.util.debugLog("On windowLoad, Fallback AF and sp.load.js fired at ",!0)}catch(e){}})});a.addEventListener("pageshow",function(c){a.GWI&&a.GWI.recordLatency("jQueryPageShow");try{b.register("af"),b.register("sp.load.js"),a.GWI&&GWI.util&&GWI.util.logCounter("spLoadJs"),b.register("gwAtfReady"),a.GWI&&GWI.util&&GWI.util.debugLog("On pageShow, Fallback AF and sp.load.js fired at ",
!0)}catch(e){}a.GWI&&GWI.Card&&GWI.Card.logLoadedNotVisibleImages()});a.P&&b.when("af").execute(function(){b.register("x1");b.register("x2")});a.P&&b.when("ready","af").execute(function(){b.register("gwLayoutReady");a.GWI&&a.GWI.recordLatency("gwLayoutReady")});a.P&&b.when("navCF").execute(function(){a.GWI&&a.GWI.recordLatency("navCF")});a.P&&b.when("A","gwLayoutReady").execute(function(b){b.capabilities.hires&&b.$(a).trigger("resize")});document.documentElement.setAttribute("data-useragent",navigator.userAgent);
document.documentElement.setAttribute("data-platform",navigator.platform)});
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/01rGP6HIADL.js?AUIClients/GenericObservableJS');
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/11sflnhgXuL._RC|61xgboVfIXL.js_.js?AUIClients/AmazonGatewayAuiAssets');
(function(e){var g=window.AmazonUIPageJS||window.P,k=g._namespace||g.attributeErrors,b=k?k("AmazonGatewayCardGridAssets",""):g;b.guardFatal?b.guardFatal(e)(b,window):b.execute(function(){e(b,window)})})(function(e,g,k){e.when("jQuery").register("GwGridLogic",function(b){function g(a){a=a||b("html").width();return n&&1239>=a?"sm":"ws"}function k(a,b){a.attr("data-hide-at-"+b,!0)}function h(a,b,c){if(!a.length)throw Error("No grid layout found with selector");this.$grid=a;this.selector=b;this.context=
c;this.sorted={}}function m(a,d){var c=b(a,d);if(!c.length)throw Error("No grid found with selector: "+a);this.gridDom=new h(c,a,d)}var p={xs:2,sm:3,ws:4},n=!1;b("html").hasClass("a-lt-ie9")||(n=!0);h.prototype.setBreakpoint=function(a){this.$grid.attr("data-grid-breakpoint",a)};h.prototype.sortFor=function(a){if(this.sorted[a])return this.sorted[a];var d=b(this.selector+"\x3e [data-order-"+a+"]",this.context).sort(function(c,f){c=b(c).data("order-"+a);f=b(f).data("order-"+a);return c<f?-1:c>f?1:
0});return this.sorted[a]=d};h.prototype.updateSourceOrder=function(a){};h.prototype.dropIncompleteRows=function(a){if(!this.$grid.data("init-"+a)){var d=this.sortFor(a),c=[],f=0,g=d.length,e=[];d.each(function(d,h){var l=b(h),q=l.hasClass("card-flow-row-break");l=l.data("col-span-"+a)||1;q||(f+=l);f>p[a]?(k(b(c),a),c=[h],f=l):c.push(h);if(q||d===g-1)f<p[a]?k(b(c),a):e=e.concat(c),c=[],f=0});b([e[0],e.pop()]).each(function(c,d){c=b(d);c.hasClass("card-flow-row-break")&&"desktop-ad-center-1"!==c.prev().attr("id")&&
k(c,a)});this.$grid.data("init-"+a,!0)}};m.prototype.init=function(){if(this.gridDom.$grid){this.breakpoint=g();this.update();var a=this;e.when("A").execute("RegisterResizeListener",function(b){b.on("resize",function(c,b){if(b.width||b.orientation)c=g(c.width),c!==a.breakpoint&&(a.breakpoint=c,a.update())})});return this}};m.prototype.update=function(){this.gridDom&&(this.gridDom.setBreakpoint(this.breakpoint),this.gridDom.dropIncompleteRows(this.breakpoint),this.gridDom.updateSourceOrder(this.breakpoint))};
return function(a,b){return new m(a,b)}})});
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('videoonpage').execute(function() {
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/91dn5m6T1dL.js?AUIClients/VideoJsCardsBuzz#language-en');
});
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('h1Af').execute(function() {
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://m.media-amazon.com/images/I/31o5fUYU88L.js?AUIClients/AmazonGatewayHerotatorJS#1117426-T1.991922-T1');
});


