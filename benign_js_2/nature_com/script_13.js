/* 元のURL: https://nature.com */

        var backHalf = false;
        var doi = false;
        var distractionFreeSelector = null;
        var mainParentSelector = document.querySelector('.js-main-column');
        var prependAccessMessageTo = 'div.distractionFree';
        var accessMessage = null;

        var idp = {
            institutionalLogin: function (names) {
                if (names.length && doi) {
                    if (mainParentSelector) {
                        accessMessage = document.createElement('div');
                        if (backHalf) {
                            accessMessage.innerHTML = '<p style="transform: translateY(-5px)" class="block mb0 pb4 pt6 text-gray-light text13 text-center">Access provided by ' + names[0] + '</p>';
                            distractionFreeSelector = document.querySelector(prependAccessMessageTo);

                            if (distractionFreeSelector) {
                                distractionFreeSelector.classList.remove('visually-hidden');
                                distractionFreeSelector.prepend(accessMessage);
                            }                            
                        } else {
                            accessMessage.innerHTML = '<p style="transform: translateY(-5px)" class="text14 block mb0 pb10 text-center">Access provided by ' + names[0] + '</p>';
                            mainParentSelector.prepend(accessMessage);
                        }
                    }
                }
            }
        }
    

