function spages(p, link, s ) {
	if (1 ) {
		document.location.href = link.href;
		return;
	}

	try {
		document.getElementById('myGrid').style.display = '';
	} catch(e) {}

	_uPostForm('', {url:'/dir/2-' + p + '-' + s + '-0-0-0-0-' + Date.now() } );
}

function ssorts(p, cu, seo ) {
	if(1){
		if(seo&&seo=='1'){
			var uu=cu+'?sort='+p;
			var sort=false;
			var filter1=false;
			var filter2=false;
			var filter3=false;
			var pageX=false;
			tmp=[];
			var items=location.search.substr(1).split("&");
			for(var index=0;index<items.length;index++){
				tmp=items[index].split("=");
				if(tmp[0]&&tmp[1]&&(tmp[0]=='sort')){
					sort=tmp[1];
				}
				if(tmp[0]&&tmp[1]&&(tmp[0]=='filter1')){
					filter1=tmp[1];
				}
				if(tmp[0]&&tmp[1]&&(tmp[0]=='filter2')){
					filter2=tmp[1];
				}
				if(tmp[0]&&tmp[1]&&(tmp[0]=='filter3')){
					filter3=tmp[1];
				}
				if(tmp[0]&&!tmp[1]){
					if(tmp[0].match(/page/)){
						pageX=tmp[0];
					}
				}
			}
			if(filter1){
				uu+='&filter1='+filter1;
			}
			if(filter2){
				uu+='&filter2='+filter2;
			}
			if(filter3){
				uu+='&filter3='+filter3;
			}
			if(pageX){
				uu+='&'+pageX;
			}
			document.location.href=uu;
			return;
		}

		document.location.href='/dir/2-1-'+p+'';
		return;
	}

	try{
		document.getElementById('myGrid').style.display = '';
	} catch(e) {}

	_uPostForm('', {url:'/dir/2-1-' + p + '-0-0-0-0-' + Date.now() } );
}