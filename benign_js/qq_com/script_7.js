/* 元のURL: https://qq.com */

    // 设置缩放
    function setScale() {
      const scaleMinWidth = 1280; // 缩放最小宽度
      const scaleMaxWidth = 1536; // 缩放最大宽度
      const contentWidth = 1440; // 内容宽度
      const scaleRatio = 0.9; // 缩放系数
      const windowWidth = window.innerWidth <= scaleMinWidth ? scaleMinWidth : window.innerWidth;
      const scale = windowWidth > scaleMaxWidth ? 1 : windowWidth * scaleRatio / contentWidth;
      document.body.style.zoom = scale;
    };
    setScale();
    window.addEventListener('resize', () => {
      setScale();
    });
  

