var randarray = new Array();
var l=0;
var flag;
var lengthsummary = 120;
var numofpost=5;
function randomposts(json){
var total = parseInt(json.feed.openSearch$totalResults.$t,10);
for(i=0; i < numofpost;){
flag=0;
randarray.length=numofpost;
l=Math.floor(Math.random()*total);
for(j in randarray){
if(l==randarray[j]){
flag=1;
}
}
if(flag==0&&l!=0){
randarray[i++]=l;
}
}
document.write('<div>');
for(n in randarray){
var p=randarray[n];
var entry=json.feed.entry[p-1];
var item ="";
var posttitle = entry.title.$t || "[Untitled]";
"[Untitled]"
for(k=entry.link.length -1; k >= 0 ; k--){
if(entry.link[k].rel=='alternate'){
item +="<a class='rp-post-link' href='" + entry.link[k].href + "'>" + posttitle + "</a>";
break;
}
}
item += "<br"
item += "/>"
if('media$thumbnail' in entry)item += "<img class='rp-thumbnail' src='" + entry.media$thumbnail.url + "'>"
var summary = "";
if ("content" in entry) {
summary = entry.content.$t;
}
else if ("summary" in entry) {
summary = entry.summary.$t;
}
var re = /<\S[^>]*>/g;
summary = summary.replace(re, "");
item += "<p class='rp-summary'>" + summary.substring(0,lengthsummary) + " ...</p>";
document.write(item);
}
document.write('</div>');
}