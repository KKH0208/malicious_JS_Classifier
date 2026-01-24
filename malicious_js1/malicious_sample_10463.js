/* <![CDATA[ */
jQuery.noConflict();
jQuery(function(){ 
	jQuery('ul.menu-primary').superfish({ 
	animation: {opacity:'show'},
autoArrows:  true,
                dropShadows: false, 
                speed: 200,
                delay: 800
                });
            });
jQuery('.menu-primary-container').mobileMenu({
                defaultText: 'Menu',
                className: 'menu-primary-responsive',
                containerClass: 'menu-primary-responsive-container',
                subMenuDash: '&ndash;'
            });

jQuery(function(){ 
	jQuery('ul.menu-secondary').superfish({ 
	animation: {opacity:'show'},
autoArrows:  true,
                dropShadows: false, 
                speed: 200,
                delay: 800
                });
            });
jQuery('.menu-secondary-container').mobileMenu({
                defaultText: 'Navigation',
                className: 'menu-secondary-responsive',
                containerClass: 'menu-secondary-responsive-container',
                subMenuDash: '&ndash;'
            });

jQuery(document).ready(function() {
	jQuery('.fp-slides').cycle({
		fx: 'fade',
		timeout: 4000,
		delay: 0,
		speed: 1000,
		next: '.fp-next',
		prev: '.fp-prev',
		pager: '.fp-pager',
		continuous: 0,
		sync: 1,
		pause: 1,
		pauseOnPagerHover: 1,
		cleartype: true,
		cleartypeNoBg: true
	});
 });

/* ]]> */