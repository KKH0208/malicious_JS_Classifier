/* 元のURL: https://paypal.com */
'use strict';
          (function chat(d, w) {
            const s = d.createElement('script');
            s.src = 'https://www.paypalobjects.com/helpcenter/smartchat/sales/v1/open-chat.js';
            s.nonce = 'NjUxZWNhOWUtOGFiYS00OWMyLTgxZjQtZjU2YzQ3NjRjZjU1';
            s.defer = 1;
            if (w.PAYPAL?.analytics) {
              d.head.appendChild(s);
            } else {
              d.addEventListener('pypl_analytics_ready', () => d.head.appendChild(s));
            }
          }(document, window));

