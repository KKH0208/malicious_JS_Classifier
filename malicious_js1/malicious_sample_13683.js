$(document).ready(function(){
		var date_input=$('input[name="date-mulai"]'); //our date input has the name "date"
		var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
		date_input.datepicker({
			format: 'dd-mm-yyyy',
			container: container,
			todayHighlight: true,
			autoclose: true,
		})
	})
	$(document).ready(function(){
		var date_input=$('input[name="date-selesai"]'); //our date input has the name "date"
		var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
		date_input.datepicker({
			format: 'dd-mm-yyyy',
			container: container,
			todayHighlight: true,
			autoclose: true,
		})
	})
	
	
	$('#sandbox-container .input-daterange').datepicker({
    	format: "dd-mm-yyyy"
	});
	
	function myFunction() {
        var x = document.getElementById("fa-angle-double-right");
        if (x.innerHTML == "fa-angle-double-right") {
            x.classList.toggle("fa-angle-double-right");
        } else {
            x.classList.toggle("fa-angle-double-up");
        }
    }