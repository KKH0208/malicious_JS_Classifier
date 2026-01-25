/* 元のURL: https://checkpoint.com */
// 外部JS: https://www.checkpoint.com/wp-content/themes/checkpoint-theme-v2/js/page-home.footer.js?ver=3.80
(function ($) {
	$(".carousel .youtube").on('click', function (e) {
	    e.preventDefault();
	    $(".carousel").carousel("pause");
	});
	$('.carousel .youtube').click(function () {
	    $('.carousel').carousel('pause');
	});
	$('.modal').on('hidden.bs.modal', function () {
	    $('.carousel').carousel('cycle');
	});
})(jQuery);

/* Add IDs and Classes to <a> tags */
(function($) {
	$("#personalized-strip .row a").each(function(n) {
		var attr = $(this).attr('href');
		if (typeof attr !== typeof undefined && attr !== false) {
			thishref = $(this).attr('href');
			thishref = thishref.replace('https://', '');
			thishref = thishref.replace('http://', '');
			thishref = thishref.replace('pages.checkpoint.com', '');
			thishref = thishref.replace('www.checkpoint.com', '');
			thishref = thishref.replace('/', '');
			thishref = thishref.replace(/\//g, '-');
			thishref = thishref.substring(0, 30);
			thishref = thishref + "-link";
			$(this).attr("id", thishref);
			$(this).addClass("home-sub-banner-cta");
		}
	});
})(jQuery);
(function($) {
	$(".future .row a").each(function(n) {
		var attr = $(this).attr('href');
		if (typeof attr !== typeof undefined && attr !== false) {
			thishref = $(this).attr('href');
			thishref = thishref.replace('https://', '');
			thishref = thishref.replace('http://', '');
			thishref = thishref.replace('pages.checkpoint.com', '');
			thishref = thishref.replace('www.checkpoint.com', '');
			thishref = thishref.replace('/', '');
			thishref = thishref.replace(/\//g, '-');
			thishref = thishref.substring(0, 30);
			thishref = thishref + "-link";
			$(this).attr("id", thishref);
			$(this).addClass("home-page-featured-product-link");
		}
	});
})(jQuery);
(function($) {
	$(".threatmap a").each(function(n) {
		var attr = $(this).attr('href');
		if (typeof attr !== typeof undefined && attr !== false) {
			thishref = $(this).attr('href');
			thishref = thishref.replace('https://', '');
			thishref = thishref.replace('http://', '');
			thishref = thishref.replace('pages.checkpoint.com', '');
			thishref = thishref.replace('www.checkpoint.com', '');
			thishref = thishref.replace('/', '');
			thishref = thishref.replace(/\//g, '-');
			thishref = thishref.substring(0, 30);
			thishref = thishref + "-link";
			$(this).attr("id", thishref);
			$(this).addClass("home-page-band-link");
		}
	});
})(jQuery);
// (function($) {
// 	$(".spotlite a").each(function(n) {
// 		var attr = $(this).attr('href');
// 		if (typeof attr !== typeof undefined && attr !== false) {
// 			thishref = $(this).attr('href');
// 			thishref = thishref.replace('https://', '');
// 			thishref = thishref.replace('http://', '');
// 			thishref = thishref.replace('pages.', '');
// 			thishref = thishref.replace('blog.', '');
// 			thishref = thishref.replace('www.', '');
// 			thishref = thishref.replace('checkpoint.com', '');
// 			thishref = thishref.replace('/', '');
// 			thishref = thishref.replace(/\//g, '-');
// 			thishref = thishref.substring(0, 30);
// 			thishref = thishref + "-link";
// 			$(this).attr("id", thishref);
// 			$(this).addClass("home-spotlight-link");
// 		}
// 	});
// })(jQuery);
(function($) {
	$(".customer-logos a").each(function(n) {
		var attr = $(this).attr('href');
		if (typeof attr !== typeof undefined && attr !== false) {
			thishref = $(this).attr('href');
			thishref = thishref.replace('https://', '');
			thishref = thishref.replace('http://', '');
			thishref = thishref.replace('store.checkpoint.com/training/courseLookup.htm;tenantID=events?method=enterCourseCode&courseCode=', '');
			thishref = thishref.replace('pages.', '');
			thishref = thishref.replace('blog.', '');
			thishref = thishref.replace('www.', '');
			thishref = thishref.replace('checkpoint.com', '');
			thishref = thishref.replace('/', '');
			thishref = thishref.replace(/\//g, '-');
			thishref = thishref.substring(0, 30);
			thishref = thishref + "-link";
			$(this).attr("id", thishref);
			$(this).addClass("home-main-content-link");
		}
	});
})(jQuery);
(function($) {
	$("#feeds a").each(function(n) {
		var attr = $(this).attr('href');
		if (typeof attr !== typeof undefined && attr !== false) {
			thishref = $(this).attr('href');
			thishref = thishref.replace('https://', '');
			thishref = thishref.replace('http://', '');
			thishref = thishref.replace('store.checkpoint.com/training/courseLookup.htm;tenantID=events?method=enterCourseCode&courseCode=', '');
			thishref = thishref.replace('pages.', '');
			thishref = thishref.replace('blog.', '');
			thishref = thishref.replace('www.', '');
			thishref = thishref.replace('checkpoint.com', '');
			thishref = thishref.replace('/', '');
			thishref = thishref.replace(/\//g, '-');
			thishref = thishref.substring(0, 30);
			thishref = thishref + "-link";
			$(this).attr("id", thishref);
			$(this).attr("class", "home-main-content-link");
		}
	});
})(jQuery);
jQuery(document).ready(function() {
	var rtpContent = document.getElementById("rtp");
	if(rtpContent.innerHTML == ""){ } else { $("#rtp-slide").insertBefore($(".carousel .carousel-cell:nth-of-type(1)")); }
	var elem = document.querySelector('.carousel-home');
	var flkty = new Flickity( elem, {
	  // options
	  bgLazyLoad: 1,
	  prevNextButtons: false,
	  autoPlay: 7000,
	  wrapAround: true,
	});
    setTimeout(function(){
		var elem = document.querySelector('.carousel-home');
		var flkty = new Flickity( elem, {
		  // options
		  bgLazyLoad: 1,
		  prevNextButtons: false,
		  autoPlay: 7000,
		  wrapAround: true,
		});   
    },2000);
});
(function ($) {
    $(".youtube").YouTubeModal({width:640, height:480});
})(jQuery);
Cookies.set('homeVisit', '1', { expires: 1 });

