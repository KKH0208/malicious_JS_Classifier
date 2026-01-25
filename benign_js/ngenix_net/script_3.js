/* 元のURL: https://ngenix.net */

  const wp_ajax = {
    nonce: `d4b12d9506`,
    url: window.location.pathname !== '/'
      ? `https://ngenix.net/wp-admin/admin-ajax.php`
      : `${window.location.origin}/wp-admin/admin-ajax.php`,
  };

  const wp_json = {
    url: `https://ngenix.net/wp-json/`,
  };

  window.__wp_ajax = wp_ajax;
  window.__wp_json = wp_json;

  function prepareToGetParamsJs(obj) {
    if (typeof obj !== 'object' || Array.isArray(obj)) {
      const msg = 'Type Error: The "obj" argument in the "prepareToGetParamsJs" ' +
        'function expects the object type but is passed "' + typeof obj + '"';
      console.error(msg);
      return '';
    }

    const result = [];

    for (const key in obj) {
      if (obj.hasOwnProperty(key) && ['string', 'number', 'boolean'].includes(typeof obj[key])) {
        result.push(`${key}=${encodeURIComponent(obj[key])}`);
      }
    }

    return result.length ? `?${result.join('&')}` : '';
  }


