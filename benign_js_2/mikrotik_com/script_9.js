/* 元のURL: https://mikrotik.com */

	var resizefncs = [];
	$(function () {
		resizefncs.push("makeBorder();");
		resizefncs.push("adjustDrop();");
		$(window).on('resize', performResize);
		$(window).on('scroll', performScroll);
		$(window).on('click', performClick);
		performResize();
	});

	function loadScript(isrc) {
		dd = new Date();
		xsrc = isrc + '?' + dd.getDate().toString() + dd.getHours().toString();
		if ($('head script[src="' + isrc + '"]').length) {
			return;
		}
		if ($('head script[src="' + xsrc + '"]').length) {
			return;
		}
		e = "scr" + "ipt";
		scr = document.createElement(e);
		scr.type = "text/" + "ja" + "va" + e;
		scr.src = xsrc;
		scr.defer = true;
		document.getElementsByTagName('head')[0].appendChild(scr);
	}

	function performResize() {
		for (d in resizefncs) {
			window.setTimeout(resizefncs[d], 0);
		}
	}

	function performScroll() {
		for (d in resizefncs) {
			window.setTimeout(resizefncs[d], 0);
		}
	}

	function performClick() {
		for (d in resizefncs) {
			window.setTimeout(resizefncs[d], 0);
		}
	}

	function makeBorder() {
		x = $("#sm-start, .sm-menu").position().top,
			y = $(this).scrollTop(),
			grid = '.contain-to-grid',
			cl = 'bar-border';

		if ($('.smally').is(':visible') && $('.top-bar.expanded').is(':visible')) {
			if (y > x - 388) {
				$(grid).addClass(cl);
			} else {
				$(grid).removeClass(cl);
			}
		} else {
			if ($('.page_top.show-for-medium-up').is(':visible') || y <= x - 80) {
				$(grid).removeClass(cl);
			} else {
				$(grid).addClass(cl);
			}
		}
	}

	function adjustDrop() {
		em = ".page_title_empty";
		if ($(em).length > 0) {
			hh = Math.floor($(".page_top").height());
			if ($(".sm-menu").is(':visible')) {
				hh = hh + Math.floor($(".sm-menu").height());
			}
			$(em).css('height', hh + 'px');
		}
	}
	

