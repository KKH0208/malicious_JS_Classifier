//OwnerIQ
var __oiq_pct = 50;
if( __oiq_pct>=100 || Math.floor(Math.random()*100/(100-__oiq_pct)) > 0 ) {
var _oiqq = _oiqq || [];
_oiqq.push(['oiq_addPageBrand','Lycos']);
_oiqq.push(['oiq_addPageCat','Internet > Websites']);
_oiqq.push(['oiq_addPageLifecycle','Intend']);
_oiqq.push(['oiq_doTag']);
(function() {
var oiq = document.createElement('script'); oiq.type = 'text/javascript'; oiq.async = true;
oiq.src = document.location.protocol + '//px.owneriq.net/stas/s/lycosn.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(oiq, s);
})();
}
//Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount','UA-21402695-19']);
_gaq.push(['_setDomainName','tripod.com']);
_gaq.push(['_setCustomVar',1,'member_name','tekkenzone',3]);
_gaq.push(['_trackPageview']);
(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
//Lycos Init
function getReferrer() {
var all= this.document.cookie;
if (all== '') return false;
var cookie_name = 'REFERRER=';
var start = all.lastIndexOf(cookie_name);
if (start == -1) return false;
start += cookie_name.length;
var end = all.indexOf(';', start);
if (end == -1) end = all.length;
return all.substring(start, end);
}
function getQuery() {
var rfr = getReferrer();
if (rfr == '') return false;
var q = extractQuery(rfr, 'yahoo.com', 'p=');
if (q) return q;
q = extractQuery(rfr, '', 'q=');
return q ? q : "";
}
function extractQuery(full, site, q_param) {
var start = full.lastIndexOf(site);
if (start == -1) return false;
start = full.lastIndexOf(q_param);
if (start == -1) return false;
start += q_param.length;
var end = full.indexOf('&', start);
if (end == -1) end = full.length;
return unescape(full.substring(start, end)).split(" ").join("+");
}
function generateHref(atag, template){
atag.href=template.replace('_MYURL_', window.location.href.replace('http://', '')).replace('_MYTITLE_','Check%20out%20this%20Tripod%20Member%20site!'); 
}
var lycos_ad = Array();
var lycos_onload_timer;
var cm_role = "live";
var cm_host = "tripod.lycos.com";
var cm_taxid = "/memberembedded";
var tripod_member_name = "tekkenzone";
var tripod_member_page = "tekkenzone/tekken2/anna.html";
var tripod_ratings_hash = "1633109577:38759e0d1a8acf1221905101970ad351";

var lycos_ad_category = {"dmoz":"computers\/multimedia","ontarget":"&CAT=technology&L2CAT=computing","find_what":"paris"};

var lycos_ad_remote_addr = "209.202.244.9";
var lycos_ad_www_server = "www.tripod.lycos.com";
var lycos_ad_track_small = "";
var lycos_ad_track_served = "";
var lycos_search_query = getQuery();