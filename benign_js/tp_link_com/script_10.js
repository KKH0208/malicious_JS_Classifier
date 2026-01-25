/* 元のURL: https://tp-link.com */

  (function () {
    if(typeof $ !== 'function') return;
    var setClass = function () {
      var $body = $("body");
      var width = $(window).width();
      if (width <= 736 && !$body.hasClass("mobile-web")) {
        $body.addClass("mobile-web");
      } else if (width > 736 && $body.hasClass("mobile-web")) {
        $body.removeClass("mobile-web");
      }
    };
    setClass();
    $(window).on("resize", setClass);
  })();
  var privacyAgree = '<a href="https://privacy.tp-link.com/web/official/privacy-policy?region=JP" target="_blank">プライバシーポリシー</a>を確認のうえ同意します。';
  var cookieAgree = '本サイトではCookie（クッキー）を使用しています。引き続き本サイトを閲覧した場合、お客様がCookieの使用に同意したものとみなされます。<a class="accept">今後表示しない</a> <a href="https://privacy.tp-link.com/web/official/privacy-policy?region=JP">詳細</a>.}';
  var receiveNewsletter = 'TP-Linkのニュースや製品アップグレード・プロモーション等、最新情報を入手する。}';
  var privacyAgreeForNewsletter = 'フォームに記入すると、あなたが弊社の <a href ="https://privacy.tp-link.com/web/official/privacy-policy?region=JP" target="_blank">プライバシーポリシー</a>を理解・同意したこととみなされます。}';


