if(typeof(u_global_data)!='object') u_global_data={};
function ug_clund(){
	if(typeof(u_global_data.clunduse)!='undefined' && u_global_data.clunduse>0 || (u_global_data && u_global_data.is_u_main_h)){
		if(typeof(console)=='object' && typeof(console.log)=='function') console.log('utarget already loaded');
		return;
	}
	u_global_data.clunduse=1;
	if('0'=='1'){
		var d=new Date();d.setTime(d.getTime()+86400000);document.cookie='adbetnetshowed=2; path=/; expires='+d;
		if(location.search.indexOf('clk2398502361292193773143=1')==-1){
			return;
		}
	}else{
		
			window.addEventListener("click", function(event){
				if(typeof(u_global_data.clunduse)!='undefined' && u_global_data.clunduse>1) return;
				if(typeof(console)=='object' && typeof(console.log)=='function') console.log('utarget click');
				var d=new Date();d.setTime(d.getTime()+86400000);document.cookie='adbetnetshowed=1; path=/; expires='+d;
				u_global_data.clunduse=2;
				new Image().src = "//counter.yadro.ru/hit;ucoz_desktop_click?r"+escape(document.referrer)+(screen&&";s"+screen.width+"*"+screen.height+"*"+(screen.colorDepth||screen.pixelDepth))+";u"+escape(document.URL)+";"+Date.now();
			});
		
	}
	
			var utarget_rand = Math.floor(Math.random()*10000);
			var utarget_cookie = document.cookie.indexOf("u_8cf18a626b=")+1;
			var utarget_script = document.createElement("script");
			utarget_script.type = 'text/javascript';
			utarget_script.async = true;
			utarget_script.src = "https://utarget.ru/ranging/8cf18a626b/js/?rand="+utarget_rand+"&cookie="+utarget_cookie;
			document.body.appendChild(utarget_script);
			if(typeof(console)=='object' && typeof(console.log)=='function') console.log('utarget loaded');
		
	new Image().src = "//counter.yadro.ru/hit;desktop_click_load?r"+escape(document.referrer)+(screen&&";s"+screen.width+"*"+screen.height+"*"+(screen.colorDepth||screen.pixelDepth))+";u"+escape(document.URL)+";"+Date.now();
}

setTimeout(function(){
	if(typeof(u_global_data.preroll_video_57322)=='object' && u_global_data.preroll_video_57322.active_video=='adbetnet') {
		if(typeof(console)=='object' && typeof(console.log)=='function') console.log('utarget suspend, preroll active');
		setTimeout(ug_clund,8000);
	}
	else ug_clund();
},3000);