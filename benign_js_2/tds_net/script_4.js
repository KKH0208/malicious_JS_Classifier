/* 元のURL: https://tds.net */

			(function() {
				var c = window.Sadlib_Config = window.Sadlib_Config || {};
				if (!c.loaded) {
					var tp = c.targetingProviders = c.targetingProviders || {};
					tp["targeting_parameters"] = tp["targeting_parameters"] || {"data":{"environment":"production","lang":"en-US","ml":"0"}}
					
					c.loaded = true;
					c.siteId = 'tdstelecom-gen4';
					c.device_type = "desktop";
					c.page_type = 'home';
					c.babu =  false ;
					c.document_start_time = Date.now();
					
					c.load_type = 'async';
					var d=document, id='sadlib';
					if (d.getElementById(id)){ return; }
					var js = d.createElement('script');
					js.id = id;
					js.async = true; 
					js.src = "https:\/\/sadlib.imds-cdn.com\/client\/synacor\/synacor.js";
					var fjs = d.getElementsByTagName('script')[0];
					fjs.parentNode.insertBefore(js, fjs);
					}
			})()
		

