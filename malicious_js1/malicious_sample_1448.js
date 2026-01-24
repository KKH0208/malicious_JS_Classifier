$(document).click(function (e)
	{
	    // Đối tượng container chứa popup
	    var container = $(".wm-module.wm-langs.dropdown.module-lang-num1");
	 
	    // Nếu click bên ngoài đối tượng container thì ẩn nó đi
	    if (!container.is(e.target) && container.has(e.target).length === 0)
	    {
	    	container.find('.ui.header').removeClass('active');
	        container.find('.content').removeClass('active').slideUp(400);
	    }
	});
	$(function(){
		$('.wm-module.wm-langs.dropdown.module-lang-num1 .ui.header').click(function(event) {
			/* Act on the event */
			$(this).toggleClass('active');
			$(this).siblings('.content').toggleClass('active').slideToggle(400);

		});
		$('.wm-module.wm-langs.dropdown.module-lang-num1 .content a').click(function(event) {
			/* Act on the event */
			$(this).parents('.content').toggleClass('active').slideToggle(400);
			$(this).parents('.content').siblings('.ui.header').toggleClass('active');

		});
	});