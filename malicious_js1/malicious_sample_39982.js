if (window.innerWidth > 900){
                var adElemSticky = document.getElementById('vi-sticky-ad');
                window.onscroll = function() {
                        var adElem = document.getElementById('vi-ad');
                        var rect = adElemSticky.getBoundingClientRect();
                        adElemSticky.style.width = rect.width + 'px';
                        adElemSticky.style.height = rect.height + 'px';
                        if (rect.top <= 0){
                                adElem.style.position = 'fixed';
                                adElem.style.top = '0';
                                adElem.style.zIndex = '2147483647';
                                adElem.style.width = rect.width + 'px';
                                adElem.style.height = rect.height + 'px';
                        } else {
                                adElem.style.position = '';
                                adElem.style.top = '';
                                adElem.style.zIndex = '';
                                adElem.style.width = '';
                                adElem.style.height = '';
                        }
                };
        }