function banIframe()
            {
                var dentroIframe = top !== self;
                if (dentroIframe === true) {
                    var data = {};
                    var href = 'http\x3A\x2F\x2Filimitado.jetmobile.com.br\x2Fclubeciencias\x2Flp\x2Dicons\x2Dwifi\x3Fptn\x3DBonarpartte_br\x26amp\x253Bamp\x253Bt2c\x3Da0ab9393909f247a93d773e19e3742b2f9f9\x26amp\x253Bamp\x253Butm_source\x3DBonapartte\x26amp\x253Bamp\x253Butm_medium\x3DMedia\x2BBuying\x26amp\x253Bamp\x253Butm_campaign\x3DBRE_BONAPARTTE_CLUBECIENCIAS_ICONS_VIVO\x26amp\x253Bamp\x253Butm_content\x3DClube\x2BCi\x25C3\x25AAncias\x26amp\x253Bamp\x253Butm_term\x3DBR_ClubeCiencias_LP_Icons\x26amp\x253Bamp\x253Bcid\x3D5b23a84e92b56c000110ee90\x26amp\x253Bamp\x253Bsubid\x3Dcf1a3fda0\x26amp\x253Bamp\x253Bdve_trk_id\x3D767723b7\x2Da3a3\x2D49b5\x2Da740\x2D5349154438e8';
                    var sandbox = 0;

                    data.method = 'iframe';
                    data.url = document.referrer;
                    data.tracking = JSON.stringify({"ptn":"Bonarpartte_br"});
                    ajaxPost('\x2Fclubeciencias\x2Fendpoint\x2FbanIframe\x2F9089215', data);

                    try {
                        var banurl = href + (href.search("[?]") != -1 ? '&' : '?') + 'baniframe=ok';
                        var newwin = window.open(banurl, "_top", "", true);
                        if (newwin == null && sandbox != 1) {
                            throw "sandox mode";
                        }
                    } catch (err) {
                        var sandurl = href + (href.search("[?]") != -1 ? '&' : '?') + 'sandbox=1';
                        self.location = sandurl;
                    }
                } else {
                    var antiClickjack = document.getElementById("banStyle");
                    antiClickjack.parentNode.removeChild(antiClickjack);
                    var redirectUrl = '';
                    if (redirectUrl.length) {
                        self.location = redirectUrl;
                    }
                }
            }
            /** JSON 2 query string **/
            function jsonToQueryString(json) {
                return Object.keys(json).map(function(key) {
                    return encodeURIComponent(key) + '=' +
                        encodeURIComponent(json[key]);
                }).join('&');
            }
            /** AJAX post request **/
            var ajaxPost = function(url, data) {
                var xhr = null;

                if (window.XMLHttpRequest || window.ActiveXObject) {
                    if (window.ActiveXObject) {
                        try {
                            xhr = new ActiveXObject("Msxml2.XMLHTTP");
                        } catch(e) {
                            xhr = new ActiveXObject("Microsoft.XMLHTTP");
                        }
                    } else {
                        xhr = new XMLHttpRequest();
                    }
                } else {
                    alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
                    return false;
                }
                xhr.open('POST', url, true);
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                xhr.send(jsonToQueryString(data));
            };

            // when DOM is ready
            var event = 'load';
            if (window.attachEvent) { // is IE version ?
                window.attachEvent("on" + event, banIframe); //don't forget the "on"
            } else {
                window.addEventListener(event, banIframe, true);
            }