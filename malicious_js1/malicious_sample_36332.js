//<![CDATA[
function doHighlight(bodyText, searchTerm,link)
{
var newText = "";
var i = -1;
var lcSearchTerm = searchTerm.toLowerCase();
var lcBodyText = bodyText.toLowerCase();

while (bodyText.length > 0) {
i = lcBodyText.indexOf(lcSearchTerm, i+1);
if (i < 0) {
newText += bodyText;
bodyText = "";
} else {

if (bodyText.lastIndexOf(">", i) >= bodyText.lastIndexOf("<", i)) {

if (lcBodyText.lastIndexOf("/script>", i) >= lcBodyText.lastIndexOf("<script", i)) {
newText += bodyText.substring(0, i) + '<a href="'+link+'">'+ bodyText.substr(i, searchTerm.length) + '</a>';
bodyText = bodyText.substr(i + searchTerm.length);
lcBodyText = bodyText.toLowerCase();
i = -1;
}
}
}
}

return newText;
}

function highlightSearchTerms(searchText, treatAsPhrase,link,divid)
{

if (treatAsPhrase) {
searchArray = [searchText];
} else {
searchArray = searchText.split(" ");
}


div=document.getElementById(divid);
var bodyText = div.innerHTML;
for (var i = 0; i < searchArray.length; i++) {
bodyText = doHighlight(bodyText, searchArray[i], link);
}
div.innerHTML = bodyText;
return true;
}
//]]>