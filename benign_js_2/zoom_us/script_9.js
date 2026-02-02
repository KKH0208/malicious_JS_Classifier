/* 元のURL: https://zoom.us */

    function OptanonWrapper() {
      let trustDom = document.getElementById("ot-do-not-sell");
      if (trustDom) {
        trustDom.innerHTML =
          '<img alt="" src="https://st1.zoom.us/homepage/publish/primary/assets/images/privacyoptions.png" />Your Privacy Choices';
      }
      var oneTrustConsentId = OneTrust.getDataSubjectId();
      var activeGroups = (OnetrustActiveGroups || "").split(",");
      activeGroups = activeGroups.filter(function (v) {
        return v !== "";
      });
      // send Optimizely events when Performance consent is given
      if (
        activeGroups.indexOf("C0002") > -1 &&
        typeof sendOptimizelyEvents === "function"
      ) {
        sendOptimizelyEvents(oneTrustConsentId);
      }

      // send Optimizely events when Targeting consent is given// create `OnetrustActiveGroups` cookie
      var oneTrustActiveCookie = activeGroups.length
        ? activeGroups.join("")
        : "";
      var date = new Date();
      date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
      var expires = "; expires=" + date.toUTCString();
      document.cookie =
        "OnetrustActiveGroups=" +
        oneTrustActiveCookie +
        expires +
        "; path=/; secure=true; domain=" +
        ".zoom.com";
    }
  

