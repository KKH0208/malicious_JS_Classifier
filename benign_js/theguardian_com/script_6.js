/* 元のURL: https://theguardian.com */

                    // this is a global that's called at the bottom of the pf.io response,
                    // once the polyfills have run. This may be useful for debugging.
                    // mainly to support browsers that don't support async=false or defer
                    function guardianPolyfilled() {
                        window.guardian.polyfilled = true;
                        if (window.guardian.mustardCut === false) {
                            window.guardian.queue.forEach(function(callback) { callback() })
                        }
                    }

                    // We've got contracts to abide by with the Ophan tracker
                    // Setting pageViewId here ensures we're not getting race-conditions at all
                    window.guardian.config.ophan = {
                        // This is duplicated from
                        // https://github.com/guardian/ophan/blob/master/tracker-js/assets/coffee/ophan/transmit.coffee
                        // Please do not change this without talking to the Ophan project first.
                        pageViewId:
                            new Date().getTime().toString(36) +
                            'xxxxxxxxxxxx'.replace(/x/g, function() {
                                return Math.floor(Math.random() * 36).toString(36);
                            }),
                    };
                

