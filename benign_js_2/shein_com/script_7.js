/* 元のURL: https://shein.com */

  ;(function () {
    function insertScript(urls, isModule) {
      const fragment = document.createDocumentFragment()

      for (let i = 0; i < urls.length; i++) {
        const script = document.createElement('script')
        if (isModule) {
          script.type = 'module'
        }
        script.src = urls[i]
        script.crossOrigin = 'anonymous'
        script.async = false
        fragment.appendChild(script)
      }

      document.body.appendChild(fragment)
    }

    function loadScript(urls) {
      insertScript(urls)
    }

    function scriptDelayLoad(urls) {
      window.requestAnimationFrame(function () {
        loadScript(urls)
      })
    }

    let started = false
    function start() {
      if (started) return
      started = true
      
        insertScript(["//armor.ltwebstatic.com/she_dist/armor-libs/antiin/antiin.1.9.1.min.js","//sc.ltwebstatic.com/she_dist/libs/vue3.2.41,ejs.min.js","https://common.ltwebstatic.com/dist_bundle/xjqHR52UWJdjKJ0x6QrCsus66rNXR9/2.0.13/1/main.js","//sc.ltwebstatic.com/she_dist/assets/runtime-ce4ca512a8b82721.js","//sc.ltwebstatic.com/she_dist/assets/core-vendors-33f3d38194cfaae3.js","//sc.ltwebstatic.com/she_dist/assets/lib-polyfill-28b7cdd5642e2323.js","//sc.ltwebstatic.com/she_dist/assets/lib-lodash-701072612bd1fa59.js","//sc.ltwebstatic.com/she_dist/assets/lib-sui-21097cee3026817d.js","//sc.ltwebstatic.com/she_dist/assets/schttp-chunk-cd86cf019db43781.js","//sc.ltwebstatic.com/she_dist/assets/95644-04f01fe22c6be4d3.js","//sc.ltwebstatic.com/she_dist/assets/15443-66b72579a58eb20c.js","//sc.ltwebstatic.com/she_dist/assets/29523-4232a620e0c5d182.js","//sc.ltwebstatic.com/she_dist/assets/65300-cff35592aefbd847.js","//sc.ltwebstatic.com/she_dist/assets/49647-921a53b358849cee.js","//sc.ltwebstatic.com/she_dist/assets/20016-ddae5a5833ac2cc3.js","//sc.ltwebstatic.com/she_dist/assets/52866-2c1664116bc89025.js","//sc.ltwebstatic.com/she_dist/assets/40004-364b307fbd20433a.js","//sc.ltwebstatic.com/she_dist/assets/57963-766f443197a81563.js","//sc.ltwebstatic.com/she_dist/assets/97367-0b2a4ad5c5cc439b.js","//sc.ltwebstatic.com/she_dist/assets/common-56257436887536d1.js","//sc.ltwebstatic.com/she_dist/assets/swiper-404f5939fffa40dd.js","//sc.ltwebstatic.com/she_dist/assets/66948-d1880456f8654c45.js","//sc.ltwebstatic.com/she_dist/assets/65264-a2dd2ab4c6557201.js","//sc.ltwebstatic.com/she_dist/assets/5670-cfb57dd59648e380.js","//sc.ltwebstatic.com/she_dist/assets/53855-bb5efa38eb934d2a.js","//sc.ltwebstatic.com/she_dist/assets/26609-33aa86203d34dc81.js","//sc.ltwebstatic.com/she_dist/assets/18570-70c919923a8ee7fc.js","//sc.ltwebstatic.com/she_dist/assets/63884-9c71459069e69b6a.js","//sc.ltwebstatic.com/she_dist/assets/55064-6c598486d89cb65f.js","//sc.ltwebstatic.com/she_dist/assets/18781-67c497c6f15ca6c6.js","//sc.ltwebstatic.com/she_dist/assets/70780-d694b7492dd6c38a.js","//sc.ltwebstatic.com/she_dist/assets/73592-f3b08dd06b28c9c5.js","//sc.ltwebstatic.com/she_dist/assets/76088-54ac7a52ff9f62ee.js","//sc.ltwebstatic.com/she_dist/assets/ccc-home-ec93ced2bd29579c.js","//sc.ltwebstatic.com/she_dist/assets/footer-77c60dac985d20d5.js"])
      
    }

    document.addEventListener('DOMContentLoaded', start)
    setTimeout(function () {
      if (window.hasOwnProperty('gbRawData')) {
        start()
      } else {
        document.addEventListener('SRenderInitialPropsLoaded', start)
      }
    }, 3000)
  })()


