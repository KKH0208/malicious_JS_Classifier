/* 元のURL: https://bbc.com */
window.dotcom = window.dotcom || { cmd: [], consent: {} };
  window.dotcom.ads = window.dotcom.ads || {
   resolves: {enabled: [], getAdTag: [], getAudioAdTag:[]},
   enabled: () => new Promise(r => window.dotcom.ads.resolves.enabled.push(r)),
   getAdTag: () => new Promise(r => window.dotcom.ads.resolves.getAdTag.push(r)),
   getAudioAdTag: (stationId) => new Promise(r => window.dotcom.ads.resolves.getAudioAdTag.push({promiseResolve:r, stationId}))
  };
  setTimeout(() => {
    if(window.dotcom.ads.resolves){
      window.dotcom.ads.resolves.enabled.forEach(r => r(false));
      window.dotcom.ads.resolves.getAdTag.forEach(r => r(""));
      window.dotcom.ads.resolves.getAudioAdTag.forEach(adObj => adObj.promiseResolve(""));
      window.dotcom.ads.enabled = () => new Promise(r => r(false));
      window.dotcom.ads.getAdTag = () => new Promise(r => r(""));
      window.dotcom.ads.getAudioAdTag = () => new Promise(r => r(""));
      console.error("NGAS load timeout");
    }
  }, 5000)

