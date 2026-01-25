/* 元のURL: https://wordpress.org */
// 外部JS: https://wordpress.org/wp-content/mu-plugins/pub-sync/blocks/language-suggest/build/front.js?ver=6f71d5ef610256d46dec
document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".wp-block-wporg-language-suggest");if(!e)return;const t=new URL(e.dataset.endpoint||"https://wordpress.org/lang-guess/lang-guess-ajax.php");t.searchParams.set("uri",encodeURIComponent(window.location.pathname)),t.searchParams.set("locale",languageSuggestData.locale),fetch(t).then(e=>{if(!e.ok)throw Error(e.statusText);return e.text()}).then(t=>e.innerHTML=t).catch(()=>{})});

