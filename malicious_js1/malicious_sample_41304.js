//<![CDATA[
      function cdClear() {
        var wtarea = document.getElementById('codes');
        wtarea.value = '';
        wtarea.focus();
        document.getElementById('cvrt').disabled = false;
      }
      function cdConvert() {
        var ctarea = document.getElementById('codes'),
            cv = ctarea.value,
            opt1 = document.getElementById('opt1'),
            opt2 = document.getElementById('opt2'),
            opt3 = document.getElementById('opt3'),
            opt4 = document.getElementById('opt4'),
            opt5 = document.getElementById('opt5');
        cv = cv.replace(/\t/g, "    ");
        if (opt1.checked) cv = cv.replace(/&/g, "&amp;");
        if (opt2.checked) cv = cv.replace(/'/g, "&#039;");
        if (opt3.checked) cv = cv.replace(/"/g, "&quot;");
        if (opt4.checked) cv = cv.replace(/</g, "&lt;");
        if (opt5.checked) cv = cv.replace(/>/g, "&gt;");
        if (cv.lastIndexOf('\n') != -1 || cv.length > 40) {
          cv = cv.replace(/^/, "<i rel=\"pre\">");
        } else {
          cv = cv.replace(/^/, "<i rel=\"code\">");
        }
        cv = cv.replace(/$/, "</i>");
        ctarea.value = cv;
        ctarea.focus();
        ctarea.select();
      };
      //]]>