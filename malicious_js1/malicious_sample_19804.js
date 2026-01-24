window.addEvent('domready', function() {

			SqueezeBox.initialize({});

			$$('a.modal-button').each(function(el) {
				el.addEvent('click', function(e) {
					new Event(e).stop();
					SqueezeBox.fromElement(el);
				});
			});
		});
<!--
					var acymailing = Array();
					acymailing['NAMECAPTION'] = 'Nombre';
					acymailing['NAME_MISSING'] = 'Escriba su nombre.';
					acymailing['EMAILCAPTION'] = 'e-mail';
					acymailing['VALID_EMAIL'] = 'Escriba su e-mail.';
					acymailing['ACCEPT_TERMS'] = 'Para poder suscribirse, es necesario que haya leído y acepte los Términos y Condiciones';
					acymailing['CAPTCHA_MISSING'] = 'Por favor ingrese el código de seguridad de la imagen';
					acymailing['NO_LIST_SELECTED'] = 'Por favor selecciona la lista a la que quieres suscribirte';
			//-->
<!--
			window.addEvent('domready', function(){
				var mySlide = new Fx.Slide('acymailing_fulldiv_formAcymailing1');
				mySlide.hide();
				$('acymailing_togglemodule_formAcymailing1').addEvent('click', function(e){
					e = new Event(e);
					if(mySlide.wrapper.offsetHeight == 0){
						$('acymailing_togglemodule_formAcymailing1').className = 'acymailing_togglemodule acyactive';
					}else{
						$('acymailing_togglemodule_formAcymailing1').className = 'acymailing_togglemodule';
					}
					mySlide.toggle();
					e.stop();
				});
			});
			//-->