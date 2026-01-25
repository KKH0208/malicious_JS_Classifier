/* 元のURL: https://booking.com */

(function(B){
var tmp = B._onfly || [], fn;
for (var i = 0, l = tmp.length; i < l; i++) {
if (typeof tmp[i] === 'function') tmp[i].call(B);
}
B._onfly = null;
}(booking));


