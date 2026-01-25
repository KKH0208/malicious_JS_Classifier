/* 元のURL: https://pubmatic.com */
// 外部JS: https://pubmatic.com/wp-content/plugins/pardot/js/asyncdc.min.js?ver=6.6.4
(function($){
    $(function(){
        $('[data-dc-url]').each(function(idx, el) {
            var $el = $(el);
            var dcUrl = $el.data('dc-url');
            $.ajax({
                'url': dcUrl + '?ajax',
                'xhrFields': {
                    'withCredentials': true
                },
                'success': function(data) {
                    $el.html(data);
                }
            });
        });
    });
})(jQuery);

