/* 元のURL: https://globo.com */

  (function (window, document) {
    const projectId = "6bzow7na6i";
    const options = {
      tenantId: "home-globo",
      loggedUser: "yes",
      pageType: "atual",
    };

    let clarityRendered = false;
    
    document.addEventListener("DOMContentLoaded", function () {
      if(!clarityRendered) {
        window.renderClarity(projectId, options);
        clarityRendered = true;
      }
    });
  })(window, document);


