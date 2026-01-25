/* 元のURL: https://stripe.com */
new MutationObserver(e=>{for(const d of e)if(d.addedNodes)for(const e of d.addedNodes)e instanceof HTMLLinkElement&&void 0!==e.dataset.jsLazyStyle&&e.addEventListener("load",function(){this.media="all"})}).observe(document.head,{childList:!0}),document.addEventListener("DOMContentLoaded",()=>{for(const e of document.querySelectorAll("link[data-js-lazy-style]"))"all"!==e.media&&(e.media="all")});


