/* 元のURL: https://sourceforge.net */

            bizx.cmp.ifConsent({purposes:'all', vendors:'google-ads'}, function () {
                $('body').removeClass('no-ads-consent'); 
            },
            function () { 
                $('body').addClass('no-ads-consent');
            },
            null,
            function () { 
                $('body').addClass('no-ads-consent');
            });
        

