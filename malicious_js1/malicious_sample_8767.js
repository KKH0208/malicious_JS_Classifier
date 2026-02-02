//<![CDATA[
var titles = new Array();var titlesNum = 0;var urls = new Array();var time = new Array();function related_results_labels(c){for (var b = 0;b < c.feed.entry.length;b++){var d = c.feed.entry[b];titles[titlesNum] = d.title.$t;for (var a = 0;a < d.link.length;a++){if (d.link[a].rel == "alternate"){urls[titlesNum] = d.link[a].href;time[titlesNum] = d.published.$t;titlesNum++;break;}}
;}}
function removeRelatedDuplicates(){var b = new Array(0);var c = new Array(0);e = new Array(0);for (var a = 0;a < urls.length;a++){if (!contains(b,urls[a])){b.length += 1;b[b.length - 1] = urls[a];c.length += 1;c[c.length - 1] = titles[a];e.length += 1;e[e.length - 1] = time[a];}}
titles = c;urls = b;time = e;}
function contains(b,d){for (var c = 0;c < b.length;c++){if (b[c] == d){return true;}}
return false;}
function printRelatedLabels(a){var y = a.indexOf('?m=0');if (y != -1){a = a.replace(/\?m=0/g,'');}
for (var b = 0;b < urls.length;b++){if (urls[b] == a){urls.splice(b,1);titles.splice(b,1);time.splice(b,1);}}
var c = Math.floor((titles.length - 1) * Math.random());var b = 0;document.write("<ul>");if (titles.length == 0){document.write("<li>Không có bài viết liên quan → </li>");}
else{while (b < titles.length && b < 20 && b < maxresults){if (y != -1){urls[c] = urls[c] + '?m=0';}
document.write('<li><a href="' + urls[c] + '" title="' + time[c].substring(8,10) + "/" + time[c].substring(5,7) + "/" + time[c].substring(0,4) + '">' + titles[c] + "</a></li>");if (c < titles.length - 1){c++;}
else{c = 0;}
b++;}}
document.write("</ul>");urls.splice(0,urls.length);titles.splice(0,titles.length);}
;//]]>