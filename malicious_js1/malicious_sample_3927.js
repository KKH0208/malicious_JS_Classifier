//<![CDATA[
    jQuery(function($) {
        var carousel = $('#sns_lider5315643381633151872 ul.container-slider');

		carousel.owlCarousel({
			items: 4,
           itemsCustom: [
                [0, 1],
                [480, 2],
                [768, 3],
                [980, 4]
            ],
			pagination: true,
			itemsScaleUp : true,
			slideSpeed : 800,
			autoPlay: false,
			addClassActive: true,
			autoHeight: true,
			afterAction: function (e) {
			    if(this.$owlItems.length > this.options.items){
			        $('#sns_lider5315643381633151872 .navigation').show();
			    }else{
			        $('#sns_lider5315643381633151872 .navigation').hide();
			    }
			}
		});
		jQuery('#sns_lider5315643381633151872 .navigation .prev').on('click', function(e){
			e.preventDefault();
			carousel.trigger('owl.prev');
		});
		jQuery('#sns_lider5315643381633151872 .navigation .next').on('click', function(e){
			e.preventDefault();
			carousel.trigger('owl.next');
		});

        $('#sns_lider5315643381633151872').find('.container-slider').append('<span class="fix-hor"></span>');
    });
//]]>