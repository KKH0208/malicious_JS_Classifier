//<![CDATA[



            jQuery(function($) {

                $("#nav > li").hover(function() {

                    var el = $(this).find(".level0-wrapper");

                    el.hide();

                    el.css("left", "0");

                    el.stop(true, true).delay(150).fadeIn(300, "easeOutCubic");

                }, function() {

                    $(this).find(".level0-wrapper").stop(true, true).delay(300).fadeOut(300, "easeInCubic");

                });

            });



            var isTouchDevice = ('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0);

            jQuery(window).on("load", function() {



                if (isTouchDevice)

                {

                    jQuery('#nav a.level-top').click(function(e) {

                        $t = jQuery(this);

                        $parent = $t.parent();

                        if ($parent.hasClass('parent'))

                        {

                            if ( !$t.hasClass('menu-ready'))

                            {                    

                                jQuery('#nav a.level-top').removeClass('menu-ready');

                                $t.addClass('menu-ready');

                                return false;

                            }

                            else

                            {

                                $t.removeClass('menu-ready');

                            }

                        }

                    });

                }



            }); //end: on load



        //]]>