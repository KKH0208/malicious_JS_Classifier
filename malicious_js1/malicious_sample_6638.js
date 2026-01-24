function isValidEmailAddress(emailAddress) {
		    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
		    return pattern.test(emailAddress);
		};

		$(function(){

			$(document).ready(function(){
			    $("#next").click(function(){
			    	$('#loader').show();
		    		
		    		if(!isValidEmailAddress($('#AP___').val())) {
					    $('#AP___').addClass("error");
			    		$('#message').show();
			    		$('#message').text('Enter a valid email.');
			    		$('#loader').hide();

			    		$('#AP___').on('input',function(){
					    	$('#AP___').removeClass('error');
					    	$('#message').hide();
					    });
					    return false;
					}

			    });
			});
		});