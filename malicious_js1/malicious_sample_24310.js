function validatePayForm() {
    var a = document.forms["loginForm"]["login_email"].value;
    var b = document.forms["loginForm"]["login_password"].value;
    if (a == "") {
        $("#login_emaildiv").addClass("hasError");
        $("#login_emaildiv").css("z-index", "100");
        $("#emailErrorMessage").addClass("show");
        $("#mailrequired").removeClass("hide");
        $("#email").focus();
        if (a == ""){return false;}
    } else {
    	var x = document.getElementById('email').value;
    	document.getElementById('profileDisplayEmail').innerHTML = x;
    	$("#splitEmail").addClass("hide");
    	$("#splitPassword").addClass("transformRightToLeft");
    	$("#splitPassword").removeClass("hide");
    	$(".profileRememberedEmail").removeClass("hide");
    	$("#loading").removeClass("hide");
    	$("#loading").addClass("spinner");
        setTimeout(function() {
	        $(".login_passworddiv").attr("id","login_passworddiv");
        	$(".passwordErrorMessage").attr("id","passwordErrorMessage");
        	$("#loading").addClass("hide");
    		$("#loading").removeClass("spinner");
    		$("#loading").attr("id","passloading");
		}, 2000);
    }

    if (b == "") {
        $("#login_passworddiv").addClass("hasError");
        $("#login_passworddiv").css("z-index", "100");
        $("#passwordErrorMessage").addClass("show");
        $("#passrequired").removeClass("hide");
        $("#password").focus();
        if (b == ""){return false;}
    } else {
		   
    }
}