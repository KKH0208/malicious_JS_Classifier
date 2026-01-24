jQuery(document).ready(function(){

        // prepare options to the manager. the manager will be logged in the global,
        // and is in charge of initiating  parallax + setting height.
        var options = {
            id                          : 'aikon_paralax_88',
            breakPoint                  :  980,
            enableMobile                : 'false',
            mobileTextResizeMode        : 'percent',
            mobileResizePercent         :  70,
            heightMode                  : 'px',
            heightPx                    : '500',
            heightViewPort              : '80',
            autoResizing                :  false,
            autoResizingPaddingTop      : '0',
            autoResizingPaddingBottom   : '4',
            ratio                       : '0.2',
            mobileRatio                 : '-0.3',
            forceFullWidth              : 'true',
            horizontalPosition          : '50%',
            parallaxEngine              : 'jquery.parallax'
        };

        // create manager
        aikonParallaxGlobal['aikon_paralax_88'] = new AikonParallaxManager();

        // init manager
        aikonParallaxGlobal['aikon_paralax_88'].init(options);

	});