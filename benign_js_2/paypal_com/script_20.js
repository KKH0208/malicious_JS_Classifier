/* 元のURL: https://paypal.com */
document.addEventListener("DOMContentLoaded", () =>{const nonCriticalLinks = document.querySelectorAll('link[data-non-critical-css]');nonCriticalLinks.forEach((link)=>{link.rel = 'stylesheet';link.removeAttribute('data-non-critical-css')})});

