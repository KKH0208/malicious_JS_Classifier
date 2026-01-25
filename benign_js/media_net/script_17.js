/* 元のURL: https://media.net */

  (()=>{
  const ccpaElem = document.querySelector('#dnslink')
  function checkDNS(){

      if(!('__cmp' in window) || typeof(__cmp) !== 'function'){return}
      __cmp('getCMPData', true, function (x){
          var possibleKeys = ['CCPA','USVCDPA','USCPA','USUCPA','USCAPDP','USTDPSA','USOCDPA','USMTCDPA','USFDBR','USDPDPA','USICDPA','USNEDPA','USNHPA','USNJDPA','USTIPA']; //add possible regulations where to show the DNS-link  
              if('regulationKey' in x && possibleKeys .indexOf(x.regulationKey) != -1)
              {
                  ccpaElem.style.display='inline-block'; /* show the link*/
              }
              else{
                  ccpaElem.style.display='none'; /* donât show the link*/
              }
      });
  }
  setInterval(checkDNS,1000);
    
    ccpaElem.onclick = function() {
        __cmp('showScreen'); 
        return false
    }
})()


