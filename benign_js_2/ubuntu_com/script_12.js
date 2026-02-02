/* 元のURL: https://ubuntu.com */

        /* Add the page to the report a bug link */
        var bugLink = document.querySelector('#report-a-bug');
        bugLink.href += '&reported_from=' + location.href;
      

