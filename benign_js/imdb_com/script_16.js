/* 元のURL: https://imdb.com */

doWithAds(function(){
if (typeof DAsf != 'undefined' && typeof DAsf.registerCustomMessageListener === 'function') {
var ad_utils = window.ad_utils;
if (ad_utils) {
if (ad_utils.update_ad_details) {
DAsf.registerCustomMessageListener('updateAdDetails', window.ad_utils.update_ad_details);
}
if (ad_utils.set_partner) {
DAsf.registerCustomMessageListener('setPartner', window.ad_utils.set_partner);
}
DAsf.registerCustomMessageListener('sendMetrics', window.generic.monitoring.update_sf_slot_metrics);
if (ad_utils.expand_overlay) {
DAsf.registerCustomMessageListener('expand', window.ad_utils.expand_overlay);
}
if (ad_utils.collapse_overlay) {
DAsf.registerCustomMessageListener('collapse', window.ad_utils.collapse_overlay);
}
}
}
},"ads js missing, skipping safeframe setup.");


