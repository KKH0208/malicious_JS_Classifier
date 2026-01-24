function startflex() {
//			jQuery('.flexslider:visible').each(function()
			jQuery('.flexslider').each(function()
			{
				var fsoptions = jQuery(this).data() || {};
				var thisid = jQuery(this).attr("id");
				if (fsoptions.animateCaptions == "1")
				{
					fsoptions.before = function(slider){jQuery("#"+thisid+" .flex-caption").hide('drop', {'direction': 'down'});};
					fsoptions.after = function(slider){jQuery("#"+thisid+" .flex-caption").show('drop', {'direction': 'down'});};
				};
				jQuery(this).flexslider(fsoptions);
			});
		}
		jQuery(function(){
			jQuery('.BlockContent img[data-src]').each(function(){ jQuery(this).attr('src', jQuery(this).attr('data-src')).removeAttr('data-src'); });
//			jQuery('.flexslider[data-mode="fit"] .slides li img').flexFit("fit");
//			jQuery('.flexslider[data-mode="fill"] .slides li img').flexFit("fill");
			startflex();
			var captionopa = jQuery('.flex-caption').css('opacity');
			var captionbg = jQuery('.flex-caption').css('background');
			jQuery('.flex-caption').hover(function(){jQuery(this).css('opacity',captionopa).css('background','#111');}, function(){jQuery(this).css('background',captionbg).css('opacity',captionopa);});
			jQuery('.fleximg').hover(function(){jQuery(this).next().css('opacity','0.25');}, function(){jQuery(this).next().css('background',captionbg).css('opacity',captionopa);});
		});