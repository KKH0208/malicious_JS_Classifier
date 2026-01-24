( window.MSReady = window.MSReady || [] ).push( function( $ ) {

			"use strict";
			var masterslider_a0c1 = new MasterSlider();

			// slider controls
			masterslider_a0c1.control('arrows'     ,{ autohide:true, overVideo:true  });
			// slider setup
			masterslider_a0c1.setup("MS6181eb1aba0c1", {
				width           : 1000,
				height          : 500,
				minHeight       : 0,
				space           : 0,
				start           : 1,
				grabCursor      : true,
				swipe           : true,
				mouse           : true,
				keyboard        : false,
				layout          : "fullscreen",
				wheel           : false,
				autoplay        : true,
                instantStartLayers:false,
				mobileBGVideo:false,
				loop            : true,
				shuffle         : false,
				preload         : 0,
				heightLimit     : true,
				autoHeight      : false,
				smoothHeight    : true,
				endPause        : false,
				overPause       : true,
				fillMode        : "fill",
				centerControls  : true,
				startOnAppear   : false,
				layersMode      : "center",
				autofillTarget  : "",
				hideLayers      : false,
				fullscreenMargin: 0,
				speed           : 20,
				dir             : "h",
				parallaxMode    : 'swipe',
				view            : "basic"
			});

			
			window.masterslider_instances = window.masterslider_instances || [];
			window.masterslider_instances.push( masterslider_a0c1 );
		});