/* 元のURL: https://bilibili.com */

      if (
        window.abtest &&
        window.abtest.is_modern === false
      ) {
        document.querySelector('.browser-tip').innerHTML =
          '<div class="title">当前浏览器版本较低，为保证您的使用体验，建议使用最新版本的浏览器访问。</div>'
      }
      if (/(Mac|iPhone|iPod|iPad)/i.test(window.navigator.platform)) {
        document.body.classList.add('mac')
      } else {
        document.body.classList.add('win')
      }
    

