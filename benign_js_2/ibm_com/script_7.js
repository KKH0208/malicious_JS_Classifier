/* 元のURL: https://ibm.com */

        var languageCode = document.getElementsByName('languageCode')[0].content;
        var countryCode = document.getElementsByName('countryCode')[0].content;
        var focusArea = document.getElementsByName('focusArea')[0].content;
        var primaryTopic = document.getElementsByName('primaryTopic')[0].content;
        var productName = document.getElementsByName('productName')[0].content;
        /* Define digital data object based on _appInfo object */
          window._ibmAnalytics = {
              settings: {
                 name: "AEM Sites",
                 tealiumProfileName: "adobe-launch"
              },
           };
        window.digitalData = {
            page: {
                category: {
                    primaryCategory: '',
                },
                taxonomy: {
                    primaryTopic: primaryTopic,
                    productName: productName,
                },
                pageInfo: {
                    language: languageCode + '-' + countryCode,
                    ibm: {
                        siteID: 'MarketingAEM',
                        country: countryCode,
                        messaging: {
                            routing: {
                                focusArea: focusArea,
                                languageCode: languageCode,
                                regionCode: countryCode
                            },
                            translation: {
                                languageCode: languageCode,
                                regionCode: countryCode
                            }
                        },
                        sections: 0,
                        patterns: 0,
                    },
                    carbon: {
                        '@carbon/web-components': '',
                        '@carbon/ibmdotcom-web-components': '',
                        'carbon-for-aem': '',
                    },
                },
            },
        };
    

