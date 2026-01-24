$(function(){
		var videoad_w = $('.underpic-ad').width();
		var iframe_w = $('.underpic-ad iframe').width();
		var scale = videoad_w/iframe_w;
			$('.underpic-ad iframe').css({'-ms-transform': 'scale(' + scale + ')'});
			$('.underpic-ad iframe').css({'-webkit-transform': 'scale(' + scale + ')'});
			$('.underpic-ad iframe').css({'transform': 'scale(' + scale + ')'});
		var iframe_h = $('.underpic-ad iframe').height();
		$('.underpic-ad').css('height', iframe_h * scale);
	});
	$( window ).resize(function() {
		var videoad_w = $('.underpic-ad').width();
		var iframe_w = $('.underpic-ad iframe').width();
		var scale = videoad_w/iframe_w;
			$('.underpic-ad iframe').css({'-ms-transform': 'scale(' + scale + ')'});
			$('.underpic-ad iframe').css({'-webkit-transform': 'scale(' + scale + ')'});
			$('.underpic-ad iframe').css({'transform': 'scale(' + scale + ')'});
		var iframe_h = $('.underpic-ad iframe').height();
		$('.underpic-ad').css('height', iframe_h * scale);
	});