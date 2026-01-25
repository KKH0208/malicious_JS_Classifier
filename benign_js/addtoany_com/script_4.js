/* 元のURL: https://addtoany.com */
var platform_icons=function(e){if(e&&3===e.length){var t=window,n=!(!t.document.createElementNS||!t.document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect||!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")||window.opera&&-1===navigator.userAgent.indexOf("Chrome")),o=function(o){var r=t.document.createElement("link"),a=t.document.getElementsByTagName("script")[0],href=e[o&&n?0:o?1:2],sheets=t.document.styleSheets;r.rel="stylesheet",r.href=href,r.media="only x",a.parentNode.insertBefore(r,a);function toggleMedia(){var defined;for(var i=0;i<sheets.length;i++){if(sheets[i].href&&sheets[i].href.indexOf(href)>-1){defined=true;}}
if(defined){r.media="all";}
else{setTimeout(toggleMedia);}}
toggleMedia();},r=new t.Image;r.onerror=function(){o(!1)},r.onload=function(){o(1===r.width&&1===r.height)},r.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="}};
platform_icons([ "https://static.addtoany.com/css/picons.2.svg.css", "https://static.addtoany.com/css/picons.2.png.css", "https://static.addtoany.com/css/picons.2.old.css" ]);

