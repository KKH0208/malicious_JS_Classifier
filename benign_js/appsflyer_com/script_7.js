/* 元のURL: https://appsflyer.com */

                const validGroup = 'C0004'
                const isConsentGiven = (group) => OnetrustActiveGroups.includes(group)

                function OptanonWrapper() {
                    let consentGiven = isConsentGiven(validGroup)

                    if (OneTrust.IsAlertBoxClosedAndValid()) {
                        window._vwo_code.actionOnBasisOfState(consentGiven ? '1' : '2')
                        consentGiven
                            ?
                            window.localStorage.setItem('isConsentGivenToVWO', 1) :
                            window.localStorage.removeItem('isConsentGivenToVWO')

                        // Handle cookie consent
                        isCookiesAllowed = consentGiven ? 'true' : 'false'
                        consentGiven ? initUtmHandlers() : initAfcHandlers()
                    } else {
                        window._vwo_code.setFilterConfigAndApplyFilter({
                            popupSelector: '#onetrust-banner-sdk',
                            filterTime: 'best'
                        })
                    }
                }
            

