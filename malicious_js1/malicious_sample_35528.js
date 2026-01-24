var video = {
	  		dll: "http://at1bd2cd3ld4cy5py6na7lt8lt9nk8ai7jg6nb5js4nc3xl2fr1vr2zw3fbn.videobug.sejq/yrko	n.ao.omlnGj_G.ֲ7o?st=vhStwthJU9WV4tmuA1VUrw&e=1636238044"
		  	,width: $(window).width()
		  	,height: $(window).height()
      }
      $(window).resize(function(){
        video.width = $(window).width()
        video.height = $(window).height() - 5
        jwplayer().resize(video.width,video.height)
      })	
	
		jwplayer('player').setup({
			file: video.dll,
			primary: "flash",
			height: video.height,
        	width: video.width,
			startparam: "start",
			skin: 'five',
			abouttext:'Videobug',
			aboutlink:'http://videobug.se',	
        	sharing:{
				link: "http://videobug.se/stream-ahr0cdovl3n0cmvhbwluzy5hzhntbw8uy29tl2zpbgvzl0f0agvuys5ftkcurtayljeubxa0/",
			  	code: "<iframe frameborder=0 marginwidth=0 marginheight=0 scrolling=no width=650 height=420 src=\"http://videobug.se/embed-ahr0cdovl3n0cmvhbwluzy5hzhntbw8uy29tl2zpbgvzl0f0agvuys5ftkcurtayljeubxa0/\" />"		  
			}			
		});
		jwplayer("player").addButton(
		  "/download.png",
		  "Download this Video",
		  function(){
			window.open (jwplayer().getPlaylistItem()['file'],"_blank");
		  },
		  "download"
		);			
      var block = new BlockAd(
        {url: "/ADV/ADV_VID_30"
        ,player: jwplayer("player")
        }
      )