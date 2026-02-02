/* 元のURL: https://mediatek.com */

function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-840382713/teG9CMHw0MoaEPnx3JAD',
      'event_callback': callback
  });
  return false;
}


