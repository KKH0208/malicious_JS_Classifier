//<![CDATA[
		String.prototype.GetValue= function(para) {
		  var reg = new RegExp("(^|&)"+ para +"=([^&]*)(&|$)");
		  var r = this.substr(this.indexOf("\?")+1).match(reg);
		  if (r!=null) return unescape(r[2]); return null;
		}

		var str = location.href;
		var page = str.GetValue("page");
		var view = str.GetValue("v"); 
		var homepageurl = "http://phimlg.blogspot.com/";
		var urllength = homepageurl.length;
		if (page==undefined) { page = "1"; }
		if (view==undefined) { view = "full"; }

		if (str.indexOf("search/label")!=-1) {
		if (str.indexOf("?")!=-1){
		var str1 = str.split("?")[0];
		var label = str1.substring(urllength+13,str1.length);
		}
		else {
		var label = str.substring(urllength+13,str.length);
		}
		var textlabel = "/-/"+label;
		var textpage = "search/label/"+label;
		}
		else {var textlabel ="";var textpage = ""; }

		function showrecentposts(json) {
			img  = new Array();
			for (var i = 0; i < numposts; i++) {
				var entry = json.feed.entry[i];
				var posttitle = entry.title.$t;
				var posturl;
			if (i == json.feed.entry.length) break;
			for (var k = 0; k < entry.link.length; k++) {if (entry.link[k].rel == 'alternate') {posturl = entry.link[k].href; break;}}                  
			if ("content" in entry) {var postcontent = entry.content.$t;}
			else if ("summary" in entry) {var postcontent = entry.summary.$t;}
			else  postcontent = "";
			s = postcontent; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);
			if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) {img[i] = d;} 
			else {img[i]="http://1.bp.blogspot.com/-S9XVJ6mTBME/UA94BBh5WFI/AAAAAAAAACg/pkQWbm3LIGE/s1600/noimage.png";}
			
		tennhan = new Array();
		cate = entry.category;
		if(cate) { for (var k = 0; k < entry.category.length; k++) {tennhan[k] = ''+entry.category[k].term+'';} } else {tennhan = "No label";}
		hnf = new Array(); 
		for (var k = 0; k < entry.category.length; k++) {if (entry.category[k].term == 'Hot') {var hnf = '<span class="hot"></span>';}
		else if (entry.category[k].term == 'New') {var hnf = '<span class="new"></span>';} 
		else if (entry.category[k].term == 'Phim HD') {var hnf = '<span class="hd"></span>';}
		else if (entry.category[k].term == 'Trailer') {var hnf = '<span class="trailer"></span>';}}


		var hl_f = '<div class="hellol"><div class="imgl"><a href="'+posturl+'" title="'+posttitle+'">'+hnf+'<img class="vtip" title="<strong>'+detit(posttitle)+'</strong><br/><b>Thể loại:</b> '+tennhan+'<br/><b>Nội dung:</b> '+rutgon(postcontent,300)+'" alt="'+posttitle+'" src="'+img[i]+'"/></a><span class="moreinfo sdb">'+altit(posttitle)+'</span></div><a href="'+posturl+'" title="'+posttitle+'">'+detit(posttitle)+'</a></div>';
				
		if (view=="full") { if ((i==0)&&(page==1)&&(textpage=="")) {document.write(hl_f);} else {document.write(hl_f);} }
		}
		}

		function numberOfPosts(json) {document.write('<script style=\"text/javascript\">var totalPosts= '+json.feed.openSearch$totalResults.$t+' ;<\/script>');}
		document.write('<script src=\"/feeds/posts/default'+textlabel+'?alt=json-in-script&callback=numberOfPosts\"><\/script>');

		//]]>