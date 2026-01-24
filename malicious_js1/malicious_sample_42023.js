//<![CDATA[
function showrecentcomments(json) {
for (var i = 0; i < 6; i++) {
var entry = json.feed.entry[i];
var ctlink;
if (i == json.feed.entry.length) break;
for (var k = 0; k < entry.link.length; k++) {
if (entry.link[k].rel == 'alternate') {
ctlink = entry.link[k].href;
break;
}
}
ctlink = ctlink.replace("#", "#comment-");
var ptlink = ctlink.split("#");
ptlink = ptlink[0];
var txtlink = ptlink.split("/");
txtlink = txtlink[5];
txtlink = txtlink.split(".html");
txtlink = txtlink[0];
var pttitle = txtlink.replace(/-/g," ");
pttitle = pttitle.link(ptlink);
if ("content" in entry) {
var comment = entry.content.$t;}
else
if ("summary" in entry) {
var comment = entry.summary.$t;}
else var comment = "";
var re = /<\S[^>]*>>/g;
comment = comment.replace(re, "");
if (i==0) {
document.write('<li>');
}
else{
document.write('<li>');
}
document.write('<a href="' + ctlink + '"><strong>' + entry.author[0].name.$t + '</strong></a> says:');
if (comment.length < 100) {
document.write('<a target="_blank" href="' + ctlink + '">'+comment+ '</a>');
}
else
{
comment = comment.substring(0, 100);
var quoteEnd = comment.lastIndexOf(" ");
comment = comment.substring(0, quoteEnd);
document.write('<a target="_blank" href="' + ctlink + '">'+comment + '...</a>');
}
}
document.write('</li>');
}

 //]]>