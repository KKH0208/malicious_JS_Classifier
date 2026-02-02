//<![CDATA[
String.prototype.GetValue= function(para) {
  var reg = new RegExp("(^|&)"+ para +"=([^&]*)(&|$)");
  var r = this.substr(this.indexOf("\?")+1).match(reg);
  if (r!=null) return unescape(r[2]); return null;
}

var str = location.href;
var page = str.GetValue("page");
var view = str.GetValue("v"); 
  var homepageurl = "http://movie1-share123vn.blogspot.com/";
var urllength = homepageurl.length;
if (page==undefined) { page = "1"; }
if (view==undefined) { view = "full"; }

if (str.indexOf("search/label")!=-1) {
if (str.indexOf("?")!=-1){
var str1 = str.split("?")[0];
var label = str1.substring(urllength+13,str1.length);
}
else {
var label = str.substring(urllength+13,str.length);
}
var textlabel = "/-/"+label;
var textpage = "search/label/"+label;
}
else {var textlabel ="";var textpage = ""; }

function stripHtmlTags(s,max){
s=s.replace(/<br.*?>/ig, ' ');
return s.replace(/<.*?>/ig, '').split(/\s+/).slice(0,max-1).join(' ')}

function showrecentposts(json) {
	img  = new Array();
  	for (var i = 0; i < numposts; i++) {
    	var entry = json.feed.entry[i];
              var posttitle = entry.title.$t;
              
	var pcm ;
    var posturl;
    if("media$thumbnail" in entry){var thumburl = entry.media$thumbnail.url;}
    else{ var thumburl = "http://2.bp.blogspot.com/-8fE2X7kBhWs/Tf96WzivFHI/AAAAAAAAB0s/fItUKGW08gY/no-image.png"};

    if (i == json.feed.entry.length) break;
    for (var k = 0; k < entry.link.length; k++) {if (entry.link[k].rel == 'alternate') {posturl = entry.link[k].href; break;}}

getlabel = new Array();
for (var k = 0; k < entry.category.length; k++) {
if (entry.category[k].term == 'Phim chiếu rạp') {var getlabel = '<img class="getlabel" src="http://1.bp.blogspot.com/-gpJfdYqKEBY/T-GcIzI5QPI/AAAAAAAAA9s/pId95QnBn8w/s1600/hot.png"/>';}
else if (entry.category[k].term == 'HD') {var getlabel = '<img class="getlabel" src="http://3.bp.blogspot.com/-aAOmhgTEi_E/T-GY9gZ8x4I/AAAAAAAAAn4/bKqiarCFVSI/s1600/hd.png"/>';}
else if (entry.category[k].term == 'Tâm lý 18') {var getlabel = '<img class="getlabel" src="http://3.bp.blogspot.com/-WjhxvORlhgM/T-GfLiLGbKI/AAAAAAAAA-A/YUwLn3b6VNA/s1600/bong%60.png"/>';}
else if (entry.category[k].term == 'Trailer') {var getlabel = '<img class="getlabel" src="http://2.bp.blogspot.com/-GEArVXodrW8/T-Gb8ZU7ZfI/AAAAAAAAA9k/o5TVwiRu8K4/s1600/trailer.png"/>';} }

                     
    if ("content" in entry) {var postcontent = entry.content.$t;}
    else if ("summary" in entry) {var postcontent = entry.summary.$t;}
    else  postcontent = "";
	s = postcontent; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);
	if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) {img[i] = d;} 
    else {img[i]="http://1.bp.blogspot.com/_u4gySN2ZgqE/SosvnavWq0I/AAAAAAAAArk/yL95WlyTqr0/s400/noimage.png";}
 
    var hl_f = '<div class="leedeung-tem">'+getlabel+'<div class="img-leedeung-tem"><a href="'+posturl+'"><img src="'+img[i]+'"/></a></div><a href="'+posturl+'" class="title">'+posttitle+'</a></div>';
		
if (view=="full") { if ((i==0)&&(page==1)&&(textpage=="")) {document.write(hl_f);} else {document.write(hl_f);} }
}
}

function numberOfPosts(json) {document.write('<script style=\"text/javascript\">var totalPosts= '+json.feed.openSearch$totalResults.$t+' ;<\/script>');}
document.write('<script src=\"/feeds/posts/default'+textlabel+'?alt=json-in-script&callback=numberOfPosts\"><\/script>');

//]]>