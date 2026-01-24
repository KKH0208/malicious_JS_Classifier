window.addEventListener('DOMContentLoaded', function() {

	(function(){
        var wpcf7Elm = document.querySelector( '#new-feedback-popup .wpcf7' );
        
        if(wpcf7Elm){
            
            wpcf7Elm.addEventListener( 'wpcf7mailsent', function( event ) {
                setTimeout(function(){
                    $('#new-feedback-popup').modal('hide');
                    window.location.href="https://curatiohealthcare.com/products/child-india/"
                },1400);
            }, false );  
        
        }
 
         
        
        
        var u1 = 'https://curatiohealthcare.com/products/child-india/?feedback=true';
        var u2= 'https://curatiohealthcare.com/products/child-india?feedback=true/';
        var u3 = 'https://curatiohealthcare.com/products/child-india?feedback=true';
        var u4 = 'https://curatiohealthcare.com/products/child-india/?feedback=true/';
        
        if(window.location.href == u1 || window.location.href == u2 == window.location.href == u3 || window.location.href == u4){
              $('#new-feedback-popup').modal('show');  
        }
        
        jQuery(document).ready(function(){
 
           jQuery('#new-feedback-popup input,#new-feedback-popup textarea').focus(function(){
               jQuery(this).data('placeholder',jQuery(this).attr('placeholder'))
                      .attr('placeholder','');
            }).blur(function(){
               jQuery(this).attr('placeholder',jQuery(this).data('placeholder'));
            });
             
        });
        
        
    })();

});