/* 元のURL: https://uber.com */
(function (){class PreAnalytics{static queue=[];static add(a){a&&PreAnalytics.queue.push(a)}static flush(a){const e=PreAnalytics.queue;PreAnalytics.queue=[],e.forEach((e=>{e?.name&&a(e.name,e?.payload||{})}))}}
window.__PRE_ANALYTICS__ = PreAnalytics})();

