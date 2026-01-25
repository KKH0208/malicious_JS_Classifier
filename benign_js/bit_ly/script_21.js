/* 元のURL: https://bit.ly */

jQuery(document).ready(function($) {
$('html[lang="de-DE"] a[href="https://bitly.com/pages/pricing"]').not('a.wpml-ls-link').attr('href','https://bitly.com/pages/de/preise');
$('html[lang="fr-FR"] a[href="https://bitly.com/pages/pricing"]').not('a.wpml-ls-link').attr('href','https://bitly.com/pages/fr/tarifs');
$('html[lang="es-ES"] a[href="https://bitly.com/pages/pricing"]').not('a.wpml-ls-link').attr('href','https://bitly.com/pages/es/tarifas');
$('html[lang="it-IT"] a[href="https://bitly.com/pages/pricing"]').not('a.wpml-ls-link').attr('href','https://bitly.com/pages/it/prezzi');
// Support:
$('html[lang="de-DE"] a[href="https://support.bitly.com/hc/en-us"]').attr('href','https://support.bitly.com/hc/de');
$('html[lang="fr-FR"] a[href="https://support.bitly.com/hc/en-us"]').attr('href','https://support.bitly.com/hc/fr');
$('html[lang="de-DE"] .branding a').attr('href','https://bitly.com/pages/de');
$('html[lang="fr-FR"] .branding a').attr('href','https://bitly.com/pages/fr');
$('html[lang="es-ES"] .branding a').attr('href','https://bitly.com/pages/es');
$('html[lang="it-IT"] .branding a').attr('href','https://bitly.com/pages/it');
$('.page-template-landing-pages-promo .page-bottom.widget.widget_icl_lang_sel_widget').remove();
var searchParams = new URLSearchParams(window.location.search)
if (searchParams.has('lang')) {
lang = searchParams.get('lang');
sanitizedlang = $("<p>").text(lang).text();
//check if we are in same language
currentlang = $('html').attr('lang');
if (!currentlang.includes(sanitizedlang)) {
//find alternate
alt = $('link[hreflang="'+sanitizedlang+'"]').attr('href');
if(alt != undefined) {
window.location = alt;				
}
}
}
});
jQuery(window).load(function() {
let $ = jQuery;
$('html[lang="es-ES"] .wpml-ls-item-it a').append(
'<span class="wpml-ls-display">'
);
$('html[lang="es-ES"] .wpml-ls-item-it a .wpml-ls-display').append(
'<span class="wpml-ls-bracket"> ('
);
$('html[lang="es-ES"] .wpml-ls-item-it a .wpml-ls-display').append(
'<span class="name">Italiano'
);
$('html[lang="es-ES"] .wpml-ls-item-it a .wpml-ls-display').append(
'<span class="wpml-ls-bracket">)'
);
});


