/* 元のURL: https://globo.com */

window.PUSH_WEB_ENV = "prod";
// 86acbd31cd7c09cf30acb66d2fbedc91daa48b86:1607625335.6190588
!function(n,r,e,t,c){var i,o="Promise"in n,u={then:function(){return u},catch:function(n){
return n(new Error("Airship SDK Error: Unsupported browser")),u}},s=o?new Promise((function(n,r){i=function(e,t){e?r(e):n(t)}})):u
;s._async_setup=function(n){if(o)try{i(null,n(c))}catch(n){i(n)}},n[t]=s;var a=r.createElement("script");a.src=e,a.async=!0,a.id="_uasdk",
a.rel=t,r.head.appendChild(a)}(window,document,'https://aswpsdkus.com/notify/v1/ua-sdk.min.js',
'UA', {
    vapidPublicKey: 'BB-Q3i0lGcvT0VC2vFJChQZ9FsqHfgNF4wAdldqi9r5ChXgSAfoygHGgac3tsy616lzfFqxZaJTMMOOD7ylFVcY=',
    websitePushId: 'web.com.globo.home',
    appKey: 'Pbsb85WySDSQTzN-LXqHEQ',
    token: 'MTpQYnNiODVXeVNEU1FUek4tTFhxSEVROnB2VGNsT2V6NTFaZm5STDRzcFM1dUVKR3NrTWU5MG1zX043RUhhYXBGaWc',
    workerUrl: '/sw.js'
  });


