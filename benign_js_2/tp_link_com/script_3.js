/* 元のURL: https://tp-link.com */

    if(typeof tp !== 'undefined'){
      tp.searchSuggest("/jp/search-suggest.html?q={keywords}&category=home", $(".tp-soho-header .tp-soho-form"), "tp-soho-form-suggest");
      tp.searchSuggest("/jp/search-suggest.html?q={keywords}&category=home", $(".tp-soho-header .tp-m-soho-form"), "tp-m-soho-form-suggest");
    }
    $(function () {
      var $header = $(".tp-soho-header");
      var $li = $header.find(".tp-soho-nav-li");
      var $item = $li.find(".tp-soho-sub-item-text");
      /* $li.on("mouseenter", function () {
        $(this).children(".tp-soho-sub-nav").slideDown();
      }).on("mouseleave", function () {
        $(this).children(".tp-soho-sub-nav").hide();
      }); */
      var resizeNum = function () {
        var t = -1;
        $li.show().each(function(){
          if(t < 0){
            t = $(this).offset().top;
          }else if($(this).offset().top > t + 1){
            $(this).hide();
          }else{
            $(this).show();
          }
        })
      };
      resizeNum();
      $(window).on("resize", resizeNum);

      $header.find(".stop-propagation").on("click", function (e) {
        e.stopPropagation();
      })
      
      $header.find(".tp-soho-search-box-icon").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(window).scrollTop(0);
        $("html").addClass("fixed");
        $header.addClass("active");
        $header.find(".tp-soho-form-input").focus();
        tp.cycleFocus($header.find('.tp-soho-form-box'),$header.find(".tp-soho-form-close"), $header.find(".tp-soho-search-box-icon"));
      })
      $header.find(".tp-soho-form-close").on("click", function () {
        $header.removeClass("active");
        $("html").removeClass("fixed");
        $header.find(".tp-soho-search-box-icon").focus();
      })

      var $mSearch = $header.find(".tp-m-soho-search");
      var $mSearchIcon = $header.find(".tp-m-soho-action .tp-m-soho-search-icon");
      var $mMenu = $header.find(".tp-m-soho-menu");
      var $mMenuIcon = $header.find(".tp-m-soho-action .tp-m-soho-menu-icon");
      var $mMenuItem = $mMenu.find(".tp-m-soho-menu-list>.tp-m-soho-menu-item");
      var $mSubMenuItem = $mMenu.find(".tp-m-soho-submenu-list .tp-container-inner");
      $mMenuIcon.on("click", function (e) {
        e.stopPropagation();
        if($(this).hasClass("active")){
          $("html").removeClass("fixed");
        }else{
          $(window).scrollTop(0);
          $("html").addClass("fixed");
        }
        $mSearchIcon.removeClass("active");
        $mSearch.hide();
        $(this).toggleClass("active");
        $mMenu.slideToggle(200, function () {
          $mMenu.removeClass("active");
          $mMenu.height($(window).height() - $mMenu.offset().top);
        });
      })
      $mSearchIcon.on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        if($(this).hasClass("active")){
          $("html").removeClass("fixed");
        }else{
          $(window).scrollTop(0);
          $("html").addClass("fixed");
        }
        $mMenuIcon.removeClass("active");
        $mMenu.hide().removeClass("active").find(".active").removeClass("active");
        $mMenu.find(".tp-m-soho-lastmenu").hide();
        $(this).toggleClass("active");
        $mSearch.slideToggle(200, function () {
          $mSearch.find(".tp-m-soho-form-input").val('');
          $mSearch.find(".tp-m-soho-form-suggest").empty();
          if ($mSearchIcon.hasClass("active")) {
            $mSearch.find(".tp-m-soho-form-input").focus();
          }
        });
      })
      $mMenu.find(".tp-m-soho-submenu-back").on("click", function (e) {
        e.stopPropagation();
        $mMenu.removeClass("active").find(".tp-m-soho-submenu-list .active").removeClass("active");
        $mMenu.find(".tp-m-soho-lastmenu").hide();
      })
      $mMenuItem.on("click", function (e) {
        e.stopPropagation();
        $(this).addClass("active").siblings().removeClass("active");
        $(this).find(".tp-m-soho-submenu").length && $mMenu.addClass("active");
      })
      $mSubMenuItem.on("click", function (e) {
        e.stopPropagation();
        $(this).next(".tp-m-soho-lastmenu").slideToggle(200).parent().toggleClass("active").siblings().removeClass("active").find(".tp-m-soho-lastmenu").slideUp();
      })

      $(document).on("click", function () {
        $header.removeClass("active");
        $mSearchIcon.removeClass("active");
        $mSearch.hide();
        $mSearch.find(".tp-m-soho-form-input").val('');
        $mSearch.find(".tp-m-soho-form-suggest").empty();
        $("html").removeClass("fixed");
      })
    })
  

