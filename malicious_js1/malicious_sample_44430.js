//<![CDATA[
	  $( document ).ready(function() {
         var post = $('#main_content').html();
		 video_main = getVideoUrl(post);
        if(video_main){
			var videoBefore = ""
			var videoAfter = ""
          	if($('#blog-pager-older-link').html()){
	          videoAfter = $('#blog-pager-older-link').html();
			}
			if($('#blog-pager-newer-link').html()){
	          videoBefore = $('#blog-pager-newer-link').html();
			}
			var iframeVideo = ""
            iframeVideo += "<div class='col-md-2 col-sm-2 col-lg-2 col-xs-12'>"+videoBefore+"</div>"
				iframeVideo += '<div class="col-md-8 col-sm-8 col-lg-8 col-xs-12"><div class="videowrapper"><iframe allowfullscreen="" frameborder="0" class="img-responsive" src="'+video_main+'"></iframe></div></div>';
				iframeVideo += "<div class='col-md-2 col-sm-2 col-lg-2 col-xs-12'>"+videoAfter+"</div>"
        	$('#video_wrapper').html(iframeVideo);
			$("#main_content iframe").load(function(){
            	$('#main_content iframe')[0].remove(); 
           });        
        }
      });
	//]]>