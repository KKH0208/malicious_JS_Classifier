/* 元のURL: https://scorecardresearch.com */

        function init()
        { }

        function setId() {
            var bodytag = document.getElementsByTagName("body")[0];
            var pagename_ext = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
            var pagename = pagename_ext.split('.')[0].toLowerCase();
            //alert(pagename);
            if (pagename == "home")
                bodytag.setAttribute("id", "home");
            else if (pagename == "about")
                bodytag.setAttribute("id", "about");
            else if (pagename == "preferences")
                bodytag.setAttribute("id", "preferences");
            else if (pagename == "supportform")
                bodytag.setAttribute("id", "support");
            else if (pagename == "privacy")
                bodytag.setAttribute("id", "privacy");
            else if (pagename == "principle")
                bodytag.setAttribute("id", "Principles");
            else if (pagename == "termsofservice")
                bodytag.setAttribute("id", "TermsOfService");
        }
        function changecolor(obj) {
            obj.style.backgroundColor = "#868575";
        }

        //$(document).ready(function () {
        //    $(".link-white").click(function (event) {
        //        event.target.style.backgroundColor = "#868575";
        //    });
        //});
    

