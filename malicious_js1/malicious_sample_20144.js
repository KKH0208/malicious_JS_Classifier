var renderInvisibleReCaptcha = function() {

    for (var i = 0; i < document.forms.length; ++i) {
        var form = document.forms[i];
        var holder = form.querySelector('.inv-recaptcha-holder');

        if (null === holder) continue;
		holder.innerHTML = '';

         (function(frm){
			var cf7SubmitElm = frm.querySelector('.wpcf7-submit');
            var holderId = grecaptcha.render(holder,{
                'sitekey': '6LeTu4kUAAAAAEmdoINaMavYyrVf8jge3J8FYL6m', 'size': 'invisible', 'badge' : 'bottomright',
                'callback' : function (recaptchaToken) {
					if((null !== cf7SubmitElm) && (typeof jQuery != 'undefined')){jQuery(frm).submit();grecaptcha.reset(holderId);return;}
					 HTMLFormElement.prototype.submit.call(frm);
                },
                'expired-callback' : function(){grecaptcha.reset(holderId);}
            });

			if(null !== cf7SubmitElm && (typeof jQuery != 'undefined') ){
				jQuery(cf7SubmitElm).off('click').on('click', function(clickEvt){
					clickEvt.preventDefault();
					grecaptcha.execute(holderId);
				});
			}
			else
			{
				frm.onsubmit = function (evt){evt.preventDefault();grecaptcha.execute(holderId);};
			}


        })(form);
    }
};