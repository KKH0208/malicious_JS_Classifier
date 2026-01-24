//<![CDATA[
function moinhat(json) {
img  = new Array();
for (var i = 0; i < 10; i++) { var entry = json.feed.entry[i]; var posttitle = entry.title.$t; var posturl; if (i == json.feed.entry.length) break; 
for (var k = 0; k < entry.link.length; k++) { if (entry.link[k].rel == 'alternate') { posturl = entry.link[k].href; break } } 	
if ("content" in entry) { var postconten = entry.content.$t } else if ("summary" in entry) { var postconten = entry.summary.$t } 
else var postconten=""; s = postconten;  a = s.indexOf("<img"); b = s.indexOf("src=\"", a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5); 
if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!=""))  {img[i] = d;} 
else {img[i]="http://1.bp.blogspot.com/-xJBXLR81wuI/T_QncMxumoI/AAAAAAAAAbI/QbWAhz1wgW0/s164/no_image.jpg";} 
                              if(i >= 0 && i <= 9 ){var mn = '<li class="clearfix"><center><a title="'+posttitle+'" href="'+posturl+'"><img width="165px" height="150px" src="'+img[i]+'" alt="'+posttitle+'"></a><br/><a title="'+posttitle+'" href="'+posturl+'"><b>'+posttitle+'</b></a></center></li>';} 
document.write(mn) }}
//]]>