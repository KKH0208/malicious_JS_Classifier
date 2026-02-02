/* 元のURL: https://wired.com */

    !(function () {
      window.ethycaEnabled = true;
      window.addEventListener("FidesInitialized", function () {
        window.Fides.gtm({
          includeNotApplicable: true,
          asStringValues: false,
          non_applicable_flag_mode: "include", 
          flag_type: "boolean",
        });
        var e = window.Fides.experience?.experience_config?.id;
        e && window.document.body.classList.add(e);
      });
    })();


