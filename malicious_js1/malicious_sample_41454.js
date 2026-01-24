//<![CDATA[
            // Fancybox by http://fancyapps.com/fancybox
            $(function($){
              var addToAll = false;
              var gallery = false;
              var titlePosition = 'inside';
              $(addToAll ? 'img' : 'img.fancybox').each(function(){
                var $this = $(this);
                var title = $this.attr('title');
                var src = $this.attr('data-big') || $this.attr('src');
                var a = $('<a href="#" class="fancybox"></a>').attr('href', src).attr('title', title);
                $this.wrap(a);
              });
              if (gallery)
                $('a.fancybox').attr('rel', 'fancyboxgallery');
              $('a.fancybox').fancybox({
                titlePosition: titlePosition
              });
              $("a.fanbox").fancybox({
                'transitionIn'	:	'elastic',
                'transitionOut'	:	'fade',
                'speedIn'		:	600 
              });
            });
            $.noConflict();
            //]]>