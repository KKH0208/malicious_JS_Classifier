document.documentElement.className = document.documentElement.className.replace(/\boptml_no_js\b/g, "");
(function(w, d){
var b = d.getElementsByTagName("head")[0];
var s = d.createElement("script");
var v = ("IntersectionObserver" in w && "isIntersecting" in w.IntersectionObserverEntry.prototype) ? "_no_poly" : "";
s.async = true;
s.src = "https://mla5d9ln2apo.i.optimole.com/js-lib/v2/latest/optimole_lib" + v  + ".min.js";
b.appendChild(s);
w.optimoleData = {
lazyloadOnly: "optimole-lazy-only",
backgroundReplaceClasses: ["tp-bgimg"],
nativeLazyload : false,
scalingDisabled: false,
watchClasses: [],
backgroundLazySelectors: ".elementor-section[data-settings*=\"background_background\"], .elementor-section > .elementor-background-overlay, .wp-block-cover[style*=\"background-image\"], .elementor-widget-container, .elementor-background-slideshow__slide__image, .tp-bgimg",
network_optimizations: false,
ignoreDpr: true,
quality: 0
}
}(window, document));
document.addEventListener( "DOMContentLoaded", function() {
if ( "loading" in HTMLImageElement.prototype && Object.prototype.hasOwnProperty.call( optimoleData, "nativeLazyload" ) && optimoleData.nativeLazyload === true ) {
const images = document.querySelectorAll('img[loading="lazy"]');
images.forEach( function (img) {
if ( !img.dataset.optSrc) {
return;
}
img.src = img.dataset.optSrc;
delete img.dataset.optSrc;
});
}
} );