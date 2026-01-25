/* 元のURL: https://bilibili.com */

      // bili-mirror 告警上报
      const isBilibili = location.host.includes('bilibili.com')
      const isSpider = !(navigator && navigator.userAgent) || /bot|spider/i.test(navigator.userAgent)
      if (isBilibili && !isSpider) {
        class MirrorErrorFilterPlugin {
          static get errorFilterList() {
            return ['extension', 'log-reporter', 'static.geetest.com']
          }
          static get rejectionFilterList() {
            return ['extension', 'aborted', 'failed', 'timeout', 'network', 'log-reporter']
          }
          static get resourceFilterList() {
            return ['extension']
          }
          // static cookieMidRegExp = /DedeUserID=(.+?);/
          // static notBiliResourceRegExp = /^(?!.*\.hdslb\.com|.*\.bilibili\.com).*$/
          checkInWhitelist(list, message, stack) {
            if (!list || !list.length) return false
            const isMsgMatch = message && list.some(str => {
              return message.toLowerCase().includes(str)
            })
            const isStackMatch = stack && list.some(str => {
              return stack.toLowerCase().includes(str)
            })
            return isMsgMatch || isStackMatch
          }
          mirrorHandleBefore(type, data) {
            return new Promise(resolve => {
              if (type === 'error') {
                const isMatch = this.checkInWhitelist(
                  MirrorErrorFilterPlugin.errorFilterList,
                  data && data.message ? data.message : '',
                  data && data.stack ? data.stack : ''
                )
                return resolve(!isMatch)
              }
              else if (type === 'unhandledrejection') {
                const isMatch = this.checkInWhitelist(
                  MirrorErrorFilterPlugin.rejectionFilterList,
                  data && data.message ? data.message : '',
                  data && data.stack ? data.stack : ''
                )
                return resolve(!isMatch)
              }
              else if (type === 'resource') {
                const cookieMid = MirrorErrorFilterPlugin.cookieMidRegExp.exec(document.cookie)
                MirrorErrorFilterPlugin.cookieMidRegExp.lastIndex = 0
                if (!cookieMid) {
                  return resolve(false)
                }
                const isNotBiliResource = MirrorErrorFilterPlugin.notBiliResourceRegExp.test(data && data.message ? data.message : '')
                MirrorErrorFilterPlugin.notBiliResourceRegExp.lastIndex = 0
                if (isNotBiliResource) {
                  return resolve(false)
                }
                const isMatch = this.checkInWhitelist(
                  MirrorErrorFilterPlugin.resourceFilterList,
                  data && data.message ? data.message : '',
                  data && data.stack ? data.stack : ''
                )
                return resolve(!isMatch)
              }

              resolve(true)
            })
          }
          mirrorHandleAfter() {
            return Promise.resolve()
          }
        }
        MirrorErrorFilterPlugin.cookieMidRegExp = /DedeUserID=(.+?);/
        MirrorErrorFilterPlugin.notBiliResourceRegExp = /^(?!.*\.hdslb\.com|.*\.bilibili\.com).*$/
        window.__MIRROR_CONFIG__ = {
          origin: 'main',
          module: 'home-page',
          spmId: '333.1007',
          plugins: new MirrorErrorFilterPlugin(),
          config: {
            isAutoInit: true,
            whiteScreen: {
              maxLoop: 10,
              checkDom: ['#i_cecream', '.bili-feed4-layout', '.bili-mini-mask', '.geetest_panel_ghost', '#bewly', '.bewly-design', '.home-redesign-base', '.bilibili-helper-dark-mode', '.bili-wrapper'],
              callback: status => {
                console.log('白屏检测是否正常', status)
              },
              isSkeleton: false
            },
            ignoreVersion: '2.0.0',
            ignorePageVersion: [108288]
          }
        }
      }
    

