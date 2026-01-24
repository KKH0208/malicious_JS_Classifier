//<![CDATA[
    // Add More Features to the Blogger Comments
    // Fix some bugs that I got from some similar code out here :)
    // Date: 21 May 2012

    // Time: 22:50 WIB

    // Author: Taufik Nurrohman

    // URL: http://hompimpaalaihumgambreng.blogspot.com

    function repText(id) {

        var a = document.getElementById(id),

            b = a.innerHTML,

            // Images

            b = b.replace(/<i rel="image">(.[^\>]*)<\/i>/ig, "<img class='cm-image' src='$1' alt='loading...' \/>");

            b = b.replace(/\[img\](.[^\]]*)\[\/img\]/ig, "<img class='cm-image' src='$1' alt='loading...' \/>");

            // YouTube video

            b = b.replace(/<i rel="youtube">http:\/\/www.youtube.com\/embed\/(.[^>]*)<\/i>/ig, "<iframe class='cm-youtube' src='http://www.youtube.com/embed/$1'><\/iframe>");

            b = b.replace(/<i rel="youtube">(http:\/\/youtu.be|http:\/\/www.youtube.com\/watch\?v=)(.[^>]*)<\/i>/ig, "<iframe class='cm-youtube' src='http://www.youtube.com/embed/$2'><\/iframe>");

            b = b.replace(/\[youtube\]http:\/\/www.youtube.com\/embed\/(.[^\]]*)\[\/youtube\]/ig, "<iframe class='cm-youtube' src='http://www.youtube.com/embed/$1'><\/iframe>");

            b = b.replace(/\[youtube\](http:\/\/youtu.be|http:\/\/www.youtube.com\/watch\?v=)(.[^\]]*)\[\/youtube\]/ig, "<iframe class='cm-youtube' src='http://www.youtube.com/embed/$2'><\/iframe>");

        document.getElementById(id).innerHTML = b;

    } repText('comment-holder');

    //]]>