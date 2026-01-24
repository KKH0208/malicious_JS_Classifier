//<![CDATA[
!function(t){t.fn.viewportOffset=function(){var o=t(this).offset();return{top:o.top+t(window).scrollTop()}},t.fn.readingbar=function(){_=t(this);var o=_.outerHeight(),r=1.65*_.offset().top,n=0;t(document).on("scroll",function(){o=_.outerHeight(),n=(_.viewportOffset().top-r)/o*100,t("#nprogress .bar").css("width",n+"%"),t("#nprogress").css("opacity",n>100?"0":"1")})}}(jQuery);

          jQuery(document).ready(function($) {$('.post-body').readingbar();});

          loadJS('https://cdnjs.cloudflare.com/ajax/libs/fitvids/1.1.0/jquery.fitvids.min.js', function () {
            jQuery(document).ready(function ($) {
              var d = $("#Blog1");
              d.fitVids(), d.find("img").addClass("img-responsive center-block");
            });
            loadJS('https://cdnjs.cloudflare.com/ajax/libs/photobox/1.9.9/photobox/jquery.photobox.min.js', function () {
              $('.post-body').photobox('a[imageanchor]', {
                time: 0
              });
            });
          });

          loadJS('https://npmcdn.com/social-likes-next@1.1.0/dist/social-likes.min.js');

          function loadSdk(){setTimeout(function(){loadJS("https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.6&appId=458084867627529")},2000)}"complete"===document.readyState?loadSdk():window.addEventListener("DOMContentLoaded",loadSdk,!1);
        //]]>