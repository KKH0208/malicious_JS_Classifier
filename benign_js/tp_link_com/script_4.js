/* 元のURL: https://tp-link.com */

    $(function () {
      // 头部的跳转按钮，用于跳过header。主要解决的是希望键盘用户不要重复看到导航栏
      $('.skip-to-main-button').on('click', function () {
        if($('#main-content').length){
          $('#main-content').focus()
        }
      });
    });
    // 监听导航栏的hover，当检测到这个区域被hover或者focus的时候就打开
    $(function () {
      $('.tp-soho-nav-li .arrow-img').on('click', function () {
        // 获取当前按钮的父元素
        var parentLi = $(this).closest('.tp-soho-nav-li');
        $('.tp-soho-nav-li').not(parentLi).removeClass('active');
        $('.tp-soho-nav-li').not(parentLi).find('.arrow-img').attr('aria-expanded',false);
        // 触发 mouseenter 事件
        parentLi.toggleClass('active');
        $(this).attr('aria-expanded', $(this).attr('aria-expanded') == 'true' ? 'false':'true' )
      });
      // 获取导航栏元素
      var navBar = $('.tp-soho-nav-li');
      // 添加鼠标悬停事件监听器
      navBar.on('mouseover', function (event) {
        openNavBar($(this));
      });
      // 定义打开导航栏的函数
      function openNavBar (parentLi) {
        // 移除其他导航项的 active 类
        $('.tp-soho-nav-li').not(parentLi).removeClass('active');
        $('.tp-soho-nav-li').not(parentLi).find('.arrow-img').attr('aria-expanded',false);
        // 添加当前导航项的 active 类
        parentLi.addClass('active');
        parentLi.find('.arrow-img').attr('aria-expanded',true)
      }
      // 添加鼠标悬停事件监听器
      navBar.on('mouseout', function (event) {
        $(this).removeClass('active');
      });
      var navBarItemm = $('.tp-soho-sub-nav');
      // 可选：添加鼠标离开事件监听器以关闭导航栏
      navBarItemm.on('mouseout', function (event) {
        closeNavBar($(this));
      });
      // 定义关闭导航栏的函数
      function closeNavBar (currentTarget) {
        // 移除 active 类
        var parentLi = currentTarget.closest('.tp-soho-nav-li');
        parentLi.removeClass('active');
        parentLi.find('.arrow-img').attr('aria-expanded',false)
      }
      var offNavTab = true;
      $('.page-content-wrapper').on('keydown', function (event) {
        var activeElement = document.activeElement;
        if (event.key === 'Tab') {
          if (!$(activeElement).closest('.tp-soho-nav-box').length) {
            if (!offNavTab) {
              offNavTab = true;
              $('.tp-soho-nav-li').removeClass('active');
              $('.tp-soho-nav-li').find('.arrow-img').attr('aria-expanded',false);
            }
          } else if ($(activeElement).closest('.tp-soho-nav-box').length) {
            offNavTab = false
          }
        } else if (event.key === 'Escape') {
          // 找到最近的 .tp-soho-nav-li 元素并设置焦点
          var closestNavItem = $(activeElement).closest('.tp-soho-nav-li');
          closestNavItem.removeClass('active')
          if (closestNavItem.length) {
            closestNavItem.find('.tp-ada-hiddenButton').focus();
          } else {
            // 如果没有找到最近的 .tp-soho-nav-li，可以设置默认的导航项
            navBar.focus();
          }
        }
      });

      var topLinkButton = $('.tp-top-link');
      // 添加鼠标悬停事件监听器
      topLinkButton.parent('span').on('mouseover', function(event) {
        $(this).addClass('active');
        $(this).find('.arrow-img').attr('aria-expanded', 'true');
      });

      // 添加鼠标离开事件（通常与悬停配合使用）
      topLinkButton.parent('span').on('mouseout', function(event) {
        $(this).removeClass('active');
        $(this).find('.arrow-img').attr('aria-expanded', 'false');
      });

      // 点击事件
      topLinkButton.next('.arrow-img').on('click', function(event) {
        $(this).closest('span').toggleClass('active');
        $(this).attr('aria-expanded', $(this).attr('aria-expanded') === 'true' ? 'false' : 'true');
      });
    })
  

