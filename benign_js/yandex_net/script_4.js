/* 元のURL: https://yandex.net */
(function(){(()=>{try{if(document.documentElement.className.indexOf("i-ua_browser_msie")!==-1)return;window.home=window.home||{},home.skinValue="system";const t=window.matchMedia("(prefers-color-scheme: dark)"),s=window.matchMedia("(prefers-color-scheme: force-dark)"),e=()=>{const n=home.skinIsDark=s.matches||home.skinValue==="night"||home.skinValue==="system"&&t.matches;document.documentElement.classList.toggle("document_dark_yes",n),document.documentElement.classList.toggle("i-ua_skin_dark",n),document.dispatchEvent(new Event("skin-changed"))};window.home.setSkin=n=>{home.skinValue=n,e()};try{t.addEventListener("change",e),s.addEventListener("change",e)}catch(n){try{t.addEventListener("change",e)}catch(a){}}e()}catch(t){}})();
})();

