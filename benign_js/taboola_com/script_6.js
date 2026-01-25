/* 元のURL: https://taboola.com */

        document.addEventListener("DOMContentLoaded", function() {
            if (typeof TaboolaForm !== 'undefined') {
                if (TaboolaForm.geo.getGeoDataFromCookie().status) {
                    if (typeof window.taboolaAdChoicesCallback !== 'undefined') { window.taboolaAdChoicesCallback(); }
                } else {
                    TaboolaForm.geo.collectGeoData(() => {
                        // Print the GEO data to the console
                        TaboolaForm.geo.saveGeoDataToCookie();

                        // Enrich Taboola forms again after geo data is collected
                        TaboolaForm.enrichForm();

                        if (typeof window.taboolaAdChoicesCallback !== 'undefined') { window.taboolaAdChoicesCallback(); }
                    });
                }

            }
        });


