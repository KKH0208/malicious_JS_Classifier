jQuery(document).ready(function () { 
	
	function setCookie(c_name,value,exdays)
	{
		var exdate=new Date();
		exdate.setDate(exdate.getDate() + exdays);
		var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString()) + "; path=/";
		document.cookie=c_name + "=" + c_value;
	}
	
	function readCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
			}
		return null;
	}
    
	var $ca_banner = jQuery('#ca_banner');
    var $ca_infoplus = jQuery('.infoplus.info_modal');
    var $ca_info = jQuery('#ca_info');
    var $ca_info_close = jQuery('.ca_info_close');
    var $ca_infoaccept = jQuery('.accept');
    
	var cookieaccept = readCookie('cookieaccept');
	if(!(cookieaccept == "yes")){
	
		$ca_banner.delay(1000).slideDown('fast'); 
        $ca_infoplus.click(function(){
            $ca_info.fadeIn("fast");
        });
        $ca_info_close.click(function(){
            $ca_info.fadeOut("slow");
        });
        $ca_infoaccept.click(function(){
			setCookie("cookieaccept","yes",365);
            jQuery.post('http://soloincucina.altervista.org/jm/liquori/30-salato/26-schiacciata-siciliana', 'set_cookie=1', function(){});
            $ca_banner.slideUp('slow');
            $ca_info.fadeOut("slow");
        });
       } 
    });