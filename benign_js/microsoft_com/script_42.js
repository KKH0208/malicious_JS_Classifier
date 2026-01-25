/* 元のURL: https://microsoft.com */
// 外部JS: https://microsoft.com/echo/etc.clientlibs/microsoft/components/content/back-to-top-button/v1/back-to-top-button/clientlibs/sites.ACSHASH148bbe2eead6c5832c56691afb23e496.min.js
$(function () {
  var chatButtonContainer = document.querySelector("#msChatContainer");
  var backToTopButton = document.querySelector(".back-to-top.sticky");
  var backToTopButtonSticky = document.querySelector(
    ".fixed-back-to-top.fixed-sticky"
  );
  var storeassistantroot = document.querySelector("#storeassistantroot");
  var isStoreAssistantEnabled = !!(
    storeassistantroot && window.storeAssistantReactJsLib
  );

  // Adding styles to avoid back to top from overlapping with the chat container when chat container is present on the page.
  if (chatButtonContainer && backToTopButton && !isStoreAssistantEnabled) {
    $(backToTopButton).addClass("pageHasChatContainer");
  }
  if (
    chatButtonContainer &&
    backToTopButtonSticky &&
    !isStoreAssistantEnabled
  ) {
    $(backToTopButtonSticky).addClass("pageHasChatContainer");
  }

  // Function to check page navigation position and update back to top button classes
  function checkPageNavPosition() {
    var pageNavContainer = document.querySelector(".page-nav-container");
    if (pageNavContainer) {
      var pageNavElement = pageNavContainer.querySelector("page-nav");
      if (pageNavElement) {
        var navElement = pageNavElement?.shadowRoot?.querySelector("nav");
        var position = pageNavElement.getAttribute("position");

        if (
          position === "bottom" &&
          navElement &&
          !navElement.classList.contains("hidden")
        ) {
          // Add class to back to top buttons when page nav is at bottom and not hidden
          if (backToTopButton) {
            $(backToTopButton).addClass("bottom-page-nav");
          }
          if (backToTopButtonSticky) {
            $(backToTopButtonSticky).addClass("bottom-page-nav");
          }
        } else {
          // Remove class when page nav is not at bottom or is hidden
          if (backToTopButton) {
            $(backToTopButton).removeClass("bottom-page-nav");
          }
          if (backToTopButtonSticky) {
            $(backToTopButtonSticky).removeClass("bottom-page-nav");
          }
        }
      }
    }
  }

  // Initial check
  checkPageNavPosition();

  // Listen for scroll events to recalculate position
  $(window).on("scroll", function () {
    checkPageNavPosition();
  });
});


