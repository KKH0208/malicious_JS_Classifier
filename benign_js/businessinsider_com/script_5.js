/* 元のURL: https://businessinsider.com */

    (function(){
      var toFirstRequest = 'Inline Scripts Init - Start';
      var toAdLibrary = 'Inline Scripts Ad Library Loaded - Start';
    
      function createMark(markName) {
        var perfMarks = window.performance;
        var lux = window.LUX;
    
        if (perfMarks && perfMarks.clearMarks && perfMarks.mark) {
          perfMarks.clearMarks(markName);
          perfMarks.mark(markName);
        } else if (lux && lux.mark) {
          lux.mark(markName);
        }
      }
    
      createMark(toFirstRequest);
      createMark(toAdLibrary);
    })()
    

