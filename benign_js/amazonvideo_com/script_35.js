/* 元のURL: https://amazonvideo.com */

var args = {
  state: {"widgets":{"CustomMagnetWrapper":{"content":[{"type":"DoubleColumn","payload":{"backgroundImage":"https:\u002F\u002Fm.media-amazon.com\u002Fimages\u002FG\u002F01\u002Fdigital\u002Fvideo\u002FMagellan_MLP\u002FPrime_Video_Couch_Couple_CMP_Redirect.jpg","body":"Join Prime to watch the latest movies, TV shows, and award-winning Amazon Originals.","buttonText":"Go to Amazon.co.jp to watch","buttonUrl":"https:\u002F\u002Fwww.amazon.co.jp\u002FPrime-Video\u002Fb?node=3535604051&ref=dvm_MLP_ROWFE_JP_1&rs=000-0000000-0000000:C","footer":"Live outside of Japan? Sign in to continue.","title":"Watch on Amazon.co.jp","pvThemeOverride":"true"}}],"backgroundImage":"https:\u002F\u002Fm.media-amazon.com\u002Fimages\u002FG\u002F01\u002Fdigital\u002Fvideo\u002FMagellan_MLP\u002FPrime_Video_Couch_Couple_CMP_Redirect.jpg","backgroundColor":"black","minHeight":"60vh","useFable":"true"}}},
  widgetName: 'CustomMagnetWrapper'
}
if (window.hasOwnProperty('DVPAWebWidgetsCustomComponents') && window.hasOwnProperty('DVPAWebWidgetsWidgetFramework')) {
  DVPAWebWidgetsWidgetFramework.mount(
    args.widgetName,
    args.state,
    DVPAWebWidgetsCustomComponents.CustomMagnetWrapper,
    false);
} else {
  window.hasOwnProperty('DigitalVideoWidgetQueue')
    || (window.DigitalVideoWidgetQueue = {});
  window.DigitalVideoWidgetQueue.hasOwnProperty('DVPAWebWidgetsCustomComponents')
    || (window.DigitalVideoWidgetQueue.DVPAWebWidgetsCustomComponents = []);
  window.DigitalVideoWidgetQueue.DVPAWebWidgetsCustomComponents.push(args);
}

