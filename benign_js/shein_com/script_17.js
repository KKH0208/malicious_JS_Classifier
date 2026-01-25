/* 元のURL: https://shein.com */

  var GB_S_LoginCom_labels ={}
	var GB_SupportGoogleLogin = "true" == "true";
	var GB_login_pageType = "others";
	/*Global variable*/
	var She_Login_labels = {};
	var She_Login_ser_err = {}

  var gbExposeTraceid
  ;!function() {
    var traceidComponents = {}

    gbExposeTraceid = function(type, payload) {
          try {
              var traceids = JSON.parse(sessionStorage.getItem('saTraceids'))

              if(!traceids) {
                  traceids = {}
              }
              var ct = window.GLOBAL_SN_OEST && window.GLOBAL_SN_OEST.getValue && window.GLOBAL_SN_OEST.getValue() || ''
              var defaultTraceid = 'spc`' + Date.now() + '`'+ ct
              var traceid =''
              if(type == 'setComponent') {
                  if(!traceidComponents[payload.componentName]) {
                      traceid = payload.traceid || defaultTraceid
                      if(payload.params){
                          traceid +='`'+payload.params
                      }
                      traceidComponents[payload.componentName] = traceid
                  }else{
                      traceid = traceidComponents[payload.componentName]
                  }
              } else if(type == 'getComponent') {
                  if(!traceidComponents[payload.componentName]){
                      traceidComponents[payload.componentName] = defaultTraceid
                  }
                  traceid = traceidComponents[payload.componentName]
              } else if(type == 'setProduct') {
                  traceid = payload.traceid || defaultTraceid
                  if(payload.params){
                      traceid +='`'+payload.params
                  }
                  traceids[payload.goods_id] = traceid
              } else if(type == 'getProduct') {
                  if(!traceids[payload.goods_id]){
                    traceids[payload.goods_id] = defaultTraceid
                  }
                  traceid = traceids[payload.goods_id]
              }
              sessionStorage.setItem('saTraceids', JSON.stringify(traceids))
              return traceid
          } catch (error) {
              console.log(error);
          }
      }
  }();
  var gbAddBagTraceFrom
  ;!function() {
    //追踪加车来源
    gbAddBagTraceFrom = function(type, payload) {
          var tracefrom = null
          var addBagFrom = ''
          try {
              tracefrom = JSON.parse(sessionStorage.getItem('saAddBagTraceFrom')) || {}
              if(type == 'setProductFrom') {
                  tracefrom[payload.goods_id] = payload.from || 'other'
              } else if(type == 'getProductFrom') {
                  addBagFrom = tracefrom[payload.goods_id] || 'other'
              }
              sessionStorage.setItem('saAddBagTraceFrom', JSON.stringify(tracefrom))
              return addBagFrom
          } catch (error) {
              console.log(error);
          }
      }
  }();


