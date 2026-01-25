/* 元のURL: https://goodreads.com */

  //<![CDATA[
    var initializeGrfb = function() {
      $grfb.initialize({
        appId: "2415071772"
      });
    };
    if (typeof $grfb !== "undefined") {
      initializeGrfb();
    } else {
      window.addEventListener("DOMContentLoaded", function() {
        if (typeof $grfb !== "undefined") {
          initializeGrfb();
        }
      });
    }
  //]]>


