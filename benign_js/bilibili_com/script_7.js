/* 元のURL: https://bilibili.com */

      window.spmReportData = {}
      window.reportConfig = {
        sample: 1,
        msgObjects: 'spmReportData',
        errorTracker: true
      }
      function getCookie(name) {
        var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
        var r = document.cookie.match(reg)
        return r ? unescape(r[2]) : null
      }
      function fsrCb() {
        const t = new Date().getTime()
        if (window.performance && window.performance.timing) {
          window.performance.timing.firstscreenfinish = t
        }
      }
      window.__HOME_PAGE_PERFORMANCE__ = {} // 赋值，防止后面使用存在判空报错
      // 2024首页性能打点上报 start
      var isHeaderBannerReported = false
      function headerBannerLoaded() {
        if (!isHeaderBannerReported) {
          isHeaderBannerReported = true
          window.__HOME_PAGE_PERFORMANCE__.header_static_img_load = +new Date() - window.performance.timing.navigationStart
          if (window.__MIRROR_REPORT__ && typeof window.__MIRROR_REPORT__.customPerformanceQuota === 'function') {
            window.__MIRROR_REPORT__.customPerformanceQuota({
              name: 'header_static_img_load',
              value: window.__HOME_PAGE_PERFORMANCE__.header_static_img_load,
            })
          }
        }
      }
      var isFirstSwipeLoadReported = false
      function firstSwipeLoaded(index) {
        if (+index <= 1 && !isFirstSwipeLoadReported) {
          isFirstSwipeLoadReported = true
          window.__HOME_PAGE_PERFORMANCE__.swipe_img_load = +new Date() - window.performance.timing.navigationStart
          if (window.__MIRROR_REPORT__ && typeof window.__MIRROR_REPORT__.customPerformanceQuota === 'function') {
            window.__MIRROR_REPORT__.customPerformanceQuota({
              name: 'swipe_img_load',
              value: window.__HOME_PAGE_PERFORMANCE__.swipe_img_load,
            })
          }
        }
      }
      var isFirstVideoCardImgLoadReported = false
      function firstVideoCardImgLoaded() {
        if (!isFirstVideoCardImgLoadReported) {
          isFirstVideoCardImgLoadReported = true
          window.__HOME_PAGE_PERFORMANCE__.videocard_img_load = +new Date() - window.performance.timing.navigationStart
          if (window.__MIRROR_REPORT__ && typeof window.__MIRROR_REPORT__.customPerformanceQuota === 'function') {
            window.__MIRROR_REPORT__.customPerformanceQuota({
              name: 'videocard_img_load',
              value: window.__HOME_PAGE_PERFORMANCE__.videocard_img_load,
            })
          }
        }
      }
      // 2024首页性能打点上报 end
      // 图片降级使用
      function imgOnError(img) {
        typeof window.imgAutoFallbackOnError === 'function' && window.imgAutoFallbackOnError(img)
      }
      // 图片降级使用
      function imgOnLoad(img) {
        typeof window.imgAutoFallbackOnLoad === 'function' && window.imgAutoFallbackOnLoad(img)
      }
      function lqipCb(img) {
        var lqip =
          img && img.parentNode && img.parentNode.querySelector('.lqip')
        if (lqip) {
          lqip.classList.add('is-active')
        }
      }
      if (history.scrollRestoration) {
        history.scrollRestoration = 'manual'
      }
      window.page_load_time = Date.now()
    

