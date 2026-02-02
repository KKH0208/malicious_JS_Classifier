/* 元のURL: https://ibm.com */
// 外部JS: https://hybrid-cloud-widgets-production.s3.us.cloud-object-storage.appdomain.cloud/loader.js
/*global window, document*/
// Usage: https://github.ibm.com/MSC-Cloud/hc-widgets/wiki/Widget-usage
(function (context) {
  document.loadHybridCloudWidget = function (widget) {
    const renderFunctionName = widget.renderFunctionName;
    const instanceId = widget.instanceId;
    const language = widget.language;
    const onRenderFinish = widget.onRenderFinish;
    const origin = widget.origin || context.location.origin;
    if (typeof document.addEventListener !== 'function') {
      return;
    }
    try {
      document.addEventListener('DOMContentLoaded', () => {
        if (typeof context[renderFunctionName] !== 'function') {
          return;
        }
        context[renderFunctionName](
          instanceId,
          language,
          origin,
          onRenderFinish,
        );
      });
    } catch (err) {
      console.error(err.message());
    }
  };
  document.loadHybridCloudWidgets = function (widgets) {
    if (!Array.isArray(widgets)) {
      return;
    }
    widgets.forEach(document.loadHybridCloudWidget);
  };
})(window);


