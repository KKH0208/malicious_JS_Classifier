//<![CDATA[
imgr = new Array();
imgr[0] = "http://sites.google.com/site/fdblogsite/Home/nothumbnail.gif";
showRandomImg = true;
aBold = true;
numposts = 30; 

function removeHtmlTag(strx,chop){
	var s = strx.split("<");
	for(var i=0;i<s.length;i++){
		if(s[i].indexOf(">")!=-1){
			s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length);
		}
	}
	s =  s.join("");
	s = s.substring(0,chop-1);
	return s;
}

function slide1(json) {
	j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
	img  = new Array();
    if (numposts <= json.feed.entry.length) {
		maxpost = numposts;
		}
	else
       {
	   maxpost=json.feed.entry.length;
	   }	
	
    for (var i = 0; i < maxpost; i++) {  	
    	var entry = json.feed.entry[i];
    	var posttitle = entry.title.$t;
		var pcm;
    	var posturl;
    	if (i == json.feed.entry.length) break;
    	for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'alternate') {
        		posturl = entry.link[k].href;
        		break;
      		}
    	}
		
		for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
        		pcm = entry.link[k].title.split(" ")[0];
        		break;
      		}
    	}
		
    	if ("content" in entry) {
      		var postcontent = entry.content.$t;}
    	else
    	if ("summary" in entry) {
      		var postcontent = entry.summary.$t;}
    	else var postcontent = "";
    	
    	postdate = entry.published.$t;
	
	if(j>imgr.length-1) j=0;
	img[i] = imgr[j];
	
	s = postcontent	; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

	if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;


	
    if ((i == 0)) {
	var trtd = '<a title="'+posttitle+'" href="'+posturl+'"><img src="'+img[i]+'" alt="'+posttitle+'" title="'+posttitle+'" class="img230"><h2>'+posttitle+'<img border="0" alt=""></h2></a>';
	document.write(trtd);}

    if((i==1)){
    var trtd = '<div class="newstop_left2 mgt10" style="height: 393px; overflow: hidden;"><ul><li><span class="list_style sprite fl"></span><a title="'+posttitle+'" href="'+posturl+'">'+posttitle+'</a></li>';
	document.write(trtd);}
	
    if((i>=2 && i<=7)){
    var trtd = '<li><span class="list_style sprite fl"></span><a title="'+posttitle+'" href="'+posturl+'">'+posttitle+'</a></li>';
	document.write(trtd);}
	
    if((i==8)){
    var trtd = '<li><span class="list_style sprite fl"></span><a title="'+posttitle+'" href="'+posturl+'">'+posttitle+'</a></li></ul></div>';
	document.write(trtd);}

		  
		  
}
document.write('');
}
function box(json) {
	j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
	img  = new Array();
    if (numposts <= json.feed.entry.length) {
		maxpost = numposts;
		}
	else
       {
	   maxpost=json.feed.entry.length;
	   }	
	
    for (var i = 0; i < maxpost; i++) {  	
    	var entry = json.feed.entry[i];
    	var posttitle = entry.title.$t;
		var pcm;
    	var posturl;
    	if (i == json.feed.entry.length) break;
    	for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'alternate') {
        		posturl = entry.link[k].href;
        		break;
      		}
    	}
		
		for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
        		pcm = entry.link[k].title.split(" ")[0];
        		break;
      		}
    	}
		
    	if ("content" in entry) {
      		var postcontent = entry.content.$t;}
    	else
    	if ("summary" in entry) {
      		var postcontent = entry.summary.$t;}
    	else var postcontent = "";
    	
    	postdate = entry.published.$t;
	
	if(j>imgr.length-1) j=0;
	img[i] = imgr[j];
	
	s = postcontent	; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

	if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;


	
    if ((i == 0)) {
	var trtd = '<a title="'+posttitle+'" href="'+posturl+'"><img src="'+img[i]+'" alt="'+posttitle+'" title="'+posttitle+'" class="img300"></a><h3><a title="'+posttitle+'" href="'+posturl+'">'+posttitle+'</a></h3><div class="box_sub fl"><p>'+removeHtmlTag(postcontent,100)+'</p>';
	document.write(trtd);}

    if((i==1)){
    var trtd = '<ul><li><span class="list_style_home sprite"></span><a title="'+posttitle+'" href="'+posturl+'">'+posttitle+'</a></li>';
	document.write(trtd);}
	
    if((i==2)){
    var trtd = '<li><span class="list_style_home sprite"></span><a title="'+posttitle+'" href="'+posturl+'">'+posttitle+'</a></li></ul></div>';
	document.write(trtd);}

		  
		  
}
document.write('');
}
function demo(json) {
	j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
	img  = new Array();
    if (numposts <= json.feed.entry.length) {
		maxpost = numposts;
		}
	else
       {
	   maxpost=json.feed.entry.length;
	   }	
	
    for (var i = 0; i < maxpost; i++) {  	
    	var entry = json.feed.entry[i];
    	var posttitle = entry.title.$t;
		var pcm;
    	var posturl;
    	if (i == json.feed.entry.length) break;
    	for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'alternate') {
        		posturl = entry.link[k].href;
        		break;
      		}
    	}
		
		for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
        		pcm = entry.link[k].title.split(" ")[0];
        		break;
      		}
    	}
		
    	if ("content" in entry) {
      		var postcontent = entry.content.$t;}
    	else
    	if ("summary" in entry) {
      		var postcontent = entry.summary.$t;}
    	else var postcontent = "";
    	
    	postdate = entry.published.$t;
	
	if(j>imgr.length-1) j=0;
	img[i] = imgr[j];
	
	s = postcontent	; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

	if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;


	
    if ((i == 0)) {
	var trtd = '<div class="newstop_main1"><a title="'+posttitle+'" href="'+posturl+'"> <img src="'+img[i]+'" alt="'+posttitle+'" title="'+posttitle+'" height="230" width="368"/></a><h4 class="subtitle ml10"></h4><h1><a title="'+posttitle+'" href="'+posturl+'">'+posttitle+'</a></h1><p>'+removeHtmlTag(postcontent,100)+'... </p><span class="newstop_main_conner sprite fl"></span></div>';
	document.write(trtd);}

    if ((i == 1)) {
	var trtd = '<div class="newstop_main2 fl mgt10"><div><a title="'+posttitle+'" href="'+posturl+'"><img alt="'+posttitle+'" title="'+posttitle+'" src="'+img[i]+'" width="110" height="69"><h3>'+posttitle+'<p></p> </h3></a>';
	document.write(trtd);}

    if ((i == 2)) {
	var trtd = '<a title="'+posttitle+'" href="'+posturl+'"><img alt="'+posttitle+'" title="'+posttitle+'" src="'+img[i]+'" width="110" height="69"><h3>'+posttitle+'<p></p> </h3></a>';
	document.write(trtd);}

	
    if ((i == 3)) {
	var trtd = '<a title="'+posttitle+'" href="'+posturl+'"><img alt="'+posttitle+'" title="'+posttitle+'" src="'+img[i]+'" width="110" height="69"><h3>'+posttitle+'<p></p> </h3></a></div>';
	document.write(trtd);}
	
    if ((i == 4)) {
	var trtd = '<div style="margin-top:13px"><a title="'+posttitle+'" href="'+posturl+'"><img alt="'+posttitle+'" title="'+posttitle+'" src="'+img[i]+'" width="110" height="69"><h3>'+posttitle+'<p></p> </h3></a>';
	document.write(trtd);}
	
    if ((i == 5)) {
	var trtd = '<a title="'+posttitle+'" href="'+posturl+'"><img alt="'+posttitle+'" title="'+posttitle+'" src="'+img[i]+'" width="110" height="69"><h3>'+posttitle+'<p></p> </h3></a>';
	document.write(trtd);}
	
	
    if ((i == 6)) {
	var trtd = '<a title="'+posttitle+'" href="'+posturl+'"><img alt="'+posttitle+'" title="'+posttitle+'" src="'+img[i]+'" width="110" height="69"><h3>'+posttitle+'<p></p> </h3></a></div></div>';
	document.write(trtd);}
		  
		  
}
document.write('');
}
function sidebar(json) {
	j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
	img  = new Array();
    if (numposts <= json.feed.entry.length) {
		maxpost = numposts;
		}
	else
       {
	   maxpost=json.feed.entry.length;
	   }	
	
    for (var i = 0; i < maxpost; i++) {  	
    	var entry = json.feed.entry[i];
    	var posttitle = entry.title.$t;
		var pcm;
    	var posturl;
    	if (i == json.feed.entry.length) break;
    	for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'alternate') {
        		posturl = entry.link[k].href;
        		break;
      		}
    	}
		
		for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
        		pcm = entry.link[k].title.split(" ")[0];
        		break;
      		}
    	}
		
    	if ("content" in entry) {
      		var postcontent = entry.content.$t;}
    	else
    	if ("summary" in entry) {
      		var postcontent = entry.summary.$t;}
    	else var postcontent = "";
    	
    	postdate = entry.published.$t;
	
	if(j>imgr.length-1) j=0;
	img[i] = imgr[j];
	
	s = postcontent	; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

	if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;


	
    if ((i == 0)) {
	var trtd = '<div class="hhd_row"><div class="hhd_c_t hhd_row_c1"><div class="hhd_img"><a href="'+posttitle+'"><img height="45" width="45" alt="'+posttitle+'" src="'+img[i]+'"></a></div><a class="title" href="'+posttitle+'">'+posttitle.substring(0,30)+'...</a></div>';
	document.write(trtd);}

    if((i==1)){
    var trtd = '<div class="hhd_c_t"><div class="hhd_img"><a href="'+posttitle+'"><img height="45" width="45" alt="'+posttitle+'" src="'+img[i]+'"></a></div><a class="title" href="'+posttitle+'">'+posttitle.substring(0,30)+'...</a></div><div class="clr"></div></div>';
	document.write(trtd);}

	
    if ((i==2)) {
	var trtd = '<div class="hhd_row"><div class="hhd_c_t hhd_row_c2"><div class="hhd_img"><a href="'+posttitle+'"><img height="45" width="45" alt="'+posttitle+'" src="'+img[i]+'"></a></div><a class="title" href="'+posttitle+'">'+posttitle.substring(0,30)+'...</a></div>';
	document.write(trtd);}

    if((i==3)){
    var trtd = '<div class="hhd_c_t"><div class="hhd_img"><a href="'+posttitle+'"><img height="45" width="45" alt="'+posttitle+'" src="'+img[i]+'"></a></div><a class="title" href="'+posttitle+'">'+posttitle.substring(0,30)+'...</a></div><div class="clr"></div></div>';
	document.write(trtd);}
	
    if ((i==4)) {
	var trtd = '<div class="hhd_row hhd_row_last"><div class="hhd_c_t hhd_row_c3"><div class="hhd_img"><a href="'+posttitle+'"><img height="45" width="45" alt="'+posttitle+'" src="'+img[i]+'"></a></div><a class="title" href="'+posttitle+'">'+posttitle.substring(0,30)+'...</a></div>';
	document.write(trtd);}

    if((i==5)){
    var trtd = '<div class="hhd_c_t"><div class="hhd_img"><a href="'+posttitle+'"><img height="45" width="45" alt="'+posttitle+'" src="'+img[i]+'"></a></div><a class="title" href="'+posttitle+'">'+posttitle.substring(0,30)+'...</a></div><div class="clr"></div></div>';
	document.write(trtd);}

		  
		  
}
document.write('');
}

//]]>