/* 元のURL: https://tp-link.com */

          (function(window, document){
            var clock;
            var cycle = 6500;
            var proportion = 40;
            window.player = [];
            var $list = $(".tp-banner-list");
            var $video = $list.find(".tp-banner-video");
            var $pcBanner = $list.find(".tp-banner-item");
            var $pcImg = $list.find(".img");
            var $pcPagination = $(".tp-banner .tp-banner-pagination-item");
            var $mPagination = $(".tp-m-banner .swiper-pagination");
            // change pagination color
            var setColor = function(link){
              if(typeof link == 'string'){
                var c = link.match(/\?color=([0-9a-z]{6})/);
                $pcPagination.parent().add($mPagination).css("color", (c && c.length > 1) ? '#' + c[1] : '#fff');
              }
            };
            var cycleFn = function(flag){
              var index = $pcPagination.filter(".active").index();
              $pcPagination.eq((index + $pcPagination.length + (typeof flag === 'undefined' ? 1 : -1)) % $pcPagination.length).trigger("click");
            };
            $pcPagination.on("click", function(e){
              e.stopPropagation();
              clearTimeout(clock);
              var index = $(this).index();
              setColor($pcImg.eq(index).attr("data-src"));
              var $item = $pcBanner.removeClass("active").eq(index).addClass("active");
              // 设置当前激活项的 aria-selected 和 aria-hidden 属性
              $item.attr({
                "aria-selected": true,
                "aria-hidden": false
              });
              $item.find('a').attr('tabindex', 0)
              // 设置其他项的 aria-selected 和 aria-hidden 属性
              $pcBanner.not($item).attr({
                "aria-selected": false,
                "aria-hidden": true
              }).find('a').attr('tabindex', -1);
              var isVideo = $item.hasClass("tp-banner-video");
              $pcPagination.removeClass("active").eq(index).addClass("active");
              for(var i=0;i<player.length;i++){
                player[i].mute();
                player[i].pauseVideo();
                player[i].seekTo(0);
                player[i].setPlaybackQuality('hd720');
              }
              if(isVideo && player.length){
                var playerIndex = $video.index($item);
                player[playerIndex].playVideo();
              }
              clock = setTimeout(cycleFn, cycle);
            })
            $(".tp-banner-prev").on("click", ".tp-banner-icon", function(){ cycleFn(false) })
            $(".tp-banner-next").on("click", ".tp-banner-icon", function(){ cycleFn() })
            // 添加键盘事件监听器
            $('.tp-banner').on("keydown", function(e) {
              if (e.key === "ArrowLeft") {
                cycleFn(false); // 向左切换
                $('.tp-banner-item.active').find('a').focus();
              } else if (e.key === "ArrowRight") {
                cycleFn(); // 向右切换
                $('.tp-banner-item.active').find('a').focus();
              }
            });
            // Auto play banner
            var autoplay = function(){
              if(!$pcPagination.filter(".hidden").length && typeof clock == 'undefined'){
                $(".tp-banner-prev").removeClass("hidden");
                $(".tp-banner-next").removeClass("hidden");
                $pcPagination.eq(0).trigger("click");
              }
            };
            // Download desktop banner image
            var loadPcImg = function(){
              $pcImg.each(function(){
                (function(self){
                  var src = self.attr("data-src");
                  if(src){
                    var $item = self.parents(".tp-banner-item");
                    var alt = $item.find("h2").text();
                    var img = new Image();
                    img.onload = function(){
                      var per = img.width ? (Math.floor(img.height * 10000 / img.width) / 100) : 0;
                      if(per && per < proportion){
                        proportion = per;
                      }
                      $list.css("padding-bottom", proportion + "%");
                      $video.find(".tp-banner-iframe").css("margin-top", (proportion - 56.25) / 2 + '%');
                      if(!$item.find(".tp-banner-iframe").length){
                        var index = $item.index();
                        $item.removeClass("hidden").find(".tp-banner-item-desc").removeClass("hidden");
                        self.replaceWith('<img' + (alt ? ' alt="' + alt + '"' : '') + ' class="img" src="' + src + '">');
                        $pcPagination.eq(index).removeClass("hidden").parent().removeClass("hidden");
                        autoplay();
                      }
                    };
                    img.src = src;
                  }
                })($(this));
              });
            };
            var initPc = function(){
              setColor($pcBanner.eq(0).find(".img").attr("data-src"));
              var $item = $pcBanner.eq(0);
              // 设置当前激活项的 aria-selected 和 aria-hidden 属性
              $item.attr({
                "aria-selected": true,
                "aria-hidden": false
              });
              $item.find('a').attr('tabindex', 0);
              // 设置其他项的 aria-selected 和 aria-hidden 属性
              $pcBanner.not($item).attr({
                "aria-selected": false,
                "aria-hidden": true
              }).find('a').attr('tabindex', -1);
              // setDuration();
              loadPcImg();
              // youtube iframe
              if($video.length){
                var tagFlag = true;
                var handleError = function(){
                  if(tagFlag){
                    tagFlag = false;
                    $video.each(function(){
                      $(this).find(".tp-banner-item-desc").removeClass("hidden");
                      $(this).removeClass("tp-banner-video").removeClass("hidden").find(".tp-banner-iframe").remove();
                      var $img = $(this).find(".img");
                      var alt = $(this).find("h2").text();
                      $img.length && $img.attr("data-src") && $img.replaceWith('<img' + (alt ? ' alt="' + alt + '"' : '') + ' class="img" src="' + $img.attr("data-src") + '">');
                      var index = $(this).index();
                      $pcBanner.eq(index).removeClass("hidden");
                      $pcPagination.eq(index).removeClass("hidden").parent().removeClass("hidden");
                    })
                    autoplay();
                  }
                };
                var tag = document.createElement('script');
                tag.src = "https://www.youtube.com/iframe_api";
                tag.onerror = handleError;
                setTimeout(handleError, 8000);
                var firstScriptTag = document.getElementsByTagName('script')[0];
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                var finish = function(i){
                  player[i].pauseVideo();
                  player[i].seekTo(0);
                  cycleFn();
                };
                var playingYoutube;
                window.onYouTubeIframeAPIReady = function(){
                  if(tagFlag){
                    tagFlag = false;
                    for(var i=0;i<$video.length;i++){
                      (function(i){
                        player.push(new YT.Player($video.eq(i).find("iframe").attr("id"), {
                          events: {
                            'onReady': function(){
                              var index = $video.eq(i).index();
                              $pcBanner.eq(index).removeClass("hidden");
                              $pcPagination.eq(index).removeClass("hidden");
                              if(index != 0){
                                $video.eq(i).find(".tp-banner-iframe").addClass("active");
                                $video.eq(i).find(".img").remove();
                              }
                              autoplay();
                            },
                            'onStateChange': function(e){
                              clearTimeout(playingYoutube);
                              if(e.data == YT.PlayerState.PLAYING){
                                $video.eq(i).find(".tp-banner-iframe").addClass("active");
                                $video.eq(i).find(".img").remove();
                                $video.eq(i).find(".tp-banner-item-desc").removeClass("hidden");
                                var arr = player[i].getAvailableQualityLevels();
                                arr.length && player[i].setPlaybackQuality(arr.indexOf('hd720') != -1 ? 'hd720' : arr[0]);
                                clearTimeout(clock);
                                playingYoutube = setTimeout(function(){ finish(i); }, (player[i].getDuration() - player[i].getCurrentTime()) * 1000 - 500);
                                // $video.eq(i).hasClass("active") && clearTimeout(clock);
                              }else if(e.data == YT.PlayerState.ENDED){
                                finish(i);
                              }
                            }
                          }
                        }))
                      })(i);
                    }
                  }
                };
              }
            };
            // If a mobile phone image is not uploaded, the phone uses a desktop image
            var $mobileImg = $(".tp-m-banner .swiper-lazy");
            var loadMobileImg = function(){
              $mobileImg.each(function(){
                if($(this).attr("data-src") == '' || $(this).attr("data-src") == $(this).attr("data-pc")){
                  $mobileImg.each(function(){
                    $(this).attr("data-src", $(this).attr("data-pc"));
                  });
                  return false;
                }
              });
            };
            // init
            var initMobile = function(){
              loadMobileImg();
              var mh = 0;
              var firstImgSrc = $mobileImg.eq(0).attr("data-src");
              var swiper = new Swiper('.tp-m-banner.swiper-container', {
                effect: 'slide',
                loop: true,
                allowTouchMove: true,
                autoplay: {
                  delay: cycle,
                  disableOnInteraction: false,
                },
                lazy: {
                  loadPrevNext: true,
                  loadOnTransitionStart: true,
                },
                pagination: {
                  el: '.swiper-pagination',
                  clickable: true,
                },
                on:{
                  lazyImageLoad: function(slideEl, imageEl){
                    var p = imageEl.height * 100 / imageEl.width;
                    if(p != 0 && p < mh){
                      mh = p;
                      $(".tp-m-banner .swiper-lazy").css("height", mp + 'vw');
                    }
                    $(slideEl).find(".tp-banner-item-desc").removeClass("hidden");
                  },
                  slideChangeTransitionStart: function(){
                    var realImg = $mobileImg.eq(this.realIndex);
                    setColor(realImg.attr("data-src") ? realImg.attr("data-src") : realImg.attr("src"));
                  }
                }
              });
              var img = new Image();
              img.onload = function(){
                $(swiper.slides).find("img").height((this.height * 100 / this.width).toFixed(2) + 'vw');
              };
              img.src = firstImgSrc;
            };
            // Responding to screen changes
            var isPC, isMobile;
            var resize = function(){
              if(window.innerWidth > 736){
                if(!isPC){
                  isPC = true;
                  initPc();
                }
              }else if(!isMobile){
                isMobile = true;
                if(typeof Swiper != 'function'){
                  var link = document.createElement('link');
                  link.rel = 'stylesheet';
                  link.href = 'https://static.tp-link.com/common/js/swiper/swiper.min.css';
                  document.getElementsByTagName('head')[0].appendChild(link);
                  var script = document.createElement('script');
                  script.onload = function (){
                    initMobile();
                  };
                  script.src = 'https://static.tp-link.com/common/js/swiper/swiper.min.js';
                  document.getElementsByTagName('head')[0].appendChild(script);
                }else{
                  initMobile();
                }
              }
            };
            resize();
            $(window).on("resize", resize);
            $(".tp-banner img").each(function(){
              if($(this).attr("src") == 'https://static.tp-link.com/banner/Large_Banner__Less_Than_500kb_1586325468559i.jpg' || $(this).attr("data-src") == 'https://static.tp-link.com/banner/Large_Banner__Less_Than_500kb_1586325468559i.jpg' || $(this).attr("src") == 'https://static.tp-link.com/banner/work-from-home-big_1586952121957i.jpg' || $(this).attr("data-src") == 'https://static.tp-link.com/banner/work-from-home-big_1586952121957i.jpg'){
                $(this).parents(".tp-banner-item").find(".tp-banner-item-text").css({position:"relative",top:"-9.375em"})
              }
            })
          })(window, document);
        

