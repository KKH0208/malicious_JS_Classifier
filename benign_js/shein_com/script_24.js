/* 元のURL: https://shein.com */

  try {
    function beforeCloseQueryStringParse() {
      var ret = {}
      var search = search || window.location.search
      search = search.replace('?', '')
      search.split('&').forEach(function (item) {
        var arr = item.split('=')
        ret[arr[0]] = arr[1]
      })
      return ret
    }
    const { url_from = '', aff_id = '', onelink = '', scene = '' } = beforeCloseQueryStringParse()
    window.addEventListener('beforeunload', function (event) {
      if (url_from || aff_id || onelink || scene === 'onelink') {
        window.sa('send', {
          activity_name: 'click_before_close_page'
        }, { beacon: 1 })
      }
    })
  } catch (e) { console.log(e) }


