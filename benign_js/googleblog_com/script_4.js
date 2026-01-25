/* 元のURL: https://googleblog.com */

  (function() {
    var dataLayerInitElement = document.querySelector('.data-layer-init-data');
    var dataLayerObject = JSON.parse(
      dataLayerInitElement.getAttribute('data-ga4-analytics')
    );

    // Change undefined strings to primitive value undefined.
    Object.entries(dataLayerObject).forEach(([key, value]) => {
      dataLayerObject[key] = value === 'undefined' ? undefined : value;
    });

    if (!window['dataLayer']) {
      window['dataLayer'] = [];
    }
    window['dataLayer'].push(dataLayerObject);
  }());


