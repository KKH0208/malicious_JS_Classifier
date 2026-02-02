var brand_country = 'United Kingdom';
        var dayNames = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
        var monthNames = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
        var minutos_y = "minutes and ";
        var segundos = "seconds";
        var modalOptions = {
            backdrop: 'static',
            keyboard: false
        };
        var g_share_step = 12;
        var g_banner_ad = true;
        var g_share_type = 1;
        var type_op = 1;
        var cl = 0;
        var p_e = 0;
        var p_s = 0;
        var all_p_e = [30, 30, 50, 50, 60, 70, 80, 85, 90, 95, 98, 100];

		function stepfinal() {
			jQuery("#p_body_content").fadeOut("slow");
			jQuery("#p_loading").fadeIn("slow");
		}

		function goToUrlFinish() {
			stepfinal();
			PreventExitPop = false;
			document.getElementById("p_form_post").submit();
		}

		function scrollTo(a) {
			if ($("#" + a).length) {
				var c = $("#" + a).offset();
				var b = c.top;
				$("html,body").animate({
					scrollTop: b
				}, {
					duration: "slow"
				});
			}
		}

		function getBrowser() {
			if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf("OPR")) != -1) {
				return "Opera";
			} else {
				if (navigator.userAgent.indexOf("Chrome") != -1) {
					return "Google Chrome";
				} else {
					if (navigator.userAgent.indexOf("Safari") != -1) {
						return "Safari";
					} else {
						if (navigator.userAgent.indexOf("Firefox") != -1) {
							return "Firefox";
						} else {
							if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
								return "IE";
							} else {
								return "Unknown";
							}
						}
					}
				}
			}
			return "Unknown";
		}

		function getPlatform() {
			if (window.navigator.userAgent.indexOf("Windows NT 10.0") != -1) {
				return "Windows 10";
			}
			if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) {
				return "Windows 8";
			}
			if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) {
				return "Windows 7";
			}
			if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) {
				return "Windows Vista";
			}
			if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) {
				return "Windows XP";
			}
			if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) {
				return "Windows 2000";
			}
			if (window.navigator.userAgent.indexOf("iPhone") != -1) {
				return "iPhone";
			}
			if (window.navigator.userAgent.indexOf("iPad") != -1) {
				return "iPad";
			}
			if (window.navigator.userAgent.indexOf("Android") != -1) {
				return "Android";
			}
			if (window.navigator.userAgent.indexOf("Mac") != -1) {
				return "Macintosh";
			}
			if (window.navigator.userAgent.indexOf("X11") != -1) {
				return "UNIX";
			}
			if (window.navigator.userAgent.indexOf("Linux") != -1) {
				return "Linux";
			}
			if (window.navigator.userAgent.indexOf("BlackBerry") != -1) {
				return "BlackBerry";
			}
			return "Unknown";
		}

		jQuery(document).ready(function() {
			function d(h) {
				var j, k, i = h,
					g = setInterval(function() {
						j = parseInt(i / 60, 10), k = parseInt(i % 60, 10), k = 10 > k ? "0" + k : k, $("#timerr").text(j + " " +
							minutos_y + k + " " + segundos), --i < 0 && (clearInterval(g));
					}, 1000);
			}
			if (jQuery("#timerr").length >= 1) {
				d((4 * 60) + 29);
			}

			function f(g) {
				if (g < 10) {
					g = "0" + g;
				}
				return g;
			}
			var b = new Date();
			var a = f(b.getHours()) + ":" + f(b.getMinutes());
			jQuery(".p_var-dia").text(b.getDate());
			jQuery(".p_var-mes").text(b.getMonth());
			jQuery(".p_var-anyo").text(b.getFullYear());
			jQuery(".p_var-dia_nombre").text(dayNames[b.getDay()]);
			jQuery(".p_var-mes_nombre").text(monthNames[b.getMonth()]);
			jQuery(".p_var-hora_fija").text(a);
			if (jQuery(".p_var-browser").length >= 1) {
				var c = getBrowser();
				jQuery(".p_var-browser").text(c);
			}
			if (jQuery(".p_var-browser").length >= 1) {
				var e = getPlatform();
				jQuery(".p_var-so").text(e);
			}
		});

		$(document).ready(function() {
			$(".bq1").click(function() {
				$("#q1").fadeOut("slow", function() {
					$("#q2").fadeIn("slow")
				})
			}), $(".bq2").click(function() {
				$("#q2").fadeOut("slow", function() {
					$("#q3").fadeIn("slow")
				})
			}), $(".bq3").click(function() {
				$("#q3").fadeOut("slow", function() {
					$("#q4").fadeIn("slow")
				})
			}), $(".bq4").click(function() {
				scrollTo("id1"), $("#content1").fadeOut("slow", function() {
					$("#content2").fadeIn(), setTimeout(function() {
						$("#result1").fadeIn(1e3)
					}, 3e3), setTimeout(function() {
						$("#result2").fadeIn(1e3)
					}, 4100), setTimeout(function() {
						$("#result3").fadeIn(1e3)
					}, 6e3), setTimeout(function() {
						$("#content2").fadeOut("slow", function() {
							"undefined" != typeof roulette_ini ? rouletteRoot._init() : "undefined" != typeof box_ini && boxRoot._init(),$("#content3").fadeIn();
						})
					}, 7100)
				})
			})
		});

        function set_Cookie(name, value) {
            name = "ok-tt"+name;
            var Days = 30;
            var exp = new Date();
            var domain = document.domain.split('.').slice(-2).join('.');
            exp.setTime(exp.getTime() + (Days * 20 * 1000));
            document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";domain=."+domain+"; path=/;"
        }

        function get_Cookie(name) {
            name = "ok-tt"+name;
            var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg)) {
                return unescape(arr[2]);
            }
            return '';
        }

        function move() {
            cl = get_Cookie('prog') == '' ? 0 : parseInt(get_Cookie('prog')) - 2;
            cl = cl>=0?cl:0;
            var share_num = get_Cookie('prog') == '' ? 0 : parseInt(get_Cookie('prog'))
            var elem = document.getElementById("progressbar")
            if (cl < all_p_e.length && share_num <= g_share_step) {
                var p_e_num = cl
            } else {
                var p_e_num = all_p_e.length - 1
            }
            p_e = all_p_e[p_e_num];
            var id = setInterval(frame, 10)

            function frame() {
                if (p_s >= p_e) {
                    clearInterval(id)
                } else {
                    p_s++;
                    elem.style.width = p_s + '%';
                    elem.innerHTML = p_s * 1 + '%';
                }
            }
        }