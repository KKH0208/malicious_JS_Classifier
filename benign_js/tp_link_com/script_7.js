/* 元のURL: https://tp-link.com */

                (function(){
                  var $list = $("#tp-home-list");
                  var $items = $list.find(".tp-home-list-menu-item");
                  var $tabs = $list.find(".tp-home-list-menu-item button");
                  var $tabpanels = $list.find(".tp-home-list-container");
                  var switchTab = function(tabId) {
                        // 更新当前活动的tab
                        $tabs.removeClass('active').attr('aria-selected', 'false').attr('tabindex', '-1');
                        $('#tab-' + tabId).addClass('active').attr('aria-selected', 'true').attr('tabindex', '0').focus();
                        $items.removeClass('active');
                        $('#tab-' + tabId).closest('.tp-home-list-menu-item').addClass('active');
                        $tabpanels.removeClass('active');
                        $('#tabpanel-' + tabId).addClass('active');
                    };
                  var handleKeyDown = function(event) {
                        var keyCode = event.keyCode || event.which;
                        var $currentTab = $tabs.filter('.active');
                        var currentIndex = $tabs.index($currentTab);
                        var nextIndex;
                        if (keyCode === 37) { // LEFT arrow
                            nextIndex = (currentIndex > 0) ? currentIndex - 1 : $tabs.length - 1;
                        } else if (keyCode === 39) { // RIGHT arrow
                            nextIndex = (currentIndex < $tabs.length - 1) ? currentIndex + 1 : 0;
                        } else {
                            return;
                        }

                        event.preventDefault();
                        switchTab($tabs.eq(nextIndex).attr('aria-controls').replace('tabpanel-', ''));
                    };

                  $tabs.on('keydown', handleKeyDown);


                  // 应用到 #tabpanel-recommended 和 #tabpanel-latest
                  $(document).ready(function() {
                      var setupTabPanelNavigation = function(tabPanelSelector) {
                            var listItems = $(tabPanelSelector+' .tp-home-list-item');
                            var currentActiveIndex = 0;
                            var cycle = parseInt($(tabPanelSelector).data('cycle'), 10);
                            var total = parseInt($(tabPanelSelector).data('total'), 10);
                            listItems.find('a').attr('tabindex', -1);
                            listItems.eq(currentActiveIndex).find('a').attr('tabindex', 0);

                            // 添加键盘事件监听器
                            $(tabPanelSelector).on('keydown', function(e) {
                                var keyCode = e.keyCode || e.which;
                                if (keyCode === 37) { // LEFT arrow
                                    // 向左切换
                                    currentActiveIndex = (currentActiveIndex > 0) ? currentActiveIndex - 1 : 0;
                                    if (currentActiveIndex % cycle === cycle - 1 && currentActiveIndex !== 0) {
                                        // 触发上一页点击事件
                                        $('#tp-home-list .tp-home-list-prev').click();
                                    }
                                } else if (keyCode === 39) { // RIGHT arrow
                                    // 向右切换
                                    currentActiveIndex = (currentActiveIndex < total - 1) ? currentActiveIndex + 1 : total - 1;
                                    if (currentActiveIndex % cycle === 0 && currentActiveIndex !== 0) {
                                        // 触发下一页点击事件
                                        $('#tp-home-list .tp-home-list-next').click();
                                    }
                                } else {
                                    return;
                                }
                                // 移除所有 a 标签的焦点和 tabindex
                                listItems.find('a').attr('tabindex', -1).blur();
                                // 设置当前激活项的焦点和 tabindex
                                listItems.eq(currentActiveIndex).find('a').attr('tabindex', 0).focus();
                            });
                        }
                      setupTabPanelNavigation('#tabpanel-recommended');
                      setupTabPanelNavigation('#tabpanel-latest');
                  });
                  if($(window).width() <= 736){
                    $list.find(".tp-home-list-item").addClass("active");
                  }
                  var scroll = function(){
                    $list.find(".tp-loading").each(function(){
                      var self = $(this);
                      var $img = self.find("img");
                      var src = $img.attr("data-src");
                      if(src && self[0].getBoundingClientRect().top < $(window).height()){
                        var img = new Image();
                        img.onload = function(){
                          self.removeClass("tp-loading");
                          $img.attr("src", src).removeClass("tp-hidden");
                        };
                        img.onerror = function(){
                          self.removeClass("tp-loading");
                          $img.removeClass("tp-hidden");
                        };
                        img.src = src;
                      }
                    })
                  };
                  scroll();
                  $(window).on("scroll", scroll);
                  var $item = $list.find(".tp-home-list-item .tp-home-list-wrapper");
                  var resizeHeight = function(){
                    $item.height("auto");
                    var h = 0;
                    $item.each(function(){
                      var tmp = $(this).height();
                      h = tmp > h ? tmp : h;
                    }).height(h);
                  };
                  window.onload = resizeHeight;
                  var $ul = $list.find(".tp-home-list-container");
                  var $prev = $list.find(".tp-home-list-more");
                  var $next = $list.find(".tp-home-list-next");
                  var forbidBtn = function(){
                    var $this = $ul.filter(".active");
                    var index = $this.attr("data-index");
                    var cycle = $this.attr("data-cycle");
                    var total = $this.attr("data-total");
                    if(index == '0'){
                      $prev.addClass("tp-hidden");
                    }else{
                      $prev.removeClass("tp-hidden");
                    }
                    if(parseInt(total) <= (parseInt(index) + 1) * parseInt(cycle)){
                      $next.addClass("tp-hidden");
                    }else{
                      $next.removeClass("tp-hidden");
                    }
                    $this.find(".tp-home-list-item").each(function(){
                      if($(this).index() >= index * cycle && $(this).index() < (index + 1) * cycle){
                        $(this).addClass("active");
                      }else{
                        $(this).removeClass("active");
                      }
                    })
                  };
                  var init = function(){
                    if($(window).width() > 736) {
                       forbidBtn();
                    }
                    resizeHeight();
                  };
                  init();
                  $list.on("click", ".tp-home-list-more", function(){
                    var $this = $ul.filter(".active");
                    $this.attr("data-index", parseInt($this.attr("data-index")) + ($(this).hasClass("tp-home-list-next") ? 1 : -1));
                    init();
                  });
                  $list.on("click", ".tp-home-list-menu-item", function(){
                    if(!$(this).hasClass("active")){
                      $(this).addClass("active").siblings().removeClass("active");
                      $ul.eq($(this).index()).addClass("active").siblings().removeClass("active");
                      init();
                    }
                  });
                  $(window).on("resize", init);
                })();
              

