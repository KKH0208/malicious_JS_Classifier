/* <![CDATA[ */

			RubicusFrontendIns.addObserver
			({

				onContentChange: function ()
        {
          RubicusFrontendIns.faqInit('faq', 'answerBlock');
        },

				onStartSlideshow: function()
				{
					$('slideshowControl').innerHTML	= '<span>Pausar<'+'/span>';
					$('slideshowControl').title			= 'Pausar apresentação de slides';
					$('slideshowControl').onclick		= RubicusFrontendIns.stopSlideshow.bind(RubicusFrontendIns);
				},

				onStopSlideshow: function()
				{
					$('slideshowControl').innerHTML	= '<span>Apresentação de slides<'+'/span>';
					$('slideshowControl').title			= 'Iniciar a apresentação de slides';
					$('slideshowControl').onclick		= RubicusFrontendIns.startSlideshow.bind(RubicusFrontendIns);
				},

				onShowImage: function()
				{
					if (RubicusFrontendIns.isSlideshowMode())
					{
						$('slideshowControl').innerHTML	= '<span>Pausar<'+'/span>';
						$('slideshowControl').title			= 'Pausar apresentação de slides';
						$('slideshowControl').onclick		= RubicusFrontendIns.stopSlideshow.bind(RubicusFrontendIns);
					}
				}

			 });

			  RubicusFrontendIns.faqInit('faq', 'answerBlock');

			  RubicusFrontendIns.addFileToPreload('https://d11bh4d8fhuq47.cloudfront.net/_system/skins/v8/50000942/img/loading.gif');
        RubicusFrontendIns.addFileToPreload('https://d11bh4d8fhuq47.cloudfront.net/_system/skins/v8/50000942/img/faq_hover.gif');

  		/* ]]> */