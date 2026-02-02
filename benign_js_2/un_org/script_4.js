/* 元のURL: https://un.org */
// 外部JS: https://www.un.org/fr/images/splash/splash.js
// JavaScript Document
var isPhotoDesc=false;
var isSwitch=false
$( ".un-language-btn" ).hover(
  function() {
    $fullClassName= $( this ).attr( "class" );
    $lang=$fullClassName.substr(0, 2);
    switch($lang) {
    case 'ar':
        $( this ).text('ÙØ±Ø­Ø¨Ø§Ù Ø¨ÙÙ');
        break;
    case 'zh':
        $( this ).text('æ¬¢è¿');
        break;
    case 'en':
        $( this ).text('Welcome');
        break;
    case 'fr':
        $( this ).text('Bienvenue');
        break;
    case 'ru':
        $( this ).text("ÐÐ¾Ð±ÑÐ¾ Ð¿Ð¾Ð¶Ð°Ð»Ð¾Ð²Ð°ÑÑ");
        break;
    case 'es':
        $( this ).text('Bienvenidos');
        break;
    }
  }, function() {
    $fullClassName= $( this ).attr( "class" );
    $lang=$fullClassName.substr(0, 2);
    switch($lang) {
    case 'ar':
        $( this ).text("Ø¹Ø±Ø¨Ù");
        break;
    case 'zh':
        $( this ).text("ä¸­æ");
        break;
    case 'en':
        $( this ).text("English");
        break;
    case 'fr':
        $( this ).text("FranÃ§ais");
        break;
    case 'ru':
        $( this ).text("Ð ÑÑÑÐºÐ¸Ð¹");
        break;
    case 'es':
        $( this ).text("EspaÃ±ol");
        break;
    }
  }
);


$(".top-right-question").click(
  function() {
    toggleAnimationLargeScreen("#imageDescription", "#siteDescDescription");
});

$(".bottom-right-c").click(
  function() {
    toggleAnimationLargeScreen("#siteDescDescription", "#imageDescription");
});

$(".top-right-question-mobile").click(
  function() {
    toggleAnimationMobile("#siteDescDescription-mobile");
});

$(".bottom-right-c-mobile").click(
  function() {
    toggleAnimationMobile("#imageDescription-mobile");
});



function toggleAnimationLargeScreen(outId, inId) {

    if ($(outId).hasClass('animated fadeInRight90')) {
		$(outId).removeClass('animated fadeInRight90').addClass('animated fadeOutRight90');
    }

    if ($(inId).hasClass('animated fadeInRight90')) {
    	$(inId).removeClass('animated fadeInRight90').addClass('animated fadeOutRight90');
    } else if ($(inId).hasClass('animated fadeOutRight90')) {
    	$(inId).removeClass('animated fadeOutRight90').addClass('animated fadeInRight90');
    } else {
    	$(inId).addClass('animated fadeInRight90');
    }

}

function toggleAnimationMobile(inId) {

    var oppositeId = "";
    if (inId == "#imageDescription-mobile") {
      oppositeId = "#siteDescDescription-mobile";
    } else {
      oppositeId = "#imageDescription-mobile";
    }

    if($("img#bg-img-mobile").hasClass('slideInUp')) { 
        // hide menu
        $("img#bg-img-mobile").removeClass('animated slideInUp').addClass('animated slideOutDown');
        $("img#bg-img-mobile").removeAttr('style');
        // same button is pressed
        if ($(inId).hasClass('slideInDown')) {
          $(inId).removeClass('animated slideInDown').addClass('animated slideOutUp');
        // opposite button is pressed
        } else {
          $(oppositeId).removeClass('animated slideInDown').addClass('animated slideOutUp');
          // load opposite menu
          $("img#bg-img-mobile").removeClass('animated slideOutDown').addClass('animated slideInUp').show().delay(100).queue(function(){
              var descHeight = "77px"; 
              $(".descItem").css({'height':descHeight});    
              var descHeight = "532"; 
              $("#bg-img-mobile").css({'top':descHeight+"px"})
              $(this).dequeue();
          });
          $(inId).removeClass('animated slideOutUp').addClass('animated slideInDown').show();
        }
    } else { 
        // load menu
        $("img#bg-img-mobile").removeClass('animated slideOutDown').addClass('animated slideInUp').show().delay(100).queue(function(){
            var descHeight = "77px"; 
            $(".descItem").css({'height':descHeight});    
            var descHeight = "532"; 
            $("#bg-img-mobile").css({'top':descHeight+"px"})
            $(this).dequeue();
        });
        $(inId).removeClass('animated slideOutUp').addClass('animated slideInDown').show();
    }

}
 

  
function swapDescription(showPhotoDesc,el){
      swapTextAnimation(el)
}
  
function swapTextAnimation(el){
      if(el.selector=="#imageDescription-mobile"){
          toggleAnimationMobile()
          //toggleAnimationMobile()
      } else {
console.log("swapTextAnimation 2nd clause");
          toggleAnimationLargeScreen()
          //toggleAnimationLargeScreen()
      }
      
     //el.removeClass('animated fadeInRight90').addClass('animated fadeOutRight90').removeClass('animated fadeOutRight90').addClass('animated fadeInRight90') 
}
  
function animteMe(x) {
    $('#animationSandbox').removeClass().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass();
    });
};

$(document).ready(function(){
    $(".white-vertical-stripe").addClass('animated10 fadeInDown75');
    $(".un-logo").addClass('animated10 fadeIn');
    $(".ar").addClass('animated10 fadeInUp');
    $(".zh").addClass('animated11 fadeInUp');
    $(".en").addClass('animated12 fadeInUp');
    $(".fr").addClass('animated13 fadeInUp');
    $(".ru").addClass('animated14 fadeInUp');
    $(".es").addClass('animated15 fadeInUp');
    $(".top-right-question").addClass('animated16 fadeInUpBig');
    $(".top-right-question-mobile").addClass('animated16 fadeInUpBig');
    $(".bottom-right-c").addClass('animated16 fadeInDownBig');
    $(".bottom-right-c-mobile").addClass('animated16 fadeInDownBig');
    sizeFullHeight();
});

function sizeFullHeight() {
      if($(window).width()<=700){
        $('.white-vertical-stripe').css("min-height",700);
      }
}

$(window).resize(sizeFullHeight);


