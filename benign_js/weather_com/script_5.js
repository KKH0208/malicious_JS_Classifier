/* 元のURL: https://weather.com */

  try {
    performance.getEntries().filter(function(e){return e.entryType==='navigation';})[0].serverTiming.forEach(function(t){
      if (t.name==='cdn-cache')  window.NREUM.setCustomAttribute('meta.cdnCache',t.description);
      if (t.name==='edge') return window.NREUM.setCustomAttribute('meta.cdnEdge',t.duration);
      if (t.name==='origin') return window.NREUM.setCustomAttribute('meta.cdnOrigin',t.duration);
    });
  } catch (e) {
  }


