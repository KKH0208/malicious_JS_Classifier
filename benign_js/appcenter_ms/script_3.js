/* 元のURL: https://appcenter.ms */

      var stickyNav = document.getElementById('sticky-nav');
      var stickyNavContainer = document.getElementById('sticky-nav-container');
      var scrollPosition = window.scrollY;
      var stickyHeight = stickyNav.clientHeight;
      var stickyThreshold = stickyNav.offsetTop;
      if (scrollPosition >= stickyThreshold) {
          stickyNavContainer.classList.add('stuck');
      }

      function scrollHandler() {
        if (scrollPosition < stickyThreshold && window.scrollY >= stickyThreshold) {
            stickyNavContainer.classList.add('stuck');
        } else if (scrollPosition >= stickyThreshold && window.scrollY < stickyThreshold) {
            stickyNavContainer.classList.remove('stuck');
        }

        scrollPosition = window.scrollY;
      }

      document.addEventListener('scroll', scrollHandler);
    

