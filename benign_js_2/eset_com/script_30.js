/* 元のURL: https://eset.com */

$(function(){
if( ( $('#item-menu').length ) && (window.location.href.search(/\home/i)==-1) && !($('#guarantee-30').is(":visible")) ){

  $('.nav-secondary').append('<li id="item-partners2"><a href="/us/business/resources/infographics-list/" title="Partners" id="link-partners2" class="link link-partners"><span class="icon"><i class="ficon-business"></i></span><span class="name">Partners</span></a><div class="partnerdropdown"><style>ul li div.partnerdropdown { max-width : 600px ; min-width:500px;  background : #3b3b3b ;  display : none  ;  position : absolute  ;  border-radius : 4px  ;  z-index : 2  ;  top : 105% ;  right : -15%  ;  border : solid 1px #757373  ;  padding : 10% 10% }         ul li div.arrow-up-outer-p { content : "" ;  position : absolute ;  width : 0 ;  height : 0 ;  border-color : #757373 transparent ;  border-style : solid ;  border-width : 0px 12px 12px 12px ;  top : -13px ;  right : 33px } ul li div.arrow-up-inner-p { content : "" ;  position : absolute ;  width : 0 ;  height : 0 ;  border-color : #3b3b3b transparent ;  border-style : solid ;  border-width : 0px 11px 11px 11px ;  top : -10px ;  right : 34px } </style><div class="arrow-up-outer-p"></div><div class="arrow-up-inner-p"></div><div class=""><div class="content"><div class="content-wrapper"><div id="content-c6161740" class="csc-frame csc-frame-default"><div class="row flex skin-splitted skin-gutter-xs skin-mt-s"><div class="col col-sm-6"><div id="content-c6161732" class="csc-frame csc-frame-default"><h4 class="align-center"><strong><a href="/us/partnernow/?intcmp=header-partners">BECOME AN ESET PARTNER</a></strong></h4><p class="align-center">Explore ESET partnerships designed to boost your growth.</p></div><div id="content-c6161734" class="csc-frame csc-frame-default"><div class="align-center"><a href="/us/partnernow/?intcmp=header-partners" class="btn-bordered-light btn-small">FIND OUT MORE</a></div></div></div><div class="col col-sm-6"><div id="" class="csc-frame csc-frame-default"><h4 class="align-center">Already an ESET Partner?<br><strong>Welcome back!</strong></h4></div><div id="content-c7461016" class="csc-frame csc-frame-default skin-mt-small"><p class="align-center">Log in now to place orders, register opportunities, access training and much more!</p></div><div id="content-c7461010" class="csc-frame csc-frame-default"><div class="align-center"><a href="/us/business/partner/?intcmp=header-partners" class="btn-bordered-light btn-small">Access partner portal</a></div></div><div id="content-c7461059" class="csc-frame csc-frame-default"></div></div></div></div></div></div></div></div></li>');

  $('item-partners').hide();
  $('#link-partners2').prop('href','#');

  $('#link-partners2').click(function(){
    if (typeof ESETTrack !== 'undefined') {
      ESETTrack.event('partnermenu_icon');
      ESETTrack.event('main-nav-icon', 'event11', { 'eVar14': 'Partners-dropdown' });
    }
    $('.partnerdropdown').toggle();
    $('.supportdropdown').hide();
  });

}
});

