//<![CDATA[

    jQuery(document).ready(function(){

        var scrolled = false;

        jQuery("#nav li.level0.drop-menu").mouseover(function(){

            if(jQuery(window).width() >= 740){

                jQuery(this).children('ul.level1').fadeIn(100);

            }

            return false;

        }).mouseleave(function(){

            if(jQuery(window).width() >= 740){

                jQuery(this).children('ul.level1').fadeOut(100);

            }

            return false;

        });

        jQuery("#nav li.level0.drop-menu li").mouseover(function(){

            if(jQuery(window).width() >= 740){

                jQuery(this).children('ul').css({top:0,left:"165px"});

                var offset = jQuery(this).offset();

                if(offset && (jQuery(window).width() < offset.left+325)){

                    jQuery(this).children('ul').removeClass("right-sub");

                    jQuery(this).children('ul').addClass("left-sub");

                    jQuery(this).children('ul').css({top:0,left:"-167px"});

                } else {

                    jQuery(this).children('ul').removeClass("left-sub");

                    jQuery(this).children('ul').addClass("right-sub");

                }

                jQuery(this).children('ul').fadeIn(100);

            }

        }).mouseleave(function(){

            if(jQuery(window).width() >= 740){

                jQuery(this).children('ul').fadeOut(100);

            }

        });

        



    });

//]]>