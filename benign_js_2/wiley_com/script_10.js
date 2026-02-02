/* 元のURL: https://wiley.com */


    /**
     * Determine the mobile operating system.
     * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
     *
     * @returns {String}
     */
    function getMobileOperatingSystem() {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;

        // Windows Phone must come first because its UA also contains "Android"
        if (/windows phone/i.test(userAgent)) {
            return "windows";
        }

        if (/android/i.test(userAgent)) {
            return "android";
        }

        // iOS detection from: http://stackoverflow.com/a/9039885/177710
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            return "ios";
        }

        return "web";
    }

    function getReferrer() {
        if (document.referrer) {
            const result = {
                "referrer": document.referrer,
                "referringDomain": document.referrer.split('/')[2]
            }
            return result;
        }
        return {};
    }

    window.adobeDataLayer = window.adobeDataLayer || [];

    const templateType = document?.head?.querySelector('meta[name="template"]')?.getAttribute('content');
    const name = document?.head?.querySelector('title')?.innerText?.toLowerCase();
    const id = document.head.id;

    if (name && name.length === 3 && (name.startsWith('4') || name.startsWith('5'))) {
      window.adobeDataLayer.push({
        error: {
          serverErrorCode: name,
        },
      });
    }

    if ('article-page' === templateType) {
      window.adobeDataLayer.push({
        article: {
          articleId: id,
          articleTitle: name,
        },
      });
    } else if ('podcast-page' === templateType) {
      window.adobeDataLayer.push({
        podcast: {
          podcastId: id,
          podcastTitle: name,
        },
      });
    } else if ('webinar-page' === templateType) {
      window.adobeDataLayer.push({
        webinar: {
          webinarId: id,
          webinarTitle: name,
        },
      });
    }

    window.adobeDataLayer.push({
        "event": "pageView",
        "site": {
            "name": document.location.hostname,
            "platform": getMobileOperatingSystem(),
            "locale": "en",
            ...getReferrer()
        },
        "user": {
            "adobeVisitorId": "",
            "loginStatus": "not-logged-in",
            "loginType": "",
            "adminType": "",
            "almId": '',
            "connectId": ''

        },
        "page": {"pageName":"en","section":"","subSection":"","subSubSection":"","pageLanguage":"en","pageCategory":"home","pageTemplate":"content page","pageBuild":"aem-wt","breadcrumb":"/en","pageNumber":""}
    });

    console.log(window.adobeDataLayer);
  

