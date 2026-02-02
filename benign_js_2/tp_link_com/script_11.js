/* 元のURL: https://tp-link.com */

    typeof tp != 'undefined' && tp.fixedView.add({
      position: 'right-bottom',
      dom: '<script src="https://static.tp-link.com/assets/js/livechat.js"><\/script>',
      urls: [
        /\/jp\/$/,
        /\/jp\/support\/$/
      ]
    });
    typeof tp != 'undefined' && tp.fixedView.add({
      position: 'right-bottom',
      dom: '<div></div>',
      urls: [
        /\/jp\/$/,
      ],
      cookieName: 'tp_popup-right-bottom'
    });
    typeof tp != 'undefined' && tp.fixedView.add({
      position: 'right-bottom',
      dom: '<script src="https://static.tp-link.com/assets/diff/jp/widgets/wifi7/script.js"><\/script>',
      excludeUrls: [
        /\/jp\/$/,
        /\/jp\/wifi7\/$/,
      ],
      cookieName: 'tp_popup-right-bottom'
    });
    typeof tp != 'undefined' && tp.fixedView.add({
      position: 'right-bottom',
      dom: '<script src="https://static.tp-link.com/assets/diff/jp/widgets/popup/script.js?2025"><\/script>',
      excludeUrls: [
        /\/business-networking\//,
        /vigi/,
        /omada/,
        /support/
      ],
      cookieName: 'tp_popup-right-bottom'
    });
    typeof tp != 'undefined' && tp.fixedView.add({
      position: 'right-bottom',
      dom: '<script src="https://static.tp-link.com/assets/diff/jp/widgets/popup/script.js?2025"><\/script>',
      urls: [
        /faq\/690\//,
        /faq\/833\//,
        /faq\/1106\//,
        /faq\/1570\//,
        /faq\/722\//,
        /faq\/1123\//,
        /faq\/1699\//,
        /faq\/1700\//,
        /faq\/1535\//,
        /faq\/1557\//,
        /faq\/1556\//,
        /faq\/87\//,
        /faq\/1550\//,
        /faq\/497\//,
        /faq\/2169\//,
        /faq\/1712\//,
        /faq\/1384\//,
        /faq\/2215\//,
        /faq\/1560\//,
        /faq\/1555\//,
        /blog\/1872\//,
        /blog\/1917\//,
        /blog\/1948\//,
        /blog\/1970\//,
        /blog\/2004\//,
      ],
      cookieName: 'tp_popup-right-bottom',
      expire: new Date('2025-12-01 23:59:59')
    });
  

