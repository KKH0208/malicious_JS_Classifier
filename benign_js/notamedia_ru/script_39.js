/* 元のURL: https://notamedia.ru */

    $(document).ready(function () {
        window.AMOPIXEL_IDENTIFIER_PARAMS = window.AMOPIXEL_IDENTIFIER_PARAMS || {} ;
        window.AMOPIXEL_IDENTIFIER_PARAMS.onload = function (pixel_identifier) {
            var visitor_uid = pixel_identifier.getVisitorUid();
             if (visitor_uid) {
                document.getElementById('visitor_uid').value = visitor_uid;
            }
        };
        setTimeout(function (){
            var visitor_uid2 = AMOPIXEL_IDENTIFIER.getVisitorUid();
            document.getElementById('visitor_uid').value = visitor_uid2;
            console.log(visitor_uid2)
        }, 2000)
    });


