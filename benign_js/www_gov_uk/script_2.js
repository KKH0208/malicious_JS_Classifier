/* 元のURL: https://www.gov.uk */
// 外部JS: https://www.gov.uk/assets/frontend/govuk_publishing_components/rum-custom-data-b9e1806d1da2fa8ef1855d01aa71ba5eb0afc010dd2c4de3672cc7c7a39b0c8c.js
!function(){if("undefined"==typeof LUX)return;const e=performance.getEntriesByType("navigation")[0];if(!e)return;LUX.addData("http-protocol",e.nextHopProtocol);const n=e.serverTiming;if(n){const e=n.find(e=>["cacheHit","cacheMiss"].includes(e.name));e&&LUX.addData("cache",e.name)}}();

