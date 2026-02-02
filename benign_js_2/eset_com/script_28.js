/* 元のURL: https://eset.com */
function canonfix(){var canon=document.querySelector("link[rel='canonical']");if(canon&&/\?/.test(document.location)){canon=canon.getAttribute("href").replace(/^https:\/\/.*?\.eset\.com/,'');var canonregexp=new RegExp('^https:\/\/.*?\.eset\.com'+canon+'#','i');[...document.querySelectorAll('a')].filter(el=>canonregexp.test(el.href)).map(el=>el.href=el.href.replace(canonregexp,'#'));}}
/complete|interactive|loaded/.test(document.readyState)?canonfix():document.addEventListener("DOMContentLoaded",canonfix);

