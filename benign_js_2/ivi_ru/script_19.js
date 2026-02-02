/* 元のURL: https://ivi.ru */

                        (function() {
                            var scriptList = Array.prototype.slice.call(document.querySelectorAll('[data-info=main-script]'));
                            var styleList = Array.prototype.slice.call(document.querySelectorAll('[data-info=main-style]'));

                            var list = scriptList.concat(styleList);

                            if (list.length) {
                                var hasError = false;

                                var callback = function(e) {
                                    if (e.type === 'error' && !hasError) {
                                        hasError = true;

                                        var stub = document.getElementById('inpblockstub');

                                        if (stub) {
                                            setTimeout(function() {
                                                stub.style.display = 'block';
                                            }, 1000);
                                        }
                                    }
                                };

                                list.forEach(function(item) {
                                     item.addEventListener('error', callback);
                                });
                            }
                        })();
                    

