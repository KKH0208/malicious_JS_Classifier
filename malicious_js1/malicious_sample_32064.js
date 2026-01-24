var g_sidebar = {"ItemAnnouncement":"\u7ad9\u9577\u8a0a\u606f","ItemAvatar":"\u95dc\u65bc\u6211","ItemCategory":"\u6587\u7ae0\u5206\u985e","ItemCalendar":"\u65e5\u66c6","ItemSearch":"\u641c\u5c0b\u6587\u7ae0","ItemFriend":"\u6211\u7684\u597d\u53cb","ItemLoveBlog":null,"ItemMMSSubscription":"\u5feb\u905e\u90f5RSS\u60c5\u5831","ItemBackgroundMusic":"\u65e5\u8a8c\u80cc\u666f\u97f3\u6a02","ItemArticleList":"\u6700\u65b0\u6587\u7ae0","ItemMessageList":"\u6700\u65b0\u56de\u61c9","ItemCounter":"\u53c3\u89c0\u4eba\u6b21\u7d71\u8a08","ItemBlogList":"\u5df2\u5efa\u7acb\u7684\u65e5\u8a8c","ItemBlogResource":"\u65e5\u8a8c\u4f7f\u7528\u8cc7\u6e90","ItemActiveAngel":"\u6d3b\u52d5\u5c0f\u5929\u4f7f"};
//判斷全網黑名單
var block_flag = false;
(new XUI.Widgets.AdArray(null, function(block){
    console.log(block);
	block_flag = block;
  })).render();
var xuiteBlogPlugin_bookmark='Y';var xuiteBlogPlugin_relate_article='Y';var xuiteBlogPlugin_article_snapshot='Y';var xuiteBlogPlugin_auto_resize='Y';var xuiteBlogPlugin_facebook_comment_color='Y';var xuiteBlogPlugin_auto_yo='Y';var xuiteBlogPlugin_history_today='Y';var xuiteBlogPlugin_random_article='Y';var xuiteBlogPlugin_facebook_like_down='Y';var xuiteBlogPlugin_facebook_comment='Y';