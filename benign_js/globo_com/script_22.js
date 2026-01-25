/* 元のURL: https://globo.com */

    var linkTags = document.querySelectorAll("link[data-src]");
    for (var i = 0; i < linkTags.length; i++) {
      linkTags[i].setAttribute("href", linkTags[i].getAttribute("data-src"));
    }
  

