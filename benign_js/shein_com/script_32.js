/* 元のURL: https://shein.com */

    document.addEventListener('SStramingRenderPerformance', function() {
      if (!navtrack || !window.TPM) return
      var data = [
        {
          key_path: 'startBody__startSSRHtml',
          values: { 
            num: Math.min(navtrack.navtrack_startSSRHtml - navtrack.navtrack_startBody , 20000) // 20s
          }
        },
        {
          key_path: 'startSSRHtml__parsedSSR',
          values: { 
            num: Math.min(navtrack.navtrack_parsedSSR - navtrack.navtrack_startSSRHtml , 20000) // 20s
          }
        },
        {
          key_path: 'startParse__parsedHead',
          values: { 
            num: Math.min(navtrack.navtrack_parsedHead - navtrack.navtrack_startParse , 20000) // 20s
          }
        },
        {
          key_path: 'parsedHead__startBody',
          values: { 
            num: Math.min(navtrack.navtrack_startBody - navtrack.navtrack_parsedHead , 20000) // 20s
          }
        },
        {
          key_path: 'startBody__parsedSSR',
          values: { 
            num: Math.min(navtrack.navtrack_parsedSSR - navtrack.navtrack_startBody , 20000) // 20s
          }
        }
      ]
      window.TPM.run({
        marketing: 'ClientAnalytics',
        method: '_defineTrack',
        params: {
          data: {
            data: data,
          },
        },
      })
    })
  

