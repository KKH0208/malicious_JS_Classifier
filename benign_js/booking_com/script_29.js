/* 元のURL: https://booking.com */

window.onload = function () {
var elements = document.querySelectorAll('[data-defer-prefetch]');
Array.prototype.forEach.call(elements, function(el){
el.setAttribute('rel', 'prefetch');
});
};


