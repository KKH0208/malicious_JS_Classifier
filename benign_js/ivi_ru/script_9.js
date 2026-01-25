/* 元のURL: https://ivi.ru */

                dataLayer = [{"is_buyer":false},{"dynx_pagetype":"main","user_auth_status":false,"user_subscribe_status":0,"country_code":"JP"}];
                try {
                    if (window.localStorage && window.localStorage.getItem('ivi_user_id')) {
                        dataLayer.push({
                            'user_id': window.localStorage.getItem('ivi_user_id')
                        });
                    }
                } catch (e) {}
            

