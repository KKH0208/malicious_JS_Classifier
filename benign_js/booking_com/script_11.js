/* 元のURL: https://booking.com */

(function(){
function appendScriptFunction() {
var script = document.createElement('script');
script.nonce = 'BYcbCi2jklBAPZt';
script.src = 'https://d8c14d4960ca.edge.sdk.awswaf.com/d8c14d4960ca/a18a4859af9c/challenge.js';
script.type = "text/javascript";
script.async = true;
window.awsWafCookieDomainList = ['booking.com']
document.head.appendChild(script);
};
function addToWindowLoad(f) {
if (window.addEventListener) {
window.addEventListener('load', f);
} else if (window.attachEvent) { // support older IE versions
window.attachEvent('onload', f);
} else {
document.addEventListener('DOMContentLoaded', f); // final fallback
}
}
addToWindowLoad(function(e) {
setTimeout(appendScriptFunction, 1000);
});
})();


