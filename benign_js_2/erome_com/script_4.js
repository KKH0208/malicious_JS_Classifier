/* 元のURL: https://erome.com */
// 外部JS: https://www.erome.com/js/main.js?v=2.52
// ajax token
$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});

//search modal focus
$('#searchModal').on('shown.bs.modal', function () {
	  var input = $('#q');
	  input.trigger('focus');
	  var val = input.val();
	  input.val('');
	  input.val(val);
});

//userSearchModal modal focus
$('#userSearchModal').on('shown.bs.modal', function () {
	  var input = $('#q-user');
	  input.trigger('focus');
	  var val = input.val();
	  input.val('');
	  input.val(val);
});

//bottom bar
$(document).on('click', '#hide-message-bar', function(e){
    $.ajax({
    	url: '/explore/ajax-request/hide-message-bar',
	    type: 'post',
        success: function(data) {
			if(data.status == 'success')
			{
				$('.message-bar').remove();
			}
		}
	});
});

//read-more
$(document).on('click', '.read-more', function(){
	var prev;
	prev = $(this).prev();
	prev.css("height", "auto");
	$(this).hide();
});

//block-user
$(document).on('click', '.block-user', function(){
	var id = $(this).data('id');
    $.ajax({
	      url: '/comment/block-user',
	      type: 'post',
	      data: {id : id},
	      success: function(data) {
    	      if(data.status == 'success'){
    	    	  $('.block-user[data-id="' + id + '"]').html('<i class="fas fa-fw fa-lg fa-ban" aria-hidden="true"></i> UNBLOCK USER').addClass('unblock-user').removeClass('block-user');
    	      }
	    	  show_message(data.msg);
	      }
    });
});

//unblock-user
$(document).on('click', '.unblock-user', function(){
	var id = $(this).data('id');
    $.ajax({
	      url: '/comment/unblock-user',
	      type: 'post',
	      data: {id : id},
	      success: function(data) {
    	      if(data.status == 'success'){
    	    	  $('.unblock-user[data-id="' + id + '"]').html('<i class="fas fa-fw fa-lg fa-ban" aria-hidden="true"></i> BLOCK USER').addClass('block-user').removeClass('unblock-user');
    	      }
	    	  show_message(data.msg);
	      }
    });
});

//menu mobile
var lastScrollTop = 0;
//var lastScrollTop = window.scrollY;
var diff = 0;
$(window).scroll(function(event){
	if(window.innerWidth < 768){
	   var st = $(this).scrollTop();
	   if (st > lastScrollTop){
	       // downscroll code
		   diff = st - lastScrollTop;
		   if(diff >= 100){
			   $('.navbar').hide();
			   lastScrollTop = st;
		   }
	   } else {
		   diff = lastScrollTop - st;
	      // upscroll code
		   if(diff >= 100){
		   		$('.navbar').show();
		   		lastScrollTop = st;
		   }
	   }
	   
		if(window.location.hash.length > 0)
	   	{
			$('.navbar').show();
		}
		
		if(top_bar){
	        if ($(this).scrollTop() >= 50) {
	            $('#main').removeClass('with-top-bar');
	        } else {
	            $('#main').addClass('with-top-bar');
	        }
		}
	}
});

//user hide
$(document).on('click', '.user-hide', function(e){
	
	var id = $(this).data('id');
	
    $.ajax({
        url: '/user/hide/' + id,
        type: 'post',
        dataType : 'json',
        data : { reason : 1},
        success: function(data) {
        	$('.user-hide-' + id).addClass('btn-grey').removeClass('btn-pink');
        	$('.user-hide-' + id).html(data.content);
        	$('.user-hide-' + id).addClass('user-show').removeClass('user-hide');
        	$('.user-follow-' + id).hide();
	    	  	show_message(data.msg);
        },
	     	error:function(data){
         	console.log(data.responseJSON.message);
        }
	});
	
});

//user-hide
$(document).on('click', '.user-show', function(e){
	
    var id = $(this).data('id');
	
    $.ajax({
        url: '/user/show/' + id,
        type: 'post',
        dataType : 'json',
        success: function(data) {
        	$('.user-hide-' + id).addClass('btn-pink').removeClass('btn-grey');
        	$('.user-hide-' + id).html(data.content);
        	$('.user-hide-' + id).addClass('user-hide').removeClass('user-show');
        	$('.user-follow-' + id).show();
        	show_message(data.msg);
        },
	     	error:function(data){
         	console.log(data.responseJSON.message);
        }
	});
});

//user follow
$(document).on('click', '.user-follow', function(e){
	
	var id = $(this).data('id');
	
    $.ajax({
	      url: '/user/follow/' + id,
	      type: 'post',
	      success: function(data) {
	    	  $('.user-follow-' + id).removeClass('btn-pink').addClass('btn-grey').removeClass('user-follow').addClass('user-unfollow').html(data.content);
	    	  $('.user-hide').hide();
	      }
	});
});

//user unfollow
$(document).on('click', '.user-unfollow', function(e){
	
	var id = $(this).data('id');
	
    $.ajax({
	      url: '/user/unfollow/' + id,
	      type: 'post',
	      success: function(data) {
	    	  $('.user-follow-' + id).removeClass('btn-grey').addClass('btn-pink').removeClass('user-unfollow').addClass('user-follow').html(data.content);
	    	  $('.user-hide').show();
	      }
	});
});

//album like
$(document).on('click', '.album-like', function(e){
	
	var target = $(this);
    
    $.ajax({
        url: '/album/like/' + target.data('id'),
        type: 'post',
        dataType : 'json',
        success: function(data) {
          target.removeClass('album-like').addClass('album-unlike');
          target.find('b').html(data.content);
          target.find('i').removeClass('far').addClass('fas').addClass('pink');
        },
	     	error:function(data){
         	console.log(data.responseJSON.message);
        }
	});
});

//album unlike
$(document).on('click', '.album-unlike', function(e){
	
	var target = $(this);
    
    $.ajax({
        url: '/album/unlike/' + target.data('id'),
        type: 'post',
        dataType : 'json',
        success: function(data) {
          target.removeClass('album-unlike').addClass('album-like');
          target.find('b').html(data.content);
          target.find('i').removeClass('fas').addClass('far').removeClass('pink');
        },
	     	error:function(data){
         	console.log(data.responseJSON.message);
        }
	});
});

//album save
$(document).on('click', '.album-save', function(e){
	
	var target = $(this);
	
    $.ajax({
	      url: '/album/save/' + target.data('id'),
	      type: 'post',
	      success: function(data) {
	    	  
	          target.removeClass('album-save').addClass('album-unsave');
	          target.find('i').removeClass('far').addClass('fas').addClass('pink');
	          show_message(data.msg);
	      }
	});
});

//album unsave
$(document).on('click', '.album-unsave', function(e){
	
	var target = $(this);
	
    $.ajax({
	      url: '/album/unsave/' + target.data('id'),
	      type: 'post',
	      success: function(data) {
	    	  
	          target.removeClass('album-unsave').addClass('album-save');
	          target.find('i').removeClass('fas').addClass('far').removeClass('pink');
	          show_message(data.msg);
	      }
    });
});


//gotop
$(window).scroll(function() {
	var w = $( document ).width();
	
	if($(window).scrollTop() < 100){
		$('#bubble').css('right', '10px');
		$('#goTop').hide();
	} else {
		if(w > 820){
			$('#bubble').css('right', '50px');
			$('#goTop').show();
		}
	}
});

$('#goTop').on('click', function(e){
	e.stopPropagation();
	$(window).scrollTop(0);
});

//autocomplete
var globalTimeout = null;
$(document).on('keyup', '#q', function (e){
	var charCode = e.which || e.keyCode;
	if(charCode != 38 && charCode != 40 && charCode != 13){
		var search = $(this).val();
		if (globalTimeout != null) {
			clearTimeout(globalTimeout);
		}
		globalTimeout = setTimeout(function() {
		    globalTimeout = null;
			if(search.length >= 2)
			{
		        $.ajax({
		        	url: "/search/autocomplete",
		            dataType: "json",
		            method: "POST",
		            data: {
		            	q: search
		            },
		            success: function( data ) {
		            	$('#suggestions').empty();
		                var $p = $('<p class="search-completions"></p>');
					    var $icon = $('<i class="fa fa-search"></i>');
					    var $span = $('<span></span>').text(search);
					    $p.append($icon).append(' ').append($span);
					    $('#suggestions').append($p);
		            	$.each(data, function(index, suggestion) {
			
							if(suggestion.type == 'user'){
			            		var content = '<p class="user-completions" >';
			            		if(suggestion.avatar != ''){
			            			content = content + '<img src="' + suggestion.avatar + '" >';
			            		} else {
			            			content = content + '<i class="fa fa-user-circle" ></i>';
			            		}
			            		content += '<span>' + suggestion.name + '</span>';
			            		if(suggestion.verified){
			            			content += '<i class="fas fa-check-circle ero-badge"></i>';
			            		}
			            		content += '</p>';
			            		
			            		
			            		$('#suggestions').append(content);
							} else {
								$('#suggestions').append( '<p class="search-completions" ><i class="fa fa-hashtag" ></i> <span>' + suggestion.search + ' </span></p>');
							}
		            	});
		            }
		          });
			} else {
				$('#suggestions').empty();
			}
		}, 300);
	}
});

//search modal
/*
$('#searchModal').on('shown.bs.modal', function () {
		
		if(!mobile)
		{
			$('#q').focus();
		}
		
		if($('#q').val() == '' && $('#suggestions p').length == 0){
		
		$.getJSON("/search/trends", function(data) {
			$.each(data, function(key, search) {
				if(search.type == 'trend')
				{
			    	$('#suggestions').append( '<p class="search-completions" ><i class="fa fa-hashtag" ></i> <span>' + search.search + '</span></p>');
				} else {
			    	$('#suggestions').append( '<p class="search-completions" ><i class="fa-solid fa-clock-rotate-left"></i> <span>' + search.search + '</span><i class="fa-solid fa-xmark"></i></p>');
				}
			});
		});
	}
});*/

//search user
$('#q-user').on('input', function() {
	if ($(this).val().length > 0) {
		$('#removeSearchUser').show();
	} else {
		$('#removeSearchUser').hide();
	}
});
$('#removeSearchUser').on('click', function() {
	$('#q-user').val('').trigger('input').focus();
});

//suggestions
$(document).on('keydown', '#q', function (e){
	var charCode = e.which || e.keyCode;
	if(charCode == 38 || charCode == 40 || charCode == 13){
		e.preventDefault();
		selectedIndex = $('#suggestions p.selected').index();
		
		if(charCode == 13){
			if(selectedIndex >= 1 && selectedIndex < $('#suggestions p').length){
				$('#suggestions p:eq(' + selectedIndex + ')').click();
			} else {
				$('#searchForm').submit();
			}
		}
		
		if(charCode == 40){
			if(selectedIndex >= 0){
				if(selectedIndex < $('#suggestions p').length - 1){
					$('#suggestions p:eq(' + selectedIndex + ')').removeClass('selected');
					$('#suggestions p:eq(' + parseInt(selectedIndex + 1) + ')').addClass('selected');
				}
			} else {
				$('#suggestions p:eq(0)').addClass('selected');
			}
		}
		
		if(charCode == 38){
			if(selectedIndex > 0){
				$('#suggestions p:eq(' + selectedIndex + ')').removeClass('selected');
				$('#suggestions p:eq(' + parseInt(selectedIndex - 1) + ')').addClass('selected');
			} else {
				$('#suggestions p:eq(' + selectedIndex + ')').removeClass('selected');
			}
		}
	}
});

$('#q').on('input', function() {
	if ($(this).val().length > 0) {
		$('#removeSearch').show();
	} else {
		$('#removeSearch').hide();
	}
});
$('#removeSearch').on('click', function() {
	$('#q').val('').trigger('input').focus();
	$('#suggestions').empty();
});


/*$(document).on('click', '#q', function (e){
	if($('#q').val() == '' && $('#suggestions .fa-clock-rotate-left').length == 0){
		$.getJSON("/search/recents", function(data) {
	    	$('#suggestions').empty();
			$.each(data, function(key, search) {
		    	$('#suggestions').append( '<p class="search-completions" ><i class="fa-solid fa-clock-rotate-left"></i> <span>' + search + '</span><i class="fa-solid fa-xmark"></i></p>');
			});
		});
	}
});*/

$(document).on('click', '#suggestions .fa-xmark', function (e){
	e.stopPropagation();
	
	var item = $(this);
	var n = item.parent().find('span').text();
	
    $.ajax({
		url: "/search/remove",
	    dataType: "json",
	    method: "POST",
	    data: {
	    	n: n
	    },
	    success: function( data ) {
			if(data.status == 'success'){
				item.parent().remove();
			}
		}
	});
	
});

/*$(document).on('click', '#searchForm .input-group-addon', function (e){
	if($('#q').val() != ''){
		var n = $('#q').val();
		location.href = "/search?q=" + n;
	}
});*/
$(document).on('click', '#suggestions .user-completions', function (e){
	var n = $(this).find('span').text();
	location.href = "/" + n;
});
$(document).on('click', '#suggestions .search-completions', function (e){
	var n = $(this).find('span').text();
	location.href = "/search?q=" + n.replace(/\s+/g, '+');
});
$(window).click(function() {
	//$('#suggestions').empty();
});
$(document).on('click', '#suggestions', function (e){
	e.stopPropagation();
});



$(document).on('click', '#copyButton', function(e){
	$('#copy').select();
	document.execCommand( 'copy' );
});

$(document).on('click', '.media-share', function(e){
	e.preventDefault();
	$('#dialogModal .modal-content').load('/media/share/' + $(this).attr('id').substr(12));
	$('#dialogModal').modal('show');
});


//img
var el = document.querySelectorAll('img');
for (var i = 0 ; i < el.length ; i++) {
    el[i].addEventListener('mousedown', function(e){
      e.preventDefault();
       
    }, false);
    el[i].addEventListener('mousemove', function(e){
      e.preventDefault();
       
    }, false);
}

// privacy
$(document).on('click', '.album-privacy', function(e){
    $.ajax({
	      url: '/album/privacy/update/' + $(this).attr('id').substring(14) + '/' + $(this).attr('data-privacy'),
	      type: 'get',
	      success: function(data) {
	    	  $('#album-privacy-' + data.album_guid).attr('data-privacy', data.privacy);
	    	  if(data.privacy == 0){
	    		  $('#album-privacy-' + data.album_guid).empty().html(data.html_2);
	    	  } else {
	    		  $('#album-privacy-' + data.album_guid).empty().html(data.html_2);
	    	  }
	    	  $('.username').html(data.html);
	    	  show_message(data.msg);
	      }
	});
});

//user flag
$(document).on('click', '.user-report', function(e){
	e.preventDefault();
	var id = $(this).data('id');
    $.ajax({
    	url: '/user/check/',
    	type: 'post',
  		data:$(this).serialize(),
  		success: function(data) {
  			if(data.status == "success"){
				$('#mainModal .modal-content').load('/modal/user-report/' + id);
				$('#mainModal').modal('show');
  			} else {
  				show_message(data.error);
  			}
  		}
	});
});

//album flag
$(document).on('click', '.album-flag', function(e){
	e.preventDefault();
	var id = $(this).attr('id');
    $.ajax({
    	url: '/user/check/',
    	type: 'post',
  		data:$(this).serialize(),
  		success: function(data) {
  			if(data.status == "success"){
  				$('#dialogModal .modal-content').load('/album/flag/' + id.substring(11));
  				$('#dialogModal').modal('show');
  			} else {
  				show_message(data.error);
  			}
  		}
	});
});

$(document).on('submit', '#album-flag-form', function(e){
    e.preventDefault();
    if (!$("input[name='flag']:checked").val()) {
        show_message("Please choose a reason");
    } else {
        $.ajax({
	      url: '/album/flag/' + $("input[name='album_id']").val(),
	      type: 'post',
              data:$(this).serialize(),
	      success: function(data) {
                  $('#dialogModal').modal('hide');
	    	  show_message("Album flagged");
	      }
	});
    }
});



//user message
function show_message(text){
	$("#user_message").empty().text(text).show().delay(2000).fadeOut();
}

//Album title editable
function update_title(){
    $.ajax({
	      url: '/album/update_title',
	      type: 'post',
	      data: {guid : $('#album_guid').val(), title : $('#album_title').val()},
	      success: function(data) {
	    	  if(data.status == 'success'){
	    		  show_message(data.msg);
	    	  }
	    	  if (typeof data.title !== 'undefined') {
		    	  $('#album_title').val(data.title);
		    	  $('#title_editable').text(data.title);
	    	  }
	      }
    });
}

$(document).on('blur', '#title_editable', function(e){
	$('#album_title').val($(this).text());
	update_title();
});

$(document).on('blur', '#album_title', function(e){
	update_title();
});

//Media title editable
$(document).on('blur', '.media-title', function(e){
	var media_id = $(this).attr('id').substring(12);
    $.ajax({
	      url: '/media/title/update/' + media_id,
	      type: 'get',
	      data: {title : $(this).text()},
	      success: function(data) {
	    	  if(data.status == 'success'){
	    		  show_message(data.msg);
	    	  }
	      }
	});
});

//focus end contenteditable
function placeCaretAtEnd(el) {
    el.focus();
    if (typeof window.getSelection != "undefined"
            && typeof document.createRange != "undefined") {
        var range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    } else if (typeof document.body.createTextRange != "undefined") {
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.collapse(false);
        textRange.select();
    }
}

//content editable
$('.album-title').on('keypress input paste', function(e) {
	if(e.which == 13) {
		e.preventDefault();
		$(this).blur();
	}
	if($(this).text().length >= 100) { 
		$(this).text($(this).text().substring(0, 100));
		placeCaretAtEnd($(this).get(0));
	}
});

//upload
$(document).on('click', '#add_more_box', function(e){
	$( "#add_more_file" ).click();
});

$(document).on('change', '#add_more_file',function(e){
	$('#add_more_form').submit();
});

function upload(file){
    var type = 'bad';
    switch(file.type)
    {
        case 'image/png': 
        case 'image/jpeg':
        	type = 'image';
        	break;
        case 'video/mp4':
        case 'video/avi':
        case 'video/quicktime':
        case 'video/mpeg':
        case 'video/x-flv':
        case 'video/webm':
        case 'video/3gpp':
        case 'video/x-ms-wmv':
        case 'image/gif':
        case 'video/x-matroska':
        	type = 'video';
        	break;
    }
    
    if(type != 'bad'){
    	if($('#album_title').val() == ""){
    		var album_title = file.name
    		var album_title = album_title.substr(0, album_title.lastIndexOf('.')) || album_title;
    		$('#album_title').val(album_title);
    		update_title();
    	}
    	
	    var n = parseInt($( "#n" ).val()) + 1;
	    $( "#n" ).val(n);

	    $( "#medias" ).append('<div id="upload-' + n + '" class="upload"><img class="uploading-img" src="/img/uploading.png" ></div>');
		$( "#medias" ).append('<div id="progress-box-' + n + '" ><div class="progress-pourcent" id="progress-pourcent-' + n + '" ></div><div id="progress-bar-' + n + '" class="progress-bar" ></div></div>');
	    $("html, body").animate({ scrollTop: 10000000 }, 100);
    
	    var fd = new FormData();
	    fd.append("media", file);
	    fd.append("album_guid", $('#album_guid').val());
	    fd.append("n", n);

	    $.ajax({
	      url: '/upload',
	      xhr: function() {
	           var xhr = new XMLHttpRequest();
	           var total = file.size;
	                    
	           xhr.upload.addEventListener("progress", function(evt) {
	                  var loaded = Math.round((evt.loaded / total).toFixed(2)*100);
	                  $('#progress-bar-' + n).css('width', loaded + '%');
	                  if(loaded >= 100){
	                	  loaded = 100;
	                	  $('#progress-pourcent-' + n).text('Processing' );
	                  } else{
	                	  $('#progress-pourcent-' + n).text(loaded + '%' );
	                  }
	           }, false);

	           return xhr;
	      },
	      type: 'post',
	      processData: false,
	      contentType: false,
	      data: fd,
	      timeout: 0,
	      success: function(data) {
			  if(data.status == 'success'){
		  	      $.ajax({
		  	    	  url: '/media/load/' + data.media_id,
		  	    	  success: function(data) {	
		  	    		  $( "#upload-" + n ).css('min-height', $( "#upload-" + n ).height() + 'px');
		  	    		  $( "#upload-" + n ).html(data.html)
		  	    		  $('#progress-box-' + n).hide();
		  	    		  $( "#upload-" + n ).css('min-height', 'auto');
		  	    		  if(data.media_type == 2 && data.media_extension == 'mp4' && data.media_playable == 1){
		  	    			  videojs("player-" + data.media_id, {}, function(){});
		  	    		  }
		  	    	  }
		  	      });
				} else {
					show_message(data.msg);
					$( "#upload-" + n ).remove();
					$('#progress-box-' + n).remove();
				}
	      },
			error: function(xhr, status, error) {
				show_message("Upload error");
			}
	    });
    } else {
    	show_message("Format not supported");
    }
}

$('#add_more_form').submit(function(e) {
    e.preventDefault();
    var total_file = $('#add_more_file')[0].files.length + parseInt($( "#n" ).val());
    if(total_file <= 100){
    	var too_big = false;
    	$.each( $('#add_more_file')[0].files, function( key, file ) {
        	if (file.size > 2147483648){
//        		if (file.size > 1073741824){
        		too_big = true;
        	}
        });
    	if(too_big == false){
    	    $.each( $('#add_more_file')[0].files, function( key, file ) {
    	    	upload(file);
    	    });
    	} else{
    		show_message("2Go per files maximum");
    	}
	} else {
		show_message("100 files per album maximum");
	}
});

//album thumbnails rotation
var timer;
$(document).on('mouseover', '#albums .album', function(e){
	clearInterval(timer);
	var item = $(this);
	item.find('.album-thumbnail').each(function(){
		if($(this)[0].hasAttribute('data-rotate-src'))
		{
			$(this).attr('src', $(this).attr('data-rotate-src'));
			$(this).removeAttr('data-rotate-src'); 
		}
	});
	
	timer = setInterval(function(){
		active = 0;
		item.find('.album-thumbnail').each(function(){
			if(active == 1){
				$(this).addClass('active');
				active = 0;
				return false;
			}
			if($(this).hasClass('active')){
				$(this).removeClass('active');
				active = 1;
			}
		});
		if(active == 1){
			item.find('.album-thumbnail:eq( 0 )').addClass('active');
		}
	}, 500, item);
});

$(document).on('mouseout', '#albums .album', function(e){
	clearInterval(timer);
});

/**$(document).on('click', '.album-thumbnail', function(e){
	$(this).parent().parent().find('a')[0].click();
});
*/

//album delete
$(document).on('click', '.delete-album', function(e){
    $.ajax({
	      url: '/album/delete/' + $('#album_id').val(),
	      type: 'get',
	      success: function(data) {
//	    	  $('#album-' + data.album_id).remove();
//	    	  $('#delete_confirm').modal('hide');
	    	  if(data.status == 'success'){
	    		  window.location.href = "/" + data.user_name;
	    	  } else {
	    		  $('#delete_confirm').modal('hide');
	    	  }
	      }
    });
});

$(document).on('click', '.album-delete', function(e){
	e.preventDefault();
	$('.modal-content').empty();
	$('.modal-content').load($(this).attr('data-delete'));
	$('#delete_confirm').modal('show');
});

//media delete
$(document).on('click', '.media-delete', function(e){
	e.preventDefault();
	$('#dialogModal .modal-content').load('/media/delete-confim/' + $(this).attr('id').substr(13));
	$('#dialogModal').modal('show');
});
$(document).on('click', '.media-delete-confirm', function(e){
    $.ajax({
	      url: '/media/delete/' + $('#media_id').val(),
	      type: 'get',
	      success: function(data) {
	    	  if(data.status == "success"){
	    		  $('#' + data.media_guid).remove();
	    		  $('#dialogModal').modal('hide');
	    	  } else {
	    		  show_message(data.msg);
	    	  }
	      }
    });
});

//media rotate
$(document).on('click', '.media-rotate', function(e){
	e.preventDefault();
	var media_id = $(this).attr('id').substr(13);
    $.ajax({
	      url: '/media/rotate/' + media_id,
	      type: 'get',
	      success: function(data) {
	    	  d = new Date();
	    	  var src = $('#' + data.media_guid + ' .img-front').attr('src');
	    	  $('#' + data.media_guid + ' .img-front').attr('src', src.substr(0, src.indexOf('?')) + '?v=' + d.getTime());
	    	  $('#' + data.media_guid + ' .img-back').attr('src', src.substr(0, src.indexOf('?')) + '?v=' + d.getTime());
	      }
  });
});


// drop area
$('.droparea').on('dragover', function(e) {
    e.preventDefault();
    e.stopPropagation();
});
$('.droparea').on('dragenter', function(e) {
    e.preventDefault();
    e.stopPropagation();
});
$('.droparea').on('drop', function(e){
    if(e.originalEvent.dataTransfer){
        if(e.originalEvent.dataTransfer.files.length) {
            e.preventDefault();
            e.stopPropagation();
            var total_file = e.originalEvent.dataTransfer.files.length + parseInt($( "#n" ).val());
            if(total_file <= 100){
            	var too_big = false;
                $.each( e.originalEvent.dataTransfer.files, function( key, file ) {
                	if (file.size > 2147483648){
//                		if (file.size > 1073741824){
                		too_big = true;
                	}
                });
            	if(too_big == false){
	                $.each( e.originalEvent.dataTransfer.files, function( key, file ) {
	                	upload(file);
	                });
            	} else{
            		show_message("2Go per files maximum");
            	}
        	} else {
        		show_message("100 files per album maximum");
        	}
        }   
    }
});

//clic select
$(document).on('click', '.clic-select', function(){
	$(this).focus(); $(this).select();
});

/*********************************** comments ***********************************/
$(document).on('click', '.leave-comment', function(e){
	e.preventDefault();
	var id = $(this).data('id');

    $.ajax({
        url: '/comment/check',
        type: 'post',
        dataType : 'json',
        success: function(data) {

			if(data.check){
				$('.comments-' + id + ' .leave-comment').hide();
				$('.comments-' + id + ' .form-comment').show();
				$('.comments-' + id + ' input[name="content"]').val('');
				$('.comments-' + id + ' input[name="content"]').focus();
			} else {
				if(data.modal == 'account'){
					$('#needAccount').modal('show');
				} else {
					$('#dialogModal .modal-content').load('/comment/first');
  					$('#dialogModal').modal('show');
  					
					$('.comments-' + id + ' .leave-comment').hide();
					$('.comments-' + id + ' .form-comment').show();
					$('.comments-' + id + ' input[name="content"]').val('');
				}
			}
            
        },
	     	error:function(data){
//          	console.log(data.responseJSON.message);
        }
	});
});

$(document).on('click', '.add-comment', function(e){
	e.preventDefault();
	var id = $(this).data('id');
	
	if($('.comments-' + id + ' input[name="content"]').val() == '')
	{
		$('.comments-' + id + ' input[name="content"]').focus();
		return false;
	}
	
    $.ajax({
        url: '/comment/add',
        type: 'post',
        dataType : 'json',
        data:$('.comments-' + id + ' form').serialize(),
        success: function(data) {

        	if(data.status == 'added')
        	{
            	$('.comments-' + id + ' .list-comment').append(data.html);
				$('.comments-' + id + ' .form-comment').hide();
				$('.comments-' + id + ' .leave-comment').show();
        	}

        	show_message(data.message);
        },
	     	error:function(data){
//          	console.log(data.responseJSON.message);
        }
	});
    
});

$(document).on('keypress', '.add-comment-input', function(e){
	var charCode = e.which || e.keyCode;
	if(charCode == 13) {
		e.preventDefault();
		$(this).parent().find('.add-comment')[0].click();
	}
});

$(document).on('click', '.edit-comment', function(e){
	e.preventDefault();
	var comment_id = $(this).data('id');

    $.ajax({
        url: '/comment/ajax-request/edit-comment',
        type: 'post',
        data:{'comment_id':comment_id},
        dataType : 'json',
        success: function(data) {
			if(data.status == 'success')
			{
				$('#comment_' + data.comment_id + ' .comment-content').hide();
				$('#comment_' + data.comment_id).append(data.html);
				var input = $('#edit-comment-' + data.guid + ' .edit-comment-input')[0];
				var end = input.value.length;
				input.setSelectionRange(end, end);
				input.focus();
			}
		}
	});
});

$(document).on('keypress', '.edit-comment-input', function(e){
	var charCode = e.which || e.keyCode;
	if(charCode == 13) {
		e.preventDefault();
		$(this).parent().find('.edit-comment-action')[0].click();
	}
});

$(document).on('click', '.edit-comment-action', function(e){
	e.preventDefault();
	var id = $(this).data('id');
    $.ajax({
        url: '/comment/ajax-request/edit-comment-action',
        type: 'post',
        data: $('#edit-comment-' + id + ' form').serialize(),
        dataType : 'json',
        success: function(data) {
			if(data.status == 'success')
			{
				$('#edit-comment-' + data.guid).remove();
				$('#comment_' + data.comment_id + ' .comment-text').html(data.content);
				$('#comment_' + data.comment_id + ' .comment-content').show();
			} else {
				show_message(data.message);
			}
		}
	});
	
});


//$(document).on('click', '.flag-comment', function(e){
//	e.preventDefault();
//	$('#dialogModal .modal-content').load('/comment/flag/' + $(this).data('id'));
//	$('#dialogModal').modal('show');
//});

//comment flag
$(document).on('click', '.flag-comment', function(e){
	e.preventDefault();
	var id = $(this).data('id');
    $.ajax({
    	url: '/user/check/',
    	type: 'post',
  		data:$(this).serialize(),
  		success: function(data) {
  			if(data.status == "success"){
  				$('#dialogModal .modal-content').load('/comment/flag/' + id);
  				$('#dialogModal').modal('show');
  			} else {
  				show_message(data.error);
  			}
  		}
	});
});

$(document).on('submit', '#comment-flag-form', function(e){
    e.preventDefault();
    if (!$("input[name='reason']:checked").val()) {
        show_message("Please choose a reason");
    } else {
        $.ajax({
	      url: '/comment/flag/' + $("input[name='id']").val(),
	      type: 'post',
              data:$(this).serialize(),
	      success: function(data) {
              $('#dialogModal').modal('hide');
	    	  show_message(data.message);
	      }
	});
    }
});

$(document).on('click', '.delete-comment', function(e){
    $.ajax({
	      url: '/comment/delete/' + $(this).data('id'),
          type: 'post',
          dataType : 'json',
	      success: function(data) {
    	      $('#comment_' + data.comment_id).remove();
			  show_message(data.message);
	      }
    });
});

/*********************************** end comments ***********************************/

/*********************************** warning ***********************************/

$(document).on('click', '.close-warning', function(e){
    $.ajax({
	      url: '/user/close-warning',
          type: 'post',
          dataType : 'json',
	      success: function(data) {
    	      $('#warning').remove();
	      }
    });
});

$(document).on('click', '.show-modal', function(){
	
	url = '/modal/' + $(this).data('modal');
	if($(this).data('var1')){
		url += '/' + $(this).data('var1');
	}
	
	$('#mainModal .modal-content').load(url);
	$('#mainModal').modal('show');
});







