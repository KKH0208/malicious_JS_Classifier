/* 元のURL: https://ibm.com */

    document.addEventListener("DOMContentLoaded", function() {
        var templatePath = "\/conf\/adobe\u002Dcms\u002Deditable\/settings\/wcm\/templates\/full\u002Dwidth\u002Dlayout";
        var templateName = templatePath.split('/').pop();
        const currentUrl = document.URL;
        const [baseUrl, queryString] = currentUrl.split('?');
        const urlWithoutProtocolAndDomain = baseUrl.replace(/^https?:\/\/[^\/]+\//, '');
        const segments = urlWithoutProtocolAndDomain.split('/').filter(segment => segment);
        const localePattern = /^[a-z]{2}-[a-z]{2}$/;
        const cleanedSegments = segments.filter(segment => !localePattern.test(segment));
        const firstSegment = cleanedSegments[0] || "";
        const secondSegment = cleanedSegments[1] || "";
        const thirdSegment = cleanedSegments[2] || "";
        const lastModified = "Tue Oct 28 01:04:31 UTC 2025";
        var isoDate="";
        if (lastModified.includes("UTC")) {
               const date = new Date(lastModified);
               isoDate = date.toISOString();
        } else {
                 isoDate = lastModified;
        }

        if (currentUrl.includes("/products")) {
            callProductPageLoadEvent();
        }

        function callProductPageLoadEvent(){
            adobeDataLayer.push({
                "event": "productPageLoad",
                "commerce": {
                    "productViews": {
                        "value": 1
                     }
                },
                "productListItems": {
                    "name": secondSegment,
                    "productCategories": {
                        "categoryName": thirdSegment
                    }
                },
                "web": {
                    "webPageDetails": {
                        "URL": document.URL,
                        "name": cleanUrl(window.location.host) + " | " + templateName + " | ホームページ",
                        "siteSection": firstSegment
                    },
                    "webReferrer": {
                        "URL": document.referrer
                    }
                }
            });
        }

        function getCookieByName(name) {
            const cookieArr = document.cookie.split(';');
            for (let i = 0; i < cookieArr.length; i++) {
                const cookie = cookieArr[i].trim();
                if (cookie.startsWith(name + "=")) {
                    return cookie.substring(name.length + 1);
                }
            }
            return null;
        }

        function getContextCookie(name) {
  		    const cookieArr = document.cookie.split(';');
            for (let i = 0; i < cookieArr.length; i++) {
              const cookie = cookieArr[i].trim();
              if (cookie.startsWith(name + "=")) {
                  const value = cookie.substring(name.length + 1);
                  if (value.includes("0:")) return "false";
                  return (value.includes("2:") || value.includes("1:")) ? "true" : "false";
              }
            }
            return "false";
        }

        function cleanUrl(url) {
            let modifiedUrl = url;
            if (modifiedUrl.startsWith("www")) {
                modifiedUrl = modifiedUrl.replace(/^www\.?/, "");
            }
            return modifiedUrl;
        }

        /* */

        window.addEventListener('load', function () {
            setTimeout(initializeDDSTracking, 1000);
        });

        if (!window.ddsVideoTrackingInitialized) {
            window.ddsVideoTrackingInitialized = false;
        }

        function initializeDDSTracking() {
            if (window.ddsVideoTrackingInitialized) return;
            window.ddsVideoTrackingInitialized = true;
            var videoPlayers = document.querySelectorAll('caem-video-player, c4d-video-player');
            //console.log('Found ' + videoPlayers.length + ' video players.');
            for (var i = 0; i < videoPlayers.length; i++) {
                (function (videoPlayer, index) {
                    var videoName = videoPlayer.getAttribute('name') || "Video " + (index + 1);
                    var playingMode = videoPlayer.getAttribute('playing-mode') || "";
                    //console.log('Processing video player: ' + videoName);
                    function pushVideoEvent(eventType) {
                        //console.log('Pushing event: ' + eventType + ' for ' + videoName);
                            adobeDataLayer.push({
                                "event": eventType,
                                    "_ibm": {
                                        "video": {
                                            "videoName": videoName,
                                            "videoType": "mp4",
                                            "videoPublishDate": isoDate,
                                            "videoEditDate": isoDate,
                                            "videoPlaylistName": "",
                                            "videoPlayType": playingMode,
                                            "videoTagKeywords": "video-container",
                                            [eventType]: {
                                                  "value": 1
                                            }
                                        },
                                        "user": {
                                            "userAgent": navigator.userAgent,
                                            "loginStatus": digitalData.user.segment.isAuthenticated ? "logged in" : "logged out"
                                        }
                                    },
                                    "web": {
                                        "webPageDetails": {
                                             "URL": document.URL,
                                             "name": cleanUrl(window.location.host) + " | " + templateName + " | " + "ホームページ" ,
                                             "siteSection": firstSegment
                                        },
                                        "webReferrer": {
                                            "URL": document.referrer
                                        }
                                    }
                            });
                    }

                function checkForVideo(container) {
                    var iframe = container.querySelector('iframe');
                    if (!iframe) return null;

                    try {
                            return iframe.contentDocument ? iframe.contentDocument.querySelector('video') : null;
                        } catch (e) {
                            console.error('Unable to access iframe content for ' + videoName + ':', e);
                            return null;
                        }
                }

                function trackVideoProgress(video) {
                    if (video.hasTracking) return;
                    video.hasTracking = true;

                    var milestones = {
                        reachedStart: false,
                        reached25: false,
                        reached50: false,
                        reached75: false,
                        completed: false
                    };

                    var handleFirstPlay = function () {
                            if (!milestones.reachedStart) {
                                milestones.reachedStart = true;
                                pushVideoEvent("videoStart");
                            }
                    };

                    video.addEventListener("playing", handleFirstPlay, {
                        once: true
                    });

                    if (!video.paused) {
                        handleFirstPlay();
                    }

                    video.addEventListener("timeupdate", function () {
                        var percentageWatched = (video.currentTime / video.duration) * 100;

                        if (percentageWatched >= 25 && !milestones.reached25) {
                            milestones.reached25 = true;
                            pushVideoEvent("video25");
                        }

                        if (percentageWatched >= 50 && !milestones.reached50) {
                            milestones.reached50 = true;
                            pushVideoEvent("video50");
                        }

                        if (percentageWatched >= 75 && !milestones.reached75) {
                            milestones.reached75 = true;
                            pushVideoEvent("video75");
                        }

                        if (percentageWatched >= 100 && !milestones.completed) {
                            milestones.completed = true;
                            video.removeEventListener("timeupdate", arguments.callee);
                            pushVideoEvent("videoComplete");
                        }
                    });
                }

                function setupVideoTracking() {
                    setTimeout(function () {
                        var container = videoPlayer.querySelector('.kWidgetIframeContainer');
                        if (!container) {
                            console.log('No video container found inside ' + videoName);
                            return;
                        }

                        var video = checkForVideo(container);
                        if (video) {
                            if (videoPlayer.hasAttribute('background-mode')) {
                                    //console.log('Skipping tracking for background-mode video: ' + videoName);
                                    return;
                            }
                            trackVideoProgress(video);
                        } else {
                            console.log('No video found inside ' + videoName);
                        }
                    }, 3000);
                }

                var container = videoPlayer.querySelector('.kWidgetIframeContainer');
                if (container && checkForVideo(container)) {
                    setupVideoTracking();
                } else {
                         videoPlayer.addEventListener('click', function () {
                            if (!videoPlayer.videoTrackingStarted) {
                                   videoPlayer.videoTrackingStarted = true;
                                    setupVideoTracking();
                            }
                        }, { once: true });
                }

              })(videoPlayers[i], i);
            }
        }
        /*  */

        function getVisitDepth() {
            let pageVisitCount = sessionStorage.getItem('pageVisitCount');
            pageVisitCount = pageVisitCount ? parseInt(pageVisitCount, 10) : 0;
            pageVisitCount++;
            sessionStorage.setItem('pageVisitCount', pageVisitCount);
            return pageVisitCount;
        }

        function getAmPm() {
            const date = new Date();
            const hours = date.getHours();
            return hours >= 12 ? "PM" : "AM";
        }

        function getCurrentDay() {
            const date = new Date();
            return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
        }

        function getDayOfMonth() {
            const date = new Date();
            return date.getDate();
        }

        function getDayOfWeekAsInteger() {
            const date = new Date();
            return date.getDay();
        }

        function getDayOfYear() {
            const date = new Date();
            const startOfYear = new Date(date.getFullYear(), 0, 1);
            const diffInMillis = date - startOfYear;
            const dayOfYear = Math.floor(diffInMillis / (1000 * 60 * 60 * 24)) + 1;
            return dayOfYear;
        }

        function getCurrentHour() {
            var currentHour = new Date().getHours();
            var formattedHour = (currentHour === 0 ? 24 : currentHour);
            return formattedHour + ":00";
        }

        function getCurrentHourInADay() {
            const date = new Date();
            let hours = date.getHours();
            const period = hours >= 12 ? "PM" : "AM";
            hours = hours % 12 || 12;
            return hours +":00" +" " + period;
        }

        function getCurrentMinute() {
            const date = new Date();
            return date.getMinutes();
        }

        function getCurrentMonth() {
            const date = new Date();
            return date.getMonth() + 1;
        }

        function printCurrentMonthName() {
            const months = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];
            const date = new Date();
            const monthName = months[date.getMonth()];
            return monthName;
        }

        function getQuarter(date = new Date()) {
            var year = date.getFullYear();
            var quarters = [
                            { start: "Jan", end: "Mar" },
                            { start: "Apr", end: "Jun" },
                            { start: "Jul", end: "Sep" },
                            { start: "Oct", end: "Dec" }
                           ];

            var quarterIndex = Math.floor(date.getMonth() / 3);
            var start = quarters[quarterIndex].start;
            var end = quarters[quarterIndex].end;
            return start + " " + year + " - " + end + " " + year;
        }

        function getCurrentQuarter() {
            const date = new Date();
            const month = date.getMonth();
            const quarter = Math.floor(month / 3) + 1;
            return quarter;
        }

        function getCurrentWeek() {
            const date = new Date();
            const startOfYear = new Date(date.getFullYear(), 0, 1);
            const diff = date - startOfYear;
            const oneWeekInMillis = 1000 * 60 * 60 * 24 * 7;
            const weekNumber = Math.ceil(diff / oneWeekInMillis);
            return weekNumber;
        }

        function getDayType() {
            const date = new Date();
            const dayOfWeek = date.getDay();
             if (dayOfWeek === 0 || dayOfWeek === 6) {
                return "Weekend";
             } else {
                        return "Weekday";
                    }
        }

        function getCurrentYear() {
            const date = new Date();
            return date.getFullYear();
        }

        function generateUtCodesObject() {
            const utCodesMeta = document.querySelector('meta[name="ut-codes"]');
            const utCodesIdMeta = document.querySelector('meta[name="ut-codes-id"]');
            if (utCodesMeta && utCodesIdMeta) {
                const utCodesContent = utCodesMeta.getAttribute('content');
                const utCodesIdContent = utCodesIdMeta.getAttribute('content');
                const utCodesArray = utCodesContent.split(" > ");
                const utCodesIdArray = utCodesIdContent.split(" > ");
                let utCodes = {};
                utCodesArray.forEach((code, index) => {
                    const firstTwoLetters = code.substring(0, 2);
                    let prefix = '';
                    switch (firstTwoLetters) {
                        case '10':
                        prefix = 'BusinessUnit';
                        break;
                        case '15':
                        prefix = 'LineOfBusiness';
                        break;
                        case '17':
                        prefix = 'Market';
                        break;
                        case '20':
                        prefix = 'OfferingPortfolio';
                        break;
                        case '30':
                        prefix = 'Offering';
                        break;
                        default:
                        prefix = 'Unknown';
                    }

                    const codeKey = 'ut' + firstTwoLetters + prefix;
                    const codeName = code + ':' + (utCodesIdArray[index] || "");
                    utCodes[codeKey] = codeName;
                });

                return utCodes;
            }

            return {};
        }

        function isFirstPageVisited() {
            const domainKey = 'firstPageVisited_' + window.location.hostname;
            if (!localStorage.getItem(domainKey)) {
                localStorage.setItem(domainKey, 'true');
                return true;
            }
            return false;
        }

        function getQueryParamWithKey(paramName) {
            const urlObj = new URL(window.location.href);
            const value = urlObj.searchParams.get(paramName);
            if (urlObj.searchParams.has(paramName)) {
                return paramName + '=' + value;
            }
            return '';
        }

        function getQueryParam(name) {
            const queryString = window.location.search.substring(1);
            if (name === '?') {
                return queryString;
            }

            const urlParams = new URLSearchParams(queryString);
            return urlParams.get(name);
        }

        const utCodes = generateUtCodesObject();
        const pmpDataScript = "{\x22platforms\x22:[]}";
        let pmpItems = [];
        if (pmpDataScript) {
               try {
                   pmpItems = JSON.parse(pmpDataScript);
               } catch (e) {
                      console.error("error: " + e);
               }
        }

        adobeDataLayer.push({
            "event": "pageLoad",
            "_ibm": {
                "page": {
                    utCodes: utCodes,
                    "pageQueryString":{
                            "pageQueryString": getQueryParam('?') || "" ,
                            "utm_content": getQueryParam('utm_content') || "",
                            "utm_term": getQueryParam('utm_term') || "",
                            "utm_medium": getQueryParam('utm_medium') || "",
                            "utm_source": getQueryParam('utm_source') || "",
                            "utm_campaign": getQueryParam('utm_campaign') || "",
                            "utm_id": getQueryParam('utm_id') || "",
                            "p1": getQueryParam('p1') || "",
                            "p2": getQueryParam('p2') || "",
                            "p3": getQueryParam('p3') || "",
                            "p4": getQueryParam('p4') || "",
                            "p5": getQueryParam('p5') || "",
                            "p6": getQueryParam('p6') || "",
                            "p7": getQueryParam('p7') || "",
                            "p8": getQueryParam('p8') || "",
                            "p9": getQueryParam('p9') || "",
                    },
                    "firstPageFlag": isFirstPageVisited(),
                    "internalCampaign": getQueryParamWithKey("intcmp"),
                    "siteSection2": secondSegment,
                    "siteSection3": thirdSegment,
                    "pageType": templateName,
                    "domain": cleanUrl(window.location.host),
                    "siteLanguage": "ja",
                    "pageName": "ホームページ",
                    "siteCountry": "jp"
                },

                "siteActivity": {
                    "visitDepth": getVisitDepth()
        	    },
                "timeParting": {
                    "t_AmPM": getAmPm(),
                    "t_Day": getCurrentDay(),
                    "t_DayOfMonth": getDayOfMonth(),
                    "t_DayOfWeek": getDayOfWeekAsInteger(),
                    "t_DayOfYear": getDayOfYear(),
                    "t_Hour": getCurrentHour(),
 		            "t_HourOfDay": getCurrentHourInADay(),
                    "t_Minute": getCurrentMinute(),
                    "t_Month": getCurrentMonth(),
                    "t_MonthOfYear": printCurrentMonthName(),
                    "t_Quarter": getQuarter(date = new Date()),
                    "t_QuarterOfYear": getCurrentQuarter(),
                    "t_Week": getCurrentWeek(),
                    "t_Weekday_Weekend": getDayType(),
                    "t_Year": getCurrentYear()
        	    }

            },
            paidMediaPlatforms: pmpItems.platforms || [],
            "web": {
                "webPageDetails": {
                    "pageViews": { "value": 1 },
                    "URL": document.URL,
                    "name": cleanUrl(window.location.host) + " | " + templateName + " | ホームページ",
                    "siteSection": firstSegment
                },
                "webReferrer": {
                    "URL": document.referrer
                }
            }
        });

        document.addEventListener('click', function(event) {
            if (event.target.closest('.WACLauncher__ButtonContainer')) {
                handleClick(event);
            }
        });

        function handleClick(event) {
            adobeDataLayer.push({
                "event": "contactLoad",
                "_ibm": {
                    "contact": {
                        "contactBotClick": { "value": 1 },
                        "contactExperienceType": "Support or Sales",
                        "contactLanguage": "ja",
                        "contactCountry": "jp"
                    },
                    "click": {
                        "linkTileNumber": 1
                    }
                },
                "web": {
                    "webPageDetails": {
                        "URL": document.URL,
                        "name": cleanUrl(window.location.host) + " | " + templateName + " | ホームページ",
                    },
                    "webInteraction": {
                        "name": "contactLoad",
                        "URL": document.URL,
                        "type": "other"
                    }
                }
            });
        }

        const legalNavItems = document.getElementsByTagName('c4d-legal-nav-item');
        for (let item of legalNavItems) {
            const hrefValue = item.getAttribute('href');
            if (hrefValue && hrefValue.includes('/contact')) {
                item.addEventListener('click', function(event) {
                     handleClick(event);
                });
            }
        }

        const mastheadItems = document.getElementsByTagName('c4d-masthead-contact');
        for (let item of mastheadItems) {
            if (item.getAttribute('data-ibm-contact') === 'contact-link') {
                item.addEventListener('click', function(event) {
                    handleClick(event);

                });
            }
        }
    });


