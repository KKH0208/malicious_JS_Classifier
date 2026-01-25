/* 元のURL: https://scorecardresearch.com */


      $(function () {
          if ('False' == 'True') {
              $("#dialog").dialog({
                  autoOpen: false,
                  show: {
                      effect: "blind",
                      duration: 500
                  },
                  hide: {
                      effect: "blind",
                      duration: 500
                  },
                  position: {
                      my: "center",
                      at: "top",
                  },
              });

              $("#dialog").dialog("option", "width", "80%");
              $("#dialog").dialog("option", "height", "auto");
              $("#dialog").dialog("open");
          }
  });
  

