/* 元のURL: https://casalemedia.com */
// 外部JS: https://s46182.pcdn.co/wp-content/themes/index-exchange/src/js/index-explains-taxonomy-filter/index.js
jQuery(document).ready(function($) {
    $('#level, #ie-type, #topic').on('change', function() {
        var level = $('#level').val();
        var type = $('#ie-type').val();
        var topic = $('#topic').val();

        $.ajax({
            url: ajaxfilter.ajaxurl, // AJAX URL from localized script
            type: 'GET',
            data: {
                action: 'filter_videos',
                level: level,
                type: type,
                topic: topic,
                taxonomy: ajaxfilter.taxonomy,
                term: ajaxfilter.term
            },
            beforeSend: function() {
                $('#main').html('<p>Loading...</p>');
            },
            success: function(response) {
                $('#main').html(response);
            },
            error: function() {
                $('#main').html('<p>No posts found.</p>');
            }
        });
    });
});


