/* 元のURL: https://duckduckgo.com */
!function(){let e="dark",t="light",r=function(){let r,i=new URLSearchParams(window.location.search).get("kae");if(i){if("-1"===i)return t;if("d"===i||"t"===i)return e}let n=document.cookie.split(/; */);for(let e=0;e<n.length;e++){let t=n[e];if(RegExp("^ae=").test(t)){r=t;break}}if(r){let i=r.split("=")[1];if("-1"===i)return t;if("t"===i)return e}return window.matchMedia("(prefers-color-scheme: dark)").matches?e:t}();document.documentElement.classList.add(r===e?"theme-dark":"theme-light")}();

