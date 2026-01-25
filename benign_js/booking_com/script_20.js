/* 元のURL: https://booking.com */
(function() { function fireJqueryLoadError() { if(!document.getElementById('req_info')){ setTimeout(fireJqueryLoadError, 100); return; } window.onerror('3rd_JQUERY: load error - ' + 'https://cf.bstatic.com/static/js/jquery_cloudfront_sd/e1e8c0e862309cb4caf3c0d5fbea48bfb8eaad42.js', 1, 1); }; document.addEventListener('error', function(e) { if (e.target && e.target.classList.contains('jquery-script-tag')) { fireJqueryLoadError(); } }, true); })(); 

