/* 元のURL: https://verisign.com */
(()=>{(()=>{let t=document.currentScript.previousElementSibling,e=t.previousElementSibling,o=parseInt(t.getAttribute("data-video-hidden"));if(!isNaN(o)){let a=t.querySelectorAll("source"),s=["resize","orientationchange"],n=()=>{let i=window.innerWidth;i>=o&&a[0].hasAttribute("data-src")?(a.forEach(r=>{r.src=r.dataset.src,r.removeAttribute("data-src")}),t.load()):i<o&&e.hasAttribute("data-src")&&(e.src=e.dataset.src,e.removeAttribute("data-src")),a[0].hasAttribute("src")&&e.hasAttribute("src")&&s.forEach(r=>{window.removeEventListener(r,n)})};window.navigator.userAgent.toLowerCase().includes("edg")&&t.querySelector("[data-no-edge-compatibility]").remove(),s.forEach(i=>{window.addEventListener(i,n)}),n()}})();})();


