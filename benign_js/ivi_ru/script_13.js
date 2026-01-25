/* 元のURL: https://ivi.ru */

                    var config = {
                        attributes: false,
                        childList: true,
                        subtree: false,
                    };
                    var observeClientOnlyChild = function (mutationsList, observer) {
                        if (mutationsList.length > 0) {
                            
            if ('performance' in window && window.performance.mark) {
                window.performance.mark('perf_mark_react_client_only_dom_element_added');
            }
        
                            observer.disconnect();
                        }
                    };

                    var observer = new MutationObserver(observeClientOnlyChild);
                    var element = document.querySelector('#hiddenPerformanceMarkElement');
                    if (element) {
                        observer.observe(element, config);
                    }
                

