/* 元のURL: https://launchpad.net */

         //<![CDATA[
        // This code is pulled from lp.js that needs to be available on every
        // request. Pulling here to get it outside the scope of the YUI block.
        function setFocusByName(name) {
            // Focus the first element matching the given name which can be focused.
            var nodes = document.getElementsByName(name);
            var i, node;
            for (i = 0; i < nodes.length; i++) {
                node = nodes[i];
                if (node.focus) {
                    try {
                        // Trying to focus a hidden element throws an error in IE8.
                        if (node.offsetHeight !== 0) {
                            node.focus();
                        }
                    } catch (e) {
                        LPJS.use('console', function(Y) {
                            Y.log('In setFocusByName(<' +
                                node.tagName + ' type=' + node.type + '>): ' + e);
                        });
                    }
                    break;
                }
            }
        }

        function selectWidget(widget_name, event) {
          if (event && (event.keyCode === 9 || event.keyCode === 13)) {
              // Avoid firing if user is tabbing through or simply pressing
              // enter to submit the form.
              return;
          }
          document.getElementById(widget_name).checked = true;
        }
        //]]>
    

