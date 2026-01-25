/* 元のURL: https://apache.org */

                jQuery(function(){
                    var logos = jQuery('#incubating-projects').find('.logo-card');
                    logos.each(function(){
                        var img = jQuery(this).find('img');
                        var link = jQuery(this).find('a');
                        if(img.attr('src') === 'https://www.apache.org/logos/res/incubator/default.png'){
                            var title = jQuery(this).attr('id');
                            img.remove();
                            // append a div with the project name to the link
                            link.append('<div class="placeholder-logo">'+title+'</div>');
                        }
                    });
                });
            

