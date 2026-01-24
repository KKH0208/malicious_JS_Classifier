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
                followersIframeOpen("https://www.blogger.com/followers.g?blogID\x3d3639243087081292414\x26colors\x3dCgt0cmFuc3BhcmVudBILdHJhbnNwYXJlbnQaByM1OTU0NDEiByM1NTg4YWEqByM1OTU0NDEyByM1NTg4YWE6ByM1OTU0NDFCByM1NTg4YWFKByM1OTU0NDFSByM1NTg4YWFaC3RyYW5zcGFyZW50\x26pageSize\x3d21\x26origin\x3dhttp://dramamama2b.blogspot.com/");
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
    followersIframeOpen("https://www.blogger.com/followers.g?blogID\x3d3639243087081292414\x26colors\x3dCgt0cmFuc3BhcmVudBILdHJhbnNwYXJlbnQaByM1OTU0NDEiByM1NTg4YWEqByM1OTU0NDEyByM1NTg4YWE6ByM1OTU0NDFCByM1NTg4YWFKByM1OTU0NDFSByM1NTg4YWFaC3RyYW5zcGFyZW50\x26pageSize\x3d21\x26origin\x3dhttp://dramamama2b.blogspot.com/");