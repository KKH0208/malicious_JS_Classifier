/* 元のURL: https://notamedia.ru */

    $(document).ready(function () {
        window.AMOPIXEL_IDENTIFIER_PARAMS = window.AMOPIXEL_IDENTIFIER_PARAMS || {} ;
        window.AMOPIXEL_IDENTIFIER_PARAMS.onload = function (pixel_identifier) {
            var visitor_uid = pixel_identifier.getVisitorUid(); // Получаем visitor_uid
            if (visitor_uid) {
                document.getElementById('visitor_uid').value = visitor_uid;
            }
        };
        setTimeout(function (){
            var visitor_uid2 = AMOPIXEL_IDENTIFIER.getVisitorUid();
            document.getElementById('visitor_uid2').value = visitor_uid2;
            console.log(visitor_uid2)
        }, 2000)

        $(document).on('click', '.case-form__success-close', closeSuccessMessage);
    });



