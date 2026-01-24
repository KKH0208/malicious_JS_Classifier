var data = '';
            var m3_u = location.protocol === 'https:' ?
                'https://servecontent.net/content/www/delivery/ajs.php' :
                'http://servecontent.net/content/www/delivery/ajs.php';
            var m3_r = Math.floor(Math.random()*99999999999);
            if(!document.MAX_used)
            {
                document.MAX_used = ',';
            }
            data += "<scr" + "ipt foreverMutated='1' type='text/javascript' src='" + m3_u;
            data += "?zoneid=10";
            data += '&amp;cb=' + m3_r;
            if(document.MAX_used !== ',')
            {
                data += "&amp;exclude=" + document.MAX_used;
            }
            data += document.charset ? '&amp;charset='+document.charset : (document.characterSet ? '&amp;charset='+document.characterSet : '');
            data += "&amp;loc=" + escape(window.location);
            if (document.referrer)
            {
                data += "&amp;referer=" + escape(document.referrer);
            }
            if (document.context)
            {
                data += "&context=" + escape(document.context);
            }
            if (document.mmm_fo)
            {
                data += "&amp;mmm_fo=1";
            }
            data += "'><\/scr"+"ipt>";
            document.write(data);