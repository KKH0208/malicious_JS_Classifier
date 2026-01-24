jQuery(document).ready(function() {
    var busy = false;

jQuery( '.miniBoxWrap > li' ).bind( 'click', function(event) {
  var postID = jQuery( this ).attr( 'id' );
  postID = postID.split( "-" ).pop();
  var idName = jQuery( this ).parents( ".mag-widget" ).attr( 'id' );
  var cible = '#'+idName+' .'+'primaryPost';
  var busy = true;
  jQuery('#'+idName+' .'+'excerpt-img').addClass("carico");
  jQuery('#'+idName+' .'+'primaryPost').css(' opacity','0.2');
  jQuery.post('http://blog.empregavoce.com.br/download//wp-admin/admin-ajax.php', {
    action: 'and_actionn',
    postId: postID,
  }, function(data) {
if( data == "" ) {  //Nel caso non ci siano articoli da caricare
  alert ( __( 'No Posts Found', 'enamag' ) );
}
else {
  jQuery( cible ).replaceWith( data ); 
  jQuery( '#mainSideBar,#mainContent' ).masonry('reload');
  if (jQuery(window).width() > 700) {
  jQuery("a[class^='prettyPhoto']").prettyPhoto({social_tools:''});
}
  jQuery( '.excerpt-img' ).hover( function() {
    jQuery( this ).find( '.tumbOptions' ).css( 'opacity','1' );
  }, function() {
    jQuery( this ).find( '.tumbOptions' ).css( 'opacity','0.24' );
  });
}
});
 });
  });