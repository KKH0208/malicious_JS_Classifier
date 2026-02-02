/* 元のURL: https://sharethrough.com */

      var queryString = window.location.search;
      console.log(queryString);
      // ?utm_source=facebook&utm_medium=post&utm_campaign=webflow
      var URLSearchParams_wb = new URLSearchParams(queryString);

      const utmParameters = [
        "utm_source",
        "utm_medium",
        "utm_campaign"
      ];

      for (const utm_element of utmParameters) {
        /* if utm_source exist */
        $("form").each(function(index) {
          if (URLSearchParams_wb.has(utm_element)) {
            console.log(utm_element + "is exist");
            /* get UTM value of this utm param */
            var value = URLSearchParams_wb.get(utm_element)
            /* change form hidden feild to this utm url value */
            $(this).find("." + utm_element).val(value);
          }

        })
      } /* end for loop */
    

