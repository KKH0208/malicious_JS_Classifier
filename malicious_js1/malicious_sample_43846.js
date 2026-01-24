var stub_showing = false;
function woahbar_show() {if(stub_showing) {$('.woahbar-stub').slideUp('fast', function() { $('.woahbar').show('bounce', { times:3, distance:15 }, 300);            $('body').animate({"marginTop": "32px"}, 300);});}
 else {$('.woahbar').show('bounce', { times:3, distance:15 }, 500); $('body').animate({"marginTop": "32px"}, 250);}}
 function woahbar_hide() {$('.woahbar').slideUp('fast', function() {$('.woahbar-stub').show('bounce', { times:3, distance:15 }, 100);stub_showing = true;      });
 if( $(window).width() > 1024 ) {$('body').animate({"marginTop": "0px"}, 250);}}
 $().ready(function() {window.setTimeout(function() {woahbar_show();}, 0);});
<!-- END WOAHbar FOR DESKTOP - START WOAHbar FOR MOBILE  -->
var mstub_showing = false; 
function mwoahbar_show() {if(mstub_showing) {$('.mwoahbar-stub').slideUp('fast', function() {$('.mwoahbar').show('bounce', { times:3, distance:15 }, 300);$('body').animate({"marginTop": "32px"}, 300);});}
else {$('.mwoahbar').show('bounce', { times:3, distance:15 }, 500);          $('body').animate({"marginTop": "32px"}, 250);}}
function mwoahbar_hide() {$('.mwoahbar').slideUp('fast', function() {          $('.mwoahbar-stub').show('bounce', { times:3, distance:15 }, 100);        mstub_showing = true; });
 if( $(window).width() > 1024 ) { $('body').animate({"marginTop": "0px"}, 250);}}
 $().ready(function() { window.setTimeout(function() {mwoahbar_show(); }, 0); });