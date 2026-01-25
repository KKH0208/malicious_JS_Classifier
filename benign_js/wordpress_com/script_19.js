/* 元のURL: https://wordpress.com */
// 外部JS: https://wordpress.com/wp-content/js/def-queue.js?v=1566842360
defQueue=window.defQueue||{items:[]};defQueue.add=function(e){defQueue.items.push(e)};defQueue.process=function(){defQueue.items.forEach(function(e){if("function"===typeof e)e()});defQueue.empty()};defQueue.empty=function(){defQueue.items=[]};defQueue.process();

