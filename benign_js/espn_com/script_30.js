/* 元のURL: https://espn.com */



	if (typeof s_omni === 'undefined') {
		jQuery(function($){
			$.getScriptCache("https://a.espncdn.com/redesign/0.748.2/js/espn-analytics.js", 				function() {					var deferEvent = "user.parsed",						initOnLoad = null || false,						timeoutID;
					function initTrack(){						if (typeof espn.track.init === 'function') {							window.clearTimeout(timeoutID);
							$.unsubscribe([deferEvent, initTrack]);
							espn.track.init(data);						}					}
					if(initOnLoad || window.espn_ui.userParsed){						initTrack();					}					else {						$.subscribe(deferEvent, initTrack);                        timeoutID = window.setTimeout(initTrack, 5000);					}				}				);
		});
	}

	

