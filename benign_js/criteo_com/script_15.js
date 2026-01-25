/* 元のURL: https://criteo.com */

    // modal video embed auto-play and auto-shut-up
    jQuery(document).ready(function() {

        var btn = jQuery('body').find('[data-toggle="modal"][data-type]'); // the button
        var target = jQuery(btn.data('target')); // modal div
        var src = btn.data('src');
        var type = btn.data('type'); // youtube or pardot
        var modalBody = target.find('.modal-body'); // modal body
        var iframe;

        btn.click(function() {
            //console.log('modal opened: create iframe for ' + type);
            iframe = modalBody.html('<iframe width="100%" height="450" frameborder="0" allowfullscreen></iframe>').children('iframe');

            if (type === 'pardot') {
                //console.log('iframe pardot');
                iframe.load(function() {
                    //console.log('iframe loaded');
                    iFrameResize(); // the secret sauce!
                });
                iframe.attr('src', src);
            } else { // youtube
                //console.log('iframe youtube');
                iframe.attr('src', src + '?autoplay=1&enablejsapi=1&rel=0'); // video URL in the button's data attr
                ytTracker.init(); // <-- Decorate all new videos on the page, from the 400-line monstrosity GTM
            }
        });

        target.on('hidden.bs.modal', function(e) {
            //console.log('modal closed: stripping the contents');
            modalBody.html('');
        });

    });


