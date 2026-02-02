/* 元のURL: https://notamedia.ru */

    let widgetCaseId;

    function onloadFunction() {
        if (!window.smartCaptcha) {
            console.error('SmartCaptcha not loaded');
            return;
        }

        widgetCaseId = window.smartCaptcha.render('captcha-container-cases', {
            sitekey: 'ysc1_aUDcMsGp749qxRxDUXcCohAGS7E6dwqG5OVBsCMNded65728',
            invisible: true,
            hideShield: true,
            callback: caseForm
        });

        widgetPopupId = window.smartCaptcha.render('captcha-container-popup', {
            sitekey: 'ysc1_aUDcMsGp749qxRxDUXcCohAGS7E6dwqG5OVBsCMNded65728',
            invisible: true,
            hideShield: true,
            callback: function (token){
                submitForm(token);
            }
        });
    }

    function handleCaseSubmit(event) {
        if (!window.smartCaptcha) {
            return;
        }

        var form = $('#caseForm');
        if (!form.valid()) {
            return false;
        }

        $('.case-form__inner').show();
        $('.case-form__success').hide();
        $('.b-form__row-error.error_submit').hide();

        window.smartCaptcha.execute(widgetCaseId);
    }
    function closeSuccessMessage() {
        $('.case-form').removeClass('case-form--success');
        $('.case-form__inner').show();
        $('.case-form__success').hide();

        if (window.smartCaptcha) {
            window.smartCaptcha.reset(widgetCaseId);
        }
    }
    function caseForm() {
        ym(74820076, 'reachGoal', 'form_send_main');
        var form = $('#caseForm')
        var formData = new FormData(form[0]);
        formData.append($('select[name="brand-select"]').val(), 'on');
        var str = window.location.href;

        document.querySelector('.case-form__submit').setAttribute('disabled', true);

        $.ajax({
            url: form.attr('action') || window.location.href,
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function (result) {
                if (result.success !== true) {
                    $('.b-form__row-error.error_submit').text(result.message).show();
                } else {
                    $('.case-form').addClass('case-form--success');
                    form[0].reset();
                    $('.case-form__inner').hide();
                    $('.case-form__success').show();
                    document.querySelector('.case-form__submit').setAttribute('disabled', false);
                    window.smartCaptcha.reset(widgetCaseId);
                }
            },
        });
        return false;
    }


