/* 元のURL: https://cornell.edu */

    // from foot.cfm
  function above960breakpoint(){
    //if we hit this, we already paid the penalty.  No going back.
    //Some things aren't shown on mobile. only include them if they're shown.
    lazyLoadVideo("#gloriousToView");
    lazyLoadVideo("video");

    //nav images don't show until 960px
   if (typeof Imager !=="undefined"){
     // for increasing page load speed on mobile
     new Imager('.lazyload-above-960',{availableWidths:{}});
     new Imager('.responsive-img-large',{availableWidths:{
       400:'377x212',
       600:'1280x720'
     }});
     new Imager('.honeycomb-tile',{availableWidths:{
        400:'377x212',
        600:'1280x720'
      }});
   }
  }
 function lazyLoadVideo(selector){

    $(selector).find("source").each(function(i,el){
      var src = $(el).data('src');
      // if the src is not undefined and has not already been set, set it and load the video
      if ("undefined" != typeof src && src != $(el).attr('src') ){
        $(el).attr('src',src);
        $(el).parent().load();
      }
    });
  }
  //taken from underscore.js
  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
    $(function(){
      function handleResize(){
        if ($(window).width()>960){
          above960breakpoint();
        } else {
          //on mobile, load the galapagos bg, otherwise the video is there.
          $('#sesqui-video').css("background-image", "url(/assets/images/video/features/glorious-to-view.jpg); clear: both;");
        }
      }
      resizeEventHandler = debounce(handleResize, 250);
      window.addEventListener('resize',resizeEventHandler);
      handleResize();
      
    });



