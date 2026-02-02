/* 元のURL: https://tp-link.com */

                $(function(){
                  var $img = $("#tp-home-new .tp-home-new-link img");
                  var resize = function(){
                    if($img.length && $(window).width() > 736){
                      $img.height("auto");
                      var h = $img.eq(0).height() || 300;
                      $img.each(function(){
                        if($(this).height() && (h == 0 || $(this).height() < h)){
                          h = $(this).height();
                        }
                      }).height(h);
                    }else{
                      $img.height("auto");
                    }
                  };
                  $img.each(function(){
                    var img = new Image();
                    img.onload = function(){
                      resize();
                    };
                    img.src = $(this).attr("src");
                  });
                  resize();
                  $(window).on("resize", resize);
                })
              

