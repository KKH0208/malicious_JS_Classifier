/* 元のURL: https://theguardian.com */

                    // Set the browserId from the bwid cookie on the ophan object created above
                    // This will need to be replaced later with an async request to an endpoint
                    (function (window, document) {

                        function getCookieValue(name) {
                            var nameEq = name + "=",
                                cookies = document.cookie.split(';'),
                                value = null;
                            cookies.forEach(function (cookie) {
                                while (cookie.charAt(0) === ' ') {
                                    cookie = cookie.substring(1, cookie.length);
                                }
                                if (cookie.indexOf(nameEq) === 0) {
                                    value = cookie.substring(nameEq.length, cookie.length);
                                }
                            });
                            return value;
                        }

                        window.guardian.config.ophan.browserId = getCookieValue("bwid");

                    })(window, document);
                

