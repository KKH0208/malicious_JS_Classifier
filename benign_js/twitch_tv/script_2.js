/* 元のURL: https://twitch.tv */
function isAr(){try{if(document.cookie.includes("language"))return!!document.cookie.includes("language=ar");if(navigator.language.startsWith("ar"))return!0}catch(e){}return!1}isAr()&&(document.documentElement.dir="rtl")

