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
                followersIframeOpen("https://www.blogger.com/followers.g?blogID\x3d3903165883916658045\x26colors\x3dCgt0cmFuc3BhcmVudBILdHJhbnNwYXJlbnQaByM2NTY1NjUiByNlYjMzNDkqByNmOGY4ZjgyByMwMDAwMDA6ByM2NTY1NjVCByNlYjMzNDlKByMwMDAwMDBSByNGRkZGRkZaC3RyYW5zcGFyZW50\x26pageSize\x3d21\x26origin\x3dhttps://www.kopinimetv.my.id/");
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
    followersIframeOpen("https://www.blogger.com/followers.g?blogID\x3d3903165883916658045\x26colors\x3dCgt0cmFuc3BhcmVudBILdHJhbnNwYXJlbnQaByM2NTY1NjUiByNlYjMzNDkqByNmOGY4ZjgyByMwMDAwMDA6ByM2NTY1NjVCByNlYjMzNDlKByMwMDAwMDBSByNGRkZGRkZaC3RyYW5zcGFyZW50\x26pageSize\x3d21\x26origin\x3dhttps://www.kopinimetv.my.id/");