var footer = new XUI.Widgets.Footer(document.getElementById('footer'), {
            copyright : 'xuite',		// copyright, copyright : 'xuite' or 'hamicloud', 不填預設'xuite'(optional)
        mobileURL : '//m.xuite.net/blog/ukp9izm3/blog/242442198',		// 行動版連結 (自行帶入, 若hideMobile != 1, 預設給"//m.xuite.net/")(optional)

        showAbuse : 1,		// 檢舉公告, 個人前台才要showAbuse: 1 or 不填(optional)

        hideMarketing : 0, 	// 刊登廣告, hideMarketing: 1 or 不填(optional)
        hideDeveloper : 1,	// 開發者專區(API), 個人前台(personal)才要hideDeveloper:1 or 不填(optional)
        hidePolicy : 0,	// 網站分級, hidePolicy:1 or 不填(optional)
        hideMobile :  0 	// 行動版, hideMobile:1 or 不填(optional)  //event帳號底下的活動網站，全都不轉導行動版
    });
		
    footer.render();
	if(document.all) {
		(function() {
			if($('.blogbody').get(0)){
				var oObjs = $('.blogbody').get(0).getElementsByTagName('object'),
					n = oObjs.length;
				for(var i = 0; i < n; ++i)
					oObjs[i].removeAttribute('data');
			}
		})();
	}
    if (!($("#content_all").length > 0))    {
        var pinnedSite = new XUI.Widgets.PinnedSite();
        pinnedSite.render();    
    }

<!-- 相關文章等articlePlugins 不能被移除 -->
$(".articleExt").show();