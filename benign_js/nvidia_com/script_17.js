/* 元のURL: https://nvidia.com */
	
	 	if(true){
			var searchPath = document.getElementById("search-path");
			searchPath.value = window.location.pathname;
     	}
	    NVIDIAGDC.funcQueue.addToQueue({ 
	        id : "meganavigation2f4c9612_76f6_4a96_85ce_7a1026a23712",
	        method : "navigation-megamenu",
	        params : [{
	            globalSite:true,
	            breadCrumbAdded: false,
	            enableSearchLibrary: true,
	            isSolr:true,
	            searchOptions: {
	                destination: "https://www.nvidia.com/ja-jp/search/",
	                apiUrl: "https://api-prod.nvidia.com/search/graphql",
	                triggerId: 'nvidia-search-box-link',
	                referenceId: 'nvidia-search-box-link'
	              }
	            }]
	    });
	    
	    NVIDIAGDC.isBrandPage = false;
		NVIDIAGDC.isMegaMenu = true;
		NVIDIAGDC.disableOldBrandNav = false;
		window.setHeaderObservers();
	

