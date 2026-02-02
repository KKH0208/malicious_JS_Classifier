/* 元のURL: https://intuit.com */

(function() {
   function onDecibelReady() {
     decibelInsight(
       'sendIntegrationData',
       'GenericIntegration',
       {
          id: '73031_169446', 
          name: 'icom-reimagine-homepage-test_Treatment-1'
       }
     );
   }
   if (window.hasOwnProperty('decibelInsight')) {
      decibelInsight('ready', onDecibelReady);
  } else {
     window['_da_ready'] = onDecibelReady;
  }
})();


