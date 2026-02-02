/* 元のURL: https://mikrotik.com */

function openContinent(country){
	if(!country) return;
	$('.tab-title a').each(function(){
		var o=$(this),t=o.text();
		if (t.toLowerCase().indexOf(country.toLowerCase()) > -1){
			setTimeout(function(){ o.click(); },300);
		}
	});
}
function gasend(ur,tit){
	ga('send','event','outbound','click',ur,{'transport':'beacon','eventLabel':tit,'hitCallback':function(){window.open(ur);} });
}
$(document).ready(function(){
	$('.top_container').hide().delay(500).fadeIn('slow');
	//MUM list
	$('#show_events').click(function(){
		$(this).fadeOut(function(){
			$('#more_events').fadeIn();
			$(window).trigger('resize');
		});
	});
	$('.tab-title a').click(function () {
		$(window).trigger('resize').trigger('scroll');
	});
});


