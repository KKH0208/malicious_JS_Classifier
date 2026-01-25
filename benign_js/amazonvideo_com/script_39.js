/* 元のURL: https://amazonvideo.com */

var args = {
  state: {"widgets":{"Footer":{"footerConditionsOfUseLink":"[Terms and Privacy Notice](\u002Fhelp?nodeId=202064890)","footerCookieNoticeLink":"[Cookie Notice](\u002Fhelp\u002Fref=atv_hp_nd_cnt?nodeId=GZVH7DTWNBGPRPDS)","footerPrivacyPolicyLink":"","footerFeedbackLink":"[Send us feedback](\u002Fcontactus\u002Fref=dvm_MLP_FE_contact)","footerHelpLink":"[Help](\u002Fhelp\u002Fref=dvm_MLP_FE_help)","copyrightText":"&copy; 1996-2025, Amazon.com, Inc. or its affiliates","logoImage":"https:\u002F\u002Fm.media-amazon.com\u002Fimages\u002FG\u002F09\u002Fdigital\u002Fvideo\u002Facquisition\u002Flogo\u002Fpv_logo_white._CB548648909_.png"}}},
  widgetName: 'Footer'
}
if (window.hasOwnProperty('DVPAWebWidgetsFooter') && window.hasOwnProperty('DVPAWebWidgetsWidgetFramework')) {
  DVPAWebWidgetsWidgetFramework.mount(
    args.widgetName,
    args.state,
    DVPAWebWidgetsFooter.Footer,
    false);
} else {
  window.hasOwnProperty('DigitalVideoWidgetQueue')
    || (window.DigitalVideoWidgetQueue = {});
  window.DigitalVideoWidgetQueue.hasOwnProperty('DVPAWebWidgetsFooter')
    || (window.DigitalVideoWidgetQueue.DVPAWebWidgetsFooter = []);
  window.DigitalVideoWidgetQueue.DVPAWebWidgetsFooter.push(args);
}

