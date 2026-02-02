/* 元のURL: https://statista.com */

    let url = {};
    url.params = (() => {
        let result = null;

        if (window.location.search) {
            result = window.location.search;
        }

        return result;
    })();
    url.platform = (() => {
        let result = null;
        const url = new URL(window.location);
        if (url.host.indexOf('.statista.com')) {
            result = url.host.replace('.statista.com', '');
        }

        return result;
    })();
    url.slug = (() => {
        let result = null;
        const DEFAULT_SLUG_HOME = '';
        const url = new URL(window.location);
        if (url.pathname) {
            result = url.pathname;
            if (result.charAt(0) === '/') { result = result.substr(1); }
            if (result.charAt(result.length - 1) === '/') { result = result.substr(0, result.length - 1); }
            if (result === '') { result = DEFAULT_SLUG_HOME; }
        }

        return result;
    })();
    const tracking = {
        /* User */
        lastvisitLoggedin:              false,
        userId:                         null,
        userTypeAccount:                'anonymous',
        userTypeProduct:                'anonymous',
        userProductId:                  31,
        userPhase:                      'content',
        userLanguage:                   navigator?.language,
        userTestGroup:                  'A',
        userCountryId:                  '',
        userDateRegistered:             '',
        userEmail:                      '',
        userFirstname:                  '',
        userLastname:                   '',

        userPlatformId:                 '',
        lastvisitCountryIp:             'US',
        lastvisitIp:                    '121.82.62.77',

        lastvisitPageName:              'home',
        lastvisitPageParameters:        url.params,
        lastvisitPageSlug:              url.slug,

        subscriptionRightGcs:           false, 
        subscriptionRightCdb:           false, 
        subscriptionRightApi:           false,
        subscriptionRightPpt:           false,
                subscriptionLevel:              'free',
        subscriptionDateStart:          '',
        subscriptionDateEnd:            '',
        subscriptionDateCancelled:      '', 
        groupCompanyName:               '',
        subscriptionProductId:          '',
                subscriptionPlatformId:         '',

        /* Content */
        lastvisitContentAccess:         '',
        lastvisitContentId:             '',
        lastvisitContentTitle:          '', 
        lastvisitContentType:           '',
        lastvisitPageType:              'home',
        lastvisitPlatform:              'en',
    }

    window.tracking = tracking;


