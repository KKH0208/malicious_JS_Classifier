/* 元のURL: https://ngenix.net */
// 外部JS: https://ngenix.net/wp-content/themes/ngenix-reboot/assets/js/modules/npm.side-channel-map.js?ver=6.5.7
"use strict";(self.webpackChunkngenix_assets=self.webpackChunkngenix_assets||[]).push([[7068],{507:function(e,t,n){var o=n(453),r=n(6556),s=n(8859),p=n(9675),a=o("%Map%",!0),i=r("Map.prototype.get",!0),u=r("Map.prototype.set",!0),c=r("Map.prototype.has",!0),f=r("Map.prototype.delete",!0),h=r("Map.prototype.size",!0);e.exports=!!a&&function(){var e,t={assert:function(e){if(!t.has(e))throw new p("Side channel does not contain "+s(e))},delete:function(t){if(e){var n=f(e,t);return 0===h(e)&&(e=void 0),n}return!1},get:function(t){if(e)return i(e,t)},has:function(t){return!!e&&c(e,t)},set:function(t,n){e||(e=new a),u(e,t,n)}};return t}}}]);

