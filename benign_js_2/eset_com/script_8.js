/* 元のURL: https://eset.com */

const params = new URLSearchParams(window.location.search);
const bypassGeoIpToken = params.get("usfw-token");

let bypass = false;
if(bypassGeoIpToken == 'ESETUS_GEO_IP_BYPASS_wjY64') {
  bypass = true;
}

window.addEventListener('ESETCountryDetected', function(e) {
    var url = window.location.href;
    var branch =  window.location.pathname.split('/')[1];
    const country = e.detail.country;

    const key = country.toLowerCase() + '-' + branch.toLowerCase();

    switch(key) {
        case 'us-ca':
            if ((url.indexOf('/about/newsroom/') == -1 && url.indexOf('/resource-center/') == -1) && false == bypass) {
                url = url.replace('/ca/', '/us/');
                window.location = url;
            }
            break;
        case 'ca-us':
            if ((url.indexOf('/about/newsroom/') == -1 && url.indexOf('/resource-center/') == -1) && false == bypass) {
                url = url.replace('/us/', '/ca/');
                window.location = url;
            }
            break;
    }

    dataLayer.push({
       'geo_country': country
    });
});


