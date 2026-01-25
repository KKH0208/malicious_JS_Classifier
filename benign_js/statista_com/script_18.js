/* 元のURL: https://statista.com */

                    function OptanonWrapper() {
                        // Get initial OnetrustActiveGroups ids
                        if (typeof OptanonWrapperCount === 'undefined') {
                            otGetInitialGrps();
                        }

                        // Delete cookies
                        otDeleteCookie();

                        // Assign OnetrustActiveGroups to custom variable
                        function otGetInitialGrps() {
                            OptanonWrapperCount = '';
                            window.otIniGrps = window.OnetrustActiveGroups;
                        }

                        function otDeleteCookie() {
                            const otDomainGrps = JSON.parse(JSON.stringify(window.Optanon.GetDomainData().Groups));
                            const otDeletedGrpIds = otGetInactiveId(window.otIniGrps, window.OnetrustActiveGroups);

                            if (otDeletedGrpIds.length && otDomainGrps.length) {
                                otDomainGrps.forEach(group => {
                                    // Check if CustomGroupId matches
                                    if (group['CustomGroupId'] !== '' && otDeletedGrpIds.includes(group['CustomGroupId'])) {
                                        group['Cookies'].forEach(cookie => {
                                            eraseCookie(cookie['Name']);
                                        });

                                        // Delete first-party cookies within the group
                                        const firstPartyCookies = group['FirstPartyCookies'];
                                        firstPartyCookies.forEach(cookie => {
                                            eraseCookie(cookie['Name']);
                                            const patternKey = cookie['firstPartyKey'];
                                            if (patternKey) {
                                                const matchingCookies = findCookiesByFirstPartyKey();
                                                matchingCookies.forEach(cookieName => {
                                                    eraseCookie(cookieName);
                                                });
                                            }
                                        });
                                    }

                                    // Check if Hostid matches
                                    if (group['Hosts'].length) {
                                        group['Hosts'].forEach(host => {
                                            // Check if HostId is present in the deleted list and cookie array is not empty
                                            if (otDeletedGrpIds.includes(host['HostId']) && host['Cookies'].length) {
                                                host['Cookies'].forEach(cookie => {
                                                    eraseCookie(cookie['Name']);
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                            // Reassign new group ids
                            otGetInitialGrps();
                        }

                        // Get inactive ids
                        function otGetInactiveId(customIniId, otActiveGrp) {
                            customIniId = customIniId.split(',').filter(Boolean);
                            otActiveGrp = otActiveGrp.split(',').filter(Boolean);
                            const result = customIniId.filter(id => !otActiveGrp.includes(id));

                            return result;
                        }

                        function findCookiesByFirstPartyKey() {
                            const matchingCookies = document.cookie.split(';')
                                .map(cookie => cookie.trim().split('=')[0])
                                .filter(cookieName => cookieName.split('_').length > 1);

                            return matchingCookies;
                        }

                        function getParentDomain(hostname) {
                            const parts = hostname.split('.');
                            return `${ parts.slice(-2).join('.') }`;
                        }

                        // Delete cookie
                        function eraseCookie(name) {
                            const domainName = getParentDomain(window.location.hostname);
                            const pathArray = window.location.pathname.split('/');
                            const deletedCookies = [];
                            document.cookie = `${name}=; Max-Age=-99999999; Path=/; Domain=${domainName}`;
                            document.cookie = `${name}=; Max-Age=-99999999; Path=/`;

                            pathArray.forEach((path, index) => {
                                if (path) {
                                    const currentPath = pathArray.slice(0, index + 1).join('/');
                                    document.cookie = `${name}=; Max-Age=-99999999; Path=${currentPath}; Domain=${domainName}`;
                                    document.cookie = `${name}=; Max-Age=-99999999; Path=${currentPath}`;
                                    document.cookie = `${name}=; Max-Age=-99999999; Path=${currentPath}/; Domain=${domainName}`;
                                    document.cookie = `${name}=; Max-Age=-99999999; Path=${currentPath}/`;
                                }
                            });

                            const cookieValue = getCookie(name);
                            if (!cookieValue) {
                                deletedCookies.push(name);
                                return true;
                            }

                            return false;
                        }

                        function getCookie(name) {
                            const cookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith(`${name}=`));

                            return cookie ? cookie.trim().substring(name.length + 1) : null;
                        }
                    }
                

