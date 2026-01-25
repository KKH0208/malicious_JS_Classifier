/* 元のURL: https://ivi.ru */

                        try {
                            window.__INITIAL_REQUEST_CONFIG__ = JSON.parse('{"isAuthorized":false,"userId":8187259839096058,"isWorld":false,"timezone":"Asia/Tokyo","adultAppVersion":23801,"actualAppVersion":23801,"browserAndOsData":{"isIe":false,"browserName":"MyThesisBot","browserVersion":"1.0","osName":"unknown","osVersion":"","deviceName":"unknown","isIECompatibilityMode":false,"isIos":false,"isAndroid":false,"isAndroidTablet":false,"isChrome":false,"isChromeOS":false,"isCurl":false,"isDesktop":false,"isEdge":false,"isFirefox":false,"isMobile":false,"isSafari":false,"isOpera":false,"isSamsung":false,"isSmartTV":false,"isTablet":false,"isWindows":false,"isiPad":false,"isiPhone":false,"isiPod":false,"isSearchBot":true,"isYaBrowser":false,"secHeadersExists":false},"isMobile":false,"isAutoplayDisabled":false,"routeParams":{},"subsiteId":353,"timestampServer":1761683829978,"session":"79ba5f718187259839096058_1777495029-0Cnr0UDpPGCOWXRZL_dvoNw","isExternalApp":false,"staticHost":"https://s3.dfs.ivi.ru/849c829d658baaeff512d766b0db3cce","staticPlayerHost":"https://s3.dfs.ivi.ru/ed65d0b7d9be8f96518a010f6f72a36a","staticBuildTarget":"es5","imageRoot":"https://s3.dfs.ivi.ru/849c829d658baaeff512d766b0db3cce/dist/release_25.10.11_758bfb26/storm/images","urlsToCache":["https://www.ivi.ru/offline","https://s3.dfs.ivi.ru/849c829d658baaeff512d766b0db3cce/dist/release_25.10.11_758bfb26/es5/OfflinePage.017a37.js","https://s3.dfs.ivi.ru/849c829d658baaeff512d766b0db3cce/dist/release_25.10.11_758bfb26/es5/OfflinePage.017a37.css","https://s3.dfs.ivi.ru/849c829d658baaeff512d766b0db3cce/dist/release_25.10.11_758bfb26/es5/storm.external.9e235e.js","https://s3.dfs.ivi.ru/849c829d658baaeff512d766b0db3cce/dist/release_25.10.11_758bfb26/es5/OfflineApp.048318.js","https://s3.dfs.ivi.ru/849c829d658baaeff512d766b0db3cce/dist/release_25.10.11_758bfb26/es5/OfflineApp.048318.css"],"isSPAEnabled":true}');
                        } catch (e) {
                            
        const errorObj = e || {};
        const payload = {
            'project': 'log',
            'logger': 'javascript',
            'platform': 'javascript',
            'request': {
                'headers': {
                    'User-Agent': navigator.userAgent
                },
                'url': window.location.href
            },
            'exception': {
                'values': [{
                    'type': 'Error',
                    'value': errorObj.message
                }],
                'mechanism': {'type': 'generic', 'handled': true}
            },
            'transaction': '<anonymous>',
            'trimHeadFrames': 0,
            'extra': {},
            'breadcrumbs': {},
            'user': {},
            'environment': 'prod',
            'tags': {
                'isConfigParseError': 1
            }
        }

        fetch && fetch('//' + document.domain + '/storm/frontlog/api/log/store/?', {
            "headers": {
                "content-type": "text/plain;charset=UTF-8"
            },
            "body": JSON.stringify(payload),
            "method": "POST"
        });
    ;
                        }
                    

