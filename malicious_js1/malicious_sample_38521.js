//<![CDATA[
window.addEvent('domready', function() {
				var modules = ['rt-block'];
				var header = ['h3','h2','h1'];
				GantryBuildSpans(modules, header);
		

				var switcher = document.id('gantry-viewswitcher');
				if (switcher) {
					switcher.addEvent('click', function(e) {
						e.stop();
						if ('0' == '0') document.id('gantry-viewswitcher').addClass('off');
						else $('gantry-viewswitcher').removeClass('off');
						Cookie.write('gantry-linux-switcher', '0');
						window.location.reload();
					});
				}
		
            new Fusion('ul.menutop', {
                pill: 1,
                effect: 'slide and fade',
                opacity:  1,
                hideDelay:  500,
                centered:  0,
                tweakInitial: {'x': -11, 'y': -5},
                tweakSubsequent: {'x':  0, 'y':  0},
                tweakSizes: {'width': 20, 'height': 20},
                menuFx: {duration:  300, transition: Fx.Transitions.linear},
                pillFx: {duration:  400, transition: Fx.Transitions.Circ.easeOut}
            });
            
});	//]]>