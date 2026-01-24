$(function(){
		var videoad_w = $('.footer-ad').width();
		var iframe_w = $('.footer-ad iframe').width();
		var scale = videoad_w/iframe_w;
			$('.footer-ad iframe').css({'-ms-transform': 'scale(' + scale + ')'});
			$('.footer-ad iframe').css({'-webkit-transform': 'scale(' + scale + ')'});
			$('.footer-ad iframe').css({'transform': 'scale(' + scale + ')'});
		var iframe_h = $('.footer-ad iframe').height();
		$('.footer-ad').css('height', iframe_h * scale);
	});
	$( window ).resize(function() {
		var videoad_w = $('.footer-ad').width();
		var iframe_w = $('.footer-ad iframe').width();
		var scale = videoad_w/iframe_w;
			$('.footer-ad iframe').css({'-ms-transform': 'scale(' + scale + ')'});
			$('.footer-ad iframe').css({'-webkit-transform': 'scale(' + scale + ')'});
			$('.footer-ad iframe').css({'transform': 'scale(' + scale + ')'});
		var iframe_h = $('.footer-ad iframe').height();
		$('.footer-ad').css('height', iframe_h * scale);
	});