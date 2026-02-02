/* 元のURL: https://globo.com */
// 外部JS: https://s3.glbimg.com/v1/AUTH_cae15c1f760d418f9f8a1f3193d715cd/assets/script-streamAds.js

  var liveshopSdkOptions = null;

  (function (i, s, o, g, r, a, m) {
				var p = new Promise(function (rs) {
					return rs();
				});
  a = s.createElement(o);
  m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  a.onload = function () {
					return p.then(function () {
						return ss(liveshopSdkOptions);
					});
				};
  m.parentNode.insertBefore(a, m);
			})(
  window,
  document,
  'script',
  'https://assets.streamshop.com.br/sdk/liveshop-web-sdk.min.js'
  );


