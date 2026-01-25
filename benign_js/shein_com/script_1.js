/* 元のURL: https://shein.com */

    var navtrack = {
      navtrack_to: sessionStorage.getItem('navtrack_to') || '',
      navtrack_point: sessionStorage.getItem('navtrack_point') || 0,
      navtrack_startParse: Date.now(),
      navtrack_serverStart: Number("0"),
      navtrack_serverEnd: Number("0")
    }
    sessionStorage.removeItem('navtrack_point')
    sessionStorage.removeItem('navtrack_to')
    
  

