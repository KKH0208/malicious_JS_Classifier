/* 元のURL: https://eset.com */
// 外部JS: https://eset.com/fileadmin/ESET/US/js/geoipmodal.js
    // https://tympanus.net/codrops/2013/06/25/nifty-modal-window-effects/
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames

    docReady(function()  {
    renderHtml();

    const currentLocation = new URL(window.location.href);
    const params = new URLSearchParams(currentLocation.search);


    let modalWindow = {
    'selectedBranch' : getCookie('selectedBranch').toUpperCase(),
    'modalElement' : document.querySelector('#gws-geoip-modal'),
    'currentBranch' : getCurrentBranch().toUpperCase(),
    'wasDismissed' : getCookie('gwsGeoipModalDismissed'),
    'showTimeout' : 1500,
    'dismissTimeout': 1000,
    'cookieBarElement': document.querySelector('#cookiebar'),
    'hrefLangs': document.querySelectorAll('link[hreflang]')
};

    const lang = navigator.language.split('-')[0].toUpperCase();

    modalWindow.modalElement.parentElement.classList.add('no-padding');

    const translations = [
{"lang": "FR", "descFirstRow": "Continuez vers le site web de votre pays", "descSecondRow": "pour des produits locaux, des offres spéciales et le service client.", "button": "Visiter mon site local"},
{"lang": "ES", "descFirstRow": "Continúa navegando en el sitio web de tu país", "descSecondRow": "para conocer productos locales, ofertas especiales y atención al cliente.", "button": "Visitar mi sitio web local"},
{"lang": "PL", "descFirstRow": "Przejdź do witryny swojego kraju, aby uzyskać dostęp do", "descSecondRow": "lokalnych produktów, ofert specjalnych i obsługi klienta.", "button": "Odwiedź moją lokalną witrynę"},
{"lang": "SK", "descFirstRow": "Prejdite na webovú stránku vašej krajiny,", "descSecondRow": "kde nájdete lokálne produkty, špeciálne ponuky a technickú podporu.", "button": "Navštívte svoju lokálnu webovú stránku"},
{"lang": "PT", "descFirstRow": "Continue navegando no site do seu país", "descSecondRow": "para acessar produtos locais, ofertas exclusivas e obter atendimento.", "button": "Visitar meu site local"},
{"lang": "IT", "descFirstRow": "Visita il sito web del tuo paese", "descSecondRow": "per scoprire i prodotti e le offerte speciali e per contattare l'assistenza clienti.", "button": "Visita il mio sito web locale"},
{"lang": "JP", "descFirstRow": "日本の公式サイトへ移動します", "descSecondRow": "日本向けの製品情報、特別オファー、サポートをご利用いただけます", "button": "日本のウェブサイトへ移動"},
{"lang": "HE", "descFirstRow": "המשך לאתר המקומי", "descSecondRow": "למוצרים, מבצעים מיוחדים ושירות לקוחות.", "button": "לביקור באתר המקומי"},
{"lang": "DE", "descFirstRow": "Wechseln Sie zur Website Ihres Landes,", "descSecondRow": "für erstklassige Angebote und ausgezeichneten Kundenservice.", "button": "Zur ESET Website"},
{"lang": "HU", "descFirstRow": "Tovább az Ön országa szerinti webhelyre", "descSecondRow": "az elérhető termékekhez, ajánlatokhoz és terméktámogatáshoz.", "button": "A helyi weboldal meglátogatása"},
{"lang": "NO", "descFirstRow": "Gå videre til den norske nettsiden", "descSecondRow": "For lokale produkter, tilbud og kundeservice.", "button": "BESØK DEN NORSKE NETTSIDEN"},
{"lang": "CS", "descFirstRow": "Pokračujte na webové stránky vaší země", "descSecondRow": "pro místní produkty, speciální nabídky a zákaznickou péči.", "button": "PŘEJÍT NA WEB PRO VÁŠ REGION"},
{"lang": "DA", "descFirstRow": "Gå videre til den danske webside", "descSecondRow": "For lokale produkter, tilbud og kundeservice.", "button": "BESØG DEN DANSKE WEBSIDE"},
{"lang": "FI", "descFirstRow": "Siirry Suomen verkkosivustolle", "descSecondRow": "Paikallisia tuotteita, tarjouksia ja asiakaspalvelua varten.", "button": "VIERAILE SUOMEN VERKKOSIVUSTOLLA"},
{"lang": "SV", "descFirstRow": "Gå vidare till den svenska webbplatsen", "descSecondRow": "För lokala produkter, erbjudanden och support.", "button": "BESÖK DEN SVENSKA WEBBPLATSEN"},
{"lang": "TR", "descFirstRow": "Ülkenizin web sitesine devam ederek", "descSecondRow": "yerel ürünlere, özel tekliflere ve müşteri desteğine ulaşın.", "button": "YEREL WEB SİTENİZİ ZİYARET EDİN"},
{"lang": "NL", "descFirstRow": "Ga verder op de website van jouw land", "descSecondRow": "voor lokale oplossingen, speciale aanbiedingen en support.", "button": "BEZOEK MIJN LOKALE WEBSITE"},
{"lang": "AZ", "descFirstRow": "Ölkənizin veb saytına keçərək", "descSecondRow": "Lokal məhsullara, xüsusi təkliflərə və müştəri dəstəyinə çıxış əldə edin.", "button": "Lokal veb saytınıza keçid edin."}
    ];

    const countries = [
{"name": "Slovakia", "countryCode": "SK", "branch": "SK", "defaultLanguage": "sk", "useIsoCode": "sk-SK"},
{"name": "International", "countryCode": "INT", "branch": "INT", "defaultLanguage": "en"},
{"name": "United States of America", "countryCode": "US", "branch": "US", "defaultLanguage": "en"},
{"name": "Czech Republic", "countryCode": "CZ", "branch": "CZ", "defaultLanguage": "cs", "useIsoCode": "cs-CZ"},
{"name": "Germany", "countryCode": "DE", "branch": "DE", "defaultLanguage": "de", "useIsoCode": "de-DE"},
{"name": "United Kingdom", "countryCode": "GB", "branch": "UK", "defaultLanguage": "en", "useIsoCode": "en-UK"},
{"name": "Poland", "countryCode": "PL", "branch": "PL", "defaultLanguage": "pl", "useIsoCode": "pl-PL"},
{"name": "Russia", "countryCode": "RU", "branch": "RU", "defaultLanguage": "ru", "useIsoCode": "ru-RU"},
{"name": "India", "countryCode": "IN", "branch": "IN", "defaultLanguage": "in", "useIsoCode": "en-IN"},
{"name": "Austria", "countryCode": "AT", "branch": "AT", "defaultLanguage": "de", "useIsoCode": "de-AT"},
{"name": "Australia", "countryCode": "AU", "branch": "AU", "defaultLanguage": "en", "useIsoCode": "en-AU"},
{"name": "Italy", "countryCode": "IT", "branch": "IT", "defaultLanguage": "it", "useIsoCode": "it-IT"},
{"name": "Israel", "countryCode": "IL", "branch": "IL", "defaultLanguage": "he", "useIsoCode": "he-IL"},
{"name": "Estonia", "countryCode": "EE", "branch": "EE", "defaultLanguage": "et", "useIsoCode" : "et-EE"},
{"name": "New Zealand", "countryCode": "NZ", "branch": "NZ", "defaultLanguage": "en", "useIsoCode": "en-NZ"},
{"name": "Spain", "countryCode": "ES", "branch": "ES", "defaultLanguage": "es", "useIsoCode": "es-ES"},
{"name": "Portugal", "countryCode": "PT", "branch": "PT", "defaultLanguage": "pt", "useIsoCode": "pt-PT"},
{"name": "Japan", "countryCode": "JP", "branch": "JP", "defaultLanguage": "jp", "useIsoCode": "ja-JP"},
{"name": "Hungary", "countryCode": "HU", "branch": "HU", "defaultLanguage": "hu", "useIsoCode": "hu-HU"},
{"name": "France", "countryCode": "FR", "branch": "FR", "defaultLanguage": "fr", "useIsoCode": "fr-FR"},
{"name": "Canada", "countryCode": "CA", "branch": "CA", "defaultLanguage": "en", "useIsoCode": "en-CA"},
{"name": "Lithuania", "countryCode": "LT", "branch": "LT", "defaultLanguage": "lt", "useIsoCode" : "lt-LT"},
{"name": "Latvia", "countryCode": "LV", "branch": "LV", "defaultLanguage": "lv", "useIsoCode": "lv-LV"},
{"name": "Finland", "countryCode": "FI", "branch": "FI", "defaultLanguage": "fi", "useIsoCode": "fi-FI"},
{"name": "Philippines", "countryCode": "PH", "branch": "PH", "defaultLanguage": "en", "useIsoCode": "en-PH"},
{"name": "Belgium", "countryCode": "BE", "branch": "BE-FR", "branchName": "Belgium", "defaultLanguage": "be", "useIsoCode": "be-FR"},
{"name": "Norway", "countryCode": "NO", "branch": "NO", "defaultLanguage": "no", "useIsoCode": "no-NO"},
{"name": "Sweden", "countryCode": "SE", "branch": "SE", "defaultLanguage": "sv", "useIsoCode": "sv-SE"},
{"name": "Denmark", "countryCode": "DK", "branch": "DK", "defaultLanguage": "da", "useIsoCode": "da-DK"},
{"name": "Singapore", "countryCode": "SG", "branch": "SG", "defaultLanguage": "en", "useIsoCode": "en-SG"},
{"name": "Mexico", "countryCode": "MX", "branch": "MX", "defaultLanguage": "es", "useIsoCode": "es-MX"},
{"name": "Ukraine", "countryCode": "UA", "branch": "UA", "defaultLanguage": "uk", "useIsoCode": "uk-UA"},
{"name": "Indonesia", "countryCode": "ID", "branch": "ID", "defaultLanguage": "id", "useIsoCode": "id-ID"},
{"name": "Ireland", "countryCode": "IE", "branch": "IE", "defaultLanguage": "en", "useIsoCode": "en-IE"},
{"name": "Hong Kong", "countryCode": "HK", "branch": "HK", "defaultLanguage": "zh", "useIsoCode": "zh-HK"},
{"name": "Taiwan", "countryCode": "TW", "branch": "TW", "defaultLanguage": "zh", "useIsoCode": "zh-TW"},
{"name": "Kenya", "countryCode": "KE", "branch": "AFR", "branchName": "Kenya", "defaultLanguage": "en", "useIsoCode": "en-KE"},
{"name": "Angola", "countryCode": "AO", "branch": "AFR", "branchName": "Angola", "useIsoCode": "en-KE"},
{"name": "Botswana", "countryCode": "BW", "branch": "AFR", "branchName": "Botswana", "useIsoCode": "en-KE"},
{"name": "Equatorial Guinea", "countryCode": "GQ", "branch": "AFR", "branchName": "Equatorial Guinea", "useIsoCode": "en-KE"},
{"name": "Ethiopia", "countryCode": "ET", "branch": "AFR", "branchName": "Ethiopia", "useIsoCode": "en-KE"},
{"name": "Lesotho", "countryCode": "LS", "branch": "AFR", "branchName": "Lesotho", "useIsoCode": "en-KE"},
{"name": "Madagascar", "countryCode": "MG", "branch": "AFR", "branchName": "Madagascar", "useIsoCode": "en-KE"},
{"name": "Malawi", "countryCode": "MW", "branch": "AFR", "branchName": "Malawi", "useIsoCode": "en-KE"},
{"name": "Mauritius", "countryCode": "MU", "branch": "AFR", "branchName": "Mauritius", "useIsoCode": "en-KE"},
{"name": "Mozambique", "countryCode": "MZ", "branch": "AFR", "branchName": "Mozambique", "useIsoCode": "en-KE"},
{"name": "Rwanda", "countryCode": "RW", "branch": "AFR", "branchName": "Rwanda", "useIsoCode": "en-KE"},
{"name": "Seychelles", "countryCode": "SC", "branch": "AFR", "branchName": "Seychelles", "useIsoCode": "en-KE"},
{"name": "Swaziland", "countryCode": "SZ", "branch": "AFR", "branchName": "Swaziland", "useIsoCode": "en-KE"},
{"name": "Tanzania", "countryCode": "TZ", "branch": "AFR", "branchName": "Tanzania", "useIsoCode": "en-KE"},
{"name": "Uganda", "countryCode": "UG", "branch": "AFR", "branchName": "Uganda", "useIsoCode": "en-KE"},
{"name": "Zambia", "countryCode": "ZM", "branch": "AFR", "branchName": "Zambia", "useIsoCode": "en-KE"},
{"name": "Zimbabwe", "countryCode": "ZW", "branch": "AFR", "branchName": "Zimbabwe", "useIsoCode": "en-KE"},
{"name": "United Arab Emirates", "countryCode": "AE", "branch": "ME", "branchName": "United Arab Emirates", "defaultLanguage": "en", "useIsoCode": "en-AE"},
{"name": "Bahrain", "countryCode": "BH", "branch": "ME", "branchName": "Bahrain", "useIsoCode": "en-AE"},
{"name": "Egypt", "countryCode": "EG", "branch": "ME", "branchName": "Egypt", "useIsoCode": "en-AE"},
{"name": "Kuwait", "countryCode": "KW", "branch": "ME", "branchName": "Kuwait", "useIsoCode": "en-AE"},
{"name": "Lebanon", "countryCode": "LB", "branch": "ME", "branchName": "Lebanon", "useIsoCode": "en-AE"},
{"name": "Libya", "countryCode": "LY", "branch": "ME", "branchName": "Libya", "useIsoCode": "en-AE"},
{"name": "Oman", "countryCode": "OM", "branch": "ME", "branchName": "Oman", "useIsoCode": "en-AE"},
{"name": "Qatar", "countryCode": "QA", "branch": "ME", "branchName": "Qatar", "useIsoCode": "en-AE"},
{"name": "Saudi Arabia", "countryCode": "SA", "branch": "ME", "branchName": "Saudi Arabia", "useIsoCode": "en-AE"},
{"name": "Yemen", "countryCode": "YE", "branch": "ME", "branchName": "Yemen", "useIsoCode": "en-AE"},
{"name": "South Korea", "countryCode": "KR", "branch": "KR", "defaultLanguage": "ko", "useIsoCode": "ko-KR"},
{"name": "Bulgaria", "countryCode": "BG", "branch": "BG", "defaultLanguage": "bg", "useIsoCode": "bg-BG"},
{"name": "Cyprus", "countryCode": "CY", "branch": "GR-EN", "branchName": "Cyprus", "defaultLanguage": "en", "useIsoCode": "gr-EN"},
{"name": "Luxembourg", "countryCode": "LU", "branch": "LU-FR", "branchName": "Luxembourg", "useIsoCode": "fr-LU"},
{"name": "Malta", "countryCode": "MT", "branch": "UK", "useIsoCode": "en-UK"},
{"name": "Netherlands", "countryCode": "NL", "branch": "NL", "defaultLanguage": "nl", "useIsoCode": "nl-NL"},
{"name": "Slovenia", "countryCode": "SI", "branch": "SI", "useIsoCode": "sl-SI"},
{"name": "Switzerland", "countryCode": "CH", "branch": "CH-DE", "branchName": "Switzerland", "useIsoCode": "de-CH"},
{"name": "Turkey", "countryCode": "TR", "branch": "TR", "defaultLanguage": "tr", "useIsoCode": "tr-TR"},
{"name": "Argentina", "countryCode": "AR", "branch": "AR", "useIsoCode": "es-AR"},
{"name": "Bolivia", "countryCode": "BO", "branch": "BO", "useIsoCode": "es-BO"},
{"name": "Brazil", "countryCode": "BR", "branch": "BR", "useIsoCode": "pt-BR"},
{"name": "Colombia", "countryCode": "CO", "branch": "CO", "useIsoCode": "es-CO"},
{"name": "Costa Rica", "countryCode": "CR", "branch": "CR", "useIsoCode": "es-CR"},
{"name": "Dominican Republic", "countryCode": "DO", "branch": "DO", "useIsoCode": "es-DO"},
{"name": "Ecuador", "countryCode": "EC", "branch": "EC", "useIsoCode": "es-EC"},
{"name": "El Salvador", "countryCode": "SV", "branch": "SV", "useIsoCode": "es-SV"},
{"name": "Guatemala", "countryCode": "GT", "branch": "GT", "useIsoCode": "es-GT"},
{"name": "Honduras", "countryCode": "HN", "branch": "HN", "useIsoCode": "es-HN"},
{"name": "Chile", "countryCode": "CL", "branch": "CL", "useIsoCode": "es-CL"},
{"name": "Nicaragua", "countryCode": "NI", "branch": "NI", "useIsoCode": "es-NI"},
{"name": "Panama", "countryCode": "PA", "branch": "PA", "useIsoCode": "es-PA"},
{"name": "Paraguay", "countryCode": "PY", "branch": "PY", "useIsoCode": "es-PY"},
{"name": "Peru", "countryCode": "PE", "branch": "PE", "useIsoCode": "es-PE"},
{"name": "Uruguay", "countryCode": "UY", "branch": "UY", "useIsoCode": "es-UY"},
{"name": "Venezuela", "countryCode": "VE", "branch": "VE", "useIsoCode": "es-VE"},
{"name": "Cambodia", "countryCode": "KH", "branch": "KH", "useIsoCode": "en-KH"},
{"name": "Malaysia", "countryCode": "MY", "branch": "MY", "useIsoCode": "en-MY"},
{"name": "Myanmar", "countryCode": "MM", "branch": "VN-EN", "branchName": "Myanmar", "useIsoCode" : "en-VN"},
{"name": "Sri Lanka", "countryCode": "LK", "branch": "LK", "useIsoCode": "en-LK"},
{"name": "Vietnam", "countryCode": "VN", "branch": "VN-EN", "branchName": "Vietnam", "useIsoCode": "en-VN"},
{"name": "Algeria", "countryCode": "DZ", "branch": "NA", "branchName": "Algeria", "useIsoCode" : "fr-MA"},
{"name": "Benin", "countryCode": "BJ", "branch": "NA", "branchName": "Benin", "useIsoCode" : "fr-MA"},
{"name": "Burundi", "countryCode": "BI", "branch": "NA", "branchName": "Burundi", "useIsoCode" : "fr-MA"},
{"name": "Cameroon", "countryCode": "CM", "branch": "NA", "branchName": "Cameroon", "useIsoCode" : "fr-MA"},
{"name": "Central African Republic", "countryCode": "CF", "branch": "NA", "branchName": "Djibuti", "useIsoCode" : "fr-MA"},
{"name": "Cote D’Ivoire", "countryCode": "CI", "branch": "NA", "branchName": "Cote D’Ivoire", "useIsoCode" : "fr-MA"},
{"name": "Democratic Republic of the Congo", "countryCode": "CG", "branch": "NA", "branchName": "Democratic Republic of the Congo", "useIsoCode" : "fr-MA"},
{"name": "Djibuti", "countryCode": "DJ", "branch": "NA", "branchName": "Djibuti", "useIsoCode" : "fr-MA"},
{"name": "Gabon", "countryCode": "CD", "branch": "NA", "branchName": "Gabon", "useIsoCode" : "fr-MA"},
{"name": "Guinea", "countryCode": "GN", "branch": "NA", "branchName": "Guinea", "useIsoCode" : "fr-MA"},
{"name": "Chad", "countryCode": "TD", "branch": "NA", "branchName": "Chad", "useIsoCode" : "fr-MA"},
{"name": "Mali", "countryCode": "ML", "branch": "NA", "branchName": "Mali", "useIsoCode" : "fr-MA"},
{"name": "Mauritania", "countryCode": "MR", "branch": "NA", "branchName": "Mauritania", "useIsoCode" : "fr-MA"},
{"name": "Morocco", "countryCode": "MA", "branch": "NA", "branchName": "Morocco", "useIsoCode" : "fr-MA"},
{"name": "Mozambique", "countryCode": "MZ", "branch": "NA", "branchName": "Mozambique", "useIsoCode" : "fr-MA"},
{"name": "Namibia", "countryCode": "NA", "branch": "NA", "branchName": "Namibia", "useIsoCode" : "fr-MA"},
{"name": "Niger", "countryCode": "NE", "branch": "NA", "branchName": "Niger", "useIsoCode" : "fr-MA"},
{"name": "Nigeria", "countryCode": "NG", "branch": "NA", "branchName": "Nigeria", "useIsoCode" : "fr-MA"},
{"name": "Senegal", "countryCode": "SN", "branch": "NA", "branchName": "Senegal", "useIsoCode" : "fr-MA"},
{"name": "South Africa", "countryCode": "ZA", "branch": "ZA", "branchName": "South Africa", "useIsoCode" : "en-ZA"},
{"name": "Togo", "countryCode": "TG", "branch": "NA", "branchName": "Togo", "useIsoCode" : "fr-MA"},
{"name": "Tunisia", "countryCode": "TN", "branch": "NA", "branchName": "Tunisia", "useIsoCode" : "fr-MA"},
{"name": "Kazakhstan", "countryCode": "KZ", "branch": "KZ-RU", "branchName": "Kazakhstan", "useIsoCode" : "kk-KZ"},
{"name": "Armenia", "countryCode": "AM", "branch": "KZ-RU", "branchName": "Armenia", "useIsoCode" : "hy-AM"},
{"name": "Moldova", "countryCode": "MD", "branch": "KZ-RU", "branchName": "Moldova", "useIsoCode" : "mo-MD"},
{"name": "Kyrgyzstan", "countryCode": "KG", "branch": "KZ-RU", "branchName": "Kyrgyzstan", "useIsoCode" : "ky-KG"},
{"name": "Tajikistan", "countryCode": "TJ", "branch": "KZ-RU", "branchName": "Tajikistan", "useIsoCode" : "tg-TJ"},
{"name": "Georgia", "countryCode": "GE", "branch": "KZ-RU", "branchName": "Georgia", "useIsoCode" : "ka-GE"},
{"name": "Uzbekistan", "countryCode": "UZ", "branch": "KZ-RU", "branchName": "Uzbekistan", "useIsoCode" : "uz-UZ"},
{"name": "Turkmenistan", "countryCode": "TM", "branch": "KZ-RU", "branchName": "Turkmenistan", "useIsoCode" : "tk-TM"}
    ];

    const geoIpModal = document.querySelector('#gws-geoip-modal');
    const modalOverlay = document.querySelector('.md-overlay');
    const linkButton = document.querySelector('.gws-geoip-link');
    const closeButton = document.querySelector('.gws-geoip-close');
    const globeLink = document.querySelector('.globe-icon a');

    function getIsoCode(country) {
    for (let i = 0;i < countries.length;i++) {
    if (countries[i].countryCode === country) {
    return countries[i].defaultLanguage + '-' + country;
}
}
}

    if (!modalWindow.selectedBranch) {
    const geoIpData = $.ajax({
    type: "GET",
    url: "https://api.eset.com/v1/geoip"
}).success(function(result) {
    return result;
});

    geoIpData.then(function(response, statusText, xhrObj) {
    setTimeout(function (){
    checkUser(response.countryCode)
}, modalWindow.showTimeout);
}, function(xhrObj, textStatus, err) {

})
}

    function findRelatedPage(isoCode) {
    for (let i = 0;i < modalWindow.hrefLangs.length;i++) {
    if (modalWindow.hrefLangs[i].getAttribute('hreflang') === isoCode) {
    return modalWindow.hrefLangs[i].getAttribute('href');
}
}
    return false;
}

    modalOverlay.addEventListener('click', function () {
    dataLayer.push({event: "geoIP-close"});
    dismissModal();
});

    closeButton.addEventListener('click', function () {
    dataLayer.push({event: "geoIP-close"});
    dismissModal();
});

    function getCurrentBranch() {
    var pathArray = window.location.pathname.split('/');
    return pathArray[1];
}

    function isValidCountry(country) {
    for (let i =0;i < countries.length;i++) {
    if (countries[i].countryCode === country && countries[i].countryCode !== 'US') {
    return true;
}
}
    return false;
}

    function isModalEnabled(currentBranch) {
    if (typeof geoipModalDisabled !== 'undefined' && geoipModalDisabled === true) {
    return false;
}
    for (let i =0;i < countries.length;i++) {
    if (countries[i].branch === currentBranch || countries[i].countryCode === currentBranch) {

    return true;
}

}
    return true;
}

    function setCountryIndex(countryCode) {
    countries.forEach(function (country, index){
    if (country.countryCode === countryCode) {
    modalWindow.countryIndex = index;
}
})
}

    function checkUser(countryCode){
    modalWindow.isoCode = getIsoCode(countryCode);
    setCountryIndex(countryCode);
    const recommendedBranch = findRecommendedBranch(countryCode);

    if (recommendedBranch !== modalWindow.currentBranch
    && isModalEnabled(modalWindow.currentBranch, recommendedBranch)
    && modalWindow.wasDismissed !== 'true'
    && isValidCountry(countryCode))
{
    if(modalWindow.cookieBarElement) {
    tweakCookieBar();
}

    fillModalData(modalWindow.currentBranch, recommendedBranch, countryCode);
    openModal();
    dataLayer.push({event: "geoIP-visible","geoIP-userLocation": countryCode});
    linkButton.addEventListener('click', function (event) {
    event.preventDefault();
    setCookie('selectedBranch', recommendedBranch.toLowerCase(), '30');
    dataLayer.push({event: "geoIP-linkClick"});
    window.location = this.getAttribute('href');
});
    globeLink.addEventListener('click', function (event) {
    event.preventDefault();
    setCookie('selectedBranch', recommendedBranch.toLowerCase(), '30');
    dataLayer.push({event: "geoIP-linkClick"});
    window.location = this.getAttribute('href');
});
}
    else {
    showCookieBar();
}
}

    function renderHtml() {
    const modalWindowTemplate = `<div class="md-content align-center">
    <div class="gws-geoip-close">+</div>
    <div>
      <div>
        <div class="gws-geoip-countries align-center">
          <div class="globe-icon">
            <span class="icon"><i class="ficon-globe" aria-hidden="true"></i></span>
            <div><span class="gws-geoip-sitename"></span></div>
          </div>
          <div class="arrow-icon">
            <span class="icon">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.815 25.243"><g id="Icon_feather-arrow-left" data-name="Icon feather-arrow-left" transform="translate(52.815 30.621) rotate(180)"><path d="M51.315,18H7.5" transform="translate(0)" fill="none" stroke="#424d56" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/><path d="M18,28.5,7.5,18,18,7.5" fill="none" stroke="#424d56" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/></g></svg></span>
          </div>
          <div class="globe-icon">
            <a href="#"><span class="icon"><i class="ficon-globe" aria-hidden="true"></i></span></a>
            <div><span class="gws-geoip-recommended-sitename"></span></div>
          </div>
        </div>
        <div class="gws-geoip-desc" id="gws-geoip-desc">
            <h4 class="align-center"><strong id="geoip-desc-firstrow">Continue to your country's website</strong>
            <br><span id="geoip-desc-secondrow">for local products, special offers and customer care.</span></h4>
        </div>

      </div>
      <a href="#" class="md-close btn gws-geoip-link">Visit my local website</a>
    </div>
  </div>
`;
    let modalWindow = document.createElement('div');
    modalWindow.classList.add('md-modal', 'md-effect-1');
    modalWindow.setAttribute('id', 'gws-geoip-modal');
    modalWindow.setAttribute('role', 'dialog');
    modalWindow.setAttribute('aria-labelledby', 'gws-geoip-desc');

    modalWindow.setAttribute('tabindex', '-1');
    modalWindow.innerHTML = modalWindowTemplate;
    const modalOverlay = document.createElement('div');
    modalOverlay.classList.add('md-overlay');
    const bodyTag = document.getElementsByTagName('body')[0];
    bodyTag.appendChild(modalWindow);
    bodyTag.appendChild(modalOverlay);
}

    function tweakCookieBar() {
    //modalWindow.cookieBarElement.classList.add('invisible');
    // document.querySelector('style#tweak-cookiebar').remove();
    document.querySelector('body').classList.remove('cc-dim');
    document.querySelector('#canvas').setAttribute('style', 'opacity:1;');
}

    function createLink() {
    let associatedPage = findUrl();
    params.append('intsrc', 'geobox');

    if (associatedPage) {
    return associatedPage + '?' + params.toString();
}

    return 'https://www.eset.com/' + countries[modalWindow.countryIndex].branch.toLowerCase() + '/' + '?' + params.toString();
}

    function fillModalData(currentBranch, recommendedBranch, countryCode) {
    geoIpModal.querySelector('.gws-geoip-countries .gws-geoip-sitename').innerHTML = getCountryName(currentBranch);
    geoIpModal.querySelector('.gws-geoip-recommended-sitename').innerHTML = getCountryName(countryCode);
    translateModal();

    const redirectLink = createLink(recommendedBranch);
    linkButton.setAttribute('href', redirectLink);
    globeLink.setAttribute('href', redirectLink);
}

    function translateModal() {
    for (var i=0;i < translations.length;i++) {
    if (translations[i].lang === lang) {
    geoIpModal.querySelector('#geoip-desc-firstrow').innerHTML = translations[i].descFirstRow;
    geoIpModal.querySelector('#geoip-desc-secondrow').innerHTML = translations[i].descSecondRow;
    geoIpModal.querySelector('.globe-icon a').setAttribute('aria-labelledby', 'gws-geoip-desc');
    geoIpModal.querySelector('.btn').innerHTML = translations[i].button;
    i = translations.length;
}
}
}

    function closeModal() {
    geoIpModal.classList.remove('md-show');
    geoIpModal.removeAttribute('aria-modal');
}

    function dismissModal() {
    closeModal();
    setCookie('gwsGeoipModalDismissed', 'true', '60');
    setTimeout(function(){
    showCookieBar();
    document.getElementsByTagName('body')[0].classList.remove('tweaked-cookiebar');
}, modalWindow.dismissTimeout);
}

    function showCookieBar() {
    document.querySelector('style#tweak-cookiebar').remove();
    var cookieConsent = (getCookie('eset_cookie-bar') !== '');
    if(!cookieConsent) {
    modalWindow.cookieBarElement.classList.remove('invisible');
    document.querySelector('body').classList.add('cc-dim');
    document.querySelector('#canvas').removeAttribute('style');
    document.querySelector('#canvas')
}
}

    function getCountryName(countryCode) {
    for (let i = 0;i < countries.length;i++) {
    if ((countries[i].countryCode === countryCode)
    || countries[i].branch === countryCode) {
    if (typeof countries[i].branchName !== 'undefined') {
    return countries[i].branchName;
}
    return countries[i].name;
}
    if (countries[i].countryCode === countryCode || countries[i].branch === countryCode) {
    return countries[i].name;
}

}
    return false;
}

    function openModal() {
    document.getElementsByTagName('body')[0].classList.add('tweaked-cookiebar');
    geoIpModal.classList.add('md-show');
    geoIpModal.setAttribute('aria-modal', 'true');
}

    function findRecommendedBranch(countryCode) {
    let recommendedBranch = false;
    for (let i = 0;i < countries.length;i++) {
    if (countries[i].countryCode === countryCode) {
    recommendedBranch = countries[i].branch;
}
}
    return recommendedBranch;
}

    function findUrl() {
    return findRelatedPage(modalWindow.isoCode);
}

    function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

    function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
    c = c.substring(1);
}
    if (c.indexOf(name) == 0) {
    return c.substring(name.length, c.length);
}
}
    return "";
}
});


    function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete") {
    // call on next available tick
    setTimeout(fn, 1);
} else {
    document.addEventListener("DOMContentLoaded", fn);
}
}

