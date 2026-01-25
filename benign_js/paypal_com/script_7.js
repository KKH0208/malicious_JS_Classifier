/* 元のURL: https://paypal.com */
if (self === top || 'www.paypal.com' === window.parent.location.hostname) {var antiClickjack = document.getElementById('antiClickjack');if (antiClickjack) {antiClickjack.parentNode.removeChild(antiClickjack);}} else {top.location = self.location;}

