/* 元のURL: https://sourceforge.net */

$( window ).on("resize", SF.Widgets.responsivePlaceholder);
SF.Widgets.responsivePlaceholder();
$(document).ready(function() {
    function linkVid(){
        window.linkVideoExternally('https://www.youtube-nocookie.com/embed/KQPHHRygj4g', '#frontpage-video');
    }
    bizx.cmp.ifConsent({purposes: 'all', vendors: 'youtube'},
        function () {
            window.updateVideoElements('#frontpage-video', '<iframe id="frontpage-video-frame" src="https://www.youtube-nocookie.com/embed/KQPHHRygj4g" title="YouTube video player" frameborder="0" allow="encrypted-media; gyroscope; picture-in-picture;" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>', '',  '');
        },
        linkVid, null, linkVid  
    );
});


