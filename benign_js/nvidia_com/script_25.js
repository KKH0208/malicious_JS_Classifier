/* 元のURL: https://nvidia.com */

		$(function(){
			$(window).bind('load', function(){
				var ubContainer="";
				if(typeof t_ubContainer !== 'undefined' && t_ubContainer.length>0){
					ubContainer = t_ubContainer;
					var cookieKey = "";
					if(typeof t_cookieKey !== 'undefined' && t_cookieKey.length>0){
						cookieKey = t_cookieKey
					}
					var ubcookie = "";
					if(cookieKey.length>0){
						ubcookie = Cookies.get(cookieKey)!=='undefined'?Cookies.get(cookieKey):"";
					} else {
						ubcookie = "";
					}
					// var ubcookie = Cookies.get(cookieKey);
					var isCookie = typeof ubcookie !== 'undefined'?ubcookie:"";
					if(!isCookie){
						if(isCookie.length<1){
							if ($('#unibrow-container').length >0){
								$('#unibrow-container').removeClass('hide-unibrow');
								$('#unibrow-container').append(ubContainer);
								if ($(".sub-brand-nav").length >0){
									$(".sub-brand-nav").addClass('unibrow-top');
								}
								var ubsc = $(window).width();
								if(ubsc < NVIDIAGDC.tabletBreakpoint){
									var ml = $('#unibrow-container'),
									mcurHeight = ml.height(),
									mautoHeight = ml.css('height', 'auto').height();
									ml.height(mcurHeight).css('height', mautoHeight+10+'px');
								} else if(ubsc==NVIDIAGDC.desktopBreakpoint-1){
									var el = $('#unibrow-container'),
									tbcurHeight = el.height(),
									tbautoHeight = el.css('height', 'auto').height();
									el.height(tbcurHeight).css('height', tbautoHeight+11+'px');
								} else if(ubsc > NVIDIAGDC.tabletBreakpoint && ubsc < NVIDIAGDC.desktopBreakpoint){
									var ml = $('#unibrow-container'),
									tcurHeight = ml.height(),
									tautoHeight = ml.css('height', 'auto').height();
									ml.height(tcurHeight).css('height', tautoHeight+10+'px');
								} else {
									var el = $('#unibrow-container'),
									curHeight = el.height(),
									autoHeight = el.css('height', 'auto').height();
									el.height(curHeight).css('height', autoHeight+11+'px');
								}
								
								// Trigger custom event when unibrow is loaded
								if ($('#unibrow-container').height() > 0) {
									window.dispatchEvent(new CustomEvent("nvOnUnibrowLoaded"));
								}

								if($(".unibrow-close").length >0){
									$( ".unibrow-close" ).click(function(e) {
										e.preventDefault();
										//$(".unibrow-top").animate({'marginTop': '0px'}, { duration: animationCloseTime, queue: false });
										$(".unibrow-top").css('marginTop', '0px');
										//$("#unibrow-container").animate({'height': '0px'}, { duration: animationCloseTime, queue: false });
										$("#unibrow-container").css('height', '0px');
										$("#unibrow-style-outer").remove();
										$('.sub-brand-nav').removeClass('unibrow-top');
										if(ubsc < NVIDIAGDC.tabletBreakpoint){
											$(".subnav").css('marginTop', '');
										} else if(ubsc > NVIDIAGDC.tabletBreakpoint && ubsc < NVIDIAGDC.desktopBreakpoint){
											$(".subnav").css('marginTop', '');
										}
										if(typeof t_cookieKey !== 'undefined' && t_cookieKey.length>0){
											var cookieVal = "";
											var cookieExpires = 0;
											if(typeof t_cookieVal !== 'undefined' && t_cookieVal.length>0){
												cookieVal = t_cookieVal;
											}
											if(typeof t_cookieExpires !== 'undefined'){ cookieExpires = t_cookieExpires; }
											var expires = (new Date(Date.now()+ 86400*1000)).toUTCString();
											document.cookie = cookieKey + "=" +  cookieVal + "; expires=" + cookieExpires + ";path=/;";
										}
		                                $("#unibrow-container").addClass('hide-unibrow');
										if($(".subnav").length>0){
											$(".subnav").removeClass('unibrow-subnav');
										}
										$(".nv-page-body > .root").css("marginTop","");
										if($(".stbrdcrmbblock").length>0){
											$(".stbrdcrmbblock").css("top","");
		                                    $(".stbrdcrmbblock").css("position", "");
		                                    $(".stbrdcrmbblock").addClass("stbrdcrmbshadow");
										}

										// Trigger custom event when unibrow is loaded
										window.dispatchEvent(new CustomEvent("nvOnUnibrowClose"));
									});
								}
							}
						}
						
					}
				}
			});
		});
		
		var position = $(window).scrollTop();
		
		$(window).scroll(function() {
			if($(".hide-unibrow").length<1 && $(".stbrdcrmbblock.stbrdcrmbstick").length>0) {
				var scroll = $(window).scrollTop();
				if (scroll > position) {
					if($(window).width() < NVIDIAGDC.tabletBreakpoint){
						$(".stbrdcrmbblock").css("top", parseInt($(".global-nav").css("height"))+56+"px");
					} else if($(window).width() > NVIDIAGDC.tabletBreakpoint && $(window).width() < NVIDIAGDC.desktopBreakpoint){
						$(".stbrdcrmbblock").css("top", parseInt($(".global-nav").css("height"))+46+"px");
					} else if($(window).width() == NVIDIAGDC.desktopBreakpoint) {
						$(".stbrdcrmbblock").css("top", parseInt($(".global-nav").css("height"))-46+"px");
					} else {
						$(".stbrdcrmbblock").css("top", parseInt($(".global-nav").css("height"))+"px");
					}
					$(".stbrdcrmbblock").addClass("stbrdcrmbstick");
		            //console.log('scrollDown');
				} else {
					if($(window).width() < NVIDIAGDC.tabletBreakpoint){
						$(".stbrdcrmbblock").css("top", parseInt($(".global-nav").css("height"))+46+56+"px");
					} else if($(window).width() > NVIDIAGDC.tabletBreakpoint && $(window).width() < NVIDIAGDC.desktopBreakpoint){
						$(".stbrdcrmbblock").css("top", parseInt($(".global-nav").css("height"))+46+46+"px");
					} else if($(window).width() == NVIDIAGDC.desktopBreakpoint) {
						$(".stbrdcrmbblock").css("top", parseInt($(".global-nav").css("height"))+"px");
					} else {
						$(".stbrdcrmbblock").css("top", parseInt($(".global-nav").css("height"))+46+"px");
					}
					$(".stbrdcrmbblock").addClass("stbrdcrmbstickwthhead");
		            //console.log('scrollUp');
				}
				position = scroll;
			}
		});
	

