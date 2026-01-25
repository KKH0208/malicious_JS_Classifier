/* 元のURL: https://uber.com */
(function (){function __youtubeIframeScript__(){var e=document.getElementsByTagName("iframe");try{for(var t=0;t<e.length;t++)if("enabled"===e.item(t).dataset.tracking&&"www.youtube.com"===new URL(e.item(t).src).host){var r=document.createElement("script");r.src="https://www.youtube.com/iframe_api";var a=document.getElementsByTagName("script")[0];return a.parentNode.insertBefore(r,a),void(window.__on_youtube_iframe_ready__=new Promise((e=>{window.onYouTubeIframeAPIReady=e})))}}catch(e){}}
__youtubeIframeScript__();})();

