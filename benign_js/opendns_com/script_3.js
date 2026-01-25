/* 元のURL: https://opendns.com */
// 外部JS: https://opendns.com/assets/js/menu.js?v=2
(function($) {
	var $body = $('body'),
		isPersonal = $body.hasClass('personal-section'),
		isAbout = $body.hasClass('about-section'),
		isBusiness = $body.hasClass('business-section'),
		isMsp = $body.hasClass('msp-section'),
		$button,
		$subnavContainer,
		$productContainer;

	if (
		isPersonal ||
		isBusiness ||
		isAbout ||
		isMsp
	) {
		// create the subnav container and add to the header
		$subnavContainer = $('<div>').addClass('subnav-container')
				.append($('<div>').addClass('grid'));

		// clone the subnav container for the product container
		$productContainer = $subnavContainer.clone()
			.removeClass('subnav-container')
			.addClass('product-container');

		$body.addClass('subnav--visible');

		// append the subnav to the header and change the var to the grid inside for
		// ease of use
		$('header').append($subnavContainer);
		$subnavContainer = $subnavContainer.find('.grid');

		// append the product container to the header and put the nav inside
		// if we're in business
		if (isBusiness) {
			$('header').append($productContainer);
			$('.header-menu .product-link > .subnav').clone()
				.appendTo($productContainer.find('.grid'));
		}
	}

	if (isPersonal || isMsp) {
		$('.header-menu .current-menu-item .subnav').appendTo($subnavContainer);
	} else if (isAbout) {
		$('.header-menu .subnav').appendTo($subnavContainer);
		$subnavContainer.find('.contact-link').removeClass('current-menu-item');
	} else if (isBusiness) {
		var $productsLink = $('.header-menu .product-link > a');
		$productsLink.attr('href', '#')
			.on('click', function() {
				$productContainer.slideToggle(100);
				$(this).parents('li').toggleClass('product-link--active');
				return false;
			});

		$('.header-menu .current-menu-item > .subnav').addClass('active-menu').appendTo($subnavContainer);
		if (
			$body.hasClass('threat-enforcement') ||
			($body.hasClass('threat-intelligence') && !$body.hasClass('single-solutions'))
		) {
			// product overviews
			$('.header-menu .current-menu-ancestor .subnav > .current-menu-item').addClass('arrow')
				.prependTo($subnavContainer.find('.active-menu'));
		} else if (
			$body.hasClass('packages') ||
			$body.hasClass('features') ||
			$body.hasClass('single-technology')
		) {
			// packages and features main pages
			$('.header-menu .current-menu-ancestor .subnav .current-menu-parent .subnav').appendTo($subnavContainer);
			$('.header-menu .current-menu-ancestor .subnav > .current-menu-parent').addClass('arrow')
				.prependTo($subnavContainer.find('.subnav'));
		} else if (
			$body.hasClass('single-products') ||
			$body.hasClass('single-articles')
		) {
			// single products and articles (features) need some special treatment
			$current = $('.header-menu .current-menu-item');
			$tree = $($current.parents('.subnav')[0]);
			$lead = $($current.parents('.menu-item')[0]);
			$tree.appendTo($subnavContainer);
			$current.parents('.menu-item').prependTo($subnavContainer);
			$lead.addClass('arrow').prependTo($subnavContainer.find('.subnav'));
			$('.header-menu .product-link').addClass('current-menu-item');
		} else if ($body.hasClass('enterprise-security')) {
			// on the enterprise-security page we have to hide the subnav and not highlight products
			$subnavContainer.find('> .subnav').hide();
			$('.header-menu .product-link').removeClass('current-menu-item');
		} else if ($body.hasClass('single-solutions')) {
			// remove subnav on single solutions
			$subnavContainer.find('.subnav').remove();
		}
	}
	if ($subnavContainer && (!$subnavContainer.find('.subnav').length || !$subnavContainer.find('.subnav').is(':visible'))) {
		$subnavContainer.parents('.subnav-container').remove();
		$body.removeClass('subnav--visible');
	}

	if (
		(isBusiness || isMsp) &&
		$subnavContainer.find('.button').length
	) {
		$subnavContainer.find('.button').prev().addClass('no-line');
	}

	// sticky menu
	$(document).ready(function() {
		var stickyHeader = function() {
			var tophatOffset = $('#cisco-banner').height(),
				windowTop = $(window).scrollTop();

			if (tophatOffset < windowTop) {
				$('.header').addClass('sticky');
			} else {
				$('.header').removeClass('sticky');
			}
		};

		if (!Response.band(0, 950)) {
			$(window).bind('scroll', stickyHeader);
			stickyHeader();
		}
		Response.crossover(function() {
			if (!Response.band(0, 950)) {
				$(window).bind('scroll', stickyHeader);
				stickyHeader();
			} else {
				$(window).unbind('scroll', stickyHeader);
				$('.header').removeClass('sticky');
			}
		});
	});
}(jQuery));


