/* 元のURL: https://adriver.ru */


$(document).ready(function() {

	// var vr = $(window).width();
	// alert(vr + "px");

	$(document).on('click', function(e) {
		var out = $(".header-search-form");
		var but = $(".header-search-button");
		var ns = $(".navbar-search");
		if (!ns.is(e.target) && !but.is(e.target) && !out.is(e.target) && out.has(e.target).length === 0) {
			//$(".header-search-form").removeClass("show");
		} else {
			//$('.search .search-input').focus();
		}
	});

	/*$(document).click(function (e){

	});*/

	//$(".main-firstscreen-cols-button a, .main-firstscreen-cols-title a, .navbar-nav li a").on("click", function(e){
	/*$(".main-firstscreen-cols-title a").on("click", function(e){
    e.preventDefault();
    var anchor = $(this);

		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 22
		}, 1000);
		return false;
	});*/

	$('.header-search-button, .navbar-search').on('click', function() {
    $('.header-search-form').toggleClass("show");
		$('#navbar-main').removeClass("in");
		$('.navbar-toggle').addClass("collapsed");
  });

	$('.navbar-nav li a').on('click', function() {
    $('.header-search-form').removeClass("show");
		$('#navbar-main').removeClass("in");
		$('.navbar-toggle').addClass("collapsed");
  });

	//
	// $('#myCarousel').carousel({
	//   interval: 10000
	// })

	$('.carousel .item').each(function(){
	  var next = $(this).next();
	  if (!next.length) {
	    next = $(this).siblings(':first');
	  }
	  next.children(':first-child').clone().appendTo($(this));

	  if (next.next().length>0) {
	    next.next().children(':first-child').clone().appendTo($(this));
	  }
	  else {
	  	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
	  }
	});

	$('#myCarousel').on('slide.bs.carousel', function() {
    $('.carousel-control').hide();
  });

	$('#myCarousel').on('slid.bs.carousel', function() {
    $('.carousel-control').show();
  });

	$('.mailing-radio-element').mouseover(function() {
	  $(this).children('.radio-label').children('span').addClass('hover');
	  $(this).children('span.check-text').addClass('hover');
	});

	$('.mailing-radio-element').mouseout(function() {
		$(this).children('.radio-label').children('span').removeClass('hover');
	  $(this).children('span.check-text').removeClass('hover');
	});

	$('.mailing-radio-element').on('click', function() {
		$(this).find("input[type=radio]").prop( "checked", true );
		$(".check-text").removeClass( "checked" );
		$(this).find(".check-text").addClass( "checked" );
	});

});

$(document).ready(function() {
	$("#content-slider").lightSlider({
		onBeforeSlide: function (el) {
			$('div.lSAction a').hide();
		},
		onAfterSlide: function (el) {
		  $('div.lSAction a').show();
		},
		onBeforeNextSlide: function (el) {
    	$('div.lSAction a').hide();
    },
    onBeforePrevSlide: function (el) {
      $('div.lSAction a').show();
    },
		adaptiveHeight:true,
		slideMargin: 20,
		loop:true,
		keyPress:true
	});
});

$(document).ready(function() {
	$("#presentation-slider").lightSlider({
		onBeforeSlide: function (el) {
			$('div.lSAction a').hide();
		},
		onAfterSlide: function (el) {
		  $('div.lSAction a').show();
		},
		onBeforeNextSlide: function (el) {
    	$('div.lSAction a').hide();
    },
    onBeforePrevSlide: function (el) {
      $('div.lSAction a').show();
    },
		adaptiveHeight:true,
		// slideMargin: 20,
		item:1,
		loop:true,
		keyPress:true
	});
});




