/* 元のURL: https://booking.com */

(function () {
document.addEventListener('click', function (e) {
if (e.target.id === 'personalization-switch-1') {
toggleSwitchLock(true);
var httpRequest = new XMLHttpRequest();
httpRequest.open('PUT', '/consent/personalization?value=' + (e.target.checked ? '0' : '1'), true);
httpRequest.onload = function () {
toggleSwitchLock(false);
B.require('events').trigger('privacy:personalisation-updated');
}
httpRequest.send();
}
});
function toggleSwitchLock(lock) {
var checkbox = document.getElementById('personalization-switch-1');
if (lock) {
checkbox.setAttribute('disabled', 'disabled');
} else {
checkbox.removeAttribute('disabled');
}
}
function trackCustomGoal(goal) {
if (window.B && window.B.et) {
window.B.et.customGoal('YTBeWfCDIXLSGbDaFSRfABNIPRaO', goal);
}
}
})();


