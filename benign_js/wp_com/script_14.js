/* 元のURL: https://wp.com */

/* <![CDATA[ */
document.addEventListener("DOMContentLoaded", () => {
    const API_GEO_ENDPOINT = 'https://public-api.wordpress.com/geo/';
    const FCCA_LINK_SELECTOR = '.lp-footer-stack [data-is-fcca]';

    function fetchGeoData() {
        return fetch( API_GEO_ENDPOINT ).then( res => res.json() );
    }

    function removeLink( selector, condition ) {
        document.querySelectorAll( selector ).forEach( element => {
            const parent = element.parentNode;
            const parentTagName = parent.tagName.toLowerCase();

            if ( condition ) {
                (parentTagName === 'li' ? parent : element).remove();
            }
        });
    }

    /**
     * Checks if the given data pertains to the specified region or country
     * @param {string} key - The key to check in the data
     * @param {string} name - The region or country name to check for
     * @param {object} data - The geolocation data
     * @returns {boolean} - True if the data pertains to the specified region or country
     */
    function pertainsTo( key, name, data ) {
        if ( data && data[ key ] && name ) {
            return data[ key ].toLowerCase() === name.toLowerCase();
        }

        return false;
    }

    fetchGeoData().then(data => {
        const isFCCA = pertainsTo( 'country_long', 'germany', data );
        removeLink( FCCA_LINK_SELECTOR, ! isFCCA );
    });
});
/* ]]> */


