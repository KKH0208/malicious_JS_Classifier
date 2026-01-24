(function($) {
 $(function() {
 
 	var offset = $('#sidebar').outerHeight() + 100;
 	if ( $(window).scrollTop() > offset ) $('#adv-google').addClass('adv-fixed').animate({'top': '10px'}, 1000);
 	$(window).scroll(function (event) {
 	  var y = $(this).scrollTop();
 	  if (y >= offset) {
 	    $('#adv-google').addClass('adv-fixed').animate({'top': '10px'}, 500);
 	  } else {
 	    $('#adv-google').removeClass('adv-fixed');
 	  }
 	});

 	if ( $(window).scrollTop() > offset ) $('#adv-yandex').addClass('adv-fixed').animate({'top': '400px'}, 3000);
 	$(window).scroll(function (event) {
 	  var y = $(this).scrollTop();
 	  if (y >= offset) {
 	    $('#adv-yandex').addClass('adv-fixed').animate({'top': '400px'}, 2000);
 	  } else {
 	    $('#adv-yandex').removeClass('adv-fixed');
 	  }
 	});

/*
var offset2 = $('#header').outerHeight() + $('#nav').outerHeight() + 20;
if ( $(window).scrollTop() > offset2 && $('#adv-yandex1').outerHeight() < 103 ) $('#adv-yandex1').addClass('adv-fixed').animate({'top': 0}, 1000);
 	$(window).scroll(function (event) {
 	  var y = $(this).scrollTop();
 	  if (y >= offset2) {
 	    $('#adv-yandex1').addClass('adv-fixed').animate({'top': 0}, 500);
 	  } else {
 	    $('#adv-yandex1').removeClass('adv-fixed');
 	  }
 	});*/
 
 })
 })(jQuery)