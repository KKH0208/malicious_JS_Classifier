var page = 1;
var triggeredPaging = 0;

$(window).scroll(function (){
	var scrollTop = $( window ).scrollTop();
	var scrollBottom = (scrollTop + $( window ).height());
	// alert(scrollTop+scrollBottom);
	var containerTop = $('#prodListingContainer').offset().top;
	var containerHeight = $('#prodListingContainer').height();
	var containerBottom = Math.floor(containerTop + containerHeight);
	var scrollBuffer = 0;

	if((containerBottom - scrollBuffer) <= scrollBottom) {
	  page = $('.listpager').length;
	  $(':hidden[name="offset"]').val(page);
	  var actual_count = 1;
	  if(!triggeredPaging && page < actual_count){
		triggeredPaging=1;

		data_frm = serialize_form();
		$.ajax({
			  type: "POST",
			  url: "https://www.pointadhesive.com/handicrafts/recommended-grades/point-sr",
			  data:data_frm,
			  error: function(res) {
				triggeredPaging = 0;
			  },
			  beforeSend: function(jqXHR, settings){
				$('#loadingdiv').show();
			  },
			  success: function(res) {
				$('#loadingdiv').hide();
				$("#prodListingContainer").append(res);
				triggeredPaging = 0;
				//console.log(res);

				$('.listpager').fadeTo(500, 0.5, function() {
				  $(this).fadeTo(100, 1.0);
				});
			  }
			});
	  }
	}
});