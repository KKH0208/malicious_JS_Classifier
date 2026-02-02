//<![CDATA[
   imgr = new Array();

imgr[0] = "http://sites.google.com/site/fdblogsite/Home/nothumbnail.gif";

showRandomImg = true;

aBold = true;

summaryPost = 70; 
summaryTitle = 25; 

numposts  = 6; 
numposts1 = 3; 
numposts2 = 6;
numposts3 = 4;
numposts5 = 5;
numposts6 = 10; 




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

function showrecentposts(json) {
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

	//cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';


	var month = [1,2,3,4,5,6,7,8,9,10,11,12];
	var month2 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

	var day = postdate.split("-")[2].substring(0,2);
	var m = postdate.split("-")[1];
	var y = postdate.split("-")[0];

	for(var u2=0;u2<month.length;u2++){
		if(parseInt(m)==month[u2]) {
			m = month2[u2] ; break;
		}
	}

	var daystr = day+ ' ' + m + ' ' + y ;
    pcm='<a href="'+posturl+'#disqus_thread'+'"></a>';
	
 if (i==0) {
	var trtd = '<li class="first"><div class="entry-thumb"><a href="'+posturl+'"><img width="80" height="80" src="'+img[i]+'"/> </a></div><h2 class="entry-title"><a href="'+posturl+'">'+posttitle+'</a></h2><div class="entry-meta"><span class="meta-date">'+daystr+'</span><span class="meta-sep">|</span><span class="meta-comments">'+pcm+'</span></div><div class="entry-excerpt"><p>'+removeHtmlTag(postcontent,summaryPost)+'...<a href="'+posturl+'" class="meta-more">Read more <span class="meta-nav"></span></a></p></div></li>';
	document.write(trtd);
}
 if ((i>0)&&(i<maxpost))
    {
	var trtd = '<li class="catlist"><a href="'+posturl+'">'+posttitle+'</a></li>';
	document.write(trtd);
}

	j++;
}


}

function showrecentposts1(json) {
	j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
	img  = new Array();
    if (numposts1 <= json.feed.entry.length) {
		maxpost = numposts1;
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

	//cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';


	var month = [1,2,3,4,5,6,7,8,9,10,11,12];
	var month2 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

	var day = postdate.split("-")[2].substring(0,2);
	var m = postdate.split("-")[1];
	var y = postdate.split("-")[0];

	for(var u2=0;u2<month.length;u2++){
		if(parseInt(m)==month[u2]) {
			m = month2[u2] ; break;
		}
	}

	var daystr = day+ ' ' + m + ' ' + y ;
    pcm='<a href="'+posturl+'#disqus_thread'+'"></a>';
 
	var trtd = '<div class="hentry"><div class="entry-thumb"><a href="'+posturl+'"><img width="80" height="80" src="'+img[i]+'"/></a></div><h2 class="entry-title"><a href="'+posturl+'">'+posttitle+'</a></h2><div class="entry-meta"><span class="meta-date">'+daystr+'</span><span class="meta-sep">|</span><span class="meta-comments">'+pcm+'</span></div><div class="entry-excerpt"><p>'+removeHtmlTag(postcontent,summaryPost)+'...<a href="'+posturl+'" class="meta-more">Read more <span class="meta-nav"></span></a></p></div> </div>';
	document.write(trtd);


	j++;
}

}

function showrecentposts2(json) {
	j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
	img  = new Array();
    if (numposts2 <= json.feed.entry.length) {
		maxpost = numposts2;
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

	//cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';


	var month = [1,2,3,4,5,6,7,8,9,10,11,12];
	var month2 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

	var day = postdate.split("-")[2].substring(0,2);
	var m = postdate.split("-")[1];
	var y = postdate.split("-")[0];

	for(var u2=0;u2<month.length;u2++){
		if(parseInt(m)==month[u2]) {
			m = month2[u2] ; break;
		}
	}

	var daystr = day+ ' ' + m + ' ' + y ;
    pcm='<a href="'+posturl+'#disqus_thread'+'"></a>';
	
 if (i==0) {
	var trtd = '<li class="clear" style="border-top: 0pt none;"><a href="'+posturl+'"><img width="40" height="40" src="'+img[i]+'"/></a><div class="info"><a href="'+posturl+'">'+posttitle+'</a><span class="meta">'+daystr+'</span></div></li>';
	document.write(trtd);
}
 if ((i>0)&&(i<maxpost))
    {
	var trtd = '<li class="clear"><a href="'+posturl+'"><img width="40" height="40" src="'+img[i]+'"/></a><div class="info"><a href="'+posturl+'">'+posttitle+'</a><span class="meta">'+daystr+'</span></div></li>';
	document.write(trtd);
}

	j++;
}


}

function showrecentposts3(json) {
	j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
	img  = new Array();
     if (numposts3 <= json.feed.entry.length) {
		maxpost = numposts3;
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

	//cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';


	var month = [1,2,3,4,5,6,7,8,9,10,11,12];
	var month2 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

	var day = postdate.split("-")[2].substring(0,2);
	var m = postdate.split("-")[1];
	var y = postdate.split("-")[0];

	for(var u2=0;u2<month.length;u2++){
		if(parseInt(m)==month[u2]) {
			m = month2[u2] ; break;
		}
	}

	var daystr = day+ ' ' + m + ' ' + y ;
 
 
    pcm='<a href="'+posturl+'#disqus_thread'+'"></a>';
 
	var trtd = '<li class="item"><a href="'+posturl+'"><img width="128" height="80" src="'+img[i]+'"/></a><a href="'+posturl+'" class="title"><span>'+posttitle+'</span></a></li>';
	document.write(trtd);
	j++;
}

}


function showrecentposts5(json) {
	j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
	img  = new Array();
    document.write('<div class="slides">')
	if (numposts5 <= json.feed.entry.length) {
		maxpost = numposts5;
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

	//cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';


	var month = [1,2,3,4,5,6,7,8,9,10,11,12];
	var month2 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

	var day = postdate.split("-")[2].substring(0,2);
	var m = postdate.split("-")[1];
	var y = postdate.split("-")[0];

	for(var u2=0;u2<month.length;u2++){
		if(parseInt(m)==month[u2]) {
			m = month2[u2] ; break;
		}
	}

	var daystr = day+ ' ' + m + ' ' + y ;
    
	pcm='<a href="'+posturl+'#disqus_thread'+'"></a>';
 
	var trtd = '<div><p class="featured-thumb"><a href="'+posturl+'"><img width="280" height="250" src="'+img[i]+'"/></a></p><h2 class="entry-title"><a href="'+posturl+'">'+posttitle+'</a></h2><p class="entry-meta"><span class="date">'+daystr+'</span> <span class="meta-sep">|</span><span class="comments-link">'+pcm+'</span></p><p>'+removeHtmlTag(postcontent,summaryPost)+'... <a href="'+posturl+'" class="meta-more">Read more <span class="meta-nav"></span></a></p></div>';
	document.write(trtd);


	j++;
}
    document.write('</div>')
}

function showrecentposts6(json) {
	j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
	img  = new Array();
    for (var i = 0; i < numposts6; i++) {
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

	//cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';


	var month = [1,2,3,4,5,6,7,8,9,10,11,12];
	var month2 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

	var day = postdate.split("-")[2].substring(0,2);
	var m = postdate.split("-")[1];
	var y = postdate.split("-")[0];

	for(var u2=0;u2<month.length;u2++){
		if(parseInt(m)==month[u2]) {
			m = month2[u2] ; break;
		}
	}

	var daystr = day+ ' ' + m + ' ' + y ;
    pcm='<a href="'+posturl+'#disqus_thread'+'"></a>';
 
	var trtd = '<li><span class="postdate">'+m+'/'+day+'</span> <a href="'+posturl+'">'+posttitle+'</a></li>';
	document.write(trtd);


	j++;
}

}

//]]>