/* 元のURL: https://notamedia.ru */

    let widgetPopupId;
    function handleSubmit(event) {
        if (!window.smartCaptcha) {
            return;
        }
        var form = $('#form-popup');
        if (!form.valid()) {
            return false;
        }

        $('.but.but_green').prop('disabled', false);
        window.smartCaptcha.execute(widgetPopupId);
    }

    function submitForm(token) {
        var form = $('#form-popup');
        var formData = new FormData(form[0]);
        formData.append('smart-token', token);
        formData.append($('select[name="brand-select"]').val(), 'on');
        var str = window.location.href;
        $.ajax({
            url: form.attr('action') || window.location.href,
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function (result) {
                if (result.success !== true) {
                    $("#popup-form-error").html(result.message);
                    document.querySelector('[data-modal-id="popup-error"]').classList.add('popup--visible');
                } else {
                    if (str.search('agency') === -1) {
                        ym(284384, 'reachGoal', 'SendRequest');
                    }
                    form[0].reset();
                    $(".js-uploadFileList").empty();
                    $('.fieldset-file__start').find('.js-uploadFileInput').val('');
                    $('.application-form .select-options li:first-child').click();
                    $('select[name="brand-select"]').val('hide');
                    document.querySelector('[data-modal-id="popup-success"]').classList.add('popup--visible');
                    window.smartCaptcha.reset(widgetPopupId);
                }
            },
            error: function (xhr, status, error) {
                console.error('Form submission error:', error);
                $("#popup-form-error").html("Произошла ошибка при отправке формы");
                document.querySelector('[data-modal-id="popup-error"]').classList.add('popup--visible');
            },
            complete: function () {
                $('.but.but_green').prop('disabled', false);
            }
        });
    }


