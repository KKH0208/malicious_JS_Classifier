/* 元のURL: https://bit.ly */

let $ = jQuery;
jQuery(window).load(function() {	
jQuery('.plan-column').each(function(){
plan = jQuery(this).find('.plan-name').text();
jQuery(this).find('.btn').attr('aria-label','Get started with a '+ plan.trim() +' plan');
});
jQuery('.free-plan-box').find('.btn').attr('aria-label','Get a quote for our Enterprise plan');
setTimeout(() => {
jQuery('.pricing-row a, .row-cta a').each(function(){
rowplan = $(this).parent('td').attr('data-plan');
if(rowplan == 'ENTERPRISE'){
jQuery(this).attr('aria-label','Get a quote for our Enterprise plan');
} else {
jQuery(this).attr('aria-label','Get started with a '+ rowplan.trim() +' plan');
}
});
}, 2000);  // Waits for table changes
});
if($('.pricing-tables:not(.version-v2)').length) {
$('html[lang="de-DE"] .free .call-out-empty').text('Mit Werbung').removeClass('call-out-empty').addClass('call-out call-out-ads');
$('html[lang="fr-FR"] .free .call-out-empty').text('Avec pub').removeClass('call-out-empty').addClass('call-out call-out-ads');
$('html[lang="it-IT"] .free .call-out-empty').text('Con pubblicità').removeClass('call-out-empty').addClass('call-out call-out-ads');
$('html[lang="es-ES"] .free .call-out-empty').text('Con anuncios').removeClass('call-out-empty').addClass('call-out call-out-ads');
$('html[lang="en-US"] .free .call-out-empty').text('With ads').removeClass('call-out-empty').addClass('call-out call-out-ads');
$('.plan-column.free').addClass('call-out-column').css({'borderTopColor': '#031f39'}).find('.plan-name').css('color','#fff');
}


