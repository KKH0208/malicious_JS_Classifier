//&lt;![CDATA[
                            var searchForm = new Varien.searchForm('search_mini_form', 'search', 'Search entire store here...');
                            searchForm.initAutocomplete('https://displaystore.id/catalogsearch/ajax/suggest/', 'search_autocomplete');
                            jQuery(document).ready(function(){
                               
                               jQuery("#search.input-search").focusin(function() {
                                    jQuery('.advance').fadeIn();
                                }).focusout(function () {
                                    jQuery('.advance').fadeOut(2000);
                                }); 
                                /*
                                jQuery("#search.input-search").focus(function() {
                                    jQuery('.advance').addClass('show-adv');
                                });*/
                            });                
                        //]]&gt;