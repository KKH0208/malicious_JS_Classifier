$(function(){
		var videoad_w = $('.horizontal-ad').width();
		var iframe_w = $('.horizontal-ad iframe').width();
		var scale = videoad_w/iframe_w;
			$('.horizontal-ad iframe').css({'-ms-transform': 'scale(' + scale + ')'});
			$('.horizontal-ad iframe').css({'-webkit-transform': 'scale(' + scale + ')'});
			$('.horizontal-ad iframe').css({'transform': 'scale(' + scale + ')'});
		var iframe_h = $('.horizontal-ad iframe').height();
		$('.horizontal-ad').css('height', iframe_h * scale);
	});
	$( window ).resize(function() {
		var videoad_w = $('.horizontal-ad').width();
		var iframe_w = $('.horizontal-ad iframe').width();
		var scale = videoad_w/iframe_w;
			$('.horizontal-ad iframe').css({'-ms-transform': 'scale(' + scale + ')'});
			$('.horizontal-ad iframe').css({'-webkit-transform': 'scale(' + scale + ')'});
			$('.horizontal-ad iframe').css({'transform': 'scale(' + scale + ')'});
		var iframe_h = $('.horizontal-ad iframe').height();
		$('.horizontal-ad').css('height', iframe_h * scale);
	});