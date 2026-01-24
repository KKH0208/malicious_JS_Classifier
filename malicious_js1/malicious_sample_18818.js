$(function() {
                    function log( message ) {
                        $( "<div/>" ).text( message ).prependTo( "#log" );
                        $( "#log" ).attr( "scrollTop", 0 );
                    }

                    $( "#sCity" ).autocomplete({
                        source: "http://www.you2info.com/index.php?page=ajax&action=location",
                        minLength: 2,
                        select: function( event, ui ) {
                            log( ui.item ?
                                "Seleccionado: " + ui.item.value + " aka " + ui.item.id :
                                "No se ha seleccionado nada, el valor es " + this.value );
                        }
                    });
                });
                
                function checkEmptyCategories() {
                    var n = $("input[id*=cat]:checked").length;
                    if(n>0) {
                        return true;
                    } else {
                        return false;
                    }
                }