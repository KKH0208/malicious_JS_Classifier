/* 元のURL: https://alibaba.com */

    window.__sceneName="pc-home-newuser";var urlstr=location.href.toLowerCase();
    if(urlstr.indexOf("offer.alibaba.com")>-1 || urlstr.indexOf("www.alibaba.com/showroom/")>-1){window.__sceneName="pc-home-cps"}
    if(urlstr.indexOf("isspider=true")>-1){window.__sceneName="pc-home-newuser-abnormal"}
    // 网络性能指标异常用户单独分scene
    if (window.performance && window.performance.timing) {
        const performanceTiming = window.performance.timing;
        const redirectTime = performanceTiming.responseStart - performanceTiming.requestStart;
        const dnsTime = performanceTiming.domainLookupEnd - performanceTiming.domainLookupStart;
        const tcpTime = performanceTiming.connectEnd - performanceTiming.connectStart;
        const sslTime = performanceTiming.secureConnectionStart > 0 ? performanceTiming.connectEnd - performanceTiming.secureConnectionStart : 0;
        if (dnsTime + tcpTime + sslTime >= 100 || redirectTime >= 800) {
            window.__sceneName = "pc-home-newuser-abnormal";
        }
    }
    window.__BB = {
      disableStore: true,
      autoReportAPI: true,
      autoReportPerf: true,
      mode: -1,// 打点模式 (0: 自动打点，1: 不打点，-1: 轮询模式)
      token: "ecd5cacc572347b6afb3192a3c19b4dc",
      scene: window.__sceneName || "pc-home-newuser",
      group: "part1-default"
    }
  

