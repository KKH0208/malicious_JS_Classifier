/* 元のURL: https://shein.com */

  const parseQueryString = (queryString) => {
    const params = {}
    const queries = queryString[0] === '?' ? queryString.substring(1) : queryString
    const pairs = queries.split('&')
    for (let i = 0; i < pairs.length; i++) {
      const pair = pairs[i].split('=')
      const key = decodeURIComponent(pair[0])
      const value = decodeURIComponent(pair[1] || '')
      if (!params.hasOwnProperty(key)) {
        params[key] = value
      } else if (Array.isArray(params[key])) {
        params[key].push(value)
      } else {
        params[key] = [params[key], value]
      }
    }
    return params
  }

  const { url_from = '', aff_id = '', onelink = '', scene = '', page_version = '' } = parseQueryString(window.location.search)
  const isMarketing = url_from || aff_id || onelink || scene === 'onelink'
  var page_version_defined = "streaming_preCutImg"
  ;(function() {
    window.fspSDK.updateOptions({
      reporterHandler({ name, value, payload = {} } = {}) {      
        if (!name || !value || window.isClientBot) {
          return
        }
  
        const pageName = window?.SaPageInfo?.page_name || ''
  
        const resource = payload.resource || ''
        const pageFrom = isMarketing ? 'Marketing' : 'Home'
        const pageVersion = page_version_defined || page_version || 'Other'
        const renderType = resource === 'ssr-landing-page' ? 'ssr' : 'spa'

        window.TPM?.run({
          marketing: 'ClientAnalytics',
          method: '_defineTrack',
          params: {
            data: {
              resource,
              page_from: pageFrom,
              page_version: pageVersion,
              render_type: renderType,
              data: [
                {
                  key_path: name,
                  values: { num: value }
                },
              ],
              // 1. 固定 page_name 防止上报时 page_name 已经被篡改
              ...(pageName ? { page_name: pageName } : {}),
            },
            options: {
              random: 1,
              immediate: true,
            },
          }
        })
        document.dispatchEvent(new Event('SStramingRenderPerformance'))
      }
    })
  })();


