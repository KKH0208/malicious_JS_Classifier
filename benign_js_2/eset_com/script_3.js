/* 元のURL: https://eset.com */

window.dataLayer = window.dataLayer || [];
const geoIpData = $.ajax({
                    type: "GET",
                    url: "https://api.eset.com/v1/geoip"
                }).success(function(result) {
                    return result;
});

geoIpData.then(function(response, statusText, xhrObj) {
                    window.dataLayer = window.dataLayer || [];
                    window.geodata = response;
            const event = new CustomEvent('ESETCountryDetected', {detail: {country: response.countryCode}});
            window.dispatchEvent(event);
                    
                  dataLayer.push({
                    'event': 'geoIP',
                    'countryCode': response.countryCode,
                    'countryName': response.countryName,
                    'regionName': response.regionName,
                    'regionCode': response.regionCode,
                    'continentCode': response.continentCode,
                    'city': response.city
                  });
                  fetchGtm();
                }, function(xhrObj, textStatus, err) {
                    // your code when error
                   fetchGtm();
                });

const fetchGtm = function() {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({'event': 'branch-info', 'branch': 'us', 'gws_branch': 'us', 'cookie-bar-hq': true});

<!-- Google Tag Manager -->
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//sgtm.eset.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M6QG34');

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//sgtm.eset.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TJ2Z4SC');
};



