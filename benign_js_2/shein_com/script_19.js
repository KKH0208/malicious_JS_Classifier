/* 元のURL: https://shein.com */

 var clientMonitorLight=function(e){"use strict";var r,a,t=e=>{void 0===e&&(e=21);var r=crypto.getRandomValues(new Uint8Array(e));return Array.from(r,e=>(e%36).toString(36)).join("")},o=()=>{var{connection:e}=navigator;return e&&e.effectiveType},n=Object.assign,i=JSON.stringify,s=e=>"object"==typeof e&&null!==e,c=(e,r)=>Object.keys(e).forEach(a=>r(e[a],a)),d=(e,r)=>{var a=n({},e);return c(r,(e,r)=>{s(e)&&(e=n({},a[r],e),c(e,(r,a)=>{s(r)&&(e[a]=i(r).slice(0,500))})),a[r]=e}),a},m=(e,r)=>{var a,t;for(var[o,n,i]of r)if(e.includes(o)){a=n;var s=i&&e.match(i);t=s?s[1].replace(/_/g,"."):void 0;break}return[a,t]},v=(e,r,a,n)=>{var{userAgent:i}=navigator,[s,c,d,v,l]=(e=>{var[r,a]=m(e,[["Edg","Edge",/Edg\/([\d.]+)/],["Chrome","Chrome",/Chrome\/([\d.]+)/],["Firefox","Firefox",/Firefox\/([\d.]+)/],["Safari","Safari",/Version\/([\d.]+)/],["AppleWebKit","Safari",/AppleWebKit\/([\d.]+)/]]),[t,o]=m(e,[["Android","Android",/Android ([\d.]+)/],["iPhone OS","iOS",/iPhone OS ([\d_]+)/],["iPad; CPU OS","iOS",/CPU OS ([\d_]+)/],["Mac OS X","Mac OS",/Mac OS X ([\d_]+)/],["Windows NT","Windows"],["Linux","Linux"]]);return[r,a,t,o,/(Tablet|iPad)/i.test(e)?2:/(Mobi|Android|iPhone)/i.test(e)?0:1]})(i);return{sdk_version:"1.0.0",network_type:o(),browser_name:s,browser_versions:c,os_name:d,os_versions:v,device_level:l,user_agent:i,app_name:"shein",language:e,money_type:r,sub_site:a,device_type:n,session_id:t()}},l=(e,o,i,s,m)=>{var{screen:v}=window,{pathname:l,host:u,href:g}=location,p=(e=>{void 0===e&&(e={});var r={};return c(e,(e,a)=>{r[a]="function"==typeof e?e():e}),r})(i),f=new Date;return r&&r===l||(r=l,a=t()),d(n({timestamp:f.getTime(),local_time:f.toLocaleString(),params:{env:e,pathname:l,page:l,url:g,host:u,screen:v.width+"*"+v.height,uemId:o,pvID:a,sdk_light_version:"0.2.17"}},s,m&&m(p)),p)},u=e=>{var{server_type:r="central",env:a="production",language:t,currency:o,site_uid:s,device_type:c,uemId:m,fields:u}=e,g=v(t,o,s,c),p="https://www.srmdata"+("central"===r?"":"-"+r)+".com",f=(e,r)=>{var t,o,n,s=(r,a)=>{var t=p+e,o=i({data:r});a||!navigator.sendBeacon?fetch(t,{method:"POST",body:o}):navigator.sendBeacon(t,o)},[c,v]=(t=s,n=[],[(e,r)=>{n.push(e),clearTimeout(o);var a=()=>{var e=n.splice(0,20);t(e,r)};o=setTimeout(a,5e3),n.length>=20&&(clearTimeout(o),a())},()=>{clearTimeout(o),n.length&&(t(n),n=[])}]);return window.addEventListener("beforeunload",v),(e,t)=>{if(void 0===t&&(t={}),"localhost"!==a){var o,n=l(a,m,u,g,r),i=(o=e,Array.isArray(o)?o:[o]).map(e=>d(n,e));if(t.immediate)return s(i,t.useFetch);i.forEach(e=>c(e,t.useFetch))}}};return{logInfo:f("/app-track/log-info"),metricInfo:f("/app-track/metric-info",e=>({tags:n({env:a},e.params),type:1,value:1}))}},g="web_js_error",p="web_unreject_error",f="web_resource_error",h="whiteScreen",_="vueJsError",y=3e3,w=(e,r,a,t,o)=>(void 0===a&&(a=""),{msg:r,src:a,errorType:e&&e.name,stackTrace:e&&e.stack,row:t,column:o}),E=(e,r,a)=>{var t,{roots:o=["html","body"],ssr:n,time:s=y}=void 0===a?{}:a,c=[],d=n?1e3:s,m=!1,v=e=>e&&o.some(r=>e.matches(r));return a=>{var{innerWidth:o,innerHeight:l}=e;m||a.tagName&&"SCRIPT"!==a.tagName||o<=0||l<=0||(c.push(a),clearTimeout(t),t=setTimeout(()=>{(n||"complete"===document.readyState)&&(((e,a)=>{for(var t=0,o=1;o<=9;o+=1){var n=document.elementFromPoint(e*o/10,a/2);if(!v(n))break;if(t+=1,5!==o){var s=document.elementFromPoint(e/2,a*o/10);if(!v(s))break;t+=1}}t>=17&&(r({tag:h,level:"ERROR",params:{errorType:h,errList:i(c),errLength:c.length}}),m=!0),c=[]})(o,l),d=s)},d))}};return e.createMonitor=e=>{var r=window,{logInfo:a,metricInfo:t}=u(e),o={vueError:[],baseError:[],whiteScreen:[]},s=(e,r)=>{var a;null==(a=o[e])||a.forEach(e=>e(r))},c=(r,a,t)=>{var o=[g,p,f];r===_?s("vueError",{tag:r,message:a,params:t}):o.includes(r)&&s("baseError",{tag:r,message:a,params:t}),((e,r,a,t)=>(void 0===e&&(e=[]),e.some(e=>"function"==typeof e?e(r,a,t):e.test(a))))(e.ignore_error,r,a,t)||(l(t),d({tag:r,message:a,level:"ERROR",params:t}))},d=e=>{var r;e.tag===h&&s("whiteScreen",e),a(e),t(n({metric_name:(r=e).tag},r))};((e,r)=>{var a=e.onerror;e.onerror=(t,o,n,i,s)=>{a&&a.call(e,t,o,n,i,s);var c="string"==typeof t?t:t.type;r(g,c,w(s,c,o,n,i))},e.addEventListener("error",e=>{var{target:a}=e,t=a instanceof HTMLScriptElement||a instanceof HTMLImageElement?a.src:a instanceof HTMLLinkElement?a.href:void 0;if(!t)return!1;var{id:o,tagName:n,className:i}=a;r(f,t,{errorType:"resourceError",src:t,id:o,tagName:n,className:i})},!0);var t=e.onunhandledrejection;e.onunhandledrejection=a=>{t&&t.call(e,a);var o=a.reason,n=o instanceof Error?o.message:"string"==typeof o?o:i(o);r(p,n,w(o,n))}})(r,c);var m,v=(m=c,e=>{console.error(e);var{message:r,stack:a=""}=e,t=a.match(":(\\d+):(\\d+)");m(_,r,{errorType:_,msg:r,row:t&&+t[1],column:t&&+t[2],stackTrace:a})}),l=E(r,d,e.white_screen);return{triggerError:c,logInfo:a,metricInfo:t,vueErrorHandler:v,on:(e,r)=>{o[e]&&o[e].push(r)},emit:s}},e}({});

  ;(function() {
    if (!gbCommonInfo) {
      return
    }
    var SERVER_TYPE = gbCommonInfo.SERVER_TYPE
    var siteUID = gbCommonInfo.SiteUID
    var NODE_SERVER_ENV = gbCommonInfo.NODE_SERVER_ENV

    function getMemberId() {
      try {
        var memberId = getCookie('memberId')

        if (memberId) {
          return memberId
        }
        var authJsonStr = localStorage.getItem('auth_member') || 'null'
        var authJson = JSON.parse(authJsonStr) || { value: {} }
        return authJson.value.member_id || ''
      } catch (e) {
        return ''
      }
    }

    var ssr = '1'

    window.monitorLight = clientMonitorLight.createMonitor({
      server_type: SERVER_TYPE === 'usa' ? 'us' : SERVER_TYPE,
      device_type: 'pc',
      language: gbCommonInfo.appLanguage,
      currency: gbCommonInfo.currency,
      env: NODE_SERVER_ENV === 'production' ? 'production' : NODE_SERVER_ENV === 'localhost' ? 'localhost' : 'debug',
      site_uid: siteUID,
      uemId: 'fdf304b4-9e52-56e1-b9be-159baeafb0b9',
      ignore_error: [
        /Script error/i, 
        (tag) => tag === 'web_resource_error' && Math.random() > 0.2,
        (tag, message, params) => {
          var stackTrace = (params && params.stackTrace) || ''
          // 1. 当堆栈信息为空时，不上报错误
          if (!stackTrace || stackTrace.trim() === '') {
            return true
          }
          
          // 2. 堆栈里面有 chrome-extension 时，为谷歌插件引起时，不上报错误
          if (stackTrace.includes('chrome-extension://')) {
            return true
          }
          
          // 3. 当堆栈信息为第三方非 shein 域名 js 时，不上传错误
          var sheinDomains = ['shein', 'Itwebstatic']
          var hasSheinDomain = false
          for (var i = 0; i < sheinDomains.length; i++) {
            if (stackTrace.indexOf(sheinDomains[i]) !== -1) {
              hasSheinDomain = true
              break
            }
          }
          if (hasSheinDomain) {
            return false
          }
          
          return true
        }
      ],
      fields: {
        member_id: getMemberId,
        web_versions: () => "13.6.6",
        params() {
          return {
            server_from: 'aidc-web-pc',
            page_name: window.SaPageInfo && window.SaPageInfo.page_name || 'other',
            site_uid: siteUID,
          }
        }
      },
      white_screen: {
        ssr: Boolean(+ssr),
        roots: ['html', 'body', '.c-outermost-ctn'],
      },
    })
  })();


