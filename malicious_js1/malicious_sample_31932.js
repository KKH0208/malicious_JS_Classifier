window.fbAsyncInit = function() {
		FB.init({
			appId : '190291501407',
			xfbml : true,
			version : 'v2.6'
		});

        // Set Facebook comment plugin's colorscheme based off of theme
		var comments = document.getElementsByClassName('facebook-comment-widget'),
			scheme = document.body.className.match('wsite-theme-light');

		for (var i = 0; i < comments.length; i++) {
			comments[i].setAttribute('colorscheme', scheme ? 'light' : 'dark');
		}

		var fbCommentCounts;

		FB.Event.subscribe('xfbml.render', function(){
			fbCommentCounts = jQuery('.fb_comments_count');
			for (var i = 0; i < fbCommentCounts.length; i++) {
				var commentText = (jQuery(fbCommentCounts[i]).text() == '1' ? "³áóÈ" : "³áóÈ");
				jQuery(fbCommentCounts[i]).parent().siblings('.fb_comment_count_label').text(commentText);
			}
		});

		var comment_callback = function(res) {
			FB.XFBML.parse(); // Refresh comment counters on page
		}

		FB.Event.subscribe('comment.create', comment_callback);
		FB.Event.subscribe('comment.remove', comment_callback);

	};

	(function(d, s, id){
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) {return;}
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/"+_W.facebookLocale+"/sdk.js";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));