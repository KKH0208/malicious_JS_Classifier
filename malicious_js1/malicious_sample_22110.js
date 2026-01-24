//<![CDATA[
$(document).ready(function () {
var url_blog = 'http://dpdimmjatim.blogspot.com', // Replace With your Blog Url
numpostx     = 5; // Maximum Post
$.ajax({
    url: ''+url_blog+'/feeds/posts/default?alt=json-in-script&max-results=' + numpostx + '',
    type: 'get',
    dataType: "jsonp",
    success: function(data) {
        var posturl, posttitle, skeleton = '',
            entry = data.feed.entry;
        if (entry !== undefined) {
            skeleton = "<ul>";
        for (var i = 0; i < entry.length; i++) {
                for (var j=0; j < entry[i].link.length; j++)
                {
                     if (entry[i].link[j].rel == "alternate")
                        {
                            posturl = entry[i].link[j].href;
                            break;
                         }
                }              
            posttitle = entry[i].title.$t;
            skeleton += '<li><a href="' + posturl + '" target="_blank">' + posttitle + '</a></li>';
        }
            skeleton += '</ul>';
            $('#ltsposts').html(skeleton);
            function tick(){
            $('#ltsposts li:first').slideUp( function () { $(this).appendTo($('#ltsposts ul')).slideDown(); });
            }
        setInterval(function(){ tick () }, 5000);
        } else {
            $('#ltsposts').html('<span>No result!</span>');
        }
    },
    error: function() {
            $('#ltsposts').html('<strong>Error Loading Feed!</strong>');
       }
});
});
//]]>