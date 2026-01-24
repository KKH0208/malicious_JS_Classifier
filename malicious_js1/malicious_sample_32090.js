$(document).ready(function(){   
  $.ajax({
       type: "GET",
       url: "/_theme/MessageListExp.php?bid=4275338&msg_list_nums=10&loginID=ukp9izm3&url=blog&ga="+(new Date()).getTime(),
       async: false,
       dataType: 'json',
       success: getMessageList
  });
}); 

function getMessageList(json){
  var messageSideContent = "";
  if(json.length > 0){
    for(var i=0;i< json.length;i++){
      messageSideContent = messageSideContent + '<li class="new-comment-item"><a href="'+json[i].link+'" class="new-comment-avatar-c"><img width="30" height="30" class="new-comment-avatar" src="'+json[i].avatar+'" title="'+json[i].title+'"></a><a href="'+json[i].link+'" class="new-comment-content" >'+json[i].content+'</a><span class="new-comment-author-c" >by <span class="new-comment-author"><a href="'+json[i].profile_url+'">'+json[i].author_nickname+'</a></span></span><span class="new-comment-date"><span class="new-comment-month" >'+json[i].cm+'</span>/<span class="new-comment-day" >'+json[i].cd+'</span></span></li>';
	}
	$("#new-comment-list").html(messageSideContent);
  }
}