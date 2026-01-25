/* 元のURL: https://cookiedatabase.org */
// 外部JS: https://cookiedatabase.org/wp-content/plugins/cookiedatabase-master/assets/js/front.js?ver=1.0.4
jQuery(document).ready(function ($) {
    'use strict';
    if ( $('.cdb-highlight-row').length ) {
        $('.cdb-color').each(function(){
            var color = $(this).data('color' );
            $(this).closest('.cdb-highlight-row').addClass('cdb-'+color);
        });
    }
});

