/* <![CDATA[ */  
					function clickExplorer() {
						if( document.all ) {
							alert('All materials on this site are copyright protected by IBE Barter Exchange.');
						}
						return false;
					}

					function clickOther(e) {
						if( document.layers || ( document.getElementById && !document.all ) ) {
							if ( e.which == 2 || e.which == 3 ) {
								alert('All materials on this site are copyright protected by IBE Barter Exchange.');
								return false;
							}
						}
					}
					if( document.layers ) {
						document.captureEvents( Event.MOUSEDOWN );
						document.onmousedown=clickOther;
					}
					else {
						document.onmouseup = clickOther;
						document.oncontextmenu = clickExplorer;
					}   /* ]]> */ 
 /* <![CDATA[ */  window.addEvent('domready', function() { 
				   
	
				    document.body.oncopy = function() { 
							alert('All materials on this site are copyright protected by IBE Barter Exchange.'); 
					 } });   /* ]]> */