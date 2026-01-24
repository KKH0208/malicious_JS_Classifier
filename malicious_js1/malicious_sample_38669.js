$(function(){
		var videoad_w = $('.sidebar-ad').width();
		var iframe_w = $('.sidebar-ad iframe').width();
		var scale = videoad_w/iframe_w;
			$('.sidebar-ad iframe').css({'-ms-transform': 'scale(' + scale + ')'});
			$('.sidebar-ad iframe').css({'-webkit-transform': 'scale(' + scale + ')'});
			$('.sidebar-ad iframe').css({'transform': 'scale(' + scale + ')'});
		var iframe_h = $('.sidebar-ad iframe').height();
		$('.sidebar-ad').css('height', iframe_h * scale);
	});
	$( window ).resize(function() {
		var videoad_w = $('.sidebar-ad').width();
		var iframe_w = $('.sidebar-ad iframe').width();
		var scale = videoad_w/iframe_w;
			$('.sidebar-ad iframe').css({'-ms-transform': 'scale(' + scale + ')'});
			$('.sidebar-ad iframe').css({'-webkit-transform': 'scale(' + scale + ')'});
			$('.sidebar-ad iframe').css({'transform': 'scale(' + scale + ')'});
		var iframe_h = $('.sidebar-ad iframe').height();
		$('.sidebar-ad').css('height', iframe_h * scale);
	});