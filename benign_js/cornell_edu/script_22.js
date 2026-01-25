/* 元のURL: https://cornell.edu */

      $(document).ready(function () {
          // get vid src from data 
          vidsrc = $('source', '#cover-vid').attr('data-src');
          $('source', '#cover-vid').attr('src', vidsrc);
    
          // // load the video
          $('#cover-vid').load();
    
          // //play it
          $('#cover-vid').get(0).play();
    
      });
    

