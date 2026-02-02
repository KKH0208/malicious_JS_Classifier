/* 元のURL: https://eset.com */

window.ESETcountry='US';
//if(typeof(dataLayer) === 'object') { Object.values(dataLayer).forEach(function(e) { if (typeof(e.geo_country) === 'string' ) { ESETcountry=e.geo_country }; }); }
  if(typeof(dataLayer) === 'object') { Object.keys(dataLayer).map(function(e) { if (typeof dataLayer[e].geo_country === 'string') { ESETcountry=dataLayer[e].geo_country; }  }) }
  
window.ccOnline=true;
  
// set up number of days left for trial lic
function getTrialExpirationDays() {
  var days = false;
  var exp = ESETUtil.readCookie('esetck_lic_exp');
  if( exp ) {
        exp = decodeURIComponent( exp );
        exp = new Date( exp );
        if( exp !== 'Invalid Date' && !isNaN( exp ) ) {
              var today = new Date();
              var timediff = today.getTime() - exp.getTime();
              days = Math.ceil(timediff / (1000 * 3600 * 24));
        }
  }
  return days;
}


$(function() {

if( ( $('ul.nav-secondary li:first').length ) && !($('#trustwaveSealImageResponsive').length) ){
// Contact Sales
if( (window.location.href.search(/\?cmp/i)==-1)&&(window.location.href.search(/\&cmp/i)==-1) ){
  $('<li id="contact-sales-number" class="dropdown hidden-from-to-xs hidden-from-to-xxs" style="margin-top:9px;margin-right:30px;line-height:18px;"><a href="https://www.eset.com/us/business/contact-sales/?intcmp=header-contact-number" target="_blank" style="text-decoration:none"><span style="font-size:14px;text-transform:uppercase;color:#ffffff !important;border:1px solid #BCBCBC;padding:4px 10px;display:block" class="btn-bordered">BUSINESS SALES</span><span style="font-size:18px;">1-844-824-3738<span style="font-size:9px;line-height:15px;text-transform: uppercase;margin-top:5px;" class="name">Mon - Fri,   6am - 5pm PT</span></span></a></li>').insertBefore('ul.nav-secondary li:first');
}

// Hide contact sales for non-business pages 7/21/2020
var current_url = window.location.pathname.split('?')[0];
if (current_url.indexOf('us/business') !== -1 || current_url.indexOf('us/cybersecurity-awareness-training') !== -1 || current_url.indexOf('us/eset-cybersecurity-awareness-training-a') !== -1){
  // keep contact sales
}else{
  // hide contact sales number
  $('#contact-sales-number').hide();
}

// header sales phone number
if(ESETcountry == 'CA' && $("li#contact-sales-number").length){
var replaced = $("li#contact-sales-number").html().replace('1-844-824-3738','1-844-423-3738');
$("li#contact-sales-number").html(replaced);
}

// hide nav sales phone number outside business hours
    var currentPT = new Date(new Date().toLocaleString("en-US",{timeZone:"America/Los_Angeles"}) );
    var currentDate = currentPT.toISOString().split('T')[0];
    var currentDay = currentPT.getDay();
    var currentHour = currentPT.getHours();
    var notOpen = false;
    notOpen = (currentHour < 6 || currentHour >= 17); // 6am - 5pm PT
    if ( currentDay == 6 || currentDay == 0 || notOpen ) {
      $('header .nav-secondary #contact-sales-number').css('margin-top','19px');
      $('header .nav-secondary #contact-sales-number span:nth-child(2)').hide();
      ccOnline=false;
    }
// hide sales phone number during a certain date range
if(typeof(currentDate) !== 'undefined'){
    var startDate = '2023-12-25';
    var endDate = '2023-12-26';
    if(currentDate >= startDate && currentDate <= endDate){
        var current_url = window.location.pathname.split('?')[0];
        if (current_url.indexOf('/business/') == -1 && current_url.indexOf('/home-store/') == -1 && current_url.indexOf('/home/antivirus/') == -1 && current_url.indexOf('/home/internet-security/') == -1 && current_url.indexOf('/home/smart-security-premium/') == -1 && current_url.indexOf('/home/cyber-security/') == -1 && current_url.indexOf('/home/cyber-security-pro/') == -1 && current_url.indexOf('/home/mobile-security-android/') == -1 && current_url.indexOf('/home/parental-control-android/') == -1 && current_url.indexOf('/home/multi-device-security/') == -1 && current_url.indexOf('/home/antivirus-linux/ ') == -1){ // exclude these urls
             $('header .nav-secondary #contact-sales-number').css('margin-top','19px');
             $('header .nav-secondary #contact-sales-number span:nth-child(2)').hide();
             ccOnline=false;
        }
    }
}
}

// Remove target="_blank" for add-to-cart CTAs - direct store url mode
$( "[data-event-category='Buy now']" ).each(function( index ) {
    $(this).removeAttr('target');
});

// Show cart icon - direct store url mode
/*
  if( $('#item-menu').length ){
    $('<li id="link-cart-new"><a href="https://buy.eset.com/us/cart" title="Cart" target="_blank" id="link-cart-new2" class="link link-partners"><span class="icon"><i class="ficon-cart"></i></span><span class="name">Cart</span></a></li>').insertBefore('#item-menu');
}
*/
// Hamburger Menu - Cart link
$('#link-menu').click(function () {
    $("div#content-c85234").show();
    $(".nav-sidebar .hamburger-link-shopping-cart").html("Shopping Cart").show();
    $(".nav-sidebar .hamburger-link-shopping-cart").attr('href','https://buy.eset.com/us/cart');
    $(".nav-sidebar .hamburger-link-shopping-cart").attr('target','_top');
});

// Support icon with custom links
if(typeof ccOnline != 'undefined'){
if(ccOnline){
  $('<li id="item-support"><a  id="link-support" title="Support" class="link link-support"><span class="icon"><i class="ficon-support"></i></span><span class="name">Support</span></a><div class="supportdropdown"><div class="arrow-up-outer"></div><div class="arrow-up-inner"></div><div class="opening-hours"><div class="h4">+1-866-343-3738</div><div>6 AM - 5 PM</br>PT, M - F</div></div><div class="column"><div class="div1"><div class="div2"><a href="https://helpus.eset.com" target="_blank" onclick="ESETTrack.event(\'supportmenu_helpus\');"><span class="icon ficon-live-chat"></span></a></div><div id="livechat"><a href="https://helpus.eset.com" target="_blank" onclick="ESETTrack.event(\'supportmenu_livechat\');">LIVE CHAT</a></div><div id="cconline">ONLINE</div></div><div><ul class="supportlinks"><li>+1-866-343-3738</li><li><a href="https://www.eset.com/us/support/contact/" target="_blank" onclick="ESETTrack.event(\'supportmenu_contact\');">Email support</a></li><li><a href="https://support.eset.com/" target="_blank" onclick="ESETTrack.event(\'supportmenu_support_eset\');">Knowledgebase</a></li><li><a href="https://help.eset.com/" target="_blank" onclick="ESETTrack.event(\'supportmenu_help_eset\');">User guides</a></li></ul></div></div></div></li>').insertAfter('#contact-sales-number');
}else{
  $('<li id="item-support"><a  id="link-support" title="Support" class="link link-support"><span class="icon"><i class="ficon-support"></i></span><span class="name">Support</span></a><div class="supportdropdown"><div class="arrow-up-outer"></div><div class="arrow-up-inner"></div><div class="opening-hours"><div class="h4">+1-866-343-3738</div><div>6 AM - 5 PM</br>PT, M - F</div></div><div class="column"><div class="div1"><div class="div2"><a href="https://helpus.eset.com" target="_blank" onclick="ESETTrack.event(\'supportmenu_helpus\');"><span class="icon ficon-live-chat"></span></a></div><div id="livechat"><a href="https://helpus.eset.com" target="_blank" onclick="ESETTrack.event(\'supportmenu_livechat\');">LIVE CHAT</a></div><div id="ccoffline">OFFLINE</div></div><div><ul class="supportlinks"><li>+1-866-343-3738</li><li><a href="https://www.eset.com/us/support/contact/" target="_blank" onclick="ESETTrack.event(\'supportmenu_contact\');">Email support</a></li><li><a href="https://support.eset.com/" target="_blank" onclick="ESETTrack.event(\'supportmenu_support_eset\');">Knowledgebase</a></li><li><a href="https://help.eset.com/" target="_blank" onclick="ESETTrack.event(\'supportmenu_help_eset\');">User guides</a></li></ul></div></div></div></li>').insertAfter('#contact-sales-number');
}
$('#link-support').prop('href','#');
  
$('#support').css({'position':'relative'});
$('ul li div.supportdropdown').css({'width': '470px', 'max-width':'470px', 'background':'#3b3b3b', 'display':'none' , 'position':'absolute' , 'border-radius':'4px' , 'z-index':'2' , 'top':'105%', 'right':'-75%' , 'border':'solid 1px #757373' , 'padding':'10% 10%' });
$('.column').css({'column-count':'2', 'column-gap':'15px', 'column-rule':'1px solid #757373'});
$('ul li div.arrow-up-outer').css({'content':'', 'position':'absolute', 'width':'0', 'height':'0', 'border-color':'#757373 transparent', 'border-style':'solid', 'border-width':'0px 12px 12px 12px', 'top':'-12px', 'right':'75px'});
$('ul li div.arrow-up-inner').css({'content':'', 'position':'absolute', 'width':'0', 'height':'0', 'border-color':'#3b3b3b transparent', 'border-style':'solid', 'border-width':'0px 11px 11px 11px', 'top':'-10px', 'right':'76px'});
$('.supportlinks').css({'list-style':'none', 'text-align':'left', 'font-size':'15px', 'padding': '10px','margin-bottom':'0px'});
$('.supportlinks a:hover').css({'color':'#02b9c7'});

$('#link-support').click(function(event){
  event.preventDefault();
  if (typeof ESETTrack !== 'undefined') {
      ESETTrack.event('supportmenu_icon');
      ESETTrack.event('main-nav-icon', 'event11', {
        'eVar14': 'Support'
      });
    }
  $('.supportdropdown').toggle();
});
$('#livechat').css({'font-weight':'bold', 'font-size':'15px', 'padding-top':'5px'});
$('#cconline').css({'color':'#33ff33', 'font-size':'12px','margin-top':'-8px'});
$('#ccoffline').css({'color':'red', 'font-size':'12px','margin-top':'-8px'});
$('.div1').css({'margin-top':'10px'});
}

// end of support icon

});



