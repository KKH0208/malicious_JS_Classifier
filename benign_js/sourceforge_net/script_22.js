/* 元のURL: https://sourceforge.net */


        function geturl(url, params) {
            params = Object
                .keys(params)
                .map(function(key) {
                    return key + "=" + encodeURIComponent(params[key]);
                })
                .join("&");
            return url + "?" + params;
        }

        
        function loadimg(params, dimension_prefix) {
            params = Object.assign({"idsite":1,"rec":1,"rand":16813,"dimension2":"pg_index","url":"https://sourceforge.net/","action_name":"Compare B2B Software, Download, \u0026 Develop Open Source \u0026 Business Software - SourceForge"}, params);
            for (var key in params) {
                if (params.hasOwnProperty(key) && key.indexOf('dimension') === 0 && params[key] !== undefined) {
                    params[key] = (dimension_prefix||'') + params[key];
                }
            }
            params.rand = Math.floor(Math.random() * 100000);
            bizx.cmp.ifConsent('publisher', ['measurement'], function() {
                var url = geturl("//sourceforge.net/software/visit", params);
                if (!('sendBeacon' in navigator) || !navigator.sendBeacon(url)) {
                    var img = document.createElement('img');
                    img.src = url;
                    img.style = "border:0;position:absolute;top:0;";
                    img.alt = "";
                    document.body.appendChild(img);
                }
            });
        }

        var $typeaheads = $('.typeahead__container input[name=q]');
        $typeaheads.on('typeahead-item-clicked', function(ev, $typeahead, q, item){
            var groupIndex = ($typeahead.data('groups') || []).indexOf(item.group);
            if (groupIndex === 2 || groupIndex === 3) {
                loadimg({
                    'e_c': 'Search | Typeahead | ' + item.group,
                    'e_a': "Typeahead Click | q=" + q,
                    'e_n': item.href, 
                 }, 'typeahead_on_');
            }
        });
        

