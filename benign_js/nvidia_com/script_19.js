/* 元のURL: https://nvidia.com */

  var kitIdMap = {
		    	    "zh_CN":"bps8ajn",
		    	    "ja_JP":"kab7izg",
		    	    "ko_KR":"rpk4hze",
		    	    "zh_TW":"vvg2vkh"
		    	};
		   window.onload = setTimeout(loadTypeKit, 1000);  
		   function loadTypeKit(){
			  var d=document,
			    config = {
			      kitId:kitIdMap['ja_JP'],
			      scriptTimeout: 3000,
			      async: true
			    },
			    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
		   }


