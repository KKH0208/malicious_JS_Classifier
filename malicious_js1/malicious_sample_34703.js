var boomAdsParams = new Object();
  var boomsAdsScript = document.createElement('script');
  boomAdsParams.AdClient = "3656d726e6864f7a9a35765f9227732a";
  boomAdsParams.AdCampaignType = "2";
  boomsAdsScript.type = 'text/javascript';
  boomsAdsScript.src = '//widget.boomads.com/WidgetJS/CustomAds?' + decodeURIComponent('AdClient=' + boomAdsParams.AdClient + '%26AdCampaignType=' + boomAdsParams.AdCampaignType + '%26R=' + Math.random() + '') + '';
  var boomsAdsDocumentHead = document.getElementsByTagName('head')[0];
  if (boomsAdsDocumentHead)
     boomsAdsDocumentHead.appendChild(boomsAdsScript);