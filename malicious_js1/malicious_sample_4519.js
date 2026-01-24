$(document).ready(function(){
$.fn.popOpen = function(){
popID = $(this).attr('rel'); //Get Popup Name
popURL = $(this).attr('href'); //Get Popup Href To Define Size
//Pull Query & Variables from href URL
query= popURL.split('?');
dim= query[1].split('&');
popWidth = dim[0].split('=')[1]; //Gets The First Query String Value
//Fade In The Popup And Add Close Button
$('#' + popID).fadeIn().css({ 'width': Number( popWidth ) }).prepend('');
//Define Margin For Center Alignment
var popMargTop = ($('#' + popID).height() + 80) / 2;
var popMargLeft = ($('#' + popID).width() + 80) / 2;
//Apply Margin To Popup
$('#' + popID).css({
'margin-top' : -popMargTop,
'margin-left' : -popMargLeft
});
//Fade In Background
$('body').append('<div id="fade"></div>'); //Add the fade layer to bottom of the body tag.
$('#fade').css({'filter' : 'alpha(opacity=80)'}).fadeIn(); //Fade in the fade layer
};
//When You Click On A Link With Class Of Poplight And The Href Starts With A #
$('a.poplight[href^=#]').click(function() {
$(this).popOpen(); //Run PopOpen Function On Click
return false;
});
$('a.poplight[href=#?w=auto]').popOpen(); //Run PopOpen Function Once On Load
//Close Popups and Fade Layer
$('a.close, #fade').live('click', function() { //When Clicking On The Close Or Fade Layer
 	$('#fade , .popup_block').fadeOut(); //Fade Them Both Out
$('#fade').remove();
return false;
});
popOpen
});