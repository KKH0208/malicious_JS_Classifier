window.followersIframe = null;
    function followersIframeOpen(url) {
      gapi.load("gapi.iframes", function() {
        if (gapi.iframes && gapi.iframes.getContext) {
          window.followersIframe = gapi.iframes.getContext().openChild({
            url: url,
            where: document.getElementById("followers-iframe-container"),
            messageHandlersFilter: gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
            messageHandlers: {
              '_ready': function(obj) {
                window.followersIframe.getIframeEl().height = obj.height;
              },
              'reset': function() {
                window.followersIframe.close();
                followersIframeOpen("https://draft.blogger.com/followers.g?blogID\x3d917038797905038311\x26colors\x3dCgt0cmFuc3BhcmVudBILdHJhbnNwYXJlbnQaByM2NjY2NjYiByMyMjg4YmIqByNmZmZmZmYyByMwMDAwMDA6ByM2NjY2NjZCByMyMjg4YmJKByM5OTk5OTlSByMyMjg4YmJaC3RyYW5zcGFyZW50\x26pageSize\x3d21\x26origin\x3dhttp://drleemind.blogspot.com/");
              },
              'open': function(url) {
                window.followersIframe.close();
                followersIframeOpen(url);
              },
              'blogger-ping': function() {
              }
            }
          });
        }
      });
    }
    followersIframeOpen("https://draft.blogger.com/followers.g?blogID\x3d917038797905038311\x26colors\x3dCgt0cmFuc3BhcmVudBILdHJhbnNwYXJlbnQaByM2NjY2NjYiByMyMjg4YmIqByNmZmZmZmYyByMwMDAwMDA6ByM2NjY2NjZCByMyMjg4YmJKByM5OTk5OTlSByMyMjg4YmJaC3RyYW5zcGFyZW50\x26pageSize\x3d21\x26origin\x3dhttp://drleemind.blogspot.com/");