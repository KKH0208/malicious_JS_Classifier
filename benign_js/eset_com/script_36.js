/* 元のURL: https://eset.com */
	
$(function(){	
	
	$("#content-navigation .csc-frame, #content-navigation .frame").each(function(e) { 
		$(this).click( function() { 
			if (typeof(ESETAnalytics)==='object' && typeof(ESETTrack==='object') && typeof(ESETTrack.event)==='function'){
                                ESETAnalytics.mmCat = $('#content-nav-main-level-1 a.link.active').attr('data-uid');
				let id=$(this).attr('id').replace(/^content-/,'');
				let name=ESETAnalytics.mmCat + '/' + id;
				ESETTrack.event("newmenu-"+name);
			}
		}); 
	});
});


